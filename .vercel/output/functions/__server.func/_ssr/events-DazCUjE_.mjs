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
const events = [{ "slug": "launch-assembly-2026", "date": "01 Feb 2026", "location": "Nairobi", "tag": "Launch", "title": "KIO Launch Assembly", "summary": "The Kenya Informatics Olympiad was formally announced alongside the Kenya Mathematical Olympiad, Summer STEM, and the African Olympiad Academy.", "cover": "", "gallery": [], "report": ["The launch brought together coordinators from across the African Olympiad Academy network, school ICT leads, and partner organisations.", "Cycle 2026 opened with a clear road to the Pan-African Informatics Olympiad in July. Registration opened the same evening."], "stats": [{ "label": "Schools represented", "value": "40+" }, { "label": "Partners on stage", "value": "4" }] }];
const eventsData = {
  events
};
const PAST_EVENTS = eventsData.events;
function EventsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Past Events // Archive", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "What we've ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "done so far." })
    ] }), lede: "Reports, photographs and reflections from past KIO gatherings. For upcoming events and the official calendar, see the news page." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-foreground/10 bg-accent/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-widest font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Browsing the event archive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/news", className: "text-accent hover:text-primary transition-colors font-bold", children: "← Upcoming events & news" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 space-y-24", children: [
      PAST_EVENTS.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}),
      PAST_EVENTS.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventArticle, { event: e, index: i }, e.slug))
    ] }) })
  ] });
}
function EventArticle({
  event,
  index
}) {
  const hasGallery = event.gallery && event.gallery.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "animate-reveal", style: {
    animationDelay: `${index * 80}ms`
  }, id: event.slug, children: [
    event.cover ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] w-full overflow-hidden bg-accent/10 mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: event.cover, alt: event.title, className: "w-full h-full object-cover", loading: "lazy" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CoverPlaceholder, { title: event.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest font-mono mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-accent text-accent-foreground px-2 py-0.5 font-bold", children: event.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: event.date }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        "· ",
        event.location
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold tracking-tighter mb-5", children: event.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8", children: event.summary }),
    event.report && event.report.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 max-w-3xl text-foreground/80 leading-relaxed", children: event.report.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p }, idx)) }),
    event.stats && event.stats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10", children: event.stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-2", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-2xl font-bold text-accent", children: s.value })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-accent font-bold font-mono mb-4", children: "Gallery" }),
      hasGallery ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: event.gallery.map((src, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: src, target: "_blank", rel: "noopener noreferrer", className: "aspect-square overflow-hidden bg-accent/5 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${event.title} — photo ${idx + 1}`, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }) }, idx)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryPlaceholder, {})
    ] })
  ] });
}
function CoverPlaceholder({
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/9] w-full mb-10 bg-gradient-to-br from-accent/20 via-accent/10 to-primary/10 border border-foreground/10 flex items-center justify-center relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_currentColor_1px,_transparent_1px)] [background-size:18px_18px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-accent font-mono font-bold mb-2", children: "Cover image · upload pending" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-foreground/60 max-w-sm", children: title })
    ] })
  ] });
}
function GalleryPlaceholder() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-accent/5 border border-dashed border-accent/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-accent/60 font-mono", children: "+ Photo" }) }, i)) });
}
function EmptyState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24 border border-dashed border-foreground/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-3", children: "Archive" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-3", children: "Our first events are around the corner." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Once an event has happened we'll publish a full report with photographs here." })
  ] });
}
export {
  EventsPage as component
};
