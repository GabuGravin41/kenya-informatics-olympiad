var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const NAV = [
  { to: "/about", label: "About" },
  { to: "/competition", label: "Competition" },
  { to: "/training", label: "Training" },
  { to: "/resources", label: "Resources" },
  { to: "/news", label: "News" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/support", label: "Support" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5", "data-tsd-source": "/src/components/site-header.tsx:19:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", "data-tsd-source": "/src/components/site-header.tsx:20:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-10", "data-tsd-source": "/src/components/site-header.tsx:21:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-display font-bold text-xl tracking-tighter", "data-tsd-source": "/src/components/site-header.tsx:22:11", children: [
          "KIO",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", "data-tsd-source": "/src/components/site-header.tsx:23:16", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-6 text-[11px] uppercase tracking-widest font-medium", "data-tsd-source": "/src/components/site-header.tsx:25:11", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "hover:text-primary transition-colors",
            activeProps: { className: "text-primary" },
            "data-tsd-source": "/src/components/site-header.tsx:27:15",
            children: n.label
          },
          n.to
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/site-header.tsx:38:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/register",
            className: "hidden sm:inline-block bg-foreground text-background px-5 py-2 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-all active:scale-95",
            "data-tsd-source": "/src/components/site-header.tsx:39:11",
            children: "Register"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => setOpen((v) => !v), "onClick"),
            className: "md:hidden text-[11px] uppercase tracking-widest font-bold px-3 py-2 border border-foreground/10",
            "aria-label": "Toggle menu",
            "data-tsd-source": "/src/components/site-header.tsx:45:11",
            children: open ? "Close" : "Menu"
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden border-t border-foreground/5 px-6 py-4 flex flex-col gap-3 text-[12px] uppercase tracking-widest font-medium bg-background", "data-tsd-source": "/src/components/site-header.tsx:55:9", children: [
      NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), className: "py-1", "data-tsd-source": "/src/components/site-header.tsx:57:13", children: n.label }, n.to)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), className: "py-1 text-primary", "data-tsd-source": "/src/components/site-header.tsx:61:11", children: "Register" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), className: "py-1", "data-tsd-source": "/src/components/site-header.tsx:64:11", children: "Contact" })
    ] })
  ] });
}
__name(SiteHeader, "SiteHeader");
__name2(SiteHeader, "SiteHeader");
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-background px-6 py-16 border-t border-foreground/5", "data-tsd-source": "/src/components/site-footer.tsx:5:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid gap-12 md:grid-cols-12", "data-tsd-source": "/src/components/site-footer.tsx:6:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", "data-tsd-source": "/src/components/site-footer.tsx:7:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-xl tracking-tighter", "data-tsd-source": "/src/components/site-footer.tsx:8:11", children: [
        "KIO",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", "data-tsd-source": "/src/components/site-footer.tsx:9:16", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed", "data-tsd-source": "/src/components/site-footer.tsx:11:11", children: "The Kenya Informatics Olympiad — identifying and training Kenya's next generation of algorithmic thinkers for the Pan-African and International Olympiads in Informatics." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-[11px] text-muted uppercase tracking-widest", "data-tsd-source": "/src/components/site-footer.tsx:15:11", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Kenya Informatics Olympiad"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-4 text-[11px] uppercase tracking-widest font-medium", "data-tsd-source": "/src/components/site-footer.tsx:18:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "text-muted-foreground hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:19:13", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "text-muted-foreground hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:22:13", children: "Terms" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium", "data-tsd-source": "/src/components/site-footer.tsx:28:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", "data-tsd-source": "/src/components/site-footer.tsx:29:11", children: "Program" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:30:11", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/competition", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:33:11", children: "Competition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/training", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:36:11", children: "Training" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resources", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:39:11", children: "Resources" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium", "data-tsd-source": "/src/components/site-footer.tsx:44:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", "data-tsd-source": "/src/components/site-footer.tsx:45:11", children: "Engage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/news", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:46:11", children: "News" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/team", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:49:11", children: "Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:52:11", children: "Register" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:55:11", children: "Support" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary", "data-tsd-source": "/src/components/site-footer.tsx:58:11", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium", "data-tsd-source": "/src/components/site-footer.tsx:63:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", "data-tsd-source": "/src/components/site-footer.tsx:64:11", children: "Partners" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/site-footer.tsx:65:11", children: "Kenya Mathematical Olympiad" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/site-footer.tsx:66:11", children: "Summer STEM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/site-footer.tsx:67:11", children: "African Olympiad Academy" })
    ] })
  ] }) });
}
__name(SiteFooter, "SiteFooter");
__name2(SiteFooter, "SiteFooter");
function PageShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", "data-tsd-source": "/src/components/page-shell.tsx:7:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, { "data-tsd-source": "/src/components/page-shell.tsx:8:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", "data-tsd-source": "/src/components/page-shell.tsx:9:7", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, { "data-tsd-source": "/src/components/page-shell.tsx:10:7" })
  ] });
}
__name(PageShell, "PageShell");
__name2(PageShell, "PageShell");
function PageHero({
  eyebrow,
  title,
  lede
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-foreground/5", "data-tsd-source": "/src/components/page-shell.tsx:25:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-12 gap-6", "data-tsd-source": "/src/components/page-shell.tsx:26:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-9 animate-reveal", "data-tsd-source": "/src/components/page-shell.tsx:27:9", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/components/page-shell.tsx:28:11", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance mb-6", "data-tsd-source": "/src/components/page-shell.tsx:31:11", children: title }),
    lede && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-muted-foreground leading-relaxed text-lg", "data-tsd-source": "/src/components/page-shell.tsx:34:20", children: lede })
  ] }) }) });
}
__name(PageHero, "PageHero");
__name2(PageHero, "PageHero");
export {
  PageShell as P,
  PageHero as a
};
