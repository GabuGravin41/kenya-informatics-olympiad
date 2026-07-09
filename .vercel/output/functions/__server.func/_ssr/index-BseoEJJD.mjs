var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageShell } from "./page-shell-BKH-XkOl.mjs";
import { S as SmartLink } from "./smart-link-512TAwVv.mjs";
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
function SponsorLogo({ sponsor }) {
  const content = sponsor.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: sponsor.logo,
      alt: sponsor.name,
      loading: "lazy",
      className: "h-12 w-auto max-w-[180px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0",
      "data-tsd-source": "/src/components/sponsor-marquee.tsx:9:5"
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg tracking-tighter text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap", "data-tsd-source": "/src/components/sponsor-marquee.tsx:16:5", children: sponsor.name });
  if (sponsor.url) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: sponsor.url,
        target: "_blank",
        rel: "noreferrer noopener",
        className: "shrink-0 flex items-center",
        title: sponsor.name,
        "data-tsd-source": "/src/components/sponsor-marquee.tsx:23:7",
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex items-center", title: sponsor.name, "data-tsd-source": "/src/components/sponsor-marquee.tsx:36:5", children: content });
}
__name(SponsorLogo, "SponsorLogo");
__name2(SponsorLogo, "SponsorLogo");
function SponsorMarquee({ items }) {
  if (!items.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "group relative overflow-hidden",
      style: {
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
      },
      "data-tsd-source": "/src/components/sponsor-marquee.tsx:46:5",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]", "data-tsd-source": "/src/components/sponsor-marquee.tsx:53:7", children: [0, 1].map((copy) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": copy === 1,
          className: "flex shrink-0 items-center gap-16 pr-16",
          "data-tsd-source": "/src/components/sponsor-marquee.tsx:55:11",
          children: items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorLogo, { sponsor: s, "data-tsd-source": "/src/components/sponsor-marquee.tsx:61:15" }, `${copy}-${s.name}-${i}`))
        },
        copy
      )) })
    }
  );
}
__name(SponsorMarquee, "SponsorMarquee");
__name2(SponsorMarquee, "SponsorMarquee");
const heroImg = "/assets/hero-contestant-DGp2tE2p.jpg";
const hero = { "eyebrow": "Cycle 2026 // Now Open", "titleLine1": "Kenya", "titleLine2": "Informatics", "titleLine3": "Olympiad", "lede": "Nurturing the next generation of computational thinkers. From logic puzzles to complex algorithms, we identify Kenya's brightest technical minds and prepare them for the world stage.", "primaryCta": "Register 2026", "secondaryCta": "Learn more" };
const paioCard = { "eyebrow": "Upcoming Event // 07.2026", "title": "Pan-African Informatics Olympiad", "body": "KIO will represent the nation at PAIO 2026 this July. Intense training camps for shortlisted candidates begin in May.", "cta": "View Event Roadmap →" };
const announcements = { "eyebrow": "Announcements", "heading": "Latest updates", "items": [{ "date": "01 Feb 2026", "tag": "Registration", "title": "Cycle 2026 registration is open", "body": "The Open Round qualifier runs online in March 2026 and is free for every Kenyan secondary school student.", "link": "/register", "linkLabel": "Register now →" }, { "date": "15 Jan 2026", "tag": "Camp", "title": "Team Selection Camp dates confirmed", "body": "The 10-day selection camp for the top ~30 contestants will run 15–25 June 2026 in Nairobi.", "link": "/news", "linkLabel": "See the calendar →" }] };
const mission = { "eyebrow": "The Mission", "heading": "Building Kenya's algorithmic talent — one solved problem at a time.", "paragraphs": ["KIO is the national selection and training pipeline for competitive informatics in Kenya. We work alongside the Kenya Mathematical Olympiad, Summer STEM, and the African Olympiad Academy to give exceptional students a path from secondary school to the global olympiad stage.", "Our 2026 cohort is preparing for the Pan-African Informatics Olympiad in July — and the road to IOI beyond."] };
const pillars = [{ "n": "01", "title": "High-Stakes Competition", "body": "Rigorous multi-round selection modeled after International Olympiad standards to find the top 1% of student coders nationwide." }, { "n": "02", "title": "Algorithmic Excellence", "body": "Focused training on data structures, graph theory, dynamic programming, and computational geometry. Beyond syntax — we teach problem solving." }, { "n": "03", "title": "Global Benchmarking", "body": "Connecting Kenyan students to the Pan-African and International Informatics community through official olympiad circuits." }];
const stats = [{ "k": "3", "v": "Rounds of national selection" }, { "k": "35+", "v": "Partner secondary schools" }, { "k": "4", "v": "Contestants to PAIO 2026" }, { "k": "July", "v": "Pan-African Olympiad" }];
const sponsors = { "eyebrow": "Sponsors & Supporters", "heading": "Powered by our partners", "lede": "Organisations and institutions helping put Kenya on the global informatics stage.", "items": [{ "name": "Kenya Mathematical Olympiad", "logo": "", "url": "" }, { "name": "Summer STEM", "logo": "", "url": "" }, { "name": "African Olympiad Academy", "logo": "", "url": "" }, { "name": "Ministry of Education", "logo": "", "url": "" }] };
const donateBand = { "eyebrow": "Support KIO", "heading": "Help send Kenya's best to the world stage.", "body": "KIO is run by volunteers and powered by donations. Your support funds training camps, contest infrastructure, and travel for our national team.", "button": "Donate & partner →" };
const cta = { "eyebrow": "Cycle 2026", "headingLead": "Think you've got what it takes?", "headingAccent": "Register today.", "button": "Begin registration →" };
const site = {
  hero,
  paioCard,
  announcements,
  mission,
  pillars,
  stats,
  sponsors,
  donateBand,
  cta
};
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { "data-tsd-source": "/src/routes/index.tsx:8:10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", "data-tsd-source": "/src/routes/index.tsx:10:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 pt-20 pb-28 grid grid-cols-12 gap-6", "data-tsd-source": "/src/routes/index.tsx:11:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-8 animate-reveal", "data-tsd-source": "/src/routes/index.tsx:12:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/index.tsx:13:13", children: site.hero.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] text-balance mb-8", "data-tsd-source": "/src/routes/index.tsx:16:13", children: [
          site.hero.titleLine1,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { "data-tsd-source": "/src/routes/index.tsx:17:38" }),
          site.hero.titleLine2,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { "data-tsd-source": "/src/routes/index.tsx:18:38" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", "data-tsd-source": "/src/routes/index.tsx:19:15", children: site.hero.titleLine3 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-lg text-muted-foreground leading-relaxed text-lg mb-10", "data-tsd-source": "/src/routes/index.tsx:21:13", children: site.hero.lede }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", "data-tsd-source": "/src/routes/index.tsx:24:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "px-8 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all", "data-tsd-source": "/src/routes/index.tsx:25:15", children: site.hero.primaryCta }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "px-8 py-4 border border-foreground/10 font-bold text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all", "data-tsd-source": "/src/routes/index.tsx:28:15", children: site.hero.secondaryCta })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-4 mt-12 lg:mt-0 animate-reveal [animation-delay:200ms]", "data-tsd-source": "/src/routes/index.tsx:35:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent text-accent-foreground p-8 relative overflow-hidden h-full", "data-tsd-source": "/src/routes/index.tsx:36:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col h-full", "data-tsd-source": "/src/routes/index.tsx:37:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest opacity-60 mb-8", "data-tsd-source": "/src/routes/index.tsx:38:17", children: site.paioCard.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold leading-tight mb-4", "data-tsd-source": "/src/routes/index.tsx:41:17", children: site.paioCard.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70 mb-8", "data-tsd-source": "/src/routes/index.tsx:44:17", children: site.paioCard.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/news", className: "mt-auto inline-block border-b border-current/30 pb-1 text-sm self-start hover:border-current transition-colors", "data-tsd-source": "/src/routes/index.tsx:45:17", children: site.paioCard.cta })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -bottom-12 opacity-10 font-display text-[10rem] leading-none font-bold pointer-events-none", "data-tsd-source": "/src/routes/index.tsx:49:15", children: "PAIO" })
      ] }) })
    ] }) }),
    site.announcements.items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-foreground/5 bg-secondary/30", "data-tsd-source": "/src/routes/index.tsx:58:47", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16", "data-tsd-source": "/src/routes/index.tsx:59:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-10", "data-tsd-source": "/src/routes/index.tsx:60:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/index.tsx:61:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-3", "data-tsd-source": "/src/routes/index.tsx:62:17", children: site.announcements.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold tracking-tight", "data-tsd-source": "/src/routes/index.tsx:65:17", children: site.announcements.heading })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/news", className: "text-[11px] uppercase tracking-widest font-bold hover:text-primary transition-colors", "data-tsd-source": "/src/routes/index.tsx:69:15", children: "All news →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", "data-tsd-source": "/src/routes/index.tsx:73:13", children: site.announcements.items.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-foreground/10 p-6 flex flex-col animate-reveal", style: {
        animationDelay: `${i * 80}ms`
      }, "data-tsd-source": "/src/routes/index.tsx:74:55", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", "data-tsd-source": "/src/routes/index.tsx:77:19", children: [
          a.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest px-2 py-0.5 font-bold bg-primary/10 text-primary", "data-tsd-source": "/src/routes/index.tsx:78:31", children: a.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/routes/index.tsx:81:21", children: a.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold mb-3", "data-tsd-source": "/src/routes/index.tsx:85:19", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", "data-tsd-source": "/src/routes/index.tsx:86:19", children: a.body }),
        a.link && a.linkLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(SmartLink, { to: a.link, className: "mt-auto text-sm font-bold text-primary border-b border-primary/30 pb-1 self-start hover:border-primary transition-colors", "data-tsd-source": "/src/routes/index.tsx:87:45", children: a.linkLabel })
      ] }, `${a.title}-${i}`)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-foreground/5 bg-secondary/40", "data-tsd-source": "/src/routes/index.tsx:96:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-6 items-center", "data-tsd-source": "/src/routes/index.tsx:97:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-6", "data-tsd-source": "/src/routes/index.tsx:98:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "A Kenyan student focused on competitive programming", width: 1024, height: 1024, className: "w-full h-auto object-cover", "data-tsd-source": "/src/routes/index.tsx:99:13" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-6 lg:pl-10", "data-tsd-source": "/src/routes/index.tsx:101:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/index.tsx:102:13", children: site.mission.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6", "data-tsd-source": "/src/routes/index.tsx:105:13", children: site.mission.heading }),
        site.mission.paragraphs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed" + (i < site.mission.paragraphs.length - 1 ? " mb-4" : ""), "data-tsd-source": "/src/routes/index.tsx:108:52", children: p }, i))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-foreground text-background py-24", "data-tsd-source": "/src/routes/index.tsx:116:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", "data-tsd-source": "/src/routes/index.tsx:117:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", "data-tsd-source": "/src/routes/index.tsx:118:11", children: site.pillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-reveal", style: {
      animationDelay: `${i * 100}ms`
    }, "data-tsd-source": "/src/routes/index.tsx:119:41", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-bold text-xl font-mono", "data-tsd-source": "/src/routes/index.tsx:122:17", children: p.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", "data-tsd-source": "/src/routes/index.tsx:123:17", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/60 text-sm leading-relaxed", "data-tsd-source": "/src/routes/index.tsx:124:17", children: p.body })
    ] }, p.n)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", "data-tsd-source": "/src/routes/index.tsx:131:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", "data-tsd-source": "/src/routes/index.tsx:132:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/index.tsx:133:11", children: "At a glance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", "data-tsd-source": "/src/routes/index.tsx:136:11", children: site.stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-foreground/10 pt-6", "data-tsd-source": "/src/routes/index.tsx:137:34", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-bold tracking-tight mb-2", "data-tsd-source": "/src/routes/index.tsx:138:17", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/routes/index.tsx:139:17", children: s.v })
      ] }, s.v)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 border-t border-foreground/5", "data-tsd-source": "/src/routes/index.tsx:148:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 mb-12 text-center", "data-tsd-source": "/src/routes/index.tsx:149:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-4", "data-tsd-source": "/src/routes/index.tsx:150:11", children: site.sponsors.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold tracking-tight mb-4", "data-tsd-source": "/src/routes/index.tsx:153:11", children: site.sponsors.heading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl mx-auto text-muted-foreground leading-relaxed", "data-tsd-source": "/src/routes/index.tsx:156:34", children: site.sponsors.lede })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorMarquee, { items: site.sponsors.items, "data-tsd-source": "/src/routes/index.tsx:160:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-accent text-accent-foreground border-t border-foreground/5", "data-tsd-source": "/src/routes/index.tsx:164:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 items-center", "data-tsd-source": "/src/routes/index.tsx:165:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-8", "data-tsd-source": "/src/routes/index.tsx:166:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest opacity-70 font-bold mb-6", "data-tsd-source": "/src/routes/index.tsx:167:13", children: site.donateBand.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-4", "data-tsd-source": "/src/routes/index.tsx:170:13", children: site.donateBand.heading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl opacity-80 leading-relaxed", "data-tsd-source": "/src/routes/index.tsx:173:13", children: site.donateBand.body })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-4 flex lg:justify-end", "data-tsd-source": "/src/routes/index.tsx:175:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/support", className: "px-8 py-4 bg-background text-foreground font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all", "data-tsd-source": "/src/routes/index.tsx:176:13", children: site.donateBand.button }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary/40 border-t border-foreground/5", "data-tsd-source": "/src/routes/index.tsx:184:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 items-end", "data-tsd-source": "/src/routes/index.tsx:185:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-8", "data-tsd-source": "/src/routes/index.tsx:186:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-primary font-bold mb-6", "data-tsd-source": "/src/routes/index.tsx:187:13", children: site.cta.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.0]", "data-tsd-source": "/src/routes/index.tsx:190:13", children: [
          site.cta.headingLead,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { "data-tsd-source": "/src/routes/index.tsx:191:38" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", "data-tsd-source": "/src/routes/index.tsx:192:15", children: site.cta.headingAccent })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-4 flex lg:justify-end", "data-tsd-source": "/src/routes/index.tsx:195:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-primary transition-all", "data-tsd-source": "/src/routes/index.tsx:196:13", children: site.cta.button }) })
    ] }) })
  ] });
}
__name(Index, "Index");
__name2(Index, "Index");
export {
  Index as component
};
