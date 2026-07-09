var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, a as PageHero } from "./page-shell-BKH-XkOl.mjs";
import { S as SmartLink } from "./smart-link-512TAwVv.mjs";
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
const hero = { "eyebrow": "Resources", "title": "Learn. Practice. Compete.", "lede": "A curated set of platforms, guides, and tools to help you prepare for the Kenya Informatics Olympiad and beyond — from your first loop to your first IOI-style problem." };
const categories = [{ "name": "Practice & online judges", "description": "Where to solve problems and sharpen your speed.", "links": [{ "title": "Codeforces", "url": "https://codeforces.com", "description": "Regular contests and a huge problem archive with editorials." }, { "title": "AtCoder", "url": "https://atcoder.jp", "description": "Beginner-friendly contests with clear difficulty progression." }, { "title": "USACO Guide", "url": "https://usaco.guide", "description": "A structured, topic-by-topic path from Bronze to Platinum." }] }, { "name": "Learn & reference", "description": "Tutorials, algorithms, and reference material.", "links": [{ "title": "CP-Algorithms", "url": "https://cp-algorithms.com", "description": "Clear write-ups of the algorithms and data structures you'll need." }, { "title": "GitHub", "url": "https://github.com", "description": "Host your solutions, collaborate, and explore open-source projects." }] }, { "name": "KIO resources", "description": "Our own material for contestants.", "links": [{ "title": "KIO training track", "url": "/training", "description": "How KIO trains and mentors shortlisted students." }] }];
const resources = {
  hero,
  categories
};
function ResourcesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { "data-tsd-source": "/src/routes/resources.tsx:5:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: resources.hero.eyebrow, title: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: resources.hero.title }), lede: resources.hero.lede, "data-tsd-source": "/src/routes/resources.tsx:6:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-tsd-source": "/src/routes/resources.tsx:8:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 space-y-16", "data-tsd-source": "/src/routes/resources.tsx:9:9", children: resources.categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/resources.tsx:10:44", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 max-w-2xl", "data-tsd-source": "/src/routes/resources.tsx:11:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold tracking-tight mb-2", "data-tsd-source": "/src/routes/resources.tsx:12:17", children: cat.name }),
        cat.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/resources.tsx:13:37", children: cat.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", "data-tsd-source": "/src/routes/resources.tsx:15:15", children: cat.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SmartLink, { to: link.url, className: "group border border-foreground/10 p-6 flex flex-col hover:border-primary transition-colors", "data-tsd-source": "/src/routes/resources.tsx:16:40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-3", "data-tsd-source": "/src/routes/resources.tsx:17:21", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold group-hover:text-primary transition-colors", "data-tsd-source": "/src/routes/resources.tsx:18:23", children: link.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground group-hover:text-primary transition-colors", "data-tsd-source": "/src/routes/resources.tsx:21:23", children: "→" })
        ] }),
        link.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/resources.tsx:25:42", children: link.description })
      ] }, link.title)) })
    ] }, cat.name)) }) })
  ] });
}
__name(ResourcesPage, "ResourcesPage");
__name2(ResourcesPage, "ResourcesPage");
export {
  ResourcesPage as component
};
