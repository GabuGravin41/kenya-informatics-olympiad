import { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * OAuth callback handler for Decap CMS + GitHub
 * Deploy to Vercel as an API route: /api/auth/callback.ts
 *
 * This enables the admin panel at /admin to authenticate with GitHub
 * and manage content via the CMS.
 */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { code, state } = req.query;

  // Validate required parameters
  if (!code || !state) {
    return res.status(400).json({ error: 'Missing code or state parameter' });
  }

  try {
    const clientId = process.env.VITE_GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      console.error('Missing GitHub OAuth environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        state,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      console.error('GitHub OAuth error:', tokenData.error_description);
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Return the access token to Decap CMS
    const token = tokenData.access_token;
    const content = `
      <script>
        const token = "${token}";
        const state = "${state}";
        
        // Send token back to Decap CMS via postMessage
        window.opener.postMessage({
          type: 'authorization:github',
          payload: { token, state }
        }, window.location.origin);
        
        // Close the popup
        window.close();
      </script>
    `;

    return res.status(200).send(content);
  } catch (error) {
    console.error('OAuth callback error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
