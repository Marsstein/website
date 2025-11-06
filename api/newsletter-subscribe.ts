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
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log('Creating newsletter subscriber:', email);

    const contactResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        userGroup: 'newsletter_subscribers',
        source: 'footer_newsletter',
        subscribed: true
      })
    });

    const contactResult = await contactResponse.json();
    console.log('Newsletter contact creation response:', contactResponse.status, contactResult);

    if (!contactResponse.ok) {
      console.error('Failed to create newsletter contact:', contactResult);
      throw new Error(contactResult.message || 'Failed to subscribe to newsletter');
    }

    console.log('Sending newsletter confirmation email to:', email);

    const emailResponse = await fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionalId: 'cmhnh1zeujtoo0z0i7q52wcih',
        email,
        dataVariables: {
          email
        }
      })
    });

    const emailResult = await emailResponse.json();
    console.log('Newsletter confirmation email response:', emailResponse.status, emailResult);

    if (!emailResponse.ok) {
      console.error('Failed to send newsletter confirmation:', emailResult);
      return res.status(200).json({
        success: true,
        warning: 'Subscribed but confirmation email failed to send',
        emailError: emailResult
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}
