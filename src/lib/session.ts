/**
 * Session helpers — stores the GitHub access token in a signed HTTP-only cookie.
 * Cookie name: kio_session
 * Format: base64(token):base64(hmac-sha256(token))
 *
 * SESSION_SECRET env var is required on production.
 * Falls back to a constant dev secret so local `npm run dev` still works.
 */

const COOKIE_NAME = "kio_session";
const DEV_SECRET = "dev-secret-change-in-production-please";

function getSecret(): string {
  return process.env.SESSION_SECRET || DEV_SECRET;
}

// ─── HMAC-SHA256 helpers (Web Crypto, available in Node 18+ / Vercel edge) ───

async function importKey(secret: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
    "verify",
  ]);
}

async function sign(data: string): Promise<string> {
  const key = await importKey(getSecret());
  const enc = new TextEncoder();
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return Buffer.from(sig).toString("base64url");
}

async function verify(data: string, signature: string): Promise<boolean> {
  const key = await importKey(getSecret());
  const enc = new TextEncoder();
  const sigBuf = Buffer.from(signature, "base64url");
  return crypto.subtle.verify("HMAC", key, sigBuf, enc.encode(data));
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Encode a GitHub token into a signed cookie value. */
export async function encodeSession(token: string): Promise<string> {
  const encoded = Buffer.from(token).toString("base64url");
  const sig = await sign(encoded);
  return `${encoded}.${sig}`;
}

/** Decode and verify the cookie. Returns the GitHub token or null on failure. */
export async function decodeSession(cookieValue: string): Promise<string | null> {
  try {
    const [encoded, sig] = cookieValue.split(".");
    if (!encoded || !sig) return null;
    const valid = await verify(encoded, sig);
    if (!valid) return null;
    return Buffer.from(encoded, "base64url").toString("utf8");
  } catch {
    return null;
  }
}

/** Parse the kio_session cookie from a Request and return the GitHub token or null. */
export async function getSession(request: Request): Promise<string | null> {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k, v.join("=")];
    })
  );
  const value = cookies[COOKIE_NAME];
  if (!value) return null;
  return decodeSession(decodeURIComponent(value));
}

/** Build Set-Cookie header value that stores the token. */
export async function buildSetCookie(token: string): Promise<string> {
  const value = await encodeSession(token);
  const isProduction = process.env.NODE_ENV === "production";
  const parts = [
    `${COOKIE_NAME}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${60 * 60 * 24 * 7}`, // 7 days
  ];
  if (isProduction) parts.push("Secure");
  return parts.join("; ");
}

/** Build Set-Cookie header value that clears the session. */
export function buildClearCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
