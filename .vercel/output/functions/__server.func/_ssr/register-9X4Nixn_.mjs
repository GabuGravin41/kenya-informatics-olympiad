var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
function RegisterPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { "data-tsd-source": "/src/routes/register.tsx:5:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Cycle 2026 // Registration Open", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Take your seat for ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "the Open Round." })
    ] }), lede: "Registration is free and open to every Kenyan secondary school student. We will email you contest credentials, practice problems, and venue information in the weeks leading up to the Open Round.", "data-tsd-source": "/src/routes/register.tsx:6:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", "data-tsd-source": "/src/routes/register.tsx:11:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-6", "data-tsd-source": "/src/routes/register.tsx:12:9", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-foreground/10 p-10 text-center", "data-tsd-source": "/src/routes/register.tsx:13:24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-4", "data-tsd-source": "/src/routes/register.tsx:14:15", children: "Registration received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold mb-4", "data-tsd-source": "/src/routes/register.tsx:17:15", children: "See you at the Open Round." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/register.tsx:18:15", children: "We've recorded your interest in Cycle 2026. A confirmation email with next steps will follow shortly." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: /* @__PURE__ */ __name2((e) => {
      e.preventDefault();
      setSubmitted(true);
    }, "onSubmit"), className: "space-y-8 border border-foreground/10 p-8 md:p-10", "data-tsd-source": "/src/routes/register.tsx:22:22", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Full name", name: "name", required: true, "data-tsd-source": "/src/routes/register.tsx:26:15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Email", name: "email", type: "email", required: true, "data-tsd-source": "/src/routes/register.tsx:27:15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Date of birth", name: "dob", type: "date", required: true, "data-tsd-source": "/src/routes/register.tsx:28:15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "School name", name: "school", required: true, "data-tsd-source": "/src/routes/register.tsx:29:15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "County", name: "county", required: true, "data-tsd-source": "/src/routes/register.tsx:30:15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", "data-tsd-source": "/src/routes/register.tsx:31:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest font-bold text-muted-foreground", "data-tsd-source": "/src/routes/register.tsx:32:17", children: "Programming experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "experience", className: "bg-transparent border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-primary", required: true, "data-tsd-source": "/src/routes/register.tsx:35:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/routes/register.tsx:36:19", children: "Select…" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/register.tsx:37:19", children: "None — total beginner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/register.tsx:38:19", children: "Some — I've written small programs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/register.tsx:39:19", children: "Intermediate — I've solved algorithm problems" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/register.tsx:40:19", children: "Advanced — I compete regularly" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all", "data-tsd-source": "/src/routes/register.tsx:43:15", children: "Submit registration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/register.tsx:46:15", children: "By registering you agree to the KIO code of conduct. Personal details are used solely for competition logistics." })
    ] }) }) })
  ] });
}
__name(RegisterPage, "RegisterPage");
__name2(RegisterPage, "RegisterPage");
function FormField({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", "data-tsd-source": "/src/routes/register.tsx:66:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-[10px] uppercase tracking-widest font-bold text-muted-foreground", "data-tsd-source": "/src/routes/register.tsx:67:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "bg-transparent border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-primary", "data-tsd-source": "/src/routes/register.tsx:70:7" })
  ] });
}
__name(FormField, "FormField");
__name2(FormField, "FormField");
export {
  RegisterPage as component
};
