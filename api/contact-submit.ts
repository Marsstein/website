import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const LOOPS_API_KEY = process.env.LOOPS_API_KEY || process.env.VITE_LOOPS_API_KEY;

  if (!LOOPS_API_KEY) {
    return res.status(500).json({ error: 'Loops API key not configured' });
  }

  try {
    const {
      email,
      firstName,
      company,
      phone,
      topic,
      message,
      isDemoRequest,
      newsletter,
      userGroup: customUserGroup,
      source: customSource
    } = req.body;

    if (!email || !firstName || !company || !message) {
      return res.status(400).json({ error: 'Missing required fields: email, firstName, company, message' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log('Creating/updating contact for:', email);

    const defaultUserGroup = isDemoRequest ? 'demo_requests' : 'contact_inquiries';
    const contactData = {
      email,
      firstName,
      userGroup: customUserGroup || defaultUserGroup,
      source: customSource || 'contact_form',
      company,
      phone: phone || '',
      topic: topic || '',
      message: message || '',
      isDemoRequest: isDemoRequest || false,
      newsletter: newsletter || false,
      subscribed: newsletter || false
    };

    let contactResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });

    let contactResult = await contactResponse.json();
    console.log('Contact creation response:', contactResponse.status, contactResult);

    if (contactResponse.status === 409) {
      console.log('Contact exists, updating instead...');
      contactResponse = await fetch('https://app.loops.so/api/v1/contacts/update', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      });
      contactResult = await contactResponse.json();
      console.log('Contact update response:', contactResponse.status, contactResult);
    }

    if (!contactResponse.ok) {
      console.error('Failed to create/update contact:', contactResult);
      throw new Error(contactResult.message || 'Failed to create/update contact');
    }

    console.log('Sending emails to:', email);

    const internalTemplateId = isDemoRequest
      ? process.env.LOOPS_INTERNAL_DEMO_TEMPLATE_ID
      : process.env.LOOPS_INTERNAL_CONTACT_TEMPLATE_ID;

    const customerTemplateId = isDemoRequest
      ? process.env.LOOPS_CUSTOMER_DEMO_TEMPLATE_ID
      : process.env.LOOPS_CUSTOMER_CONTACT_TEMPLATE_ID;

    if (!internalTemplateId || !customerTemplateId) {
      console.error('Missing template IDs');
      throw new Error('Email templates not configured');
    }

    const emailData = {
      firstName,
      email,
      company,
      phone: phone || 'Not provided',
      topic: topic || 'Not provided',
      message: message || 'No message provided',
      newsletter: newsletter ? 'Yes' : 'No'
    };

    const internalEmailResponse = await fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionalId: internalTemplateId,
        email: 'info@marsstein.ai',
        dataVariables: emailData
      })
    });

    const internalResult = await internalEmailResponse.json();
    console.log('Internal email response:', internalEmailResponse.status, internalResult);

    if (!internalEmailResponse.ok) {
      console.error('Failed to send internal notification:', internalResult);
    }

    const customerEmailResponse = await fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionalId: customerTemplateId,
        email,
        dataVariables: emailData
      })
    });

    const customerResult = await customerEmailResponse.json();
    console.log('Customer email response:', customerEmailResponse.status, customerResult);

    if (!customerEmailResponse.ok) {
      console.error('Failed to send customer confirmation:', customerResult);
      return res.status(200).json({
        success: true,
        warning: 'Contact created but customer confirmation failed to send',
        emailError: customerResult
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Contact created and email sent successfully'
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}
