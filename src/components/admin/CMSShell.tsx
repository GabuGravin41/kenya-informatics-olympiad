import { useState } from "react";
import type { GitHubUser } from "./api-client";
import { SiteEditor } from "./editors/SiteEditor";
import { TeamEditor } from "./editors/TeamEditor";
import { NewsEditor } from "./editors/NewsEditor";
import { EventsEditor } from "./editors/EventsEditor";
import { SupportEditor } from "./editors/SupportEditor";
import { ResourcesEditor } from "./editors/ResourcesEditor";

type Tab = "site" | "team" | "news" | "events" | "support" | "resources";

const NAV: { id: Tab; label: string; icon: string; description: string }[] = [
  { id: "site", label: "Home Page", icon: "🏠", description: "Hero, stats, partners, CTAs" },
  { id: "team", label: "Team", icon: "👥", description: "Team member roster" },
  { id: "news", label: "Upcoming Events", icon: "📅", description: "Calendar & announcements" },
  { id: "events", label: "Past Events", icon: "🏆", description: "Event archive & reports" },
  { id: "support", label: "Support Page", icon: "💚", description: "Donations & partnerships" },
  { id: "resources", label: "Resources", icon: "📚", description: "Links & learning materials" },
];

interface CMSShellProps {
  user: GitHubUser;
}

