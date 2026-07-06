import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import support from "@/content/support.json";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support & Donations — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "Support the Kenya Informatics Olympiad. Donate, sponsor, or partner with KIO to fund training camps, contests, and the national team's road to PAIO and IOI.",
      },
      { property: "og:title", content: "Support KIO" },
      {
        property: "og:description",
        content:
          "Donate or partner with the Kenya Informatics Olympiad to develop Kenya's algorithmic talent.",
      },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={support.hero.eyebrow}
        title={<>{support.hero.title}</>}
        lede={support.hero.lede}
      />

      {/* WAYS TO GIVE */}
      <section className="py-20 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-10">
            Ways to give
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {support.ways.map((w) => (
              <div key={w.title} className="border border-foreground/10 p-8 flex flex-col">
                <h3 className="font-display text-2xl font-bold mb-3">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{w.body}</p>
                <p className="mt-auto font-mono text-sm text-foreground">{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPEAL + CONTACTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              {support.appeal.heading}
            </div>
            {support.appeal.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  "text-muted-foreground leading-relaxed" +
                  (i < support.appeal.paragraphs.length - 1 ? " mb-4" : "")
                }
              >
                {p}
              </p>
            ))}
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              Get in touch
            </div>
            <ul className="divide-y divide-foreground/10">
              {support.contacts.map((c) => (
                <li key={c.label} className="py-5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    {c.label}
                  </div>
                  <a
                    href={c.href}
                    className="font-display text-2xl font-bold hover:text-primary transition-colors"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PARTNERED INSTITUTIONS */}
      {support.institutions.length > 0 && (
        <section className="py-20 border-t border-foreground/5 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-10">
              Partnered institutions & ministries
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {support.institutions.map((inst) => {
                const card = (
                  <div className="bg-background border border-foreground/10 p-6 h-full flex flex-col items-center text-center gap-4">
                    {inst.logo ? (
                      <img
                        src={inst.logo}
                        alt={inst.name}
                        loading="lazy"
                        className="h-14 w-auto max-w-[160px] object-contain"
                      />
                    ) : (
                      <div className="h-14 flex items-center">
                        <span className="font-display font-bold text-lg tracking-tighter">
                          {inst.name}
                        </span>
                      </div>
                    )}
                    {inst.logo && (
                      <span className="font-display font-bold text-sm">{inst.name}</span>
                    )}
                    {inst.note && (
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {inst.note}
                      </span>
                    )}
                  </div>
                );
                return inst.url ? (
                  <a
                    key={inst.name}
                    href={inst.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block transition-opacity hover:opacity-80"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={inst.name}>{card}</div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
