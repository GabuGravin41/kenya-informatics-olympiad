var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PageShell, a as PageHero } from "./page-shell-BKH-XkOl.mjs";
import { A as Avatar$1, a as AvatarImage$1, b as AvatarFallback$1 } from "../_libs/radix-ui__react-avatar.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
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
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
__name(cn, "cn");
__name2(cn, "cn");
const Avatar = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Avatar$1,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = Avatar$1.displayName;
const AvatarImage = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  AvatarImage$1,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarImage$1.displayName;
const AvatarFallback = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  AvatarFallback$1,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarFallback$1.displayName;
const members = [{ "name": "TBD", "role": "Director", "org": "KIO Steering Committee", "initials": "KS", "image": "" }, { "name": "TBD", "role": "Academic Lead", "org": "Olympiad Problem-Setting Committee", "initials": "PS", "image": "" }, { "name": "TBD", "role": "Head Coach", "org": "Selection & Training Camp", "initials": "HC", "image": "" }, { "name": "TBD", "role": "Operations", "org": "Logistics, venues, scholarships", "initials": "OP", "image": "" }, { "name": "TBD", "role": "Partner Liaison", "org": "KMO · Summer STEM · AOA", "initials": "PL", "image": "" }, { "name": "TBD", "role": "Schools Outreach", "org": "Regional coordinators across Kenya", "initials": "SO", "image": "" }];
const teamData = {
  members
};
const TEAM = teamData.members;
function TeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { "data-tsd-source": "/src/routes/team.tsx:12:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Team", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Coaches, problem-setters, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "organisers." })
    ] }), lede: "KIO is run by a volunteer steering committee drawn from Kenyan universities, secondary school educators, alumni of the Kenya Mathematical Olympiad, and partner programs across the continent.", "data-tsd-source": "/src/routes/team.tsx:13:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-tsd-source": "/src/routes/team.tsx:18:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", "data-tsd-source": "/src/routes/team.tsx:19:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10", "data-tsd-source": "/src/routes/team.tsx:20:11", children: TEAM.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 flex items-start gap-5", "data-tsd-source": "/src/routes/team.tsx:21:33", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-16 w-16 rounded-md shrink-0", "data-tsd-source": "/src/routes/team.tsx:22:17", children: [
          m.image && /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: m.image, alt: m.name, "data-tsd-source": "/src/routes/team.tsx:23:31" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "rounded-md bg-primary/10 text-primary font-display font-bold text-lg", "data-tsd-source": "/src/routes/team.tsx:24:19", children: m.initials })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/team.tsx:29:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-1", "data-tsd-source": "/src/routes/team.tsx:30:19", children: m.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold truncate", "data-tsd-source": "/src/routes/team.tsx:33:19", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/team.tsx:36:19", children: m.org })
        ] })
      ] }, `${m.role}-${i}`)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 border-t border-foreground/10 pt-12 max-w-2xl", "data-tsd-source": "/src/routes/team.tsx:43:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-4", "data-tsd-source": "/src/routes/team.tsx:44:13", children: "Get involved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/team.tsx:47:13", children: "We're actively recruiting coaches, problem-setters, and regional coordinators for the 2026 cycle. If you have competitive programming experience — or simply want to help run a national olympiad — we'd love to hear from you." })
      ] })
    ] }) })
  ] });
}
__name(TeamPage, "TeamPage");
__name2(TeamPage, "TeamPage");
export {
  TeamPage as component
};
