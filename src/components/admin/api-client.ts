/**
 * Thin API client for the custom CMS backend.
 * All paths are relative so they work on any deployment host.
 */

export interface ContentResponse {
  data: unknown;
  sha: string;
}

export async function fetchContent(file: string): Promise<ContentResponse> {
  const res = await fetch(`/api/admin/content/${file}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error((err as { error: string }).error || `HTTP ${res.status}`);
  }
  return res.json() as Promise<ContentResponse>;
}

export async function saveContent(
  file: string,
  data: unknown,
  sha: string,
  message?: string
): Promise<void> {
  const res = await fetch(`/api/admin/content/${file}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data, sha, message }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error((err as { error: string }).error || `HTTP ${res.status}`);
  }
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
}

export async function fetchMe(): Promise<GitHubUser> {
  const res = await fetch("/api/admin/me");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<GitHubUser>;
}
