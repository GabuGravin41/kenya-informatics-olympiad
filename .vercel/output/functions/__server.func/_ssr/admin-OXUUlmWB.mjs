var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Route$7 } from "./router-BfZjUBB1.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
async function fetchContent(file) {
  const res = await fetch(`/api/admin/content/${file}`);
  if (!res.ok) {
    const err2 = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err2.error || `HTTP ${res.status}`);
  }
  return res.json();
}
__name(fetchContent, "fetchContent");
__name2(fetchContent, "fetchContent");
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
__name(saveContent, "saveContent");
__name2(saveContent, "saveContent");
async function fetchMe() {
  const res = await fetch("/api/admin/me");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
__name(fetchMe, "fetchMe");
__name2(fetchMe, "fetchMe");
function LoginScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$2.page, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:3:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { "data-tsd-source": "/src/components/admin/LoginScreen.tsx:4:7", children: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:.4; } 50% { opacity:1; } }
        .login-card { animation: fadeUp 0.4s ease both; }
        .gh-btn:hover { background: #38bdf8 !important; color: #0f172a !important; transform: translateY(-1px); }
        .gh-btn:active { transform: translateY(0); }
        .gh-btn { transition: background 0.2s, color 0.2s, transform 0.15s; }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.blob1, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:15:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.blob2, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:16:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-card", style: s$2.card, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:18:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.logoRing, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:20:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", "aria-hidden": true, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:21:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 8 L16 4 L24 8 L24 24 L16 28 L8 24 Z", stroke: "#38bdf8", strokeWidth: "1.5", fill: "none", "data-tsd-source": "/src/components/admin/LoginScreen.tsx:22:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "3", fill: "#38bdf8", "data-tsd-source": "/src/components/admin/LoginScreen.tsx:23:13" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.eyebrow, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:27:9", children: "KIO Content Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: s$2.heading, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:28:9", children: "Admin Portal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: s$2.sub, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:29:9", children: [
        "Sign in with your GitHub account to edit site content. You must have write access to the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/GabuGravin41/kenya-informatics-olympiad", target: "_blank", rel: "noreferrer", style: s$2.link, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:32:11", children: "KIO repository" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/api/admin/auth/login", className: "gh-btn", style: s$2.btn, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:37:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GithubIcon, { "data-tsd-source": "/src/components/admin/LoginScreen.tsx:38:11" }),
        "Sign in with GitHub"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$2.divider, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:42:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s$2.footNote, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:43:9", children: "Authenticated via GitHub OAuth · Session stored in a secure HTTP-only cookie" })
    ] })
  ] });
}
__name(LoginScreen, "LoginScreen");
__name2(LoginScreen, "LoginScreen");
function GithubIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, style: { flexShrink: 0 }, "data-tsd-source": "/src/components/admin/LoginScreen.tsx:53:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", "data-tsd-source": "/src/components/admin/LoginScreen.tsx:54:7" }) });
}
__name(GithubIcon, "GithubIcon");
__name2(GithubIcon, "GithubIcon");
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
__name(useEditor, "useEditor");
__name2(useEditor, "useEditor");
function Field({ label, hint, required, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$1.field, "data-tsd-source": "/src/components/admin/FormFields.tsx:18:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: s$1.label, "data-tsd-source": "/src/components/admin/FormFields.tsx:19:7", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.required, "data-tsd-source": "/src/components/admin/FormFields.tsx:21:22", children: " *" }),
      hint && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: s$1.hint, "data-tsd-source": "/src/components/admin/FormFields.tsx:22:18", children: [
        " — ",
        hint
      ] })
    ] }),
    children
  ] });
}
__name(Field, "Field");
__name2(Field, "Field");
function StringField({ label, value, onChange, hint, required, placeholder, mono }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label, hint, required, "data-tsd-source": "/src/components/admin/FormFields.tsx:43:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "text",
      value: value ?? "",
      onChange: /* @__PURE__ */ __name2((e) => onChange(e.target.value), "onChange"),
      placeholder,
      style: { ...s$1.input, fontFamily: mono ? "JetBrains Mono, monospace" : void 0 },
      "data-tsd-source": "/src/components/admin/FormFields.tsx:44:7"
    }
  ) });
}
__name(StringField, "StringField");
__name2(StringField, "StringField");
function TextareaField({ label, value, onChange, hint, required, rows = 4, placeholder }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label, hint, required, "data-tsd-source": "/src/components/admin/FormFields.tsx:69:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      value: value ?? "",
      onChange: /* @__PURE__ */ __name2((e) => onChange(e.target.value), "onChange"),
      rows,
      placeholder,
      style: s$1.textarea,
      "data-tsd-source": "/src/components/admin/FormFields.tsx:70:7"
    }
  ) });
}
__name(TextareaField, "TextareaField");
__name2(TextareaField, "TextareaField");
function BoolField({ label, value, onChange, hint }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label, hint, "data-tsd-source": "/src/components/admin/FormFields.tsx:92:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: /* @__PURE__ */ __name2(() => onChange(!value), "onClick"),
      style: { ...s$1.toggle, ...value ? s$1.toggleOn : {} },
      "aria-pressed": value,
      "data-tsd-source": "/src/components/admin/FormFields.tsx:93:7",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { ...s$1.toggleThumb, ...value ? s$1.toggleThumbOn : {} }, "data-tsd-source": "/src/components/admin/FormFields.tsx:99:9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.toggleLabel, "data-tsd-source": "/src/components/admin/FormFields.tsx:100:9", children: value ? "Yes" : "No" })
      ]
    }
  ) });
}
__name(BoolField, "BoolField");
__name2(BoolField, "BoolField");
function SectionHeader({ title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$1.sectionHeader, "data-tsd-source": "/src/components/admin/FormFields.tsx:110:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: s$1.sectionTitle, "data-tsd-source": "/src/components/admin/FormFields.tsx:111:7", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: s$1.sectionDesc, "data-tsd-source": "/src/components/admin/FormFields.tsx:112:23", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s$1.sectionDivider, "data-tsd-source": "/src/components/admin/FormFields.tsx:113:7" })
  ] });
}
__name(SectionHeader, "SectionHeader");
__name2(SectionHeader, "SectionHeader");
function Card({ children, style }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...s$1.card, ...style }, "data-tsd-source": "/src/components/admin/FormFields.tsx:121:10", children });
}
__name(Card, "Card");
__name2(Card, "Card");
function ListControls({
  index,
  total,
  onMoveUp,
  onMoveDown,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$1.listControls, "data-tsd-source": "/src/components/admin/FormFields.tsx:140:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onMoveUp, disabled: index === 0, style: s$1.ctrlBtn, title: "Move up", "data-tsd-source": "/src/components/admin/FormFields.tsx:141:7", children: "↑" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onMoveDown, disabled: index === total - 1, style: s$1.ctrlBtn, title: "Move down", "data-tsd-source": "/src/components/admin/FormFields.tsx:142:7", children: "↓" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onDelete, style: { ...s$1.ctrlBtn, ...s$1.deleteBtn }, title: "Delete", "data-tsd-source": "/src/components/admin/FormFields.tsx:143:7", children: "✕" })
  ] });
}
__name(ListControls, "ListControls");
__name2(ListControls, "ListControls");
function AddButton({ onClick, label = "Add item" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, style: s$1.addBtn, "data-tsd-source": "/src/components/admin/FormFields.tsx:152:5", children: [
    "+ ",
    label
  ] });
}
__name(AddButton, "AddButton");
__name2(AddButton, "AddButton");
function SaveBar({
  status,
  error,
  onSave,
  dirty
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s$1.saveBar, "data-tsd-source": "/src/components/admin/FormFields.tsx:174:5", children: [
    status === "saving" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.savingText, "data-tsd-source": "/src/components/admin/FormFields.tsx:175:31", children: "Saving to GitHub…" }),
    status === "saved" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.savedText, "data-tsd-source": "/src/components/admin/FormFields.tsx:176:30", children: "✓ Saved to GitHub" }),
    status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: s$1.errorText, "data-tsd-source": "/src/components/admin/FormFields.tsx:177:30", children: [
      "✕ ",
      error
    ] }),
    status === "idle" && dirty && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.dirtyText, "data-tsd-source": "/src/components/admin/FormFields.tsx:178:38", children: "Unsaved changes" }),
    status === "idle" && !dirty && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s$1.okText, "data-tsd-source": "/src/components/admin/FormFields.tsx:179:39", children: "No unsaved changes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onSave,
        disabled: status === "saving" || !dirty,
        style: { ...s$1.saveBtn, opacity: status === "saving" || !dirty ? 0.5 : 1 },
        "data-tsd-source": "/src/components/admin/FormFields.tsx:180:7",
        children: status === "saving" ? "Saving…" : "Save & Publish"
      }
    )
  ] });
}
__name(SaveBar, "SaveBar");
__name2(SaveBar, "SaveBar");
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
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(EditorLoader, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:32:23" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsx(EditorError, { msg: loadError, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:33:25" });
  if (!data) return null;
  const set = /* @__PURE__ */ __name2((key, val) => setData((d) => ({ ...d, [key]: val })), "set");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:40:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Hero Section", description: "Top of the home page", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:42:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:43:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.hero.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:44:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid3$2, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:45:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title line 1", value: data.hero.titleLine1, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, titleLine1: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:46:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title line 2", value: data.hero.titleLine2, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, titleLine2: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:47:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title line 3 (accent)", value: data.hero.titleLine3, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, titleLine3: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:48:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Lede paragraph", value: data.hero.lede, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, lede: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:50:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:51:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Primary CTA", value: data.hero.primaryCta, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, primaryCta: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:52:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Secondary CTA", value: data.hero.secondaryCta, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, secondaryCta: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:53:11" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "PAIO Announcement Card", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:58:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:59:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.paioCard.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("paioCard", { ...data.paioCard, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:60:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: data.paioCard.title, onChange: /* @__PURE__ */ __name2((v) => set("paioCard", { ...data.paioCard, title: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:61:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: data.paioCard.body, onChange: /* @__PURE__ */ __name2((v) => set("paioCard", { ...data.paioCard, body: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:62:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "CTA text", value: data.paioCard.cta, onChange: /* @__PURE__ */ __name2((v) => set("paioCard", { ...data.paioCard, cta: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:63:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Announcements", description: "Shown on the home page", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:67:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:68:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:69:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.announcements.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("announcements", { ...data.announcements, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:70:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading", value: data.announcements.heading, onChange: /* @__PURE__ */ __name2((v) => set("announcements", { ...data.announcements, heading: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:71:11" })
    ] }) }),
    data.announcements.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:75:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.announcements.items.length,
          onMoveUp: /* @__PURE__ */ __name2(() => set("announcements", { ...data.announcements, items: moveUp$5(data.announcements.items, i) }), "onMoveUp"),
          onMoveDown: /* @__PURE__ */ __name2(() => set("announcements", { ...data.announcements, items: moveDown$5(data.announcements.items, i) }), "onMoveDown"),
          onDelete: /* @__PURE__ */ __name2(() => set("announcements", { ...data.announcements, items: removeAt$5(data.announcements.items, i) }), "onDelete"),
          "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:76:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:82:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Date", value: item.date, onChange: /* @__PURE__ */ __name2((v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, date: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:83:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Tag", value: item.tag, onChange: /* @__PURE__ */ __name2((v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, tag: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:84:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: item.title, onChange: /* @__PURE__ */ __name2((v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, title: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:86:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: item.body, rows: 2, onChange: /* @__PURE__ */ __name2((v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, body: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:87:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:88:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Link", value: item.link, placeholder: "/register or https://...", onChange: /* @__PURE__ */ __name2((v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, link: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:89:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Link label", value: item.linkLabel, onChange: /* @__PURE__ */ __name2((v) => set("announcements", { ...data.announcements, items: updateAt$5(data.announcements.items, i, { ...item, linkLabel: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:90:13" })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add announcement", onClick: /* @__PURE__ */ __name2(() => set("announcements", { ...data.announcements, items: [...data.announcements.items, { date: "", tag: "", title: "", body: "", link: "", linkLabel: "" }] }), "onClick"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:94:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Mission Section", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:97:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:98:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.mission.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("mission", { ...data.mission, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:99:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Heading", value: data.mission.heading, onChange: /* @__PURE__ */ __name2((v) => set("mission", { ...data.mission, heading: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:100:9" }),
      data.mission.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-start" }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:102:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextareaField,
          {
            label: `Paragraph ${i + 1}`,
            value: p,
            rows: 3,
            onChange: /* @__PURE__ */ __name2((v) => set("mission", { ...data.mission, paragraphs: updateAt$5(data.mission.paragraphs, i, v) }), "onChange"),
            "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:103:13"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => set("mission", { ...data.mission, paragraphs: removeAt$5(data.mission.paragraphs, i) }), "onClick"), style: delBtn$2, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:105:13", children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add paragraph", onClick: /* @__PURE__ */ __name2(() => set("mission", { ...data.mission, paragraphs: [...data.mission.paragraphs, ""] }), "onClick"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:108:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Pillars (3 cards)", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:112:7" }),
    data.pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:114:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.pillars.length,
          onMoveUp: /* @__PURE__ */ __name2(() => set("pillars", moveUp$5(data.pillars, i)), "onMoveUp"),
          onMoveDown: /* @__PURE__ */ __name2(() => set("pillars", moveDown$5(data.pillars, i)), "onMoveDown"),
          onDelete: /* @__PURE__ */ __name2(() => set("pillars", removeAt$5(data.pillars, i)), "onDelete"),
          "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:115:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:120:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Number", value: p.n, onChange: /* @__PURE__ */ __name2((v) => set("pillars", updateAt$5(data.pillars, i, { ...p, n: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:121:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: p.title, onChange: /* @__PURE__ */ __name2((v) => set("pillars", updateAt$5(data.pillars, i, { ...p, title: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:122:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: p.body, rows: 2, onChange: /* @__PURE__ */ __name2((v) => set("pillars", updateAt$5(data.pillars, i, { ...p, body: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:124:11" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add pillar", onClick: /* @__PURE__ */ __name2(() => set("pillars", [...data.pillars, { n: "", title: "", body: "" }]), "onClick"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:127:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "At-a-glance Stats", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:130:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:131:7", children: [
      data.stats.map((st, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-end" }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:133:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "0 0 120px" }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:134:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Value", value: st.k, onChange: /* @__PURE__ */ __name2((v) => set("stats", updateAt$5(data.stats, i, { ...st, k: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:135:15" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:137:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Label", value: st.v, onChange: /* @__PURE__ */ __name2((v) => set("stats", updateAt$5(data.stats, i, { ...st, v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:138:15" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => set("stats", removeAt$5(data.stats, i)), "onClick"), style: delBtn$2, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:140:13", children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add stat", onClick: /* @__PURE__ */ __name2(() => set("stats", [...data.stats, { k: "", v: "" }]), "onClick"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:143:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Partners", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:147:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:148:7", children: [
      data.partners.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-end" }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:150:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:151:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: `Partner ${i + 1} name`, value: p.name, onChange: /* @__PURE__ */ __name2((v) => set("partners", updateAt$5(data.partners, i, { ...p, name: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:152:15" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { paddingBottom: 2 }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:154:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BoolField, { label: "Accent", value: p.accent, onChange: /* @__PURE__ */ __name2((v) => set("partners", updateAt$5(data.partners, i, { ...p, accent: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:155:15" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => set("partners", removeAt$5(data.partners, i)), "onClick"), style: delBtn$2, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:157:13", children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add partner", onClick: /* @__PURE__ */ __name2(() => set("partners", [...data.partners, { name: "", accent: false }]), "onClick"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:160:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Sponsors / Logo Marquee", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:164:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:165:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:166:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.sponsors.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("sponsors", { ...data.sponsors, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:167:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading", value: data.sponsors.heading, onChange: /* @__PURE__ */ __name2((v) => set("sponsors", { ...data.sponsors, heading: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:168:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Lede", value: data.sponsors.lede, rows: 2, onChange: /* @__PURE__ */ __name2((v) => set("sponsors", { ...data.sponsors, lede: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:170:9" }),
      data.sponsors.items.map((sp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-end" }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:172:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:173:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Name", value: sp.name, onChange: /* @__PURE__ */ __name2((v) => set("sponsors", { ...data.sponsors, items: updateAt$5(data.sponsors.items, i, { ...sp, name: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:174:15" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:176:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Website URL", value: sp.url, onChange: /* @__PURE__ */ __name2((v) => set("sponsors", { ...data.sponsors, items: updateAt$5(data.sponsors.items, i, { ...sp, url: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:177:15" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => set("sponsors", { ...data.sponsors, items: removeAt$5(data.sponsors.items, i) }), "onClick"), style: delBtn$2, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:179:13", children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add sponsor", onClick: /* @__PURE__ */ __name2(() => set("sponsors", { ...data.sponsors, items: [...data.sponsors.items, { name: "", logo: "", url: "" }] }), "onClick"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:182:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Donation Band", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:186:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:187:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:188:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.donateBand.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("donateBand", { ...data.donateBand, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:189:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading", value: data.donateBand.heading, onChange: /* @__PURE__ */ __name2((v) => set("donateBand", { ...data.donateBand, heading: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:190:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: data.donateBand.body, rows: 2, onChange: /* @__PURE__ */ __name2((v) => set("donateBand", { ...data.donateBand, body: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:192:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Button text", value: data.donateBand.button, onChange: /* @__PURE__ */ __name2((v) => set("donateBand", { ...data.donateBand, button: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:193:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Bottom CTA", "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:197:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:198:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.cta.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("cta", { ...data.cta, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:199:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$5, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:200:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading lead", value: data.cta.headingLead, onChange: /* @__PURE__ */ __name2((v) => set("cta", { ...data.cta, headingLead: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:201:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading accent", value: data.cta.headingAccent, onChange: /* @__PURE__ */ __name2((v) => set("cta", { ...data.cta, headingAccent: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:202:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Button text", value: data.cta.button, onChange: /* @__PURE__ */ __name2((v) => set("cta", { ...data.cta, button: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:204:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:207:7" })
  ] });
}
__name(SiteEditor, "SiteEditor");
__name2(SiteEditor, "SiteEditor");
function updateAt$5(arr, i, val) {
  return arr.map((x, idx) => idx === i ? val : x);
}
__name(updateAt$5, "updateAt$5");
__name2(updateAt$5, "updateAt$5");
function removeAt$5(arr, i) {
  return arr.filter((_, idx) => idx !== i);
}
__name(removeAt$5, "removeAt$5");
__name2(removeAt$5, "removeAt$5");
function moveUp$5(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
__name(moveUp$5, "moveUp$5");
__name2(moveUp$5, "moveUp$5");
function moveDown$5(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
__name(moveDown$5, "moveDown$5");
__name2(moveDown$5, "moveDown$5");
function EditorLoader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#64748b", padding: 40, textAlign: "center" }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:233:10", children: "Loading…" });
}
__name(EditorLoader, "EditorLoader");
__name2(EditorLoader, "EditorLoader");
function EditorError({ msg }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 }, "data-tsd-source": "/src/components/admin/editors/SiteEditor.tsx:236:10", children: [
    "Error: ",
    msg
  ] });
}
__name(EditorError, "EditorError");
__name2(EditorError, "EditorError");
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
const blank$2 = /* @__PURE__ */ __name2(() => ({ name: "", role: "", org: "", initials: "", image: "" }), "blank$2");
const updateAt$4 = /* @__PURE__ */ __name2((arr, i, val) => arr.map((x, idx) => idx === i ? val : x), "updateAt$4");
const removeAt$4 = /* @__PURE__ */ __name2((arr, i) => arr.filter((_, idx) => idx !== i), "removeAt$4");
function moveUp$4(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
__name(moveUp$4, "moveUp$4");
__name2(moveUp$4, "moveUp$4");
function moveDown$4(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
__name(moveDown$4, "moveDown$4");
__name2(moveDown$4, "moveDown$4");
function TeamEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("team");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info$4, "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:18:23", children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: err, "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:19:25", children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const upd = /* @__PURE__ */ __name2((members) => setData(() => ({ members })), "upd");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$4, "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:25:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Team Members", description: "Edit the team roster shown on /team", "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:26:7" }),
    data.members.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:29:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.members.length,
          onMoveUp: /* @__PURE__ */ __name2(() => upd(moveUp$4(data.members, i)), "onMoveUp"),
          onMoveDown: /* @__PURE__ */ __name2(() => upd(moveDown$4(data.members, i)), "onMoveDown"),
          onDelete: /* @__PURE__ */ __name2(() => upd(removeAt$4(data.members, i)), "onDelete"),
          "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:30:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$4, "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:36:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Full name", value: m.name, onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$4(data.members, i, { ...m, name: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:37:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Role / title", value: m.role, onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$4(data.members, i, { ...m, role: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:38:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Organisation / affiliation", value: m.org, onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$4(data.members, i, { ...m, org: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:40:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$4, "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:41:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StringField,
          {
            label: "Initials (1–3 chars, shown if no photo)",
            value: m.initials,
            onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$4(data.members, i, { ...m, initials: v.slice(0, 3) })), "onChange"),
            placeholder: "e.g. KS",
            "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:42:13"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StringField,
          {
            label: "Photo URL (leave empty to use initials)",
            value: m.image,
            onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$4(data.members, i, { ...m, image: v })), "onChange"),
            placeholder: "/uploads/photo.jpg",
            "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:48:13"
          }
        )
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add team member", onClick: /* @__PURE__ */ __name2(() => upd([...data.members, blank$2()]), "onClick"), "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:58:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty, "data-tsd-source": "/src/components/admin/editors/TeamEditor.tsx:60:7" })
  ] });
}
__name(TeamEditor, "TeamEditor");
__name2(TeamEditor, "TeamEditor");
const layout$4 = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2$4 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const info$4 = { color: "#64748b", padding: 40, textAlign: "center" };
const err = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const blank$1 = /* @__PURE__ */ __name2(() => ({ date: "", tag: "", title: "", body: "", primary: false }), "blank$1");
const updateAt$3 = /* @__PURE__ */ __name2((arr, i, val) => arr.map((x, idx) => idx === i ? val : x), "updateAt$3");
const removeAt$3 = /* @__PURE__ */ __name2((arr, i) => arr.filter((_, idx) => idx !== i), "removeAt$3");
function moveUp$3(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
__name(moveUp$3, "moveUp$3");
__name2(moveUp$3, "moveUp$3");
function moveDown$3(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
__name(moveDown$3, "moveDown$3");
__name2(moveDown$3, "moveDown$3");
function NewsEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("news");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info$3, "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:18:23", children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: errStyle$3, "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:19:25", children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const upd = /* @__PURE__ */ __name2((events) => setData(() => ({ events })), "upd");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$3, "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:25:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Upcoming Events", description: "Shown on the /news calendar page. Add events in chronological order (nearest first).", "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:26:7" }),
    data.events.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: ev.primary ? { borderColor: "rgba(56,189,248,0.4)", background: "rgba(56,189,248,0.04)" } : void 0, "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:29:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:30:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ListControls,
          {
            index: i,
            total: data.events.length,
            onMoveUp: /* @__PURE__ */ __name2(() => upd(moveUp$3(data.events, i)), "onMoveUp"),
            onMoveDown: /* @__PURE__ */ __name2(() => upd(moveDown$3(data.events, i)), "onMoveDown"),
            onDelete: /* @__PURE__ */ __name2(() => upd(removeAt$3(data.events, i)), "onDelete"),
            "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:31:13"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BoolField,
          {
            label: "Highlight as primary event",
            value: ev.primary,
            onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$3(data.events, i, { ...ev, primary: v })), "onChange"),
            "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:37:13"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$3, "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:43:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StringField,
          {
            label: "Date",
            value: ev.date,
            onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$3(data.events, i, { ...ev, date: v })), "onChange"),
            placeholder: "15 Mar 2026 or 08–14 Jul 2026",
            "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:44:13"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StringField,
          {
            label: "Tag",
            value: ev.tag,
            onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$3(data.events, i, { ...ev, tag: v })), "onChange"),
            placeholder: "Round 01 / Camp / Premier",
            "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:50:13"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: ev.title, onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$3(data.events, i, { ...ev, title: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:57:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: ev.body, rows: 2, onChange: /* @__PURE__ */ __name2((v) => upd(updateAt$3(data.events, i, { ...ev, body: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:58:11" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add event", onClick: /* @__PURE__ */ __name2(() => upd([...data.events, blank$1()]), "onClick"), "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:62:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty, "data-tsd-source": "/src/components/admin/editors/NewsEditor.tsx:64:7" })
  ] });
}
__name(NewsEditor, "NewsEditor");
__name2(NewsEditor, "NewsEditor");
const layout$3 = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2$3 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const info$3 = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle$3 = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const blank = /* @__PURE__ */ __name2(() => ({
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
}), "blank");
const updateAt$2 = /* @__PURE__ */ __name2((arr, i, val) => arr.map((x, idx) => idx === i ? val : x), "updateAt$2");
const removeAt$2 = /* @__PURE__ */ __name2((arr, i) => arr.filter((_, idx) => idx !== i), "removeAt$2");
function moveUp$2(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
__name(moveUp$2, "moveUp$2");
__name2(moveUp$2, "moveUp$2");
function moveDown$2(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
__name(moveDown$2, "moveDown$2");
__name2(moveDown$2, "moveDown$2");
function EventsEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("events");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info$2, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:27:23", children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: errStyle$2, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:28:25", children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const upd = /* @__PURE__ */ __name2((events) => setData(() => ({ events })), "upd");
  const updEv = /* @__PURE__ */ __name2((i, ev) => upd(updateAt$2(data.events, i, ev)), "updEv");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$2, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:35:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Past Events Archive", description: "Events shown on the /events page as completed reports.", "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:36:7" }),
    data.events.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:39:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.events.length,
          onMoveUp: /* @__PURE__ */ __name2(() => upd(moveUp$2(data.events, i)), "onMoveUp"),
          onMoveDown: /* @__PURE__ */ __name2(() => upd(moveDown$2(data.events, i)), "onMoveDown"),
          onDelete: /* @__PURE__ */ __name2(() => upd(removeAt$2(data.events, i)), "onDelete"),
          "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:40:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid3$1, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:47:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "URL slug", value: ev.slug, placeholder: "open-round-2025", onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, slug: v.toLowerCase().replace(/\s+/g, "-") }), "onChange"), mono: true, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:48:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Date", value: ev.date, placeholder: "15 Mar 2026", onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, date: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:49:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Location", value: ev.location, placeholder: "Nairobi, Kenya", onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, location: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:50:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$2, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:52:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Tag", value: ev.tag, placeholder: "Round 01", onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, tag: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:53:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: ev.title, onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, title: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:54:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Summary", value: ev.summary, rows: 2, onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, summary: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:56:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Cover image URL", value: ev.cover ?? "", placeholder: "/uploads/event-cover.jpg", onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, cover: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:57:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: subSection$1, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:60:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: subLabel$1, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:61:13", children: "Report paragraphs" }),
        (ev.report ?? []).map((p, pi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:63:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextareaField,
            {
              label: `Paragraph ${pi + 1}`,
              value: p,
              rows: 2,
              onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, report: updateAt$2(ev.report, pi, v) }), "onChange"),
              "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:64:17"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => updEv(i, { ...ev, report: removeAt$2(ev.report, pi) }), "onClick"), style: delBtn$1, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:66:17", children: "✕" })
        ] }, pi)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add paragraph", onClick: /* @__PURE__ */ __name2(() => updEv(i, { ...ev, report: [...ev.report ?? [], ""] }), "onClick"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:69:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: subSection$1, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:73:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: subLabel$1, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:74:13", children: "Stats" }),
        (ev.stats ?? []).map((st, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "flex-end" }, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:76:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "0 0 120px" }, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:77:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Value", value: st.value, onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, stats: updateAt$2(ev.stats, si, { ...st, value: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:78:19" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1 }, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:80:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Label", value: st.label, onChange: /* @__PURE__ */ __name2((v) => updEv(i, { ...ev, stats: updateAt$2(ev.stats, si, { ...st, label: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:81:19" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => updEv(i, { ...ev, stats: removeAt$2(ev.stats, si) }), "onClick"), style: delBtn$1, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:83:17", children: "✕" })
        ] }, si)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add stat", onClick: /* @__PURE__ */ __name2(() => updEv(i, { ...ev, stats: [...ev.stats ?? [], { label: "", value: "" }] }), "onClick"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:86:13" })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add past event", onClick: /* @__PURE__ */ __name2(() => upd([...data.events, blank()]), "onClick"), "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:91:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty, "data-tsd-source": "/src/components/admin/editors/EventsEditor.tsx:92:7" })
  ] });
}
__name(EventsEditor, "EventsEditor");
__name2(EventsEditor, "EventsEditor");
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
const updateAt$1 = /* @__PURE__ */ __name2((arr, i, val) => arr.map((x, idx) => idx === i ? val : x), "updateAt$1");
const removeAt$1 = /* @__PURE__ */ __name2((arr, i) => arr.filter((_, idx) => idx !== i), "removeAt$1");
function moveUp$1(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
__name(moveUp$1, "moveUp$1");
__name2(moveUp$1, "moveUp$1");
function moveDown$1(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
__name(moveDown$1, "moveDown$1");
__name2(moveDown$1, "moveDown$1");
function SupportEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("support");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info$1, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:23:23", children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: errStyle$1, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:24:25", children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const set = /* @__PURE__ */ __name2((key, val) => setData((d) => ({ ...d, [key]: val })), "set");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout$1, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:30:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Hero", "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:31:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:32:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.hero.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:33:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: data.hero.title, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, title: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:34:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Lede", value: data.hero.lede, rows: 2, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, lede: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:35:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Appeal", "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:38:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:39:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Heading", value: data.appeal.heading, onChange: /* @__PURE__ */ __name2((v) => set("appeal", { ...data.appeal, heading: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:40:9" }),
      data.appeal.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:42:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextareaField,
          {
            label: `Paragraph ${i + 1}`,
            value: p,
            rows: 2,
            onChange: /* @__PURE__ */ __name2((v) => set("appeal", { ...data.appeal, paragraphs: updateAt$1(data.appeal.paragraphs, i, v) }), "onChange"),
            "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:43:13"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => set("appeal", { ...data.appeal, paragraphs: removeAt$1(data.appeal.paragraphs, i) }), "onClick"), style: delBtn, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:45:13", children: "✕" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add paragraph", onClick: /* @__PURE__ */ __name2(() => set("appeal", { ...data.appeal, paragraphs: [...data.appeal.paragraphs, ""] }), "onClick"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:48:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Ways to Give", "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:51:7" }),
    data.ways.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:53:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.ways.length,
          onMoveUp: /* @__PURE__ */ __name2(() => set("ways", moveUp$1(data.ways, i)), "onMoveUp"),
          onMoveDown: /* @__PURE__ */ __name2(() => set("ways", moveDown$1(data.ways, i)), "onMoveDown"),
          onDelete: /* @__PURE__ */ __name2(() => set("ways", removeAt$1(data.ways, i)), "onDelete"),
          "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:54:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: w.title, onChange: /* @__PURE__ */ __name2((v) => set("ways", updateAt$1(data.ways, i, { ...w, title: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:59:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Body", value: w.body, rows: 2, onChange: /* @__PURE__ */ __name2((v) => set("ways", updateAt$1(data.ways, i, { ...w, body: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:60:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Detail (e.g. paybill / account)", value: w.detail, onChange: /* @__PURE__ */ __name2((v) => set("ways", updateAt$1(data.ways, i, { ...w, detail: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:61:11" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add way to give", onClick: /* @__PURE__ */ __name2(() => set("ways", [...data.ways, { title: "", body: "", detail: "" }]), "onClick"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:64:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Contacts", "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:66:7" }),
    data.contacts.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:68:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.contacts.length,
          onMoveUp: /* @__PURE__ */ __name2(() => set("contacts", moveUp$1(data.contacts, i)), "onMoveUp"),
          onMoveDown: /* @__PURE__ */ __name2(() => set("contacts", moveDown$1(data.contacts, i)), "onMoveDown"),
          onDelete: /* @__PURE__ */ __name2(() => set("contacts", removeAt$1(data.contacts, i)), "onDelete"),
          "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:69:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid3, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:74:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Label", value: c.label, onChange: /* @__PURE__ */ __name2((v) => set("contacts", updateAt$1(data.contacts, i, { ...c, label: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:75:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Display value", value: c.value, placeholder: "you@example.com", onChange: /* @__PURE__ */ __name2((v) => set("contacts", updateAt$1(data.contacts, i, { ...c, value: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:76:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Link", value: c.href, placeholder: "mailto:you@example.com", onChange: /* @__PURE__ */ __name2((v) => set("contacts", updateAt$1(data.contacts, i, { ...c, href: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:77:13" })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add contact", onClick: /* @__PURE__ */ __name2(() => set("contacts", [...data.contacts, { label: "", value: "", href: "" }]), "onClick"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:81:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Partnered Institutions", "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:83:7" }),
    data.institutions.map((inst, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:85:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.institutions.length,
          onMoveUp: /* @__PURE__ */ __name2(() => set("institutions", moveUp$1(data.institutions, i)), "onMoveUp"),
          onMoveDown: /* @__PURE__ */ __name2(() => set("institutions", moveDown$1(data.institutions, i)), "onMoveDown"),
          onDelete: /* @__PURE__ */ __name2(() => set("institutions", removeAt$1(data.institutions, i)), "onDelete"),
          "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:86:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$1, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:91:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Name", value: inst.name, onChange: /* @__PURE__ */ __name2((v) => set("institutions", updateAt$1(data.institutions, i, { ...inst, name: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:92:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Note", value: inst.note ?? "", placeholder: "Government partner", onChange: /* @__PURE__ */ __name2((v) => set("institutions", updateAt$1(data.institutions, i, { ...inst, note: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:93:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2$1, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:95:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Logo URL", value: inst.logo ?? "", placeholder: "/uploads/logo.png", onChange: /* @__PURE__ */ __name2((v) => set("institutions", updateAt$1(data.institutions, i, { ...inst, logo: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:96:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Website URL", value: inst.url ?? "", placeholder: "https://example.com", onChange: /* @__PURE__ */ __name2((v) => set("institutions", updateAt$1(data.institutions, i, { ...inst, url: v })), "onChange"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:97:13" })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add institution", onClick: /* @__PURE__ */ __name2(() => set("institutions", [...data.institutions, { name: "", logo: "", url: "", note: "" }]), "onClick"), "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:101:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty, "data-tsd-source": "/src/components/admin/editors/SupportEditor.tsx:103:7" })
  ] });
}
__name(SupportEditor, "SupportEditor");
__name2(SupportEditor, "SupportEditor");
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
const updateAt = /* @__PURE__ */ __name2((arr, i, val) => arr.map((x, idx) => idx === i ? val : x), "updateAt");
const removeAt = /* @__PURE__ */ __name2((arr, i) => arr.filter((_, idx) => idx !== i), "removeAt");
function moveUp(arr, i) {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
__name(moveUp, "moveUp");
__name2(moveUp, "moveUp");
function moveDown(arr, i) {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}
__name(moveDown, "moveDown");
__name2(moveDown, "moveDown");
function ResourcesEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor("resources");
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: info, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:19:23", children: "Loading…" });
  if (loadError) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: errStyle, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:20:25", children: [
    "Error: ",
    loadError
  ] });
  if (!data) return null;
  const set = /* @__PURE__ */ __name2((key, val) => setData((d) => ({ ...d, [key]: val })), "set");
  const updCat = /* @__PURE__ */ __name2((i, cat) => set("categories", updateAt(data.categories, i, cat)), "updCat");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: layout, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:27:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Hero", "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:28:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:29:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Eyebrow", value: data.hero.eyebrow, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, eyebrow: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:30:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: data.hero.title, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, title: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:31:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextareaField, { label: "Lede", value: data.hero.lede, rows: 2, onChange: /* @__PURE__ */ __name2((v) => set("hero", { ...data.hero, lede: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:32:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Categories & Links", description: "Each category groups related learning resources.", "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:35:7" }),
    data.categories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:38:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListControls,
        {
          index: i,
          total: data.categories.length,
          onMoveUp: /* @__PURE__ */ __name2(() => set("categories", moveUp(data.categories, i)), "onMoveUp"),
          onMoveDown: /* @__PURE__ */ __name2(() => set("categories", moveDown(data.categories, i)), "onMoveDown"),
          onDelete: /* @__PURE__ */ __name2(() => set("categories", removeAt(data.categories, i)), "onDelete"),
          "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:39:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: grid2, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:45:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Category name", value: cat.name, onChange: /* @__PURE__ */ __name2((v) => updCat(i, { ...cat, name: v }), "onChange"), "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:46:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextareaField,
          {
            label: "Description",
            value: cat.description ?? "",
            rows: 1,
            onChange: /* @__PURE__ */ __name2((v) => updCat(i, { ...cat, description: v }), "onChange"),
            "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:47:13"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: subSection, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:51:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: subLabel, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:52:13", children: "Links in this category" }),
        cat.links.map((lk, li) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: { background: "#0f172a", padding: "12px 16px" }, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:54:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", justifyContent: "space-between" }, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:55:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListControls,
            {
              index: li,
              total: cat.links.length,
              onMoveUp: /* @__PURE__ */ __name2(() => updCat(i, { ...cat, links: moveUp(cat.links, li) }), "onMoveUp"),
              onMoveDown: /* @__PURE__ */ __name2(() => updCat(i, { ...cat, links: moveDown(cat.links, li) }), "onMoveDown"),
              onDelete: /* @__PURE__ */ __name2(() => updCat(i, { ...cat, links: removeAt(cat.links, li) }), "onDelete"),
              "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:56:19"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StringField, { label: "Title", value: lk.title, onChange: /* @__PURE__ */ __name2((v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, title: v }) }), "onChange"), "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:63:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StringField,
            {
              label: "URL",
              value: lk.url,
              placeholder: "https://codeforces.com or /training",
              onChange: /* @__PURE__ */ __name2((v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, url: v }) }), "onChange"),
              mono: true,
              "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:64:17"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextareaField,
            {
              label: "Description",
              value: lk.description ?? "",
              rows: 2,
              onChange: /* @__PURE__ */ __name2((v) => updCat(i, { ...cat, links: updateAt(cat.links, li, { ...lk, description: v }) }), "onChange"),
              "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:71:17"
            }
          )
        ] }, li)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add link", onClick: /* @__PURE__ */ __name2(() => updCat(i, { ...cat, links: [...cat.links, { title: "", url: "", description: "" }] }), "onClick"), "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:75:13" })
      ] })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddButton, { label: "Add category", onClick: /* @__PURE__ */ __name2(() => set("categories", [...data.categories, { name: "", description: "", links: [] }]), "onClick"), "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:80:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveBar, { status: saveStatus, error: saveError ?? void 0, onSave: save, dirty, "data-tsd-source": "/src/components/admin/editors/ResourcesEditor.tsx:81:7" })
  ] });
}
__name(ResourcesEditor, "ResourcesEditor");
__name2(ResourcesEditor, "ResourcesEditor");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.root, "data-tsd-source": "/src/components/admin/CMSShell.tsx:32:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { "data-tsd-source": "/src/components/admin/CMSShell.tsx:33:7", children: `
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { style: { ...s.sidebar, width: sidebarOpen ? 260 : 64 }, "data-tsd-source": "/src/components/admin/CMSShell.tsx:47:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.sidebarHeader, "data-tsd-source": "/src/components/admin/CMSShell.tsx:49:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.logoMark, "data-tsd-source": "/src/components/admin/CMSShell.tsx:50:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 32 32", fill: "none", "aria-hidden": true, "data-tsd-source": "/src/components/admin/CMSShell.tsx:51:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 8 L16 4 L24 8 L24 24 L16 28 L8 24 Z", stroke: "#38bdf8", strokeWidth: "1.5", fill: "none", "data-tsd-source": "/src/components/admin/CMSShell.tsx:52:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "3", fill: "#38bdf8", "data-tsd-source": "/src/components/admin/CMSShell.tsx:53:15" })
        ] }) }),
        sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/admin/CMSShell.tsx:57:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.logoText, "data-tsd-source": "/src/components/admin/CMSShell.tsx:58:15", children: "KIO Admin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.logoSub, "data-tsd-source": "/src/components/admin/CMSShell.tsx:59:15", children: "Content Manager" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setSidebarOpen(!sidebarOpen), "onClick"), style: s.collapseBtn, title: "Toggle sidebar", "data-tsd-source": "/src/components/admin/CMSShell.tsx:62:11", children: sidebarOpen ? "‹" : "›" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { style: s.nav, "data-tsd-source": "/src/components/admin/CMSShell.tsx:68:9", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => setActiveTab(item.id), "onClick"),
          className: `nav-item${activeTab === item.id ? " active" : ""}`,
          style: {
            ...s.navItem,
            ...activeTab === item.id ? s.navItemActive : {},
            justifyContent: sidebarOpen ? "flex-start" : "center"
          },
          title: !sidebarOpen ? item.label : void 0,
          "data-tsd-source": "/src/components/admin/CMSShell.tsx:70:13",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.navIcon, "data-tsd-source": "/src/components/admin/CMSShell.tsx:81:15", children: item.icon }),
            sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.navTextWrap, "data-tsd-source": "/src/components/admin/CMSShell.tsx:83:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.navLabel, "data-tsd-source": "/src/components/admin/CMSShell.tsx:84:19", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.navDesc, "data-tsd-source": "/src/components/admin/CMSShell.tsx:85:19", children: item.description })
            ] })
          ]
        },
        item.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.sidebarFooter, "data-tsd-source": "/src/components/admin/CMSShell.tsx:93:9", children: sidebarOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.userRow, "data-tsd-source": "/src/components/admin/CMSShell.tsx:95:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar_url, alt: user.login, style: s.avatar, "data-tsd-source": "/src/components/admin/CMSShell.tsx:96:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.userInfo, "data-tsd-source": "/src/components/admin/CMSShell.tsx:97:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.userName, "data-tsd-source": "/src/components/admin/CMSShell.tsx:98:17", children: user.name || user.login }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.userLogin, "data-tsd-source": "/src/components/admin/CMSShell.tsx:99:17", children: [
            "@",
            user.login
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/api/admin/auth/logout", style: s.logoutBtn, title: "Sign out", "data-tsd-source": "/src/components/admin/CMSShell.tsx:101:15", children: "⏻" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/api/admin/auth/logout", style: { ...s.logoutBtn, margin: "0 auto" }, title: "Sign out", "data-tsd-source": "/src/components/admin/CMSShell.tsx:104:13", children: "⏻" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: s.main, "data-tsd-source": "/src/components/admin/CMSShell.tsx:110:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { style: s.topBar, "data-tsd-source": "/src/components/admin/CMSShell.tsx:112:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/admin/CMSShell.tsx:113:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.topBarEyebrow, "data-tsd-source": "/src/components/admin/CMSShell.tsx:114:13", children: "Editing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: s.topBarTitle, "data-tsd-source": "/src/components/admin/CMSShell.tsx:115:13", children: [
            active.icon,
            " ",
            active.label
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.topBarRight, "data-tsd-source": "/src/components/admin/CMSShell.tsx:117:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://github.com/GabuGravin41/kenya-informatics-olympiad",
              target: "_blank",
              rel: "noreferrer",
              style: s.repoLink,
              "data-tsd-source": "/src/components/admin/CMSShell.tsx:118:13",
              children: "View on GitHub →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", target: "_blank", rel: "noreferrer", style: s.repoLink, "data-tsd-source": "/src/components/admin/CMSShell.tsx:126:13", children: "View site →" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-panel", style: s.editorWrap, "data-tsd-source": "/src/components/admin/CMSShell.tsx:133:9", children: [
        activeTab === "site" && /* @__PURE__ */ jsxRuntimeExports.jsx(SiteEditor, { "data-tsd-source": "/src/components/admin/CMSShell.tsx:134:36" }),
        activeTab === "team" && /* @__PURE__ */ jsxRuntimeExports.jsx(TeamEditor, { "data-tsd-source": "/src/components/admin/CMSShell.tsx:135:36" }),
        activeTab === "news" && /* @__PURE__ */ jsxRuntimeExports.jsx(NewsEditor, { "data-tsd-source": "/src/components/admin/CMSShell.tsx:136:36" }),
        activeTab === "events" && /* @__PURE__ */ jsxRuntimeExports.jsx(EventsEditor, { "data-tsd-source": "/src/components/admin/CMSShell.tsx:137:38" }),
        activeTab === "support" && /* @__PURE__ */ jsxRuntimeExports.jsx(SupportEditor, { "data-tsd-source": "/src/components/admin/CMSShell.tsx:138:39" }),
        activeTab === "resources" && /* @__PURE__ */ jsxRuntimeExports.jsx(ResourcesEditor, { "data-tsd-source": "/src/components/admin/CMSShell.tsx:139:41" })
      ] }, activeTab)
    ] })
  ] });
}
__name(CMSShell, "CMSShell");
__name2(CMSShell, "CMSShell");
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
  if (!loggedIn) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginScreen, { "data-tsd-source": "/src/components/admin/AdminApp.tsx:30:25" });
  if (userLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLoader, { "data-tsd-source": "/src/components/admin/AdminApp.tsx:31:27" });
  if (!user) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginScreen, { "data-tsd-source": "/src/components/admin/AdminApp.tsx:32:21" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CMSShell, { user, "data-tsd-source": "/src/components/admin/AdminApp.tsx:34:10" });
}
__name(AdminApp, "AdminApp");
__name2(AdminApp, "AdminApp");
function AdminLoader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: styles.loaderWrap, "data-tsd-source": "/src/components/admin/AdminApp.tsx:39:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: styles.spinner, "data-tsd-source": "/src/components/admin/AdminApp.tsx:40:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: styles.loaderText, "data-tsd-source": "/src/components/admin/AdminApp.tsx:41:7", children: "Loading CMS…" })
  ] });
}
__name(AdminLoader, "AdminLoader");
__name2(AdminLoader, "AdminLoader");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminApp, { loggedIn, "data-tsd-source": "/src/routes/admin.tsx:14:10" });
}
__name(AdminRoute, "AdminRoute");
__name2(AdminRoute, "AdminRoute");
export {
  AdminRoute as component
};
