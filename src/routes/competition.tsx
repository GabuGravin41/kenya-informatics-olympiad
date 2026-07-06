import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/competition")({
  head: () => ({
    meta: [
      { title: "Competition — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "Structure, syllabus, eligibility, and rules for the Kenya Informatics Olympiad national selection process — three rounds leading to the Pan-African and International Olympiads.",
      },
      { property: "og:title", content: "Competition Structure — KIO" },
      {
        property: "og:description",
        content: "Three rounds, one syllabus, a clear path from school to the international stage.",
      },
      { property: "og:url", content: "/competition" },
    ],
    links: [{ rel: "canonical", href: "/competition" }],
  }),
  component: CompetitionPage,
});

const ROUNDS = [
  {
    n: "01",
    label: "Open Round",
    when: "March 2026",
    body: "Online qualifier open to all Kenyan secondary school students. 4 problems, 3 hours, judged automatically. Top ~200 advance.",
  },
  {
    n: "02",
    label: "National Round",
    when: "May 2026",
    body: "In-person regional sittings across Nairobi, Mombasa, Kisumu and Eldoret. 5 problems, 5 hours, IOI-style. Top ~30 advance.",
  },
  {
    n: "03",
    label: "Team Selection Camp",
    when: "June 2026",
    body: "Intensive 10-day training camp culminating in selection tests. Top 4 form the national team for the Pan-African Informatics Olympiad.",
  },
];

const SYLLABUS = [
  ["Foundations", "Implementation, complexity analysis, ad hoc, sorting, binary search."],
  ["Data Structures", "Arrays, stacks, queues, heaps, hash maps, trees, segment trees, Fenwick trees, union-find."],
  ["Graph Theory", "BFS/DFS, shortest paths, MST, topological sort, SCC, bridges, articulation points."],
  ["Dynamic Programming", "Classical DP, DP on trees, bitmask DP, digit DP, DP optimizations."],
  ["Mathematics", "Number theory, combinatorics, modular arithmetic, basic probability."],
  ["Strings", "KMP, Z-function, hashing, suffix arrays, tries."],
  ["Geometry", "Vectors, convex hull, sweep line, basic computational geometry."],
];

function CompetitionPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Competition // Cycle 2026"
        title={
          <>
            Three rounds. <br />
            One <span className="text-primary">national team.</span>
          </>
        }
        lede="The KIO selection process is modeled on IOI standards — transparent rules, automated judging, and a clear path from any Kenyan school to the international stage."
      />

      {/* ROUNDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
            {ROUNDS.map((r) => (
              <div key={r.n} className="bg-background p-8 space-y-6">
                <div className="flex items-baseline justify-between">
                  <div className="text-primary font-bold text-xl font-mono">{r.n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {r.when}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold">{r.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="bg-foreground text-background py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              Syllabus
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight">
              What we test, and what we teach.
            </h2>
            <p className="mt-6 text-background/60 text-sm leading-relaxed">
              The KIO syllabus tracks the IOI syllabus closely. Earlier rounds emphasise
              foundations; later rounds and the selection camp cover the full breadth.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <dl className="divide-y divide-background/10">
              {SYLLABUS.map(([k, v]) => (
                <div key={k} className="py-5 grid grid-cols-12 gap-4">
                  <dt className="col-span-12 md:col-span-4 font-display font-bold text-lg">{k}</dt>
                  <dd className="col-span-12 md:col-span-8 text-background/70 text-sm leading-relaxed">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              Eligibility
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li>— Currently enrolled in a Kenyan secondary school.</li>
              <li>— Born on or after 1 July 2006 (per IOI age rules).</li>
              <li>— Able to attend in-person rounds in Nairobi, Mombasa, Kisumu, or Eldoret.</li>
              <li>— No prior programming experience required for the Open Round.</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
              Languages permitted
            </div>
            <ul className="space-y-4 text-muted-foreground font-mono text-sm">
              <li>C++ (g++ 13, primary)</li>
              <li>Python 3.12</li>
              <li>Java 21</li>
              <li>Pascal (Free Pascal 3.2)</li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
