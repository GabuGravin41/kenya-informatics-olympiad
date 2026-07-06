import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training & Resources — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "Curated training resources, problem archives, judges, and learning paths for KIO contestants — from beginner to IOI-level algorithmic problem solving.",
      },
      { property: "og:title", content: "Training & Resources — KIO" },
      {
        property: "og:description",
        content: "Learning paths, problem archives, and the tools KIO contestants use to train.",
      },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const PATHS = [
  {
    level: "Beginner",
    weeks: "8 weeks",
    body: "C++ basics, complexity, sorting and searching, simulation. Designed for students with no prior programming experience.",
  },
  {
    level: "Intermediate",
    weeks: "12 weeks",
    body: "Standard data structures, graph algorithms, intro DP. Target audience: students who have cleared the Open Round.",
  },
  {
    level: "Advanced",
    weeks: "Selection camp",
    body: "Advanced DP, segment trees, flow, advanced graphs, computational geometry. For the national pool.",
  },
];

const RESOURCES = [
  ["Competitive Programmer's Handbook", "Antti Laaksonen — the canonical free reference."],
  ["USACO Guide", "Structured learning path from bronze to platinum."],
  ["Codeforces", "Weekly contests at every level — our primary practice ground."],
  ["AtCoder", "High-quality problem sets — Beginner and Regular contests."],
  ["CSES Problem Set", "Topic-organised problems used throughout our curriculum."],
  ["KIO Past Problems", "Archive of past Open and National Round problems with editorials."],
];

function TrainingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Training"
        title={
          <>
            A curriculum from <span className="text-primary">first program</span> to IOI.
          </>
        }
        lede="KIO training runs year-round through online problem sets, mentor sessions, and an in-person selection camp. Everything is open — we publish our syllabus, learning paths, and past problems."
      />

      {/* PATHS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-10">
            Learning paths
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PATHS.map((p, i) => (
              <div
                key={p.level}
                className="border border-foreground/10 p-8 space-y-6 hover:border-primary transition-colors animate-reveal"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-bold">{p.level}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.weeks}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-secondary/40 py-24 border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-10">
            Recommended resources
          </div>
          <ul className="divide-y divide-foreground/10">
            {RESOURCES.map(([title, body]) => (
              <li key={title} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-12 md:col-span-4 font-display font-bold text-xl">
                  {title}
                </span>
                <span className="col-span-12 md:col-span-8 text-muted-foreground">{body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* JUDGES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              Judging
            </div>
            <p className="text-muted-foreground leading-relaxed">
              All KIO rounds use automated judging on a Codeforces-compatible stack. Contestants
              receive immediate verdicts during the round, full test breakdown after, and
              editorials within 48 hours of every contest.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              Mentorship
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Shortlisted students are paired with coaches drawn from KIO alumni, university
              competitive programmers, and partner programs at Summer STEM and the African Olympiad
              Academy.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
