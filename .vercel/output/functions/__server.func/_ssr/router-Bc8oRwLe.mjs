import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DkyGmCH3.mjs";
import { g as getSession, b as buildClearCookie, a as buildSetCookie } from "./session-DiUO9xOm.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-eG7PJUws.css";
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
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", children: "Runtime Error" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold tracking-tight text-foreground", children: "This page didn't load." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Something went wrong on our end. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
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
const Route$k = createRootRouteWithContext()({
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
  const { queryClient } = Route$k.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$d = () => import("./training-BcbUYNJa.mjs");
const Route$j = createFileRoute("/training")({
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
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./terms-D8JxA8if.mjs");
const Route$i = createFileRoute("/terms")({
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
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./team-CJsQ3PNN.mjs");
const Route$h = createFileRoute("/team")({
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
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./support-hWGLK47-.mjs");
const Route$g = createFileRoute("/support")({
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
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const BASE_URL = "";
const Route$f = createFileRoute("/sitemap.xml")({
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
const $$splitComponentImporter$9 = () => import("./resources-DZERWYQo.mjs");
const Route$e = createFileRoute("/resources")({
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
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./register-DtcT9Hxh.mjs");
const Route$d = createFileRoute("/register")({
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
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./privacy-Bz8EscCO.mjs");
const Route$c = createFileRoute("/privacy")({
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
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./news-C6LxeL8O.mjs");
const Route$b = createFileRoute("/news")({
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
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./events-DazCUjE_.mjs");
const Route$a = createFileRoute("/events")({
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
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-CbYKx3m1.mjs");
const Route$9 = createFileRoute("/contact")({
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
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./competition-CINj0D2U.mjs");
const Route$8 = createFileRoute("/competition")({
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
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const $$splitComponentImporter$2 = () => import("./admin-BTTA4445.mjs");
const checkSession = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f98cc289e24012ae518ca8d45587a54ab715cd67138b8db7ad8200f169da4cc0"));
const Route$7 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "KIO Admin"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  loader: async () => {
    return await checkSession();
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-C-RkYQu0.mjs");
const Route$6 = createFileRoute("/about")({
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
const Route$5 = createFileRoute("/")({
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
const REPO = "GabuGravin41/kenya-informatics-olympiad";
const BRANCH = "main";
const API_BASE = "https://api.github.com";
const CONTENT_FILES = {
  site: "src/content/site.json",
  team: "src/content/team.json",
  news: "src/content/news.json",
  events: "src/content/events.json",
  support: "src/content/support.json",
  resources: "src/content/resources.json"
};
function githubHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json"
  };
}
async function readContentFile(token, key) {
  const path = CONTENT_FILES[key];
  const url = `${API_BASE}/repos/${REPO}/contents/${path}?ref=${BRANCH}`;
  const res = await fetch(url, { headers: githubHeaders(token) });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API error reading ${path}: ${res.status} ${body}`);
  }
  const file = await res.json();
  const decoded = Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
  return { data: JSON.parse(decoded), sha: file.sha };
}
async function writeContentFile(token, key, data, sha, commitMessage) {
  const path = CONTENT_FILES[key];
  const url = `${API_BASE}/repos/${REPO}/contents/${path}`;
  const content = Buffer.from(JSON.stringify(data, null, 2) + "\n").toString("base64");
  const res = await fetch(url, {
    method: "PUT",
    headers: githubHeaders(token),
    body: JSON.stringify({
      message: commitMessage ?? `cms: update ${key}`,
      content,
      sha,
      branch: BRANCH
    })
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API error writing ${path}: ${res.status} ${body}`);
  }
}
async function getGitHubUser(token) {
  const res = await fetch(`${API_BASE}/user`, { headers: githubHeaders(token) });
  if (!res.ok) throw new Error(`GitHub API error fetching user: ${res.status}`);
  return res.json();
}
const Route$4 = createFileRoute("/api/admin/me")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const json = (body, status = 200) => new Response(JSON.stringify(body), {
          status,
          headers: { "Content-Type": "application/json" }
        });
        const token = await getSession(request);
        if (!token) return json({ error: "Unauthorized" }, 401);
        try {
          const user = await getGitHubUser(token);
          return json({ login: user.login, name: user.name, avatar_url: user.avatar_url });
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          return json({ error: message }, 502);
        }
      }
    }
  }
});
const Route$3 = createFileRoute("/api/admin/content/$file")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const json = (body, status = 200) => new Response(JSON.stringify(body), {
          status,
          headers: { "Content-Type": "application/json" }
        });
        const token = await getSession(request);
        if (!token) return json({ error: "Unauthorized" }, 401);
        const key = params.file;
        if (!CONTENT_FILES[key]) return json({ error: `Unknown content file: ${key}` }, 404);
        try {
          const { data, sha } = await readContentFile(token, key);
          return json({ data, sha });
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          return json({ error: message }, 502);
        }
      },
      PUT: async ({ request, params }) => {
        const json = (body2, status = 200) => new Response(JSON.stringify(body2), {
          status,
          headers: { "Content-Type": "application/json" }
        });
        const token = await getSession(request);
        if (!token) return json({ error: "Unauthorized" }, 401);
        const key = params.file;
        if (!CONTENT_FILES[key]) return json({ error: `Unknown content file: ${key}` }, 404);
        let body;
        try {
          body = await request.json();
        } catch {
          return json({ error: "Invalid JSON body" }, 400);
        }
        if (!body.sha) return json({ error: "Missing sha field" }, 400);
        try {
          await writeContentFile(token, key, body.data, body.sha, body.message);
          return json({ ok: true });
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          return json({ error: message }, 502);
        }
      }
    }
  }
});
const Route$2 = createFileRoute("/api/admin/auth/logout")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(null, {
          status: 302,
          headers: {
            Location: "/admin",
            "Set-Cookie": buildClearCookie()
          }
        });
      }
    }
  }
});
const Route$1 = createFileRoute("/api/admin/auth/login")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
        if (!clientId) {
          return new Response("Server error: GITHUB_CLIENT_ID not set", {
            status: 500,
            headers: { "Content-Type": "text/plain" }
          });
        }
        const state = crypto.randomUUID();
        const stateCookie = `kio_oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600`;
        const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
        authorizeUrl.searchParams.set("client_id", clientId);
        authorizeUrl.searchParams.set("scope", "repo");
        authorizeUrl.searchParams.set("state", state);
        return new Response(null, {
          status: 302,
          headers: {
            Location: authorizeUrl.toString(),
            "Set-Cookie": stateCookie
          }
        });
      }
    }
  }
});
const Route = createFileRoute("/api/admin/auth/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const code = url.searchParams.get("code");
        const state = url.searchParams.get("state");
        function errorPage(msg) {
          return new Response(
            `<!doctype html><html><head><title>Auth Error</title>
            <style>body{font-family:system-ui;background:#0f172a;color:#f1f5f9;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
            .card{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:40px;max-width:480px;text-align:center}
            h1{color:#f87171;margin-bottom:16px}p{color:#94a3b8;font-size:14px;line-height:1.6}
            a{color:#38bdf8;text-decoration:none;margin-top:20px;display:inline-block}</style></head>
            <body><div class="card"><h1>Authentication Failed</h1><p>${msg}</p>
            <a href="/admin">← Back to Admin</a></div></body></html>`,
            { status: 400, headers: { "Content-Type": "text/html" } }
          );
        }
        if (!code) return errorPage("No authorization code received from GitHub.");
        const cookieHeader = request.headers.get("cookie") || "";
        const cookies = Object.fromEntries(
          cookieHeader.split(";").map((c) => {
            const [k, ...v] = c.trim().split("=");
            return [k.trim(), v.join("=").trim()];
          })
        );
        const savedState = cookies["kio_oauth_state"];
        if (!savedState || savedState !== state) {
          return errorPage("OAuth state mismatch. Please try signing in again.");
        }
        const clientId = process.env.VITE_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
        const clientSecret = process.env.GITHUB_CLIENT_SECRET;
        if (!clientId || !clientSecret) {
          return errorPage("Server misconfiguration: missing GitHub credentials.");
        }
        let tokenData;
        try {
          const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
          });
          tokenData = await tokenRes.json();
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          return errorPage(`Network error contacting GitHub: ${message}`);
        }
        if (tokenData.error || !tokenData.access_token) {
          return errorPage(tokenData.error_description || tokenData.error || "Unknown error from GitHub.");
        }
        const sessionCookie = await buildSetCookie(tokenData.access_token);
        const clearStateCookie = `kio_oauth_state=; Path=/api/admin/auth; HttpOnly; SameSite=Lax; Max-Age=0`;
        return new Response(null, {
          status: 302,
          headers: new Headers([
            ["Location", "/admin"],
            ["Set-Cookie", sessionCookie],
            ["Set-Cookie", clearStateCookie]
          ])
        });
      }
    }
  }
});
const TrainingRoute = Route$j.update({
  id: "/training",
  path: "/training",
  getParentRoute: () => Route$k
});
const TermsRoute = Route$i.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$k
});
const TeamRoute = Route$h.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$k
});
const SupportRoute = Route$g.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => Route$k
});
const SitemapDotxmlRoute = Route$f.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$k
});
const ResourcesRoute = Route$e.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$k
});
const RegisterRoute = Route$d.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$k
});
const PrivacyRoute = Route$c.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$k
});
const NewsRoute = Route$b.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$k
});
const EventsRoute = Route$a.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$k
});
const ContactRoute = Route$9.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$k
});
const CompetitionRoute = Route$8.update({
  id: "/competition",
  path: "/competition",
  getParentRoute: () => Route$k
});
const AdminRoute = Route$7.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$k
});
const AboutRoute = Route$6.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$k
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$k
});
const ApiAdminMeRoute = Route$4.update({
  id: "/api/admin/me",
  path: "/api/admin/me",
  getParentRoute: () => Route$k
});
const ApiAdminContentFileRoute = Route$3.update({
  id: "/api/admin/content/$file",
  path: "/api/admin/content/$file",
  getParentRoute: () => Route$k
});
const ApiAdminAuthLogoutRoute = Route$2.update({
  id: "/api/admin/auth/logout",
  path: "/api/admin/auth/logout",
  getParentRoute: () => Route$k
});
const ApiAdminAuthLoginRoute = Route$1.update({
  id: "/api/admin/auth/login",
  path: "/api/admin/auth/login",
  getParentRoute: () => Route$k
});
const ApiAdminAuthCallbackRoute = Route.update({
  id: "/api/admin/auth/callback",
  path: "/api/admin/auth/callback",
  getParentRoute: () => Route$k
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
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
  ApiAdminMeRoute,
  ApiAdminAuthCallbackRoute,
  ApiAdminAuthLoginRoute,
  ApiAdminAuthLogoutRoute,
  ApiAdminContentFileRoute
};
const routeTree = Route$k._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$7 as R,
  router as r
};
