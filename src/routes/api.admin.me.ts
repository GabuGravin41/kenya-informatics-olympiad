import { createFileRoute } from "@tanstack/react-router";
import { getSession } from "../lib/session";
import { getGitHubUser } from "../lib/github-api";

/**
 * GET /api/admin/me
 * Returns the GitHub user profile for the logged-in session.
 */
export const Route = createFileRoute("/api/admin/me")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const json = (body: unknown, status = 200) =>
          new Response(JSON.stringify(body), {
            status,
            headers: { "Content-Type": "application/json" },
          });

        const token = await getSession(request);
        if (!token) return json({ error: "Unauthorized" }, 401);

        try {
          const user = await getGitHubUser(token);
          return json({ login: user.login, name: user.name, avatar_url: user.avatar_url });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return json({ error: message }, 502);
        }
      },
    },
  },
});
