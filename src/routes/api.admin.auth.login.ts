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
        const stateCookie = `kio_oauth_state=${state}; Path=/api/admin/auth; HttpOnly; SameSite=Lax; Max-Age=600`;

        // Determine where GitHub should redirect back after login
        const host = request.headers.get("host") || "kenya-informatics-olympiad.vercel.app";
        const proto = process.env.NODE_ENV === "production" ? "https" : "http";
        const callbackUrl = `${proto}://${host}/api/admin/auth/callback`;

        const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
        authorizeUrl.searchParams.set("client_id", clientId);
        authorizeUrl.searchParams.set("scope", "repo");
        authorizeUrl.searchParams.set("state", state);
        authorizeUrl.searchParams.set("redirect_uri", callbackUrl);

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
