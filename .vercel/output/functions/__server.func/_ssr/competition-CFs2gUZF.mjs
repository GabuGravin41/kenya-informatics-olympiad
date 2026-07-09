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
const ROUNDS = [{
  n: "01",
  label: "Open Round",
  when: "March 2026",
  body: "Online qualifier open to all Kenyan secondary school students. 4 problems, 3 hours, judged automatically. Top ~200 advance."
}, {
  n: "02",
  label: "National Round",
  when: "May 2026",
  body: "In-person regional sittings across Nairobi, Mombasa, Kisumu and Eldoret. 5 problems, 5 hours, IOI-style. Top ~30 advance."
}, {
  n: "03",
  label: "Team Selection Camp",
  when: "June 2026",
  body: "Intensive 10-day training camp culminating in selection tests. Top 4 form the national team for the Pan-African Informatics Olympiad."
}];
const SYLLABUS = [["Foundations", "Implementation, complexity analysis, ad hoc, sorting, binary search."], ["Data Structures", "Arrays, stacks, queues, heaps, hash maps, trees, segment trees, Fenwick trees, union-find."], ["Graph Theory", "BFS/DFS, shortest paths, MST, topological sort, SCC, bridges, articulation points."], ["Dynamic Programming", "Classical DP, DP on trees, bitmask DP, digit DP, DP optimizations."], ["Mathematics", "Number theory, combinatorics, modular arithmetic, basic probability."], ["Strings", "KMP, Z-function, hashing, suffix arrays, tries."], ["Geometry", "Vectors, convex hull, sweep line, basic computational geometry."]];
function CompetitionPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { "data-tsd-source": "/src/routes/competition.tsx:20:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Competition // Cycle 2026", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Three rounds. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "One ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "national team." })
    ] }), lede: "The KIO selection process is modeled on IOI standards — transparent rules, automated judging, and a clear path from any Kenyan school to the international stage.", "data-tsd-source": "/src/routes/competition.tsx:21:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-tsd-source": "/src/routes/competition.tsx:27:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", "data-tsd-source": "/src/routes/competition.tsx:28:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-foreground/10", "data-tsd-source": "/src/routes/competition.tsx:29:11", children: ROUNDS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 space-y-6", "data-tsd-source": "/src/routes/competition.tsx:30:30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", "data-tsd-source": "/src/routes/competition.tsx:31:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-bold text-xl font-mono", "data-tsd-source": "/src/routes/competition.tsx:32:19", children: r.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/routes/competition.tsx:33:19", children: r.when })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", "data-tsd-source": "/src/routes/competition.tsx:37:17", children: r.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/competition.tsx:38:17", children: r.body })
    ] }, r.n)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-24", "data-tsd-source": "/src/routes/competition.tsx:45:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-12 gap-10", "data-tsd-source": "/src/routes/competition.tsx:46:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4", "data-tsd-source": "/src/routes/competition.tsx:47:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/competition.tsx:48:13", children: "Syllabus" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold leading-tight", "data-tsd-source": "/src/routes/competition.tsx:51:13", children: "What we test, and what we teach." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-background/60 text-sm leading-relaxed", "data-tsd-source": "/src/routes/competition.tsx:54:13", children: "The KIO syllabus tracks the IOI syllabus closely. Earlier rounds emphasise foundations; later rounds and the selection camp cover the full breadth." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-8", "data-tsd-source": "/src/routes/competition.tsx:59:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "divide-y divide-background/10", "data-tsd-source": "/src/routes/competition.tsx:60:13", children: SYLLABUS.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 grid grid-cols-12 gap-4", "data-tsd-source": "/src/routes/competition.tsx:61:41", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "col-span-12 md:col-span-4 font-display font-bold text-lg", "data-tsd-source": "/src/routes/competition.tsx:62:19", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "col-span-12 md:col-span-8 text-background/70 text-sm leading-relaxed", "data-tsd-source": "/src/routes/competition.tsx:63:19", children: v })
      ] }, k)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-tsd-source": "/src/routes/competition.tsx:73:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10", "data-tsd-source": "/src/routes/competition.tsx:74:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/competition.tsx:75:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/competition.tsx:76:13", children: "Eligibility" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-muted-foreground", "data-tsd-source": "/src/routes/competition.tsx:79:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/routes/competition.tsx:80:15", children: "— Currently enrolled in a Kenyan secondary school." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/routes/competition.tsx:81:15", children: "— Born on or after 1 July 2006 (per IOI age rules)." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/routes/competition.tsx:82:15", children: "— Able to attend in-person rounds in Nairobi, Mombasa, Kisumu, or Eldoret." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/routes/competition.tsx:83:15", children: "— No prior programming experience required for the Open Round." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/competition.tsx:86:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/competition.tsx:87:13", children: "Languages permitted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-muted-foreground font-mono text-sm", "data-tsd-source": "/src/routes/competition.tsx:90:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/routes/competition.tsx:91:15", children: "C++ (g++ 13, primary)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/routes/competition.tsx:92:15", children: "Python 3.12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/routes/competition.tsx:93:15", children: "Java 21" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/routes/competition.tsx:94:15", children: "Pascal (Free Pascal 3.2)" })
        ] })
      ] })
    ] }) })
  ] });
}
__name(CompetitionPage, "CompetitionPage");
__name2(CompetitionPage, "CompetitionPage");
export {
  CompetitionPage as component
};
