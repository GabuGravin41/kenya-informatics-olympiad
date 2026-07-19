import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "Learn about the Kenya Informatics Olympiad (KIO): our mission, history, and partner ecosystem alongside the Kenya Mathematical Olympiad, CEMASTEA, and African Olympiad Academy.",
      },
      { property: "og:title", content: "About — KIO" },
      {
        property: "og:description",
        content:
          "The national olympiad for competitive informatics in Kenya — mission, structure, and partners.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About KIO"
        title={
          <>
            A national pipeline for <span className="text-primary">algorithmic talent.</span>
          </>
        }
        lede="The Kenya Informatics Olympiad is the official national competition for computational problem solving in Kenya. We identify, train, and send the country's strongest student programmers to continental and international olympiads."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              KIO was founded to mirror — for informatics — what the Kenya Mathematical Olympiad
              has built for mathematics: a credible, year-round, nationwide selection and training
              pipeline that gives exceptional secondary school students a path from local classroom
              to the international olympiad podium.
            </p>
            <p>
              We work in close partnership with the African Olympiad Academy and CEMASTEA to
              share coaches, training materials, and selection infrastructure. Together we form
              East Africa's most serious academic competition ecosystem.
            </p>
            <p>
              Our 2026 cohort will represent Kenya at the Pan-African Informatics Olympiad this
              July, with the long-term goal of consistent participation at the International
              Olympiad in Informatics (IOI).
            </p>
          </div>
          <aside className="col-span-12 lg:col-span-5 lg:pl-10">
            <div className="border border-foreground/10 p-8 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Founded
                </div>
                <div className="font-display text-2xl font-bold">2026</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Headquarters
                </div>
                <div className="font-display text-2xl font-bold">Nairobi, Kenya</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Sister Programs
                </div>
                <div className="text-sm leading-relaxed">
                  Kenya Mathematical Olympiad · African Olympiad Academy · CEMASTEA
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-foreground text-background py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              n: "Vision",
              body: "A Kenya recognized globally for the depth of its computational talent — where the best young programmers anywhere in the world include Kenyan names.",
            },
            {
              n: "Mission",
              body: "Build a transparent, rigorous, year-round pipeline that surfaces and develops the country's strongest algorithmic minds — regardless of school or background.",
            },
            {
              n: "Values",
              body: "Academic seriousness. Fair competition. Open access to learning materials. Community over individual glory. Long-term thinking.",
            },
          ].map((v) => (
            <div key={v.n} className="space-y-4">
              <div className="text-primary font-bold text-[11px] uppercase tracking-widest">
                {v.n}
              </div>
              <p className="font-display text-xl leading-snug">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
