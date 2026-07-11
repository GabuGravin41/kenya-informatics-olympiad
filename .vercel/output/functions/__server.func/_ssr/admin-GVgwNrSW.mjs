import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Route$7 } from "./router-C8pvI0pX.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-CG6M_atp.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./session-DiUO9xOm.mjs";
async function fetchContent(file) {
  const res = await fetch(`/api/admin/content/${file}`);
  if (!res.ok) {
    const err2 = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err2.error || `HTTP ${res.status}`);
  }
  return res.json();
}
async function saveContent(file, data, sha, message) {
  const res = await fetch(`/api/admin/content/${file}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data, sha, message })
  });
  if (!res.ok) {
    const err2 = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err2.error || `HTTP ${res.status}`);
  }
}
async function fetchMe() {
  const res = await fetch("/api/admin/me");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
function LoginScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$2.page, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:.4; } 50% { opacity:1; } }
        .login-card { animation: fadeUp 0.4s ease both; }
        .gh-btn:hover { background: #38bdf8 !important; color: #0f172a !important; transform: translateY(-1px); }
        .gh-btn:active { transform: translateY(0); }
        .gh-btn { transition: background 0.2s, color 0.2s, transform 0.15s; }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.blob1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.blob2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-card", style: s$2.card, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.logoRing, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", "aria-hidden": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 8 L16 4 L24 8 L24 24 L16 28 L8 24 Z", stroke: "#38bdf8", strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "3", fill: "#38bdf8" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.eyebrow, children: "KIO Content Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: s$2.heading, children: "Admin Portal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: s$2.sub, children: [
        "Sign in with your GitHub account to edit site content. You must have write access to the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/GabuGravin41/kenya-informatics-olympiad", target: "_blank", rel: "noreferrer", style: s$2.link, children: "KIO repository" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/api/admin/auth/login", className: "gh-btn", style: s$2.btn, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GithubIcon, {}),
        "Sign in with GitHub"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.divider }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s$2.footNote, children: "Authenticated via GitHub OAuth · Session stored in a secure HTTP-only cookie" })
    ] })
  ] });
}
function GithubIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, style: { flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" }) });
}
const s$2 = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Space Grotesk', system-ui, sans-serif"
  },
  blob1: {
    position: "absolute",
    top: "-20%",
    left: "-10%",
    width: 600,
    height: 600,
    background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none"
  },
  blob2: {
    position: "absolute",
    bottom: "-20%",
    right: "-10%",
    width: 500,
    height: 500,
    background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none"
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
    zIndex: 1
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
    margin: "0 auto 24px"
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#38bdf8",
    fontWeight: 600,
    marginBottom: 10
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    color: "#f1f5f9",
    margin: "0 0 12px",
    letterSpacing: "-0.02em"
  },
  sub: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 1.7,
    margin: "0 0 32px"
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
    cursor: "pointer"
  },
  divider: {
    height: 1,
    background: "rgba(51,65,85,0.6)",
    margin: "28px 0 20px"
  },
  footNote: {
    fontSize: 11,
    color: "#475569",
    lineHeight: 1.6
  }
};
function useEditor(fileKey) {
  const [data, setDataRaw] = reactExports.useState(null);
  const [sha, setSha] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [loadError, setLoadError] = reactExports.useState(null);
  const [dirty, setDirty] = reactExports.useState(false);
  const [saveStatus, setSaveStatus] = reactExports.useState("idle");
  const [saveError, setSaveError] = reactExports.useState(null);
  const shaRef = reactExports.useRef(sha);
  reactExports.useEffect(() => {
    shaRef.current = sha;
  }, [sha]);
  reactExports.useEffect(() => {
    setLoading(true);
    fetchContent(fileKey).then(({ data: d, sha: s2 }) => {
      setDataRaw(d);
      setSha(s2);
      setDirty(false);
    }).catch((err2) => {
      const msg = err2 instanceof Error ? err2.message : String(err2);
      setLoadError(msg);
    }).finally(() => setLoading(false));
  }, [fileKey]);
  const setData = reactExports.useCallback((updater) => {
    setDataRaw((prev) => {
      if (prev === null) return prev;
      const next = updater(prev);
      setDirty(true);
      return next;
    });
  }, []);
  const save = reactExports.useCallback(async () => {
    if (!data) return;
    setSaveStatus("saving");
    setSaveError(null);
    try {
      await saveContent(fileKey, data, shaRef.current);
      const { sha: newSha } = await fetchContent(fileKey);
      setSha(newSha);
      shaRef.current = newSha;
      setDirty(false);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 3e3);
    } catch (err2) {
      const msg = err2 instanceof Error ? err2.message : String(err2);
      setSaveError(msg);
      setSaveStatus("error");
    }
  }, [data, fileKey]);
  return { data, loading, loadError, dirty, saveStatus, saveError, setData, save };
}
function Field({ label, hint, required, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$1.field, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: s$1.label, children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.required, children: " *" }),
      hint && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: s$1.hint, children: [
        " — ",
        hint
      ] })
    ] }),
    children
  ] });
}
function StringField({ label, value, onChange, hint, required, placeholder, mono }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label, hint, required, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "text",
      value: value ?? "",
      onChange: (e) => onChange(e.target.value),
      placeholder,
      style: { ...s$1.input, fontFamily: mono ? "JetBrains Mono, monospace" : void 0 }
    }
  ) });
}
function TextareaField({ label, value, onChange, hint, required, rows = 4, placeholder }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label, hint, required, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      value: value ?? "",
      onChange: (e) => onChange(e.target.value),
      rows,
      placeholder,
      style: s$1.textarea
    }
  ) });
}
function BoolField({ label, value, onChange, hint }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label, hint, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => onChange(!value),
      style: { ...s$1.toggle, ...value ? s$1.toggleOn : {} },
      "aria-pressed": value,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { ...s$1.toggleThumb, ...value ? s$1.toggleThumbOn : {} } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.toggleLabel, children: value ? "Yes" : "No" })
      ]
    }
  ) });
}
function SectionHeader({ title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$1.sectionHeader, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: s$1.sectionTitle, children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s$1.sectionDesc, children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$1.sectionDivider })
  ] });
}
function Card({ children, style }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...s$1.card, ...style }, children });
}
function ListControls({
  index,
  total,
  onMoveUp,
  onMoveDown,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$1.listControls, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onMoveUp, disabled: index === 0, style: s$1.ctrlBtn, title: "Move up", children: "↑" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onMoveDown, disabled: index === total - 1, style: s$1.ctrlBtn, title: "Move down", children: "↓" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onDelete, style: { ...s$1.ctrlBtn, ...s$1.deleteBtn }, title: "Delete", children: "✕" })
  ] });
}
function AddButton({ onClick, label = "Add item" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, style: s$1.addBtn, children: [
    "+ ",
    label
  ] });
}
function SaveBar({
  status,
  error,
  onSave,
  dirty
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$1.saveBar, children: [
    status === "saving" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.savingText, children: "Saving to GitHub…" }),
    status === "saved" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.savedText, children: "✓ Saved to GitHub" }),
    status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: s$1.errorText, children: [
      "✕ ",
      error
    ] }),
    status === "idle" && dirty && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.dirtyText, children: "Unsaved changes" }),
    status === "idle" && !dirty && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.okText, children: "No unsaved changes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onSave,
        disabled: status === "saving" || !dirty,
        style: { ...s$1.saveBtn, opacity: status === "saving" || !dirty ? 0.5 : 1 },
        children: status === "saving" ? "Saving…" : "Save & Publish"
      }
    )
  ] });
}
const s$1 = {
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 12, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.04em", textTransform: "uppercase" },
  required: { color: "#f87171" },
  hint: { color: "#475569", fontWeight: 400, textTransform: "none", letterSpacing: 0 },
  input: {
    background: "#0f172a",
    border: "1px solid rgba(51,65,85,0.8)",
    borderRadius: 6,
    padding: "10px 14px",
    color: "#e2e8f0",
    fontSize: 14,
    outline: "none",
    width: "100%",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    transition: "border-color 0.15s"
  },
  textarea: {
    background: "#0f172a",
    border: "1px solid rgba(51,65,85,0.8)",
    borderRadius: 6,
    padding: "10px 14px",
    color: "#e2e8f0",
    fontSize: 14,
    outline: "none",
    width: "100%",
    resize: "vertical",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    lineHeight: 1.6,
    transition: "border-color 0.15s"
  },
  toggle: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#1e293b",
    border: "1px solid rgba(51,65,85,0.8)",
    borderRadius: 20,
    padding: "4px 12px 4px 4px",
    cursor: "pointer",
    transition: "background 0.2s, border-color 0.2s",
    width: "fit-content"
  },
  toggleOn: {
    background: "rgba(56,189,248,0.15)",
    borderColor: "rgba(56,189,248,0.4)"
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#475569",
    transition: "background 0.2s"
  },
  toggleThumbOn: { background: "#38bdf8" },
  toggleLabel: { fontSize: 13, color: "#94a3b8", fontWeight: 500 },
  sectionHeader: { marginBottom: 28 },
  sectionTitle: { fontSize: 18, fontWeight: 700, color: "#f1f5f9", margin: "0 0 6px" },
  sectionDesc: { fontSize: 13, color: "#64748b", margin: "0 0 16px" },
  sectionDivider: { height: 1, background: "rgba(51,65,85,0.4)" },
  card: {
    background: "#1a2640",
    border: "1px solid rgba(51,65,85,0.5)",
    borderRadius: 10,
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  listControls: { display: "flex", gap: 4, alignItems: "center" },
  ctrlBtn: {
    background: "rgba(51,65,85,0.3)",
    border: "1px solid rgba(51,65,85,0.5)",
    borderRadius: 4,
    color: "#94a3b8",
    fontSize: 12,
    padding: "3px 8px",
    cursor: "pointer"
  },
  deleteBtn: {
    color: "#f87171",
    background: "rgba(239,68,68,0.08)",
    borderColor: "rgba(239,68,68,0.2)",
    marginLeft: 4
  },
  addBtn: {
    background: "rgba(56,189,248,0.08)",
    border: "1px dashed rgba(56,189,248,0.3)",
    borderRadius: 8,
    color: "#38bdf8",
    padding: "12px 20px",
    fontSize: 13,
    cursor: "pointer",
    width: "100%",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    fontWeight: 500,
    transition: "background 0.15s"
  },
  saveBar: {
    position: "sticky",
    bottom: 0,
    background: "rgba(12,20,40,0.95)",
    backdropFilter: "blur(8px)",
    borderTop: "1px solid rgba(51,65,85,0.4)",
    padding: "14px 0 0",
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginTop: 32
  },
  saveBtn: {
    marginLeft: "auto",
    background: "#38bdf8",
    color: "#0f172a",
    border: "none",
    borderRadius: 6,
    padding: "10px 24px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    transition: "opacity 0.15s"
  },
  savingText: { fontSize: 13, color: "#94a3b8" },
  savedText: { fontSize: 13, color: "#4ade80" },
  errorText: { fontSize: 13, color: "#f87171" },
  dirtyText: { fontSize: 13, color: "#fbbf24" },
  okText: { fontSize: 13, color: "#475569" }
};
function SiteEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("site");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(EditorLoader, {});
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsx(EditorError, { msg: loadError });
  if (!data) return null;
  const set = (key, val) => setData((d) => ({ ...d, [key]: val }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$5, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Hero Section", description: "Top of the home page" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.hero.eyebrow, onChange: (v) => set("hero", { ...data.hero, eyebrow: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid3$2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title line 1", value: data.hero.titleLine1, onChange: (v) => set("hero", { ...data.hero, titleLine1: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title line 2", value: data.hero.titleLine2, onChange: (v) => set("hero", { ...data.hero, titleLine2: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title line 3 (accent)", value: data.hero.titleLine3, onChange: (v) => set("hero", { ...data.hero, titleLine3: v }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Lede paragraph", value: data.hero.lede, onChange: (v) => set("hero", { ...data.hero, lede: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Primary CTA", value: data.hero.primaryCta, onChange: (v) => set("hero", { ...data.hero, primaryCta: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Secondary CTA", value: data.hero.secondaryCta, onChange: (v) => set("hero", { ...data.hero, secondaryCta: v }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "PAIO Announcement Card" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.paioCard.eyebrow, onChange: (v) => set("paioCard", { ...data.paioCard, eyebrow: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: data.paioCard.title, onChange: (v) => set("paioCard", { ...data.paioCard, title: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: data.paioCard.body, onChange: (v) => set("paioCard", { ...data.paioCard, body: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "CTA text", value: data.paioCard.cta, onChange: (v) => set("paioCard", { ...data.paioCard, cta: v }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Announcements", description: "Shown on the home page" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.announcements.eyebrow, onChange: (v) => set("announcements", { ...data.announcements, eyebrow: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading", value: data.announcements.heading, onChange: (v) => set("announcements", { ...data.announcements, heading: v }) })
    ] }) }),
    data.announcements.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.announcements.items.length,
          onMoveUp: () => set("announcements", { ...data.announcements, items: moveUp$5(data.announcements.items, i) }),
          onMoveDown: () => set("announcements", { ...data.announcements, items: moveDown$5(data.announcements.items, i) }),
          onDelete: () => set("announcements", { ...data.announcements, items: removeAt$5(data.announcements.items, i) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Date", value: item.date, onChange: (v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, date: v }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Tag", value: item.tag, onChange: (v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, tag: v }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: item.title, onChange: (v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, title: v }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: item.body, rows: 2, onChange: (v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, body: v }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Link", value: item.link, placeholder: "/register or https://...", onChange: (v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, link: v }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Link label", value: item.linkLabel, onChange: (v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, linkLabel: v }) }) })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add announcement", onClick: () => set("announcements", { ...data.announcements, items: [...data.announcements.items, { date: "", tag: "", title: "", body: "", link: "", linkLabel: "" }] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Mission Section" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.mission.eyebrow, onChange: (v) => set("mission", { ...data.mission, eyebrow: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Heading", value: data.mission.heading, onChange: (v) => set("mission", { ...data.mission, heading: v }) }),
      data.mission.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-start" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextareaField,
          {
            label: `Paragraph ${i + 1}`,
            value: p,
            rows: 3,
            onChange: (v) => set("mission", { ...data.mission, paragraphs: updateAt$5(data.mission.paragraphs, i, v) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set("mission", { ...data.mission, paragraphs: removeAt$5(data.mission.paragraphs, i) }), style: delBtn$2, children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add paragraph", onClick: () => set("mission", { ...data.mission, paragraphs: [...data.mission.paragraphs, ""] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Pillars (3 cards)" }),
    data.pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.pillars.length,
          onMoveUp: () => set("pillars", moveUp$5(data.pillars, i)),
          onMoveDown: () => set("pillars", moveDown$5(data.pillars, i)),
          onDelete: () => set("pillars", removeAt$5(data.pillars, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Number", value: p.n, onChange: (v) => set("pillars", updateAt$5(data.pillars, i, { ...p, n: v })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: p.title, onChange: (v) => set("pillars", updateAt$5(data.pillars, i, { ...p, title: v })) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: p.body, rows: 2, onChange: (v) => set("pillars", updateAt$5(data.pillars, i, { ...p, body: v })) })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add pillar", onClick: () => set("pillars", [...data.pillars, { n: "", title: "", body: "" }]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "At-a-glance Stats" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      data.stats.map((st, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "0 0 120px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Value", value: st.k, onChange: (v) => set("stats", updateAt$5(data.stats, i, { ...st, k: v })) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Label", value: st.v, onChange: (v) => set("stats", updateAt$5(data.stats, i, { ...st, v })) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set("stats", removeAt$5(data.stats, i)), style: delBtn$2, children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add stat", onClick: () => set("stats", [...data.stats, { k: "", v: "" }]) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Partners" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      data.partners.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: `Partner ${i + 1} name`, value: p.name, onChange: (v) => set("partners", updateAt$5(data.partners, i, { ...p, name: v })) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { paddingBottom: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BoolField, { label: "Accent", value: p.accent, onChange: (v) => set("partners", updateAt$5(data.partners, i, { ...p, accent: v })) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set("partners", removeAt$5(data.partners, i)), style: delBtn$2, children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add partner", onClick: () => set("partners", [...data.partners, { name: "", accent: false }]) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Sponsors / Logo Marquee" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.sponsors.eyebrow, onChange: (v) => set("sponsors", { ...data.sponsors, eyebrow: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading", value: data.sponsors.heading, onChange: (v) => set("sponsors", { ...data.sponsors, heading: v }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Lede", value: data.sponsors.lede, rows: 2, onChange: (v) => set("sponsors", { ...data.sponsors, lede: v }) }),
      data.sponsors.items.map((sp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Name", value: sp.name, onChange: (v) => set("sponsors", { ...data.sponsors, items: updateAt$5(data.sponsors.items, i, { ...sp, name: v }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Website URL", value: sp.url, onChange: (v) => set("sponsors", { ...data.sponsors, items: updateAt$5(data.sponsors.items, i, { ...sp, url: v }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set("sponsors", { ...data.sponsors, items: removeAt$5(data.sponsors.items, i) }), style: delBtn$2, children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add sponsor", onClick: () => set("sponsors", { ...data.sponsors, items: [...data.sponsors.items, { name: "", logo: "", url: "" }] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Donation Band" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.donateBand.eyebrow, onChange: (v) => set("donateBand", { ...data.donateBand, eyebrow: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading", value: data.donateBand.heading, onChange: (v) => set("donateBand", { ...data.donateBand, heading: v }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: data.donateBand.body, rows: 2, onChange: (v) => set("donateBand", { ...data.donateBand, body: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Button text", value: data.donateBand.button, onChange: (v) => set("donateBand", { ...data.donateBand, button: v }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Bottom CTA" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.cta.eyebrow, onChange: (v) => set("cta", { ...data.cta, eyebrow: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading lead", value: data.cta.headingLead, onChange: (v) => set("cta", { ...data.cta, headingLead: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading accent", value: data.cta.headingAccent, onChange: (v) => set("cta", { ...data.cta, headingAccent: v }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Button text", value: data.cta.button, onChange: (v) => set("cta", { ...data.cta, button: v }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty })
  ] });
}
function updateAt$5(arr, i, val) {
  return arr.map((x, idx) => idx === i ? val : x);
}
function removeAt$5(arr, i) {
  return arr.filter((_, idx) => idx !== i);
}
function moveUp$5(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
function moveDown$5(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
function EditorLoader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#64748b", padding: 40, textAlign: "center" }, children: "Loading…" });
}
function EditorError({ msg }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 }, children: [
    "Error: ",
    msg
  ] });
}
const layout$5 = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2$5 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const grid3$2 = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 };
const delBtn$2 = {
  flexShrink: 0,
  background: "rgba(239,68,68,0.08)",
  border: "1px solid rgba(239,68,68,0.2)",
  borderRadius: 4,
  color: "#f87171",
  fontSize: 12,
  padding: "6px 10px",
  cursor: "pointer",
  marginBottom: 2
};
const blank$2 = () => ({ name: "", role: "", org: "", initials: "", image: "" });
const updateAt$4 = (arr, i, val) => arr.map((x, idx) => idx === i ? val : x);
const removeAt$4 = (arr, i) => arr.filter((_, idx) => idx !== i);
function moveUp$4(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
function moveDown$4(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
function TeamEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("team");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info$4, children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: err, children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const upd = (members) => setData(() => ({ members }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$4, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Team Members", description: "Edit the team roster shown on /team" }),
    data.members.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.members.length,
          onMoveUp: () => upd(moveUp$4(data.members, i)),
          onMoveDown: () => upd(moveDown$4(data.members, i)),
          onDelete: () => upd(removeAt$4(data.members, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$4, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Full name", value: m.name, onChange: (v) => upd(updateAt$4(data.members, i, { ...m, name: v })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Role / title", value: m.role, onChange: (v) => upd(updateAt$4(data.members, i, { ...m, role: v })) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Organisation / affiliation", value: m.org, onChange: (v) => upd(updateAt$4(data.members, i, { ...m, org: v })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$4, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StringField,
          {
            label: "Initials (1–3 chars, shown if no photo)",
            value: m.initials,
            onChange: (v) => upd(updateAt$4(data.members, i, { ...m, initials: v.slice(0, 3) })),
            placeholder: "e.g. KS"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StringField,
          {
            label: "Photo URL (leave empty to use initials)",
            value: m.image,
            onChange: (v) => upd(updateAt$4(data.members, i, { ...m, image: v })),
            placeholder: "/uploads/photo.jpg"
          }
        )
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add team member", onClick: () => upd([...data.members, blank$2()]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty })
  ] });
}
const layout$4 = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2$4 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const info$4 = { color: "#64748b", padding: 40, textAlign: "center" };
const err = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const blank$1 = () => ({ date: "", tag: "", title: "", body: "", primary: false });
const updateAt$3 = (arr, i, val) => arr.map((x, idx) => idx === i ? val : x);
const removeAt$3 = (arr, i) => arr.filter((_, idx) => idx !== i);
function moveUp$3(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
function moveDown$3(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
function NewsEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("news");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info$3, children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: errStyle$3, children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const upd = (events) => setData(() => ({ events }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$3, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Upcoming Events", description: "Shown on the /news calendar page. Add events in chronological order (nearest first)." }),
    data.events.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: ev.primary ? { borderColor: "rgba(56,189,248,0.4)", background: "rgba(56,189,248,0.04)" } : void 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ListControls,
          {
            index: i,
            total: data.events.length,
            onMoveUp: () => upd(moveUp$3(data.events, i)),
            onMoveDown: () => upd(moveDown$3(data.events, i)),
            onDelete: () => upd(removeAt$3(data.events, i))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BoolField,
          {
            label: "Highlight as primary event",
            value: ev.primary,
            onChange: (v) => upd(updateAt$3(data.events, i, { ...ev, primary: v }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StringField,
          {
            label: "Date",
            value: ev.date,
            onChange: (v) => upd(updateAt$3(data.events, i, { ...ev, date: v })),
            placeholder: "15 Mar 2026 or 08–14 Jul 2026"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StringField,
          {
            label: "Tag",
            value: ev.tag,
            onChange: (v) => upd(updateAt$3(data.events, i, { ...ev, tag: v })),
            placeholder: "Round 01 / Camp / Premier"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: ev.title, onChange: (v) => upd(updateAt$3(data.events, i, { ...ev, title: v })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: ev.body, rows: 2, onChange: (v) => upd(updateAt$3(data.events, i, { ...ev, body: v })) })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add event", onClick: () => upd([...data.events, blank$1()]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty })
  ] });
}
const layout$3 = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2$3 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const info$3 = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle$3 = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const blank = () => ({
  slug: "",
  date: "",
  location: "",
  tag: "",
  title: "",
  summary: "",
  cover: "",
  report: [],
  stats: [],
  gallery: []
});
const updateAt$2 = (arr, i, val) => arr.map((x, idx) => idx === i ? val : x);
const removeAt$2 = (arr, i) => arr.filter((_, idx) => idx !== i);
function moveUp$2(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
function moveDown$2(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
function EventsEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("events");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info$2, children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: errStyle$2, children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const upd = (events) => setData(() => ({ events }));
  const updEv = (i, ev) => upd(updateAt$2(data.events, i, ev));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Past Events Archive", description: "Events shown on the /events page as completed reports." }),
    data.events.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.events.length,
          onMoveUp: () => upd(moveUp$2(data.events, i)),
          onMoveDown: () => upd(moveDown$2(data.events, i)),
          onDelete: () => upd(removeAt$2(data.events, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid3$1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "URL slug", value: ev.slug, placeholder: "open-round-2025", onChange: (v) => updEv(i, { ...ev, slug: v.toLowerCase().replace(/\s+/g, "-") }), mono: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Date", value: ev.date, placeholder: "15 Mar 2026", onChange: (v) => updEv(i, { ...ev, date: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Location", value: ev.location, placeholder: "Nairobi, Kenya", onChange: (v) => updEv(i, { ...ev, location: v }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Tag", value: ev.tag, placeholder: "Round 01", onChange: (v) => updEv(i, { ...ev, tag: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: ev.title, onChange: (v) => updEv(i, { ...ev, title: v }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Summary", value: ev.summary, rows: 2, onChange: (v) => updEv(i, { ...ev, summary: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Cover image URL", value: ev.cover ?? "", placeholder: "/uploads/event-cover.jpg", onChange: (v) => updEv(i, { ...ev, cover: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: subSection$1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: subLabel$1, children: "Report paragraphs" }),
        (ev.report ?? []).map((p, pi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextareaField,
            {
              label: `Paragraph ${pi + 1}`,
              value: p,
              rows: 2,
              onChange: (v) => updEv(i, { ...ev, report: updateAt$2(ev.report, pi, v) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updEv(i, { ...ev, report: removeAt$2(ev.report, pi) }), style: delBtn$1, children: "✕" })
        ] }, pi)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add paragraph", onClick: () => updEv(i, { ...ev, report: [...ev.report ?? [], ""] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: subSection$1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: subLabel$1, children: "Stats" }),
        (ev.stats ?? []).map((st, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-end" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "0 0 120px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Value", value: st.value, onChange: (v) => updEv(i, { ...ev, stats: updateAt$2(ev.stats, si, { ...st, value: v }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Label", value: st.label, onChange: (v) => updEv(i, { ...ev, stats: updateAt$2(ev.stats, si, { ...st, label: v }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updEv(i, { ...ev, stats: removeAt$2(ev.stats, si) }), style: delBtn$1, children: "✕" })
        ] }, si)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add stat", onClick: () => updEv(i, { ...ev, stats: [...ev.stats ?? [], { label: "", value: "" }] }) })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add past event", onClick: () => upd([...data.events, blank()]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty })
  ] });
}
const layout$2 = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2$2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const grid3$1 = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 };
const subSection$1 = { display: "flex", flexDirection: "column", gap: 8, paddingTop: 8, borderTop: "1px solid rgba(51,65,85,0.3)" };
const subLabel$1 = { fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 };
const info$2 = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle$2 = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const delBtn$1 = {
  flexShrink: 0,
  background: "rgba(239,68,68,0.08)",
  border: "1px solid rgba(239,68,68,0.2)",
  borderRadius: 4,
  color: "#f87171",
  fontSize: 12,
  padding: "6px 10px",
  cursor: "pointer",
  marginBottom: 2
};
const updateAt$1 = (arr, i, val) => arr.map((x, idx) => idx === i ? val : x);
const removeAt$1 = (arr, i) => arr.filter((_, idx) => idx !== i);
function moveUp$1(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
function moveDown$1(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
function SupportEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("support");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info$1, children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: errStyle$1, children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const set = (key, val) => setData((d) => ({ ...d, [key]: val }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.hero.eyebrow, onChange: (v) => set("hero", { ...data.hero, eyebrow: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: data.hero.title, onChange: (v) => set("hero", { ...data.hero, title: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Lede", value: data.hero.lede, rows: 2, onChange: (v) => set("hero", { ...data.hero, lede: v }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Appeal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading", value: data.appeal.heading, onChange: (v) => set("appeal", { ...data.appeal, heading: v }) }),
      data.appeal.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextareaField,
          {
            label: `Paragraph ${i + 1}`,
            value: p,
            rows: 2,
            onChange: (v) => set("appeal", { ...data.appeal, paragraphs: updateAt$1(data.appeal.paragraphs, i, v) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => set("appeal", { ...data.appeal, paragraphs: removeAt$1(data.appeal.paragraphs, i) }), style: delBtn, children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add paragraph", onClick: () => set("appeal", { ...data.appeal, paragraphs: [...data.appeal.paragraphs, ""] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Ways to Give" }),
    data.ways.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.ways.length,
          onMoveUp: () => set("ways", moveUp$1(data.ways, i)),
          onMoveDown: () => set("ways", moveDown$1(data.ways, i)),
          onDelete: () => set("ways", removeAt$1(data.ways, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: w.title, onChange: (v) => set("ways", updateAt$1(data.ways, i, { ...w, title: v })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: w.body, rows: 2, onChange: (v) => set("ways", updateAt$1(data.ways, i, { ...w, body: v })) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Detail (e.g. paybill / account)", value: w.detail, onChange: (v) => set("ways", updateAt$1(data.ways, i, { ...w, detail: v })) })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add way to give", onClick: () => set("ways", [...data.ways, { title: "", body: "", detail: "" }]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Contacts" }),
    data.contacts.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.contacts.length,
          onMoveUp: () => set("contacts", moveUp$1(data.contacts, i)),
          onMoveDown: () => set("contacts", moveDown$1(data.contacts, i)),
          onDelete: () => set("contacts", removeAt$1(data.contacts, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Label", value: c.label, onChange: (v) => set("contacts", updateAt$1(data.contacts, i, { ...c, label: v })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Display value", value: c.value, placeholder: "you@example.com", onChange: (v) => set("contacts", updateAt$1(data.contacts, i, { ...c, value: v })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Link", value: c.href, placeholder: "mailto:you@example.com", onChange: (v) => set("contacts", updateAt$1(data.contacts, i, { ...c, href: v })) })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add contact", onClick: () => set("contacts", [...data.contacts, { label: "", value: "", href: "" }]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Partnered Institutions" }),
    data.institutions.map((inst, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.institutions.length,
          onMoveUp: () => set("institutions", moveUp$1(data.institutions, i)),
          onMoveDown: () => set("institutions", moveDown$1(data.institutions, i)),
          onDelete: () => set("institutions", removeAt$1(data.institutions, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Name", value: inst.name, onChange: (v) => set("institutions", updateAt$1(data.institutions, i, { ...inst, name: v })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Note", value: inst.note ?? "", placeholder: "Government partner", onChange: (v) => set("institutions", updateAt$1(data.institutions, i, { ...inst, note: v })) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Logo URL", value: inst.logo ?? "", placeholder: "/uploads/logo.png", onChange: (v) => set("institutions", updateAt$1(data.institutions, i, { ...inst, logo: v })) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Website URL", value: inst.url ?? "", placeholder: "https://example.com", onChange: (v) => set("institutions", updateAt$1(data.institutions, i, { ...inst, url: v })) })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add institution", onClick: () => set("institutions", [...data.institutions, { name: "", logo: "", url: "", note: "" }]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty })
  ] });
}
const layout$1 = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2$1 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const grid3 = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 };
const info$1 = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle$1 = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const delBtn = {
  flexShrink: 0,
  background: "rgba(239,68,68,0.08)",
  border: "1px solid rgba(239,68,68,0.2)",
  borderRadius: 4,
  color: "#f87171",
  fontSize: 12,
  padding: "6px 10px",
  cursor: "pointer",
  marginBottom: 2
};
const updateAt = (arr, i, val) => arr.map((x, idx) => idx === i ? val : x);
const removeAt = (arr, i) => arr.filter((_, idx) => idx !== i);
function moveUp(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
function moveDown(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
function ResourcesEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("resources");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info, children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: errStyle, children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const set = (key, val) => setData((d) => ({ ...d, [key]: val }));
  const updCat = (i, cat) => set("categories", updateAt(data.categories, i, cat));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.hero.eyebrow, onChange: (v) => set("hero", { ...data.hero, eyebrow: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: data.hero.title, onChange: (v) => set("hero", { ...data.hero, title: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Lede", value: data.hero.lede, rows: 2, onChange: (v) => set("hero", { ...data.hero, lede: v }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Categories & Links", description: "Each category groups related learning resources." }),
    data.categories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.categories.length,
          onMoveUp: () => set("categories", moveUp(data.categories, i)),
          onMoveDown: () => set("categories", moveDown(data.categories, i)),
          onDelete: () => set("categories", removeAt(data.categories, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Category name", value: cat.name, onChange: (v) => updCat(i, { ...cat, name: v }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextareaField,
          {
            label: "Description",
            value: cat.description ?? "",
            rows: 1,
            onChange: (v) => updCat(i, { ...cat, description: v })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: subSection, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: subLabel, children: "Links in this category" }),
        cat.links.map((lk, li) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: { background: "#0f172a", padding: "12px 16px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "space-between" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListControls,
            {
              index: li,
              total: cat.links.length,
              onMoveUp: () => updCat(i, { ...cat, links: moveUp(cat.links, li) }),
              onMoveDown: () => updCat(i, { ...cat, links: moveDown(cat.links, li) }),
              onDelete: () => updCat(i, { ...cat, links: removeAt(cat.links, li) })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: lk.title, onChange: (v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, title: v }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StringField,
            {
              label: "URL",
              value: lk.url,
              placeholder: "https://codeforces.com or /training",
              onChange: (v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, url: v }) }),
              mono: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextareaField,
            {
              label: "Description",
              value: lk.description ?? "",
              rows: 2,
              onChange: (v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, description: v }) })
            }
          )
        ] }, li)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add link", onClick: () => updCat(i, { ...cat, links: [...cat.links, { title: "", url: "", description: "" }] }) })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add category", onClick: () => set("categories", [...data.categories, { name: "", description: "", links: [] }]) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty })
  ] });
}
const layout = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const subSection = { display: "flex", flexDirection: "column", gap: 8, paddingTop: 12, borderTop: "1px solid rgba(51,65,85,0.3)" };
const subLabel = { fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em" };
const info = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const NAV = [
  { id: "site", label: "Home Page", icon: "🏠", description: "Hero, stats, partners, CTAs" },
  { id: "team", label: "Team", icon: "👥", description: "Team member roster" },
  { id: "news", label: "Upcoming Events", icon: "📅", description: "Calendar & announcements" },
  { id: "events", label: "Past Events", icon: "🏆", description: "Event archive & reports" },
  { id: "support", label: "Support Page", icon: "💚", description: "Donations & partnerships" },
  { id: "resources", label: "Resources", icon: "📚", description: "Links & learning materials" }
];
function CMSShell({ user }) {
  const [activeTab, setActiveTab] = reactExports.useState("site");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(true);
  const active = NAV.find((n) => n.id === activeTab);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.root, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { style: { ...s.sidebar, width: sidebarOpen ? 260 : 64 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.sidebarHeader, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.logoMark, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 32 32", fill: "none", "aria-hidden": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 8 L16 4 L24 8 L24 24 L16 28 L8 24 Z", stroke: "#38bdf8", strokeWidth: "1.5", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "3", fill: "#38bdf8" })
        ] }) }),
        sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.logoText, children: "KIO Admin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.logoSub, children: "Content Manager" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSidebarOpen(!sidebarOpen), style: s.collapseBtn, title: "Toggle sidebar", children: sidebarOpen ? "‹" : "›" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { style: s.nav, children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab(item.id),
          className: `nav-item${activeTab === item.id ? " active" : ""}`,
          style: {
            ...s.navItem,
            ...activeTab === item.id ? s.navItemActive : {},
            justifyContent: sidebarOpen ? "flex-start" : "center"
          },
          title: !sidebarOpen ? item.label : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.navIcon, children: item.icon }),
            sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.navTextWrap, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.navLabel, children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.navDesc, children: item.description })
            ] })
          ]
        },
        item.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.sidebarFooter, children: sidebarOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.userRow, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar_url, alt: user.login, style: s.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.userInfo, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.userName, children: user.name || user.login }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.userLogin, children: [
            "@",
            user.login
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/api/admin/auth/logout", style: s.logoutBtn, title: "Sign out", children: "⏻" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/api/admin/auth/logout", style: { ...s.logoutBtn, margin: "0 auto" }, title: "Sign out", children: "⏻" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: s.main, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { style: s.topBar, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.topBarEyebrow, children: "Editing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: s.topBarTitle, children: [
            active.icon,
            " ",
            active.label
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.topBarRight, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://github.com/GabuGravin41/kenya-informatics-olympiad",
              target: "_blank",
              rel: "noreferrer",
              style: s.repoLink,
              children: "View on GitHub →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", target: "_blank", rel: "noreferrer", style: s.repoLink, children: "View site →" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-panel", style: s.editorWrap, children: [
        activeTab === "site" && /* @__PURE__ */ jsxRuntimeExports.jsx(SiteEditor, {}),
        activeTab === "team" && /* @__PURE__ */ jsxRuntimeExports.jsx(TeamEditor, {}),
        activeTab === "news" && /* @__PURE__ */ jsxRuntimeExports.jsx(NewsEditor, {}),
        activeTab === "events" && /* @__PURE__ */ jsxRuntimeExports.jsx(EventsEditor, {}),
        activeTab === "support" && /* @__PURE__ */ jsxRuntimeExports.jsx(SupportEditor, {}),
        activeTab === "resources" && /* @__PURE__ */ jsxRuntimeExports.jsx(ResourcesEditor, {})
      ] }, activeTab)
    ] })
  ] });
}
const s = {
  root: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    color: "#e2e8f0"
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
    height: "100vh"
  },
  sidebarHeader: {
    padding: "20px 16px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    borderBottom: "1px solid rgba(51,65,85,0.4)",
    minHeight: 72
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
    flexShrink: 0
  },
  logoText: {
    fontSize: 13,
    fontWeight: 700,
    color: "#f1f5f9",
    lineHeight: 1.2
  },
  logoSub: {
    fontSize: 10,
    color: "#475569",
    letterSpacing: "0.05em"
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
    flexShrink: 0
  },
  nav: {
    flex: 1,
    padding: "12px 8px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    overflowY: "auto"
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
    transition: "background 0.15s"
  },
  navItemActive: {
    background: "rgba(56,189,248,0.1)",
    borderColor: "rgba(56,189,248,0.3)"
  },
  navIcon: { fontSize: 16, flexShrink: 0 },
  navTextWrap: { display: "flex", flexDirection: "column", gap: 1 },
  navLabel: { fontSize: 13, fontWeight: 600, color: "#e2e8f0" },
  navDesc: { fontSize: 10, color: "#475569" },
  sidebarFooter: {
    padding: "12px 8px",
    borderTop: "1px solid rgba(51,65,85,0.4)"
  },
  userRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 8px"
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "1px solid rgba(51,65,85,0.6)",
    flexShrink: 0
  },
  userInfo: { flex: 1, overflow: "hidden" },
  userName: { fontSize: 12, fontWeight: 600, color: "#e2e8f0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
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
    cursor: "pointer"
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    overflowX: "hidden"
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
    zIndex: 10
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
    transition: "color 0.15s"
  },
  editorWrap: {
    flex: 1,
    padding: "32px",
    overflowY: "auto",
    maxHeight: "calc(100vh - 80px)"
  }
};
function AdminApp({ loggedIn }) {
  const [user, setUser] = reactExports.useState(null);
  const [userLoading, setUserLoading] = reactExports.useState(loggedIn);
  const loadUser = reactExports.useCallback(async () => {
    try {
      const me = await fetchMe();
      setUser(me);
    } catch {
      window.location.href = "/api/admin/auth/logout";
    } finally {
      setUserLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    if (loggedIn) loadUser();
  }, [loggedIn, loadUser]);
  if (!loggedIn) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginScreen, {});
  if (userLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLoader, {});
  if (!user) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginScreen, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CMSShell, { user });
}
function AdminLoader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: styles.loaderWrap, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: styles.spinner }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: styles.loaderText, children: "Loading CMS…" })
  ] });
}
const styles = {
  loaderWrap: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16
  },
  spinner: {
    width: 40,
    height: 40,
    border: "3px solid #1e293b",
    borderTopColor: "#38bdf8",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite"
  },
  loaderText: {
    color: "#64748b",
    fontSize: 14,
    fontFamily: "system-ui, sans-serif"
  }
};
function AdminRoute() {
  const {
    loggedIn
  } = Route$7.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminApp, { loggedIn });
}
export {
  AdminRoute as component
};
