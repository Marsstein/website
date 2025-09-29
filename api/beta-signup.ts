import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const LOOPS_API_KEY = process.env.VITE_LOOPS_API_KEY;

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
      currentSolution,
      challengeLevel,
      challenges
    } = req.body;

    const contactResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        userGroup: 'beta_testers',
        source: 'beta_signup',
        company,
        companySize,
        phone: phone || '',
        currentSolution: currentSolution || '',
        challengeLevel,
        challenges
      })
    });

    if (!contactResponse.ok) {
      const error = await contactResponse.json();
      throw new Error(error.message || 'Failed to create contact');
    }

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

    if (!emailResponse.ok) {
      const error = await emailResponse.json();
      console.error('Email sending failed:', error);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Beta signup error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}