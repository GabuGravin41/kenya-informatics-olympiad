import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "Get in touch with the Kenya Informatics Olympiad — for schools, sponsors, press, and prospective coaches.",
      },
      { property: "og:title", content: "Contact — KIO" },
      { property: "og:description", content: "Reach the Kenya Informatics Olympiad team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { k: "General enquiries", v: "hello@kio.ke" },
  { k: "Schools & registration", v: "schools@kio.ke" },
  { k: "Sponsorship & partners", v: "partners@kio.ke" },
  { k: "Press", v: "press@kio.ke" },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="text-primary">the team.</span>
          </>
        }
        lede="Whether you're a school, a sponsor, a journalist, or a student with a question — pick the channel that fits."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <ul className="divide-y divide-foreground/10">
            {CHANNELS.map((c) => (
              <li key={c.k} className="py-6">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  {c.k}
                </div>
                <a
                  href={`mailto:${c.v}`}
                  className="font-display text-2xl font-bold hover:text-primary transition-colors"
                >
                  {c.v}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">
                Headquarters
              </div>
              <p className="font-display text-xl text-foreground">Nairobi, Kenya</p>
              <p className="mt-2 text-sm">
                Operating in partnership with the Kenya Mathematical Olympiad, Summer STEM, and the
                African Olympiad Academy.
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">
                Response time
              </div>
              <p className="text-sm">
                We aim to respond within 3 working days. During contest weeks, allow up to one week.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
