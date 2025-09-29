export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { formData } = req.body;
  const LOOPS_API_KEY = process.env.VITE_LOOPS_API_KEY;

  if (!LOOPS_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    // 1. Create contact in Loops
    const contactResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        source: 'beta_signup',
        userGroup: 'beta_testers'
      })
    });

    if (!contactResponse.ok) {
      const errorText = await contactResponse.text();
      console.error('Contact creation failed:', errorText);
    }

    // 2. Send confirmation email to user
    const confirmationResponse = await fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionalId: 'cmg5if7x703ozwn0inuuxd3o8',
        email: formData.email,
        dataVariables: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          companySize: formData.companySize,
          email: formData.email
        }
      })
    });

    if (!confirmationResponse.ok) {
      const errorText = await confirmationResponse.text();
      console.error('Confirmation email failed:', errorText);
      throw new Error('Failed to send confirmation email');
    }

    // 3. Send notification to admin
    const adminResponse = await fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionalId: 'cmg5ivbgn07kpvm0ib53v1fra',
        email: 'jonas@marsstein.ai',
        dataVariables: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || 'Nicht angegeben',
          company: formData.company,
          companySize: formData.companySize,
          currentSolution: formData.currentSolution || 'Nicht angegeben',
          challengeLevel: formData.challengeLevel,
          challenges: formData.challenges.join(', ') || 'Keine angegeben'
        }
      })
    });

    if (!adminResponse.ok) {
      const errorText = await adminResponse.text();
      console.error('Admin notification failed:', errorText);
    }

    return res.status(200).json({
      success: true,
      message: 'Beta registration successful'
    });

  } catch (error) {
    console.error('Beta signup error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}