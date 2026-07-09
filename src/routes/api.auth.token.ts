import { createFileRoute } from "@tanstack/react-router";

interface GitHubTokenResponse {
  access_token?: string;
  error?: string;
  error_description?: string;
}

/**
 * POST /api/auth/token
 * Body: { code: string, state: string | null }
 *
 * Called by /admin/callback.html after GitHub redirects back with a code.
 * Exchanges the code for an access token using the server-side client secret.
 * Returns JSON: { token: string } on success, or { error: string } on failure.
 */
export const Route = createFileRoute("/api/auth/token")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const corsHeaders = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };

        let body: { code?: string; state?: string | null };
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid request body" }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        const { code, state } = body;

        if (!code) {
          return new Response(JSON.stringify({ error: "Missing authorization code" }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
        const clientSecret = process.env.GITHUB_CLIENT_SECRET;

        if (!clientId || !clientSecret) {
          console.error("[/api/auth/token] Missing GitHub OAuth environment variables");
          return new Response(
            JSON.stringify({ error: "Server misconfiguration: missing GitHub credentials" }),
            { status: 500, headers: corsHeaders }
          );
        }

        try {
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
              ...(state ? { state } : {}),
            }),
          });

          const tokenData = (await tokenResponse.json()) as GitHubTokenResponse;

          if (tokenData.error) {
            const msg = tokenData.error_description || tokenData.error;
            console.error("[/api/auth/token] GitHub error:", msg);
            return new Response(JSON.stringify({ error: msg }), {
              status: 401,
              headers: corsHeaders,
            });
          }

          if (!tokenData.access_token) {
            return new Response(JSON.stringify({ error: "Empty token returned by GitHub" }), {
              status: 502,
              headers: corsHeaders,
            });
          }

          return new Response(JSON.stringify({ token: tokenData.access_token }), {
            status: 200,
            headers: corsHeaders,
          });
        } catch (err: any) {
          console.error("[/api/auth/token] Fetch error:", err);
          return new Response(
            JSON.stringify({ error: `Network error contacting GitHub: ${err?.message}` }),
            { status: 502, headers: corsHeaders }
          );
        }
      },

      // Handle preflight CORS requests
      OPTIONS: async () => {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      },
    },
  },
});
