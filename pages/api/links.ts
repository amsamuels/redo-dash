// pages/api/links.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";


const Backend_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession(req, res);
    const { accessToken } = await getAccessToken(req, res);
  
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

  try {
    const userRes = await fetch(`${Backend_API_URL}/api/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!userRes.ok) {
        return res.status(userRes.status).json({ error: 'Failed to fetch user data' });
      }
  
      const userData = await userRes.json(); 
      const { userid } = userData;

    let goBackendUrl = `${Backend_API_URL}/api/links`;

    let fetchOptions: RequestInit = {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'X-User-ID': userid, 
      },
    };

    if (req.method === 'POST') {
        fetchOptions.body = JSON.stringify(req.body);
    }

    if (req.method === 'DELETE') {
      // Expected: DELETE /api/links?id=abc123
      const { id } = req.query;
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid link ID' });
      }
      goBackendUrl = `${Backend_API_URL}/api/links?linkId=${id}`;
    }

    const response = await fetch(goBackendUrl, fetchOptions);
     if (req.method === 'DELETE') {
      return res.status(response.status).end();
    }
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal proxy error' });
  }
}
