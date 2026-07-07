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
function PrivacyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Legal // Privacy", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Privacy ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Policy." })
    ] }), lede: "How we collect, use, and protect the personal information you share with the Kenya Informatics Olympiad." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 prose-legal space-y-10 text-foreground/80 leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground font-mono", children: "Last updated: February 2026" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { heading: "Who we are", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'The Kenya Informatics Olympiad ("KIO", "we", "us") is a volunteer-run programme that identifies and trains Kenyan secondary school students in competitive informatics.' }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { heading: "What we collect", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Registration data:" }),
          " student name, school, class, date of birth, guardian contact, email."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Contest data:" }),
          " submissions, scores, and standings from KIO rounds."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Donation data:" }),
          " for donors — name, contact, and payment reference (we do not store card numbers; payments run through M-Pesa or the bank)."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Correspondence:" }),
          " messages you send us by email."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { heading: "How we use it", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Run the selection rounds, camps, and PAIO/IOI team logistics." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Contact students, guardians, and schools about the programme." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Acknowledge donors and issue receipts." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Publish scores and team announcements — student names may appear on this site and in press releases." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { heading: "What we don't do", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "We do not sell personal data." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "We do not share guardian contacts with third parties for marketing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "We do not run advertising trackers on this site." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { heading: "Minors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Most KIO participants are under 18. Registration requires guardian consent, and guardians may withdraw a student and request deletion of their data at any time by writing to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary", href: "mailto:hello@kio.ke", children: "hello@kio.ke" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { heading: "Retention", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Registration and contest data is kept for the current cycle plus three years to support alumni records and continuity. Donation records are kept as required by Kenyan tax and accounting law." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { heading: "Your rights", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "You can request a copy of the data we hold about you, correct it, or ask us to delete it. Email ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary", href: "mailto:hello@kio.ke", children: "hello@kio.ke" }),
        " and we will respond within 30 days."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { heading: "Contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Data protection queries:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary", href: "mailto:hello@kio.ke", children: "hello@kio.ke" })
      ] }) })
    ] }) })
  ] });
}
function Block({
  heading,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: heading }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children })
  ] });
}
export {
  PrivacyPage as component
};
