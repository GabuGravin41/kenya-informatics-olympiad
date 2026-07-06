import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SponsorMarquee } from "@/components/sponsor-marquee";
import { SmartLink } from "@/components/smart-link";
import heroImg from "@/assets/hero-contestant.jpg";
import site from "@/content/site.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kenya Informatics Olympiad — Road to PAIO 2026" },
      {
        name: "description",
        content:
          "KIO is the national olympiad for competitive programming and algorithmic thinking in Kenya. Registration open for the 2026 cycle and Pan-African Informatics Olympiad team selection.",
      },
      { property: "og:title", content: "Kenya Informatics Olympiad" },
      {
        property: "og:description",
        content:
          "Identifying and training Kenya's brightest young algorithmic thinkers. Road to PAIO July 2026.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 animate-reveal">
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              {site.hero.eyebrow}
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] text-balance mb-8">
              {site.hero.titleLine1} <br />
              {site.hero.titleLine2} <br />
              <span className="text-primary">{site.hero.titleLine3}</span>
            </h1>
            <p className="max-w-lg text-muted-foreground leading-relaxed text-lg mb-10">
              {site.hero.lede}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all"
              >
                {site.hero.primaryCta}
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-foreground/10 font-bold text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all"
              >
                {site.hero.secondaryCta}
              </Link>
            </div>
          </div>

          {/* PAIO Announcement */}
          <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0 animate-reveal [animation-delay:200ms]">
            <div className="bg-accent text-accent-foreground p-8 relative overflow-hidden h-full">
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-[10px] uppercase tracking-widest opacity-60 mb-8">
                  {site.paioCard.eyebrow}
                </div>
                <h2 className="font-display text-3xl font-bold leading-tight mb-4">
                  {site.paioCard.title}
                </h2>
                <p className="text-sm opacity-70 mb-8">{site.paioCard.body}</p>
                <Link
                  to="/news"
                  className="mt-auto inline-block border-b border-current/30 pb-1 text-sm self-start hover:border-current transition-colors"
                >
                  {site.paioCard.cta}
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-10 font-display text-[10rem] leading-none font-bold pointer-events-none">
                PAIO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      {site.announcements.items.length > 0 && (
        <section className="border-t border-foreground/5 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">
                  {site.announcements.eyebrow}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  {site.announcements.heading}
                </h2>
              </div>
              <Link
                to="/news"
                className="text-[11px] uppercase tracking-widest font-bold hover:text-primary transition-colors"
              >
                All news →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {site.announcements.items.map((a, i) => (
                <div
                  key={`${a.title}-${i}`}
                  className="bg-background border border-foreground/10 p-6 flex flex-col animate-reveal"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {a.tag && (
                      <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 font-bold bg-primary/10 text-primary">
                        {a.tag}
                      </span>
                    )}
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                      {a.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.body}</p>
                  {a.link && a.linkLabel && (
                    <SmartLink
                      to={a.link}
                      className="mt-auto text-sm font-bold text-primary border-b border-primary/30 pb-1 self-start hover:border-primary transition-colors"
                    >
                      {a.linkLabel}
                    </SmartLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial image band */}
      <section className="border-y border-foreground/5 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6">
            <img
              src={heroImg}
              alt="A Kenyan student focused on competitive programming"
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:pl-10">
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              {site.mission.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
              {site.mission.heading}
            </h2>
            {site.mission.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  "text-muted-foreground leading-relaxed" +
                  (i < site.mission.paragraphs.length - 1 ? " mb-4" : "")
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-foreground text-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {site.pillars.map((p, i) => (
              <div
                key={p.n}
                className="space-y-6 animate-reveal"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-primary font-bold text-xl font-mono">{p.n}</div>
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
            At a glance
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {site.stats.map((s) => (
              <div key={s.v} className="border-t border-foreground/10 pt-6">
                <div className="font-display text-5xl font-bold tracking-tight mb-2">{s.k}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="py-20 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">
            {site.sponsors.eyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {site.sponsors.heading}
          </h2>
          {site.sponsors.lede && (
            <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              {site.sponsors.lede}
            </p>
          )}
        </div>
        <SponsorMarquee items={site.sponsors.items} />
      </section>

      {/* DONATIONS */}
      <section className="py-24 bg-accent text-accent-foreground border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-8">
            <div className="text-[10px] uppercase tracking-widest opacity-70 font-bold mb-6">
              {site.donateBand.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-4">
              {site.donateBand.heading}
            </h2>
            <p className="max-w-xl opacity-80 leading-relaxed">{site.donateBand.body}</p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <Link
              to="/support"
              className="px-8 py-4 bg-background text-foreground font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
            >
              {site.donateBand.button}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/40 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              {site.cta.eyebrow}
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.0]">
              {site.cta.headingLead} <br />
              <span className="text-primary">{site.cta.headingAccent}</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <Link
              to="/register"
              className="px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-primary transition-all"
            >
              {site.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
