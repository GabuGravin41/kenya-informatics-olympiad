import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-display font-bold text-xl tracking-tighter", children: [
          "KIO",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-6 text-[11px] uppercase tracking-widest font-medium", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "hover:text-primary transition-colors",
            activeProps: { className: "text-primary" },
            children: n.label
          },
          n.to
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/register",
            className: "hidden sm:inline-block bg-foreground text-background px-5 py-2 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-all active:scale-95",
            children: "Register"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen((v) => !v),
            className: "md:hidden text-[11px] uppercase tracking-widest font-bold px-3 py-2 border border-foreground/10",
            "aria-label": "Toggle menu",
            children: open ? "Close" : "Menu"
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden border-t border-foreground/5 px-6 py-4 flex flex-col gap-3 text-[12px] uppercase tracking-widest font-medium bg-background", children: [
      NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, onClick: () => setOpen(false), className: "py-1", children: n.label }, n.to)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", onClick: () => setOpen(false), className: "py-1 text-primary", children: "Register" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", onClick: () => setOpen(false), className: "py-1", children: "Contact" })
    ] })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-background px-6 py-16 border-t border-foreground/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid gap-12 md:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-xl tracking-tighter", children: [
        "KIO",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "The Kenya Informatics Olympiad — identifying and training Kenya's next generation of algorithmic thinkers for the Pan-African and International Olympiads in Informatics." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-[11px] text-muted uppercase tracking-widest", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Kenya Informatics Olympiad"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-4 text-[11px] uppercase tracking-widest font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "text-muted-foreground hover:text-primary", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "text-muted-foreground hover:text-primary", children: "Terms" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Program" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/competition", className: "hover:text-primary", children: "Competition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/training", className: "hover:text-primary", children: "Training" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resources", className: "hover:text-primary", children: "Resources" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Engage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/news", className: "hover:text-primary", children: "News" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/team", className: "hover:text-primary", children: "Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "hover:text-primary", children: "Register" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "hover:text-primary", children: "Support" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "Partners" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Kenya Mathematical Olympiad" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Summer STEM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "African Olympiad Academy" })
    ] })
  ] }) });
}
function PageShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function PageHero({
  eyebrow,
  title,
  lede
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-foreground/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-12 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-9 animate-reveal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance mb-6", children: title }),
    lede && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-muted-foreground leading-relaxed text-lg", children: lede })
  ] }) }) });
}
export {
  PageShell as P,
  PageHero as a
};
