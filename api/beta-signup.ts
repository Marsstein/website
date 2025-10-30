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
      lastName,
      company,
      companySize,
      phone,
      role,
      currentSolution,
      biggestChallenge,
      weeklyHours,
      challengeLevel,
      challenges
    } = req.body;

    if (!email || !firstName || !company) {
      return res.status(400).json({ error: 'Missing required fields: email, firstName, company' });
    }

    console.log('Creating contact for:', email);

    const contactResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName: lastName || '',
        userGroup: 'beta_testers',
        source: 'beta_signup',
        company,
        companySize: companySize || '',
        phone: phone || '',
        role: role || '',
        currentSolution: currentSolution || '',
        biggestChallenge: biggestChallenge || '',
        weeklyHours: weeklyHours || '',
        challengeLevel: challengeLevel || '',
        challenges: challenges || ''
      })
    });

    const contactResult = await contactResponse.json();
    console.log('Contact creation response:', contactResponse.status, contactResult);

    if (!contactResponse.ok) {
      console.error('Failed to create contact:', contactResult);
      throw new Error(contactResult.message || 'Failed to create contact');
    }

    console.log('Sending transactional email to:', email);

    const emailResponse = await fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionalId: 'cmg5if7x703ozwn0inuuxd3o8',
        email,
        dataVariables: {
          firstName,
          company
        }
      })
    });

    const emailResult = await emailResponse.json();
    console.log('Email send response:', emailResponse.status, emailResult);

    if (!emailResponse.ok) {
      console.error('Failed to send email:', emailResult);
      return res.status(200).json({
        success: true,
        warning: 'Contact created but email failed to send',
        emailError: emailResult
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Contact created and email sent successfully'
    });
  } catch (error) {
    console.error('Beta signup error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}