export function CMSShell({ user }: CMSShellProps) {
  const [activeTab, setActiveTab] = useState<Tab>("site");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const active = NAV.find((n) => n.id === activeTab)!;

  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
        .nav-item:hover { background: rgba(56,189,248,0.06) !important; }
        .nav-item.active { background: rgba(56,189,248,0.1) !important; border-color: rgba(56,189,248,0.3) !important; }
        @keyframes fadeIn { from { opacity:0; transform:translateX(8px); } to { opacity:1; transform:translateX(0); } }
        .editor-panel { animation: fadeIn 0.2s ease; }
      `}</style>

      {/* Sidebar */}
      <aside style={{ ...s.sidebar, width: sidebarOpen ? 260 : 64 }}>
        {/* Logo */}
        <div style={s.sidebarHeader}>
          <div style={s.logoMark}>
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden>
              <path d="M8 8 L16 4 L24 8 L24 24 L16 28 L8 24 Z" stroke="#38bdf8" strokeWidth="1.5" fill="none"/>
              <circle cx="16" cy="16" r="3" fill="#38bdf8"/>
            </svg>
          </div>
          {sidebarOpen && (
            <div>
              <div style={s.logoText}>KIO Admin</div>
              <div style={s.logoSub}>Content Manager</div>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={s.collapseBtn} title="Toggle sidebar">
            {sidebarOpen ? "‹" : "›"}
          </button>
        </div>

        {/* Navigation */}
        <nav style={s.nav}>
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-item${activeTab === item.id ? " active" : ""}`}
              style={{
                ...s.navItem,
                ...(activeTab === item.id ? s.navItemActive : {}),
                justifyContent: sidebarOpen ? "flex-start" : "center",
              }}
              title={!sidebarOpen ? item.label : undefined}
            >
              <span style={s.navIcon}>{item.icon}</span>
              {sidebarOpen && (
                <div style={s.navTextWrap}>
                  <span style={s.navLabel}>{item.label}</span>
                  <span style={s.navDesc}>{item.description}</span>
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* User + logout */}
        <div style={s.sidebarFooter}>
          {sidebarOpen ? (
            <div style={s.userRow}>
              <img src={user.avatar_url} alt={user.login} style={s.avatar} />
              <div style={s.userInfo}>
                <div style={s.userName}>{user.name || user.login}</div>
                <div style={s.userLogin}>@{user.login}</div>
              </div>
              <a href="/api/admin/auth/logout" style={s.logoutBtn} title="Sign out">⏻</a>
            </div>
          ) : (
            <a href="/api/admin/auth/logout" style={{ ...s.logoutBtn, margin: "0 auto" }} title="Sign out">⏻</a>
          )}
        </div>
      </aside>

      {/* Main content area */}
      <main style={s.main}>
        {/* Top bar */}
        <header style={s.topBar}>
          <div>
            <div style={s.topBarEyebrow}>Editing</div>
            <h1 style={s.topBarTitle}>{active.icon} {active.label}</h1>
          </div>
          <div style={s.topBarRight}>
            <a
              href="https://github.com/GabuGravin41/kenya-informatics-olympiad"
              target="_blank"
              rel="noreferrer"
              style={s.repoLink}
            >
              View on GitHub →
            </a>
            <a href="/" target="_blank" rel="noreferrer" style={s.repoLink}>
              View site →
            </a>
          </div>
        </header>

        {/* Editor panel */}
        <div key={activeTab} className="editor-panel" style={s.editorWrap}>
          {activeTab === "site" && <SiteEditor />}
          {activeTab === "team" && <TeamEditor />}
          {activeTab === "news" && <NewsEditor />}
          {activeTab === "events" && <EventsEditor />}
          {activeTab === "support" && <SupportEditor />}
          {activeTab === "resources" && <ResourcesEditor />}
        </div>
      </main>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    color: "#e2e8f0",
  },
  sidebar: {
    background: "#0c1428",
    borderRight: "1px solid rgba(51,65,85,0.6)",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    transition: "width 0.2s ease",
    overflow: "hidden",
    position: "sticky",
    top: 0,
    height: "100vh",
  },
  sidebarHeader: {
    padding: "20px 16px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    borderBottom: "1px solid rgba(51,65,85,0.4)",
    minHeight: 72,
  },
  logoMark: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "rgba(56,189,248,0.1)",
    border: "1px solid rgba(56,189,248,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  logoText: {
    fontSize: 13,
    fontWeight: 700,
    color: "#f1f5f9",
    lineHeight: 1.2,
  },
  logoSub: {
    fontSize: 10,
    color: "#475569",
    letterSpacing: "0.05em",
  },
  collapseBtn: {
    marginLeft: "auto",
    background: "none",
    border: "none",
    color: "#475569",
    fontSize: 18,
    cursor: "pointer",
    padding: "4px 6px",
    borderRadius: 4,
    flexShrink: 0,
  },
  nav: {
    flex: 1,
    padding: "12px 8px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    overflowY: "auto",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid transparent",
    background: "transparent",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    transition: "background 0.15s",
  },
  navItemActive: {
    background: "rgba(56,189,248,0.1)",
    borderColor: "rgba(56,189,248,0.3)",
  },
  navIcon: { fontSize: 16, flexShrink: 0 },
  navTextWrap: { display: "flex", flexDirection: "column" as const, gap: 1 },
  navLabel: { fontSize: 13, fontWeight: 600, color: "#e2e8f0" },
  navDesc: { fontSize: 10, color: "#475569" },
  sidebarFooter: {
    padding: "12px 8px",
    borderTop: "1px solid rgba(51,65,85,0.4)",
  },
  userRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 8px",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "1px solid rgba(51,65,85,0.6)",
    flexShrink: 0,
  },
  userInfo: { flex: 1, overflow: "hidden" },
  userName: { fontSize: 12, fontWeight: 600, color: "#e2e8f0", whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" },
  userLogin: { fontSize: 10, color: "#475569" },
  logoutBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 6,
    background: "rgba(239,68,68,0.08)",
    border: "1px solid rgba(239,68,68,0.15)",
    color: "#ef4444",
    fontSize: 14,
    textDecoration: "none",
    flexShrink: 0,
    cursor: "pointer",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    overflowX: "hidden",
  },
  topBar: {
    padding: "20px 32px",
    borderBottom: "1px solid rgba(51,65,85,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(12,20,40,0.5)",
    backdropFilter: "blur(8px)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  topBarEyebrow: { fontSize: 10, color: "#38bdf8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 },
  topBarTitle: { fontSize: 20, fontWeight: 700, color: "#f1f5f9", margin: 0 },
  topBarRight: { display: "flex", gap: 12, alignItems: "center" },
  repoLink: {
    fontSize: 12,
    color: "#64748b",
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: 6,
    border: "1px solid rgba(51,65,85,0.4)",
    transition: "color 0.15s",
  },
  editorWrap: {
    flex: 1,
    padding: "32px",
    overflowY: "auto",
    maxHeight: "calc(100vh - 80px)",
  },
};
