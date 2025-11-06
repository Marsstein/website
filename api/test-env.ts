import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Security: Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Not available in production' });
  }

  const envVars = {
    LOOPS_API_KEY: process.env.LOOPS_API_KEY ? 'SET ✓' : 'MISSING ✗',
    VITE_LOOPS_API_KEY: process.env.VITE_LOOPS_API_KEY ? 'SET ✓' : 'MISSING ✗',
    LOOPS_INTERNAL_CONTACT_TEMPLATE_ID: process.env.LOOPS_INTERNAL_CONTACT_TEMPLATE_ID || 'MISSING ✗',
    LOOPS_INTERNAL_DEMO_TEMPLATE_ID: process.env.LOOPS_INTERNAL_DEMO_TEMPLATE_ID || 'MISSING ✗',
    LOOPS_CUSTOMER_CONTACT_TEMPLATE_ID: process.env.LOOPS_CUSTOMER_CONTACT_TEMPLATE_ID || 'MISSING ✗',
    LOOPS_CUSTOMER_DEMO_TEMPLATE_ID: process.env.LOOPS_CUSTOMER_DEMO_TEMPLATE_ID || 'MISSING ✗',
  };

  return res.status(200).json({
    message: 'Environment Variables Check',
    environment: process.env.NODE_ENV || 'unknown',
    variables: envVars
  });
}
