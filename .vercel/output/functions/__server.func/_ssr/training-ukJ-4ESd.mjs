var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, a as PageHero } from "./page-shell-BKH-XkOl.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { "data-tsd-source": "/src/routes/training.tsx:17:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Training", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A curriculum from ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "first program" }),
      " to IOI."
    ] }), lede: "KIO training runs year-round through online problem sets, mentor sessions, and an in-person selection camp. Everything is open — we publish our syllabus, learning paths, and past problems.", "data-tsd-source": "/src/routes/training.tsx:18:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-tsd-source": "/src/routes/training.tsx:23:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", "data-tsd-source": "/src/routes/training.tsx:24:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-10", "data-tsd-source": "/src/routes/training.tsx:25:11", children: "Learning paths" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", "data-tsd-source": "/src/routes/training.tsx:28:11", children: PATHS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-foreground/10 p-8 space-y-6 hover:border-primary transition-colors animate-reveal", style: {
        animationDelay: `${i * 80}ms`
      }, "data-tsd-source": "/src/routes/training.tsx:29:34", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", "data-tsd-source": "/src/routes/training.tsx:32:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", "data-tsd-source": "/src/routes/training.tsx:33:19", children: p.level }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/routes/training.tsx:34:19", children: p.weeks })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/training.tsx:38:17", children: p.body })
      ] }, p.level)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-24 border-y border-foreground/5", "data-tsd-source": "/src/routes/training.tsx:45:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", "data-tsd-source": "/src/routes/training.tsx:46:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-10", "data-tsd-source": "/src/routes/training.tsx:47:11", children: "Recommended resources" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-foreground/10", "data-tsd-source": "/src/routes/training.tsx:50:11", children: RESOURCES.map(([title, body]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-6 grid grid-cols-12 gap-4 items-baseline", "data-tsd-source": "/src/routes/training.tsx:51:47", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-12 md:col-span-4 font-display font-bold text-xl", "data-tsd-source": "/src/routes/training.tsx:52:17", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-12 md:col-span-8 text-muted-foreground", "data-tsd-source": "/src/routes/training.tsx:55:17", children: body })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-tsd-source": "/src/routes/training.tsx:62:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10", "data-tsd-source": "/src/routes/training.tsx:63:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/training.tsx:64:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/training.tsx:65:13", children: "Judging" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/training.tsx:68:13", children: "All KIO rounds use automated judging on a Codeforces-compatible stack. Contestants receive immediate verdicts during the round, full test breakdown after, and editorials within 48 hours of every contest." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/training.tsx:74:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/training.tsx:75:13", children: "Mentorship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/training.tsx:78:13", children: "Shortlisted students are paired with coaches drawn from KIO alumni, university competitive programmers, and partner programs at Summer STEM and the African Olympiad Academy." })
      ] })
    ] }) })
  ] });
}
__name(TrainingPage, "TrainingPage");
__name2(TrainingPage, "TrainingPage");
export {
  TrainingPage as component
};
