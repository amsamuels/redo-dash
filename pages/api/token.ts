// pages/api/token.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    if (!accessToken) {
      return res.status(401).json({ error: 'No token found' });
    }
    res.status(200).json({ accessToken });
  } catch (err) {
    console.error('Error retrieving access token:', err);
    res.status(500).json({ error: 'Failed to retrieve access token' });
  }
}
