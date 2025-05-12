// pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken, getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession(req, res);
  const { accessToken } = await getAccessToken(req, res);

  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  try {
    // Fetch user data from Go backend
    const goApiRes = await fetch(`${BACKEND_API_URL}/api/user`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!goApiRes.ok) {
      return res.status(goApiRes.status).json({ error: 'Failed to fetch user' });
    }

    const userData = await goApiRes.json();
    return res.status(200).json(userData);
  } catch (err) {
    console.error('GET /api/user error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession(req, res);
  const { accessToken } = await getAccessToken(req, res);

  if (!session?.user?.email) {
    return res.status(400).json({ error: 'User email not found' });
  }

  try {

    let fetchOptions: RequestInit = {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    if (req.method === 'POST') {
      fetchOptions.body = JSON.stringify(req.body);
    }
    
    const response = await fetch(`${BACKEND_API_URL}/api/user`, fetchOptions);
   
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Signup failed' });
    }

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    console.error('POST /api/user error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { state } = req.query; // ✅ Extract state from URL query params

  if (req.method === 'GET') {
    if (state === 'signup') {
      await handlePost(req, res); // Treat as signup
    } else {
      await handleGet(req, res); // Default to login
    }
  } else if (req.method === 'POST') {
    await handlePost(req, res); // Manual POST (fallback)
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
});