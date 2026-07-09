export function LoginScreen() {
  return (
    <div style={s.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:.4; } 50% { opacity:1; } }
        .login-card { animation: fadeUp 0.4s ease both; }
        .gh-btn:hover { background: #38bdf8 !important; color: #0f172a !important; transform: translateY(-1px); }
        .gh-btn:active { transform: translateY(0); }
        .gh-btn { transition: background 0.2s, color 0.2s, transform 0.15s; }
      `}</style>

      {/* Ambient background blobs */}
      <div style={s.blob1} />
      <div style={s.blob2} />

      <div className="login-card" style={s.card}>
        {/* KIO logo mark */}
        <div style={s.logoRing}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
            <path d="M8 8 L16 4 L24 8 L24 24 L16 28 L8 24 Z" stroke="#38bdf8" strokeWidth="1.5" fill="none"/>
            <circle cx="16" cy="16" r="3" fill="#38bdf8"/>
          </svg>
        </div>

        <div style={s.eyebrow}>KIO Content Management</div>
        <h1 style={s.heading}>Admin Portal</h1>
        <p style={s.sub}>
          Sign in with your GitHub account to edit site content.
          You must have write access to the{" "}
          <a href="https://github.com/GabuGravin41/kenya-informatics-olympiad" target="_blank" rel="noreferrer" style={s.link}>
            KIO repository
          </a>.
        </p>

        <a href="/api/admin/auth/login" className="gh-btn" style={s.btn}>
          <GithubIcon />
          Sign in with GitHub
        </a>

        <div style={s.divider} />
        <p style={s.footNote}>
          Authenticated via GitHub OAuth · Session stored in a secure HTTP-only cookie
        </p>
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ flexShrink: 0 }}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
  },
  blob1: {
    position: "absolute",
    top: "-20%",
    left: "-10%",
    width: 600,
    height: 600,
    background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  blob2: {
    position: "absolute",
    bottom: "-20%",
    right: "-10%",
    width: 500,
    height: 500,
    background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  card: {
    background: "rgba(30,41,59,0.9)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(51,65,85,0.8)",
    borderRadius: 16,
    padding: "48px 40px",
    maxWidth: 440,
    width: "100%",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  logoRing: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    border: "1px solid rgba(56,189,248,0.3)",
    background: "rgba(56,189,248,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#38bdf8",
    fontWeight: 600,
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    color: "#f1f5f9",
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
  },
  sub: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.7,
    margin: "0 0 32px",
  },
  link: { color: "#38bdf8", textDecoration: "none" },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#f1f5f9",
    color: "#0f172a",
    padding: "14px 28px",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    cursor: "pointer",
  },
  divider: {
    height: 1,
    background: "rgba(51,65,85,0.6)",
    margin: "28px 0 20px",
  },
  footNote: {
    fontSize: 11,
    color: "#475569",
    lineHeight: 1.6,
  },
};
