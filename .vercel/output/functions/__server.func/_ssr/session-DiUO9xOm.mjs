const COOKIE_NAME = "kio_session";
const DEV_SECRET = "dev-secret-change-in-production-please";
function getSecret() {
  return process.env.SESSION_SECRET || DEV_SECRET;
}
async function importKey(secret) {
  const enc = new TextEncoder();
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
    "verify"
  ]);
}
async function sign(data) {
  const key = await importKey(getSecret());
  const enc = new TextEncoder();
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return Buffer.from(sig).toString("base64url");
}
async function verify(data, signature) {
  const key = await importKey(getSecret());
  const enc = new TextEncoder();
  const sigBuf = Buffer.from(signature, "base64url");
  return crypto.subtle.verify("HMAC", key, sigBuf, enc.encode(data));
}
async function encodeSession(token) {
  const encoded = Buffer.from(token).toString("base64url");
  const sig = await sign(encoded);
  return `${encoded}.${sig}`;
}
async function decodeSession(cookieValue) {
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
async function getSession(request) {
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
async function buildSetCookie(token) {
  const value = await encodeSession(token);
  const parts = [
    `${COOKIE_NAME}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${60 * 60 * 24 * 7}`
    // 7 days
  ];
  parts.push("Secure");
  return parts.join("; ");
}
function buildClearCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
export {
  buildSetCookie as a,
  buildClearCookie as b,
  getSession as g
};
