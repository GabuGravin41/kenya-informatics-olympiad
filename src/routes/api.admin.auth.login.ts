import { createFileRoute } from "@tanstack/react-router";

/**
 * GET /api/admin/auth/login
 *
 * Full-page redirect to GitHub OAuth — no popups.
 * Sets a state cookie to prevent CSRF.
 */
export const Route = createFileRoute("/api/admin/auth/login")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
        if (!clientId) {
          return new Response("Server error: GITHUB_CLIENT_ID not set", {
            status: 500,
            headers: { "Content-Type": "text/plain" },
          });
        }

        // Generate a random state value and store it in a short-lived cookie
        const state = crypto.randomUUID();
        // Path=/ so the cookie is readable by /api/admin/auth/callback
        const stateCookie = `kio_oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600`;

        // Do NOT pass redirect_uri — GitHub will use the exact URL registered
        // in the OAuth App settings, avoiding any mismatch errors.
        const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
        authorizeUrl.searchParams.set("client_id", clientId);
        authorizeUrl.searchParams.set("scope", "repo");
        authorizeUrl.searchParams.set("state", state);

        return new Response(null, {
          status: 302,
          headers: {
            Location: authorizeUrl.toString(),
            "Set-Cookie": stateCookie,
          },
        });
      },
    },
  },
});
