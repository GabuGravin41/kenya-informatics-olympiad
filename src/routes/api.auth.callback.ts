import { createFileRoute } from "@tanstack/react-router";

/**
 * GET /api/auth/callback
 *
 * This is the endpoint Decap CMS opens as a popup (via base_url + auth_endpoint in config.yml).
 * Its ONLY job is to redirect the popup browser to GitHub's OAuth authorization page.
 *
 * After the user authorizes, GitHub redirects to /admin/callback.html?code=...&state=...
 * That static page handles the token exchange via /api/auth/token.
 */
export const Route = createFileRoute("/api/auth/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url, "https://kenya-informatics-olympiad.vercel.app");
        const state = url.searchParams.get("state") || Math.random().toString(36).substring(2, 15);

        const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
        if (!clientId) {
          console.error("[/api/auth/callback] Missing VITE_GITHUB_CLIENT_ID");
          return new Response("Server configuration error: missing GitHub Client ID", {
            status: 500,
            headers: { "Content-Type": "text/plain" },
          });
        }

        // Build the GitHub authorize URL.
        // After login, GitHub redirects to the "Authorization callback URL" set in the GitHub OAuth App:
        //   → https://kenya-informatics-olympiad.vercel.app/admin/callback.html
        const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
        authorizeUrl.searchParams.set("client_id", clientId);
        authorizeUrl.searchParams.set("scope", "repo,user");
        authorizeUrl.searchParams.set("state", state);

        return new Response(null, {
          status: 302,
          headers: { Location: authorizeUrl.toString() },
        });
      },
    },
  },
});
