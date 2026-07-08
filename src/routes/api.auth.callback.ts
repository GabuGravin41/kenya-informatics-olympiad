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

        if (!code || !state) {
          return new Response(JSON.stringify({ error: "Missing code or state parameter" }), {
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
                  
                  // Send token back to Decap CMS via postMessage
                  window.opener.postMessage({
                    type: 'authorization:github',
                    payload: { token, state }
                  }, window.location.origin);
                  
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
