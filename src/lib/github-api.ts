/**
 * Thin wrapper around the GitHub Contents API.
 * Reads and writes JSON files in the KIO repository.
 *
 * Docs: https://docs.github.com/en/rest/repos/contents
 */

const REPO = "GabuGravin41/kenya-informatics-olympiad";
const BRANCH = "main";
const API_BASE = "https://api.github.com";

// Which JSON files the CMS manages, keyed by short name
export const CONTENT_FILES = {
  site: "src/content/site.json",
  team: "src/content/team.json",
  news: "src/content/news.json",
  events: "src/content/events.json",
  support: "src/content/support.json",
  resources: "src/content/resources.json",
} as const;

export type ContentFileKey = keyof typeof CONTENT_FILES;

interface GitHubFileResponse {
  content: string; // base64-encoded
  sha: string;
  name: string;
  path: string;
}

function githubHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
}

/** Read a content file. Returns { data: parsed JSON, sha: string } */
export async function readContentFile(
  token: string,
  key: ContentFileKey
): Promise<{ data: unknown; sha: string }> {
  const path = CONTENT_FILES[key];
  const url = `${API_BASE}/repos/${REPO}/contents/${path}?ref=${BRANCH}`;

  const res = await fetch(url, { headers: githubHeaders(token) });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API error reading ${path}: ${res.status} ${body}`);
  }

  const file = (await res.json()) as GitHubFileResponse;
  // GitHub returns base64 with line breaks — strip them before decoding
  const decoded = Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
  return { data: JSON.parse(decoded), sha: file.sha };
}

/** Write a content file. Creates a commit on `main`. */
export async function writeContentFile(
  token: string,
  key: ContentFileKey,
  data: unknown,
  sha: string,
  commitMessage?: string
): Promise<void> {
  const path = CONTENT_FILES[key];
  const url = `${API_BASE}/repos/${REPO}/contents/${path}`;

  const content = Buffer.from(JSON.stringify(data, null, 2) + "\n").toString("base64");

  const res = await fetch(url, {
    method: "PUT",
    headers: githubHeaders(token),
    body: JSON.stringify({
      message: commitMessage ?? `cms: update ${key}`,
      content,
      sha,
      branch: BRANCH,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API error writing ${path}: ${res.status} ${body}`);
  }
}

/** Get the authenticated user's GitHub profile (for display in the CMS header). */
export async function getGitHubUser(token: string): Promise<{ login: string; avatar_url: string; name: string | null }> {
  const res = await fetch(`${API_BASE}/user`, { headers: githubHeaders(token) });
  if (!res.ok) throw new Error(`GitHub API error fetching user: ${res.status}`);
  return res.json() as Promise<{ login: string; avatar_url: string; name: string | null }>;
}
