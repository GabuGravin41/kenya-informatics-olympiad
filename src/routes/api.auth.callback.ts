import { createFileRoute } from "@tanstack/react-router";

interface GitHubTokenResponse {
  access_token?: string;
  error?: string;
  error_description?: string;
}

export const Route = createFileRoute("/api/auth/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const code = url.searchParams.get("code");
        const state = url.searchParams.get("state");

        // Step 1: Initiate OAuth flow if no code is present (Decap CMS opens popup)
        if (!code) {
          const clientId = process.env.VITE_GITHUB_CLIENT_ID;
          if (!clientId) {
            console.error("Missing VITE_GITHUB_CLIENT_ID environment variable");
            return new Response(JSON.stringify({ error: "Server configuration error" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }

          // Use the state passed by Decap CMS or generate a random one
          const oauthState = state || Math.random().toString(36).substring(2, 15);
          const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&state=${oauthState}`;
          
          return new Response(null, {
            status: 302,
            headers: {
              Location: authorizeUrl,
            },
          });
        }

        // Step 2: Handle redirect back from GitHub (code and state are present)
        if (!state) {
          return new Response(JSON.stringify({ error: "Missing state parameter from GitHub callback" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const clientId = process.env.VITE_GITHUB_CLIENT_ID;
          const clientSecret = process.env.GITHUB_CLIENT_SECRET;

          if (!clientId || !clientSecret) {
            console.error("Missing GitHub OAuth environment variables");
            return new Response(JSON.stringify({ error: "Server configuration error" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }

          // Exchange code for access token
          const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              client_id: clientId,
              client_secret: clientSecret,
              code,
              state,
            }),
          });

          const tokenData = (await tokenResponse.json()) as GitHubTokenResponse;

          if (tokenData.error) {
            console.error("GitHub OAuth error:", tokenData.error_description);
            return new Response(JSON.stringify({ error: "Authentication failed" }), {
              status: 401,
              headers: { "Content-Type": "application/json" },
            });
          }

          const token = tokenData.access_token;
          const htmlContent = `
            <!doctype html>
            <html>
              <head>
                <title>Authenticating...</title>
              </head>
              <body>
                <script>
                  const token = "${token}";
                  const state = "${state}";
                  
                  // Send token back to Decap CMS via postMessage in the format it expects
                  const message = "authorization:github:success:" + JSON.stringify({
                    token: token,
                    provider: "github"
                  });
                  window.opener.postMessage(message, window.location.origin);
                  
                  // Close the popup
                  window.close();
                </script>
              </body>
            </html>
          `;

          return new Response(htmlContent, {
            status: 200,
            headers: {
              "Content-Type": "text/html",
            },
          });
        } catch (error) {
          console.error("OAuth callback error:", error);
          return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
