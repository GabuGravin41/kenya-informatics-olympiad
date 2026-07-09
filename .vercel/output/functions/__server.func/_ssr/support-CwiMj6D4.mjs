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
const hero = { "eyebrow": "Support & Donations", "title": "Fuel the pipeline.", "lede": "The Kenya Informatics Olympiad runs on the generosity of partners, institutions, and individuals who believe in Kenyan talent. Every contribution goes directly to training, contests, and getting our team to the world stage." };
const appeal = { "heading": "Why your support matters", "paragraphs": ["KIO is a volunteer-run, non-profit initiative. Donations pay for contest infrastructure, training-camp venues and meals, learning materials, and international travel for the national team.", "We welcome one-off gifts, recurring support, in-kind sponsorship (venues, devices, connectivity), and formal institutional partnerships. Reach out and we will tailor a package to your goals."] };
const ways = [{ "title": "M-Pesa", "body": "Send a contribution directly via M-Pesa.", "detail": "Paybill 000000 · Account KIO" }, { "title": "Bank transfer", "body": "For larger gifts and institutional sponsors.", "detail": "Account details available on request — email partners@kio.ke" }, { "title": "In-kind & sponsorship", "body": "Venues, devices, connectivity, prizes, or travel support.", "detail": "Let's design a partnership — partners@kio.ke" }];
const contacts = [{ "label": "Donations & sponsorship", "value": "partners@kio.ke", "href": "mailto:partners@kio.ke" }, { "label": "General enquiries", "value": "hello@kio.ke", "href": "mailto:hello@kio.ke" }];
const institutions = [{ "name": "Kenya Mathematical Olympiad", "logo": "", "url": "", "note": "Programme partner" }, { "name": "Summer STEM", "logo": "", "url": "", "note": "Training partner" }, { "name": "African Olympiad Academy", "logo": "", "url": "", "note": "Continental partner" }, { "name": "Ministry of Education", "logo": "", "url": "", "note": "Government partner" }];
const support = {
  hero,
  appeal,
  ways,
  contacts,
  institutions
};
function SupportPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { "data-tsd-source": "/src/routes/support.tsx:4:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: support.hero.eyebrow, title: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: support.hero.title }), lede: support.hero.lede, "data-tsd-source": "/src/routes/support.tsx:5:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-b border-foreground/5", "data-tsd-source": "/src/routes/support.tsx:8:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", "data-tsd-source": "/src/routes/support.tsx:9:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-10", "data-tsd-source": "/src/routes/support.tsx:10:11", children: "Ways to give" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", "data-tsd-source": "/src/routes/support.tsx:13:11", children: support.ways.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-foreground/10 p-8 flex flex-col", "data-tsd-source": "/src/routes/support.tsx:14:36", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-3", "data-tsd-source": "/src/routes/support.tsx:15:17", children: w.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", "data-tsd-source": "/src/routes/support.tsx:16:17", children: w.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-auto font-mono text-sm text-foreground", "data-tsd-source": "/src/routes/support.tsx:17:17", children: w.detail })
      ] }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-tsd-source": "/src/routes/support.tsx:24:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12", "data-tsd-source": "/src/routes/support.tsx:25:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/support.tsx:26:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/support.tsx:27:13", children: support.appeal.heading }),
        support.appeal.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed" + (i < support.appeal.paragraphs.length - 1 ? " mb-4" : ""), "data-tsd-source": "/src/routes/support.tsx:30:54", children: p }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/support.tsx:34:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/support.tsx:35:13", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-foreground/10", "data-tsd-source": "/src/routes/support.tsx:38:13", children: support.contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-5", "data-tsd-source": "/src/routes/support.tsx:39:42", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2", "data-tsd-source": "/src/routes/support.tsx:40:19", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, className: "font-display text-2xl font-bold hover:text-primary transition-colors", "data-tsd-source": "/src/routes/support.tsx:43:19", children: c.value })
        ] }, c.label)) })
      ] })
    ] }) }),
    support.institutions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-foreground/5 bg-secondary/30", "data-tsd-source": "/src/routes/support.tsx:53:43", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", "data-tsd-source": "/src/routes/support.tsx:54:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-10", "data-tsd-source": "/src/routes/support.tsx:55:13", children: "Partnered institutions & ministries" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", "data-tsd-source": "/src/routes/support.tsx:58:13", children: support.institutions.map((inst) => {
        const card = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-foreground/10 p-6 h-full flex flex-col items-center text-center gap-4", "data-tsd-source": "/src/routes/support.tsx:60:26", children: [
          inst.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: inst.logo, alt: inst.name, loading: "lazy", className: "h-14 w-auto max-w-[160px] object-contain", "data-tsd-source": "/src/routes/support.tsx:61:34" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 flex items-center", "data-tsd-source": "/src/routes/support.tsx:61:144", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg tracking-tighter", "data-tsd-source": "/src/routes/support.tsx:62:25", children: inst.name }) }),
          inst.logo && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm", "data-tsd-source": "/src/routes/support.tsx:66:35", children: inst.name }),
          inst.note && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/routes/support.tsx:67:35", children: inst.note })
        ] });
        return inst.url ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: inst.url, target: "_blank", rel: "noreferrer noopener", className: "block transition-opacity hover:opacity-80", "data-tsd-source": "/src/routes/support.tsx:71:31", children: card }, inst.name) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/routes/support.tsx:73:26", children: card }, inst.name);
      }) })
    ] }) })
  ] });
}
__name(SupportPage, "SupportPage");
__name2(SupportPage, "SupportPage");
export {
  SupportPage as component
};
