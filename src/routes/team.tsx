import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "The leadership, coaches, and academic committee behind the Kenya Informatics Olympiad, working alongside the Kenya Mathematical Olympiad, CEMASTEA, and African Olympiad Academy.",
      },
      { property: "og:title", content: "Team — KIO" },
      {
        property: "og:description",
        content: "The people building Kenya's national informatics olympiad.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

import teamData from "@/content/team.json";

const TEAM = teamData.members as {
  name: string;
  role: string;
  org: string;
  initials: string;
  image?: string;
}[];


function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Team"
        title={
          <>
            Coaches, problem-setters, <br />
            and <span className="text-primary">organisers.</span>
          </>
        }
        lede="KIO is run by a volunteer steering committee drawn from Kenyan universities, secondary school educators, alumni of the Kenya Mathematical Olympiad, and partner programs across the continent."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
            {TEAM.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className="bg-background p-8 flex items-start gap-5"
              >
                <Avatar className="h-16 w-16 rounded-md shrink-0">
                  {m.image && (
                    <AvatarImage src={m.image} alt={m.name} />
                  )}
                  <AvatarFallback className="rounded-md bg-primary/10 text-primary font-display font-bold text-lg">
                    {m.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                    {m.role}
                  </div>
                  <h3 className="font-display text-xl font-bold truncate">
                    {m.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {m.org}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-foreground/10 pt-12 max-w-2xl">
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">
              Get involved
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We're actively recruiting coaches, problem-setters, and regional coordinators for the
              2026 cycle. If you have competitive programming experience — or simply want to help
              run a national olympiad — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
