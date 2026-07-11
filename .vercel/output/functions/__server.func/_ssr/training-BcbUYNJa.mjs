import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, a as PageHero } from "./page-shell-B3OtsCXZ.mjs";
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
const PATHS = [{
  level: "Beginner",
  weeks: "8 weeks",
  body: "C++ basics, complexity, sorting and searching, simulation. Designed for students with no prior programming experience."
}, {
  level: "Intermediate",
  weeks: "12 weeks",
  body: "Standard data structures, graph algorithms, intro DP. Target audience: students who have cleared the Open Round."
}, {
  level: "Advanced",
  weeks: "Selection camp",
  body: "Advanced DP, segment trees, flow, advanced graphs, computational geometry. For the national pool."
}];
const RESOURCES = [["Competitive Programmer's Handbook", "Antti Laaksonen — the canonical free reference."], ["USACO Guide", "Structured learning path from bronze to platinum."], ["Codeforces", "Weekly contests at every level — our primary practice ground."], ["AtCoder", "High-quality problem sets — Beginner and Regular contests."], ["CSES Problem Set", "Topic-organised problems used throughout our curriculum."], ["KIO Past Problems", "Archive of past Open and National Round problems with editorials."]];
function TrainingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Training", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A curriculum from ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "first program" }),
      " to IOI."
    ] }), lede: "KIO training runs year-round through online problem sets, mentor sessions, and an in-person selection camp. Everything is open — we publish our syllabus, learning paths, and past problems." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-10", children: "Learning paths" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: PATHS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-foreground/10 p-8 space-y-6 hover:border-primary transition-colors animate-reveal", style: {
        animationDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: p.level }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: p.weeks })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.body })
      ] }, p.level)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-24 border-y border-foreground/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-10", children: "Recommended resources" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-foreground/10", children: RESOURCES.map(([title, body]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-6 grid grid-cols-12 gap-4 items-baseline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-12 md:col-span-4 font-display font-bold text-xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-12 md:col-span-8 text-muted-foreground", children: body })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", children: "Judging" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "All KIO rounds use automated judging on a Codeforces-compatible stack. Contestants receive immediate verdicts during the round, full test breakdown after, and editorials within 48 hours of every contest." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", children: "Mentorship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Shortlisted students are paired with coaches drawn from KIO alumni, university competitive programmers, and partner programs at Summer STEM and the African Olympiad Academy." })
      ] })
    ] }) })
  ] });
}
export {
  TrainingPage as component
};
