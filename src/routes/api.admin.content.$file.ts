import { createFileRoute } from "@tanstack/react-router";
import { getSession } from "../lib/session";
import { readContentFile, writeContentFile, CONTENT_FILES, type ContentFileKey } from "../lib/github-api";

/**
 * /api/admin/content/$file
 *
 * GET  → reads a JSON content file from GitHub and returns it
 * PUT  → writes updated JSON back to GitHub (creates a commit)
 *
 * Both require a valid session cookie.
 */
export const Route = createFileRoute("/api/admin/content/$file")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const json = (body: unknown, status = 200) =>
          new Response(JSON.stringify(body), {
            status,
            headers: { "Content-Type": "application/json" },
          });

        const token = await getSession(request);
        if (!token) return json({ error: "Unauthorized" }, 401);

        const key = params.file as ContentFileKey;
        if (!CONTENT_FILES[key]) return json({ error: `Unknown content file: ${key}` }, 404);

        try {
          const { data, sha } = await readContentFile(token, key);
          return json({ data, sha });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return json({ error: message }, 502);
        }
      },

      PUT: async ({ request, params }) => {
        const json = (body: unknown, status = 200) =>
          new Response(JSON.stringify(body), {
            status,
            headers: { "Content-Type": "application/json" },
          });

        const token = await getSession(request);
        if (!token) return json({ error: "Unauthorized" }, 401);

        const key = params.file as ContentFileKey;
        if (!CONTENT_FILES[key]) return json({ error: `Unknown content file: ${key}` }, 404);

        let body: { data: unknown; sha: string; message?: string };
        try {
          body = await request.json();
        } catch {
          return json({ error: "Invalid JSON body" }, 400);
        }

        if (!body.sha) return json({ error: "Missing sha field" }, 400);

        try {
          await writeContentFile(token, key, body.data, body.sha, body.message);
          return json({ ok: true });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return json({ error: message }, 502);
        }
      },
    },
  },
});
