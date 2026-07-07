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
const CHANNELS = [{
  k: "General enquiries",
  v: "hello@kio.ke"
}, {
  k: "Schools & registration",
  v: "schools@kio.ke"
}, {
  k: "Sponsorship & partners",
  v: "partners@kio.ke"
}, {
  k: "Press",
  v: "press@kio.ke"
}];
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Talk to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "the team." })
    ] }), lede: "Whether you're a school, a sponsor, a journalist, or a student with a question — pick the channel that fits." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-foreground/10", children: CHANNELS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: c.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${c.v}`, className: "font-display text-2xl font-bold hover:text-primary transition-colors", children: c.v })
      ] }, c.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-3", children: "Headquarters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground", children: "Nairobi, Kenya" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", children: "Operating in partnership with the Kenya Mathematical Olympiad, Summer STEM, and the African Olympiad Academy." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-3", children: "Response time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "We aim to respond within 3 working days. During contest weeks, allow up to one week." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
