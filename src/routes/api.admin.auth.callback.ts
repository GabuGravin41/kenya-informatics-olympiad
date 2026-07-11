import { createFileRoute } from "@tanstack/react-router";
import { buildSetCookie } from "../lib/session";
import { getGitHubUser } from "../lib/github-api";

interface GitHubTokenResponse {
  access_token?: string;
  error?: string;
  error_description?: string;
}

/**
 * GET /api/admin/auth/callback
 *
 * GitHub redirects here with ?code=...&state=...
 * We exchange the code for an access token, set the session cookie, then
 * redirect to /admin.
 */
export const Route = createFileRoute("/api/admin/auth/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const code = url.searchParams.get("code");
        const state = url.searchParams.get("state");

        function errorPage(msg: string) {
          return new Response(
            `<!doctype html><html><head><title>Auth Error</title>
            <style>body{font-family:system-ui;background:#0f172a;color:#f1f5f9;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
            .card{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:40px;max-width:480px;text-align:center}
            h1{color:#f87171;margin-bottom:16px}p{color:#94a3b8;font-size:14px;line-height:1.6}
            a{color:#38bdf8;text-decoration:none;margin-top:20px;display:inline-block}</style></head>
            <body><div class="card"><h1>Authentication Failed</h1><p>${msg}</p>
            <a href="/admin">← Back to Admin</a></div></body></html>`,
            { status: 400, headers: { "Content-Type": "text/html" } }
          );
        }

        if (!code) return errorPage("No authorization code received from GitHub.");

        // Validate state cookie against the one we set in /login
        const cookieHeader = request.headers.get("cookie") || "";
        const cookies = Object.fromEntries(
          cookieHeader.split(";").map((c) => {
            const [k, ...v] = c.trim().split("=");
            return [k.trim(), v.join("=").trim()];
          })
        );
        const savedState = cookies["kio_oauth_state"];
        if (!savedState || savedState !== state) {
          return errorPage("OAuth state mismatch. Please try signing in again.");
        }

        const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
        const clientSecret = process.env.GITHUB_CLIENT_SECRET;

        if (!clientId || !clientSecret) {
          return errorPage("Server misconfiguration: missing GitHub credentials.");
        }

        // Exchange code for access token
        let tokenData: GitHubTokenResponse;
        try {
          const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
          });
          tokenData = (await tokenRes.json()) as GitHubTokenResponse;
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return errorPage(`Network error contacting GitHub: ${message}`);
        }

        if (tokenData.error || !tokenData.access_token) {
          return errorPage(tokenData.error_description || tokenData.error || "Unknown error from GitHub.");
        }

        // Fetch user profile to check allowlist
        try {
          const user = await getGitHubUser(tokenData.access_token);
          const allowedUsersEnv = process.env.ALLOWED_GITHUB_USERS;
          if (allowedUsersEnv) {
            const allowedList = allowedUsersEnv.split(",").map((u) => u.trim().toLowerCase());
            if (!allowedList.includes(user.login.toLowerCase())) {
              return errorPage(`User @${user.login} is not on the admin allowlist. Please ask the administrator to add you to the ALLOWED_GITHUB_USERS environment variable.`);
            }
          }
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return errorPage(`Failed to verify GitHub user profile: ${message}`);
        }

        // Store token in secure cookie and redirect to /admin
        const sessionCookie = await buildSetCookie(tokenData.access_token);
        const clearStateCookie = `kio_oauth_state=; Path=/api/admin/auth; HttpOnly; SameSite=Lax; Max-Age=0`;

        return new Response(null, {
          status: 302,
          headers: new Headers([
            ["Location", "/admin"],
            ["Set-Cookie", sessionCookie],
            ["Set-Cookie", clearStateCookie],
          ]),
        });
      },
    },
  },
});
