import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Past Events — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "A record of past KIO events — training camps, competitions, school visits, and continental appearances. Photos, reports, and reflections from each gathering.",
      },
      { property: "og:title", content: "Past Events — KIO" },
      {
        property: "og:description",
        content: "Reports, galleries, and reflections from past KIO events.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

import eventsData from "@/content/events.json";

type PastEvent = {
  slug: string;
  date: string;
  location: string;
  tag: string;
  title: string;
  summary: string;
  cover?: string;
  gallery?: string[];
  report?: string[];
  stats?: { label: string; value: string }[];
};

const PAST_EVENTS: PastEvent[] = eventsData.events as PastEvent[];


function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Past Events // Archive"
        title={
          <>
            What we've <span className="text-accent">done so far.</span>
          </>
        }
        lede="Reports, photographs and reflections from past KIO gatherings. For upcoming events and the official calendar, see the news page."
      />

      <section className="border-y border-foreground/10 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-widest font-mono">
          <span className="text-muted-foreground">Browsing the event archive</span>
          <Link
            to="/news"
            className="text-accent hover:text-primary transition-colors font-bold"
          >
            ← Upcoming events & news
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          {PAST_EVENTS.length === 0 && <EmptyState />}
          {PAST_EVENTS.map((e, i) => (
            <EventArticle key={e.slug} event={e} index={i} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function EventArticle({ event, index }: { event: PastEvent; index: number }) {
  const hasGallery = event.gallery && event.gallery.length > 0;
  return (
    <article
      className="animate-reveal"
      style={{ animationDelay: `${index * 80}ms` }}
      id={event.slug}
    >
      {/* Cover */}
      {event.cover ? (
        <div className="aspect-[16/9] w-full overflow-hidden bg-accent/10 mb-10">
          <img
            src={event.cover}
            alt={event.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <CoverPlaceholder title={event.title} />
      )}

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest font-mono mb-5">
        <span className="bg-accent text-accent-foreground px-2 py-0.5 font-bold">{event.tag}</span>
        <span className="text-muted-foreground">{event.date}</span>
        <span className="text-muted-foreground">· {event.location}</span>
      </div>

      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-5">
        {event.title}
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
        {event.summary}
      </p>

      {/* Report */}
      {event.report && event.report.length > 0 && (
        <div className="space-y-5 max-w-3xl text-foreground/80 leading-relaxed">
          {event.report.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}

      {/* Stats */}
      {event.stats && event.stats.length > 0 && (
        <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {event.stats.map((s) => (
            <div key={s.label} className="bg-background p-5">
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-2">
                {s.label}
              </dt>
              <dd className="font-display text-2xl font-bold text-accent">{s.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {/* Gallery */}
      <div className="mt-12">
        <div className="text-[10px] uppercase tracking-widest text-accent font-bold font-mono mb-4">
          Gallery
        </div>
        {hasGallery ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {event.gallery!.map((src, idx) => (
              <a
                key={idx}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden bg-accent/5 group"
              >
                <img
                  src={src}
                  alt={`${event.title} — photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        ) : (
          <GalleryPlaceholder />
        )}
      </div>
    </article>
  );
}

function CoverPlaceholder({ title }: { title: string }) {
  return (
    <div className="aspect-[16/9] w-full mb-10 bg-gradient-to-br from-accent/20 via-accent/10 to-primary/10 border border-foreground/10 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_currentColor_1px,_transparent_1px)] [background-size:18px_18px]" />
      <div className="text-center px-6">
        <div className="text-[10px] uppercase tracking-widest text-accent font-mono font-bold mb-2">
          Cover image · upload pending
        </div>
        <div className="font-display text-xl text-foreground/60 max-w-sm">{title}</div>
      </div>
    </div>
  );
}

function GalleryPlaceholder() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="aspect-square bg-accent/5 border border-dashed border-accent/30 flex items-center justify-center"
        >
          <span className="text-[10px] uppercase tracking-widest text-accent/60 font-mono">
            + Photo
          </span>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24 border border-dashed border-foreground/10">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-3">
        Archive
      </div>
      <h2 className="font-display text-3xl font-bold mb-3">
        Our first events are around the corner.
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        Once an event has happened we'll publish a full report with photographs here.
      </p>
    </div>
  );
}
