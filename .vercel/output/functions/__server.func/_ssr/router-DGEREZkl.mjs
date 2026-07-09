import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-Btpsclkt.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", children: "404 // Not Found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-6xl font-bold tracking-tight text-foreground", children: "Off the syllabus." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center bg-foreground text-background px-6 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-colors",
        children: "Return home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", children: "Runtime Error" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold tracking-tight text-foreground", children: "This page didn't load." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Something went wrong on our end. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "bg-foreground text-background px-6 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-colors",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "border border-foreground/10 px-6 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-foreground/5 transition-colors",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$g = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kenya Informatics Olympiad — KIO" },
      {
        name: "description",
        content: "The Kenya Informatics Olympiad (KIO) identifies and trains Kenya's brightest young algorithmic thinkers for the Pan-African and International Olympiads in Informatics."
      },
      { name: "author", content: "Kenya Informatics Olympiad" },
      { property: "og:site_name", content: "Kenya Informatics Olympiad" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0F172A" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$g.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$c = () => import("./training-BcbUYNJa.mjs");
const Route$f = createFileRoute("/training")({
  head: () => ({
    meta: [{
      title: "Training & Resources — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "Curated training resources, problem archives, judges, and learning paths for KIO contestants — from beginner to IOI-level algorithmic problem solving."
    }, {
      property: "og:title",
      content: "Training & Resources — KIO"
    }, {
      property: "og:description",
      content: "Learning paths, problem archives, and the tools KIO contestants use to train."
    }, {
      property: "og:url",
      content: "/training"
    }],
    links: [{
      rel: "canonical",
      href: "/training"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./terms-D8JxA8if.mjs");
const Route$e = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms of Use — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "Terms under which the Kenya Informatics Olympiad website, competitions, and training programme are offered."
    }, {
      property: "og:title",
      content: "Terms of Use — KIO"
    }, {
      property: "og:description",
      content: "Terms of use for the KIO website, competitions, and training programme."
    }, {
      property: "og:url",
      content: "/terms"
    }],
    links: [{
      rel: "canonical",
      href: "/terms"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./team-CJsQ3PNN.mjs");
const Route$d = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Team — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "The leadership, coaches, and academic committee behind the Kenya Informatics Olympiad, working alongside the Kenya Mathematical Olympiad, Summer STEM, and African Olympiad Academy."
    }, {
      property: "og:title",
      content: "Team — KIO"
    }, {
      property: "og:description",
      content: "The people building Kenya's national informatics olympiad."
    }, {
      property: "og:url",
      content: "/team"
    }],
    links: [{
      rel: "canonical",
      href: "/team"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./support-hWGLK47-.mjs");
const Route$c = createFileRoute("/support")({
  head: () => ({
    meta: [{
      title: "Support & Donations — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "Support the Kenya Informatics Olympiad. Donate, sponsor, or partner with KIO to fund training camps, contests, and the national team's road to PAIO and IOI."
    }, {
      property: "og:title",
      content: "Support KIO"
    }, {
      property: "og:description",
      content: "Donate or partner with the Kenya Informatics Olympiad to develop Kenya's algorithmic talent."
    }, {
      property: "og:url",
      content: "/support"
    }],
    links: [{
      rel: "canonical",
      href: "/support"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const BASE_URL = "";
const Route$b = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/competition", changefreq: "monthly", priority: "0.9" },
          { path: "/training", changefreq: "monthly", priority: "0.8" },
          { path: "/resources", changefreq: "monthly", priority: "0.7" },
          { path: "/news", changefreq: "weekly", priority: "0.9" },
          { path: "/events", changefreq: "monthly", priority: "0.7" },
          { path: "/team", changefreq: "monthly", priority: "0.6" },
          { path: "/register", changefreq: "weekly", priority: "0.9" },
          { path: "/support", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.5" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" }
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$8 = () => import("./resources-DZERWYQo.mjs");
const Route$a = createFileRoute("/resources")({
  head: () => ({
    meta: [{
      title: "Resources — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "Curated learning resources for competitive programming: online judges, tutorials, and tools to prepare for the Kenya Informatics Olympiad."
    }, {
      property: "og:title",
      content: "Resources — KIO"
    }, {
      property: "og:description",
      content: "Platforms, guides, and tools to prepare for the Kenya Informatics Olympiad."
    }, {
      property: "og:url",
      content: "/resources"
    }],
    links: [{
      rel: "canonical",
      href: "/resources"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./register-DtcT9Hxh.mjs");
const Route$9 = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Register — Kenya Informatics Olympiad 2026"
    }, {
      name: "description",
      content: "Register for the Kenya Informatics Olympiad 2026 cycle. Open to all Kenyan secondary school students. Open Round qualifier in March 2026."
    }, {
      property: "og:title",
      content: "Register — KIO 2026"
    }, {
      property: "og:description",
      content: "Sign up for the Kenya Informatics Olympiad 2026 cycle."
    }, {
      property: "og:url",
      content: "/register"
    }],
    links: [{
      rel: "canonical",
      href: "/register"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./privacy-Bz8EscCO.mjs");
const Route$8 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "How the Kenya Informatics Olympiad collects, uses, and protects personal information from students, schools, donors, and partners."
    }, {
      property: "og:title",
      content: "Privacy Policy — KIO"
    }, {
      property: "og:description",
      content: "How KIO handles personal information collected via registration and donations."
    }, {
      property: "og:url",
      content: "/privacy"
    }],
    links: [{
      rel: "canonical",
      href: "/privacy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./news-C6LxeL8O.mjs");
const Route$7 = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "News & Events — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "Announcements, results, and the official event calendar for the Kenya Informatics Olympiad. Pan-African Informatics Olympiad July 2026, team selection camps, and more."
    }, {
      property: "og:title",
      content: "News & Events — KIO"
    }, {
      property: "og:description",
      content: "KIO announcements and the road to the Pan-African Informatics Olympiad 2026."
    }, {
      property: "og:url",
      content: "/news"
    }],
    links: [{
      rel: "canonical",
      href: "/news"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./events-DazCUjE_.mjs");
const Route$6 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Past Events — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "A record of past KIO events — training camps, competitions, school visits, and continental appearances. Photos, reports, and reflections from each gathering."
    }, {
      property: "og:title",
      content: "Past Events — KIO"
    }, {
      property: "og:description",
      content: "Reports, galleries, and reflections from past KIO events."
    }, {
      property: "og:url",
      content: "/events"
    }],
    links: [{
      rel: "canonical",
      href: "/events"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-CbYKx3m1.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "Get in touch with the Kenya Informatics Olympiad — for schools, sponsors, press, and prospective coaches."
    }, {
      property: "og:title",
      content: "Contact — KIO"
    }, {
      property: "og:description",
      content: "Reach the Kenya Informatics Olympiad team."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./competition-CINj0D2U.mjs");
const Route$4 = createFileRoute("/competition")({
  head: () => ({
    meta: [{
      title: "Competition — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "Structure, syllabus, eligibility, and rules for the Kenya Informatics Olympiad national selection process — three rounds leading to the Pan-African and International Olympiads."
    }, {
      property: "og:title",
      content: "Competition Structure — KIO"
    }, {
      property: "og:description",
      content: "Three rounds, one syllabus, a clear path from school to the international stage."
    }, {
      property: "og:url",
      content: "/competition"
    }],
    links: [{
      rel: "canonical",
      href: "/competition"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-C-RkYQu0.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Kenya Informatics Olympiad"
    }, {
      name: "description",
      content: "Learn about the Kenya Informatics Olympiad (KIO): our mission, history, and partner ecosystem alongside the Kenya Mathematical Olympiad, Summer STEM, and African Olympiad Academy."
    }, {
      property: "og:title",
      content: "About — KIO"
    }, {
      property: "og:description",
      content: "The national olympiad for competitive informatics in Kenya — mission, structure, and partners."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dtog-0Pf.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Kenya Informatics Olympiad — Road to PAIO 2026"
    }, {
      name: "description",
      content: "KIO is the national olympiad for competitive programming and algorithmic thinking in Kenya. Registration open for the 2026 cycle and Pan-African Informatics Olympiad team selection."
    }, {
      property: "og:title",
      content: "Kenya Informatics Olympiad"
    }, {
      property: "og:description",
      content: "Identifying and training Kenya's brightest young algorithmic thinkers. Road to PAIO July 2026."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const Route$1 = createFileRoute("/api/auth/token")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const corsHeaders = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        };
        let body;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid request body" }), {
            status: 400,
            headers: corsHeaders
          });
        }
        const { code, state } = body;
        if (!code) {
          return new Response(JSON.stringify({ error: "Missing authorization code" }), {
            status: 400,
            headers: corsHeaders
          });
        }
        const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
        const clientSecret = process.env.GITHUB_CLIENT_SECRET;
        if (!clientId || !clientSecret) {
          console.error("[/api/auth/token] Missing GitHub OAuth environment variables");
          return new Response(
            JSON.stringify({ error: "Server misconfiguration: missing GitHub credentials" }),
            { status: 500, headers: corsHeaders }
          );
        }
        try {
          const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              client_id: clientId,
              client_secret: clientSecret,
              code,
              ...state ? { state } : {}
            })
          });
          const tokenData = await tokenResponse.json();
          if (tokenData.error) {
            const msg = tokenData.error_description || tokenData.error;
            console.error("[/api/auth/token] GitHub error:", msg);
            return new Response(JSON.stringify({ error: msg }), {
              status: 401,
              headers: corsHeaders
            });
          }
          if (!tokenData.access_token) {
            return new Response(JSON.stringify({ error: "Empty token returned by GitHub" }), {
              status: 502,
              headers: corsHeaders
            });
          }
          return new Response(JSON.stringify({ token: tokenData.access_token }), {
            status: 200,
            headers: corsHeaders
          });
        } catch (err) {
          console.error("[/api/auth/token] Fetch error:", err);
          return new Response(
            JSON.stringify({ error: `Network error contacting GitHub: ${err?.message}` }),
            { status: 502, headers: corsHeaders }
          );
        }
      },
      // Handle preflight CORS requests
      OPTIONS: async () => {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
          }
        });
      }
    }
  }
});
const Route = createFileRoute("/api/auth/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url, "https://kenya-informatics-olympiad.vercel.app");
        const state = url.searchParams.get("state") || Math.random().toString(36).substring(2, 15);
        const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
        if (!clientId) {
          console.error("[/api/auth/callback] Missing VITE_GITHUB_CLIENT_ID");
          return new Response("Server configuration error: missing GitHub Client ID", {
            status: 500,
            headers: { "Content-Type": "text/plain" }
          });
        }
        const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
        authorizeUrl.searchParams.set("client_id", clientId);
        authorizeUrl.searchParams.set("scope", "repo,user");
        authorizeUrl.searchParams.set("state", state);
        return new Response(null, {
          status: 302,
          headers: { Location: authorizeUrl.toString() }
        });
      }
    }
  }
});
const TrainingRoute = Route$f.update({
  id: "/training",
  path: "/training",
  getParentRoute: () => Route$g
});
const TermsRoute = Route$e.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$g
});
const TeamRoute = Route$d.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$g
});
const SupportRoute = Route$c.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => Route$g
});
const SitemapDotxmlRoute = Route$b.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$g
});
const ResourcesRoute = Route$a.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$g
});
const RegisterRoute = Route$9.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$g
});
const PrivacyRoute = Route$8.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$g
});
const NewsRoute = Route$7.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$g
});
const EventsRoute = Route$6.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$g
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$g
});
const CompetitionRoute = Route$4.update({
  id: "/competition",
  path: "/competition",
  getParentRoute: () => Route$g
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$g
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$g
});
const ApiAuthTokenRoute = Route$1.update({
  id: "/api/auth/token",
  path: "/api/auth/token",
  getParentRoute: () => Route$g
});
const ApiAuthCallbackRoute = Route.update({
  id: "/api/auth/callback",
  path: "/api/auth/callback",
  getParentRoute: () => Route$g
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CompetitionRoute,
  ContactRoute,
  EventsRoute,
  NewsRoute,
  PrivacyRoute,
  RegisterRoute,
  ResourcesRoute,
  SitemapDotxmlRoute,
  SupportRoute,
  TeamRoute,
  TermsRoute,
  TrainingRoute,
  ApiAuthCallbackRoute,
  ApiAuthTokenRoute
};
const routeTree = Route$g._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
