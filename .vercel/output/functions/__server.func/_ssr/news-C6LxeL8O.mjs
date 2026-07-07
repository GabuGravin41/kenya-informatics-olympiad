import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageShell, a as PageHero } from "./page-shell-B3OtsCXZ.mjs";
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
const events = [{ "date": "08–14 Jul 2026", "tag": "Premier", "title": "Pan-African Informatics Olympiad 2026", "body": "Kenya's national team competes at the continental championship. KIO will be sending 4 contestants, 1 team leader, and 1 deputy.", "primary": true }, { "date": "15–25 Jun 2026", "tag": "Camp", "title": "Team Selection Camp", "body": "10-day intensive in Nairobi for the top ~30 contestants from the National Round. Selection tests on days 8, 9, and 10.", "primary": false }, { "date": "10 May 2026", "tag": "Round 02", "title": "National Round", "body": "In-person regional sittings in Nairobi, Mombasa, Kisumu, and Eldoret. 5 problems, 5 hours.", "primary": false }, { "date": "15 Mar 2026", "tag": "Round 01", "title": "Open Round", "body": "Online qualifier — open to every Kenyan secondary school student. Registration closes 8 March.", "primary": false }, { "date": "01 Feb 2026", "tag": "Launch", "title": "Registration opens for Cycle 2026", "body": "First official KIO cycle. Schools may also register groups via their ICT coordinator.", "primary": false }];
const newsData = {
  events
};
const EVENTS = newsData.events;
function NewsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "News & Events", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "The road to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "PAIO 2026." })
    ] }), lede: "The official KIO calendar — every round, camp, and continental appearance for the 2026 cycle." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-foreground/10 bg-accent/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-widest font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Upcoming events & official calendar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/events", className: "text-accent hover:text-primary transition-colors font-bold", children: "Past events archive →" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-foreground/10 ml-3", children: EVENTS.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mb-12 pl-8 animate-reveal", style: {
      animationDelay: `${i * 60}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[7px] w-3.5 h-3.5 " + (e.primary ? "bg-primary" : "bg-foreground") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-4 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: e.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest px-2 py-0.5 font-bold " + (e.primary ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"), children: e.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-bold mb-3", children: e.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl leading-relaxed", children: e.body })
    ] }, e.title)) }) }) })
  ] });
}
export {
  NewsPage as component
};
