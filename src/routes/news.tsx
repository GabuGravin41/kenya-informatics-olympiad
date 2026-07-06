import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import newsData from "@/content/news.json";


export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "Announcements, results, and the official event calendar for the Kenya Informatics Olympiad. Pan-African Informatics Olympiad July 2026, team selection camps, and more.",
      },
      { property: "og:title", content: "News & Events — KIO" },
      {
        property: "og:description",
        content: "KIO announcements and the road to the Pan-African Informatics Olympiad 2026.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const EVENTS = newsData.events as {
  date: string;
  tag: string;
  title: string;
  body: string;
  primary?: boolean;
}[];


function NewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News & Events"
        title={
          <>
            The road to <span className="text-primary">PAIO 2026.</span>
          </>
        }
        lede="The official KIO calendar — every round, camp, and continental appearance for the 2026 cycle."
      />

      <section className="border-y border-foreground/10 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-widest font-mono">
          <span className="text-muted-foreground">Upcoming events & official calendar</span>
          <Link
            to="/events"
            className="text-accent hover:text-primary transition-colors font-bold"
          >
            Past events archive →
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ol className="relative border-l border-foreground/10 ml-3">
            {EVENTS.map((e, i) => (
              <li
                key={e.title}
                className="mb-12 pl-8 animate-reveal"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span
                  className={
                    "absolute -left-[7px] w-3.5 h-3.5 " +
                    (e.primary ? "bg-primary" : "bg-foreground")
                  }
                />
                <div className="flex flex-wrap items-baseline gap-4 mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    {e.date}
                  </span>
                  <span
                    className={
                      "text-[10px] uppercase tracking-widest px-2 py-0.5 font-bold " +
                      (e.primary
                        ? "bg-primary text-primary-foreground"
                        : "bg-foreground/5 text-foreground")
                    }
                  >
                    {e.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{e.title}</h3>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">{e.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
