import { createFileRoute } from "@tanstack/react-router";
import { buildClearCookie } from "../lib/session";

/**
 * GET /api/admin/auth/logout
 *
 * Clears the session cookie and redirects to /admin.
 */
export const Route = createFileRoute("/api/admin/auth/logout")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(null, {
          status: 302,
          headers: {
            Location: "/admin",
            "Set-Cookie": buildClearCookie(),
          },
        });
      },
    },
  },
});
