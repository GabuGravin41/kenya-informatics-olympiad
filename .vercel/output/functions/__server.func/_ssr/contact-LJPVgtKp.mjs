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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { "data-tsd-source": "/src/routes/contact.tsx:16:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Talk to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "the team." })
    ] }), lede: "Whether you're a school, a sponsor, a journalist, or a student with a question — pick the channel that fits.", "data-tsd-source": "/src/routes/contact.tsx:17:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-tsd-source": "/src/routes/contact.tsx:21:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12", "data-tsd-source": "/src/routes/contact.tsx:22:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-foreground/10", "data-tsd-source": "/src/routes/contact.tsx:23:11", children: CHANNELS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-6", "data-tsd-source": "/src/routes/contact.tsx:24:32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2", "data-tsd-source": "/src/routes/contact.tsx:25:17", children: c.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${c.v}`, className: "font-display text-2xl font-bold hover:text-primary transition-colors", "data-tsd-source": "/src/routes/contact.tsx:28:17", children: c.v })
      ] }, c.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/contact.tsx:33:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/contact.tsx:34:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-3", "data-tsd-source": "/src/routes/contact.tsx:35:15", children: "Headquarters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground", "data-tsd-source": "/src/routes/contact.tsx:38:15", children: "Nairobi, Kenya" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", "data-tsd-source": "/src/routes/contact.tsx:39:15", children: "Operating in partnership with the Kenya Mathematical Olympiad, Summer STEM, and the African Olympiad Academy." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/contact.tsx:44:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-3", "data-tsd-source": "/src/routes/contact.tsx:45:15", children: "Response time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", "data-tsd-source": "/src/routes/contact.tsx:48:15", children: "We aim to respond within 3 working days. During contest weeks, allow up to one week." })
        ] })
      ] })
    ] }) })
  ] });
}
__name(ContactPage, "ContactPage");
__name2(ContactPage, "ContactPage");
export {
  ContactPage as component
};
