import { createFileRoute } from "@tanstack/react-router";

interface GitHubTokenResponse {
  access_token?: string;
  error?: string;
  error_description?: string;
}

// Helper to return a styled HTML error page that closes itself and notifies the parent window
function returnErrorHtml(errorMessage: string) {
  const htmlContent = `
    <!doctype html>
    <html>
      <head>
        <title>Authentication Failed</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            text-align: center;
            padding: 50px;
            background-color: #f7fafc;
            color: #2d3748;
          }
          .card {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 30px;
            max-width: 450px;
            margin: 0 auto;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          }
          h1 {
            color: #e53e3e;
            font-size: 22px;
            margin-top: 0;
          }
          p {
            color: #4a5568;
            font-size: 15px;
            line-height: 1.6;
          }
          .hint {
            font-size: 13px;
            color: #a0aec0;
            margin-top: 25px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Authentication Failed</h1>
          <p>${errorMessage}</p>
          <p class="hint">This window will close automatically in a few seconds.</p>
        </div>
        <script>
          try {
            if (window.opener) {
              // Send error message to Decap CMS to stop the loading spinner
              const message = "authorization:github:error:" + JSON.stringify({
                message: "${errorMessage.replace(/"/g, '\\"')}"
              });
              window.opener.postMessage(message, "*");
            }
          } catch (e) {
            console.error("Failed to post error message to opener:", e);
          }
          // Automatically close the popup window
          setTimeout(() => window.close(), 4000);
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
}

export const Route = createFileRoute("/api/auth/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // Fallback domain to prevent invalid URL error if request.url is relative
        const url = new URL(request.url, "https://kenya-informatics-olympiad.vercel.app");
        const code = url.searchParams.get("code");
        const state = url.searchParams.get("state");

        // Step 1: Initiate OAuth flow if no code is present (Decap CMS opens popup)
        if (!code) {
          const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
          if (!clientId) {
            console.error("Missing GitHub Client ID environment variable");
            return returnErrorHtml("Server configuration error: Missing GitHub Client ID");
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
          return returnErrorHtml("Missing state parameter from GitHub callback");
        }

        try {
          const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
          const clientSecret = process.env.GITHUB_CLIENT_SECRET;

          if (!clientId || !clientSecret) {
            console.error("Missing GitHub OAuth environment variables");
            return returnErrorHtml("Server configuration error: Missing environment variables on host");
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
            console.error("GitHub OAuth token exchange error:", tokenData.error_description || tokenData.error);
            return returnErrorHtml(`GitHub Authentication error: ${tokenData.error_description || tokenData.error}`);
          }

          const token = tokenData.access_token;
          if (!token) {
            return returnErrorHtml("Received empty token from GitHub");
          }

          const htmlContent = `
            <!doctype html>
            <html>
              <head>
                <title>Authenticating...</title>
              </head>
              <body>
                <script>
                  try {
                    const token = "${token}";
                    
                    // Send token back to Decap CMS via postMessage in the format it expects.
                    // We target "*" to allow successful message delivery across preview/production subdomains.
                    const message = "authorization:github:success:" + JSON.stringify({
                      token: token,
                      provider: "github"
                    });
                    window.opener.postMessage(message, "*");
                  } catch (e) {
                    console.error("Failed to post success message to opener:", e);
                  } finally {
                    // Close the popup window
                    window.close();
                  }
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
        } catch (error: any) {
          console.error("OAuth callback error:", error);
          return returnErrorHtml(`Internal server error: ${error?.message || error}`);
        }
      },
    },
  },
});
