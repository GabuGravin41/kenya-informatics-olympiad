import { createFileRoute } from "@tanstack/react-router";
import { getSession } from "../lib/session";

const REPO = "GabuGravin41/kenya-informatics-olympiad";
const BRANCH = "main";

export const Route = createFileRoute("/api/admin/upload")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const json = (body: unknown, status = 200) =>
          new Response(JSON.stringify(body), {
            status,
            headers: { "Content-Type": "application/json" },
          });

        const token = await getSession(request);
        if (!token) return json({ error: "Unauthorized" }, 401);

        try {
          const formData = await request.formData();
          const file = formData.get("file") as File;
          if (!file) return json({ error: "No file provided" }, 400);

          const bytes = await file.arrayBuffer();
          const content = Buffer.from(bytes).toString("base64");

          // Safe filename generation
          const originalName = file.name || "upload.jpg";
          const lastDotIdx = originalName.lastIndexOf(".");
          const ext = lastDotIdx !== -1 ? originalName.slice(lastDotIdx + 1) : "jpg";
          const baseName = lastDotIdx !== -1 ? originalName.slice(0, lastDotIdx) : originalName;

          const safeBaseName = baseName
            .replace(/[^a-zA-Z0-9]/g, "-")
            .toLowerCase();
          
          const filename = `${Date.now()}-${safeBaseName}.${ext}`;
          const path = `public/uploads/${filename}`;
          const url = `https://api.github.com/repos/${REPO}/contents/${path}`;

          const res = await fetch(url, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: `cms: upload image ${filename}`,
              content,
              branch: BRANCH,
            }),
          });

          if (!res.ok) {
            const errBody = await res.text().catch(() => "");
            throw new Error(`GitHub API error: ${res.status} ${errBody}`);
          }

          return json({ url: `/uploads/${filename}` });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return json({ error: message }, 500);
        }
      },
    },
  },
});
