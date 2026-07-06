import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";
import { SmartLink } from "@/components/smart-link";
import resources from "@/content/resources.json";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "Curated learning resources for competitive programming: online judges, tutorials, and tools to prepare for the Kenya Informatics Olympiad.",
      },
      { property: "og:title", content: "Resources — KIO" },
      {
        property: "og:description",
        content: "Platforms, guides, and tools to prepare for the Kenya Informatics Olympiad.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={resources.hero.eyebrow}
        title={<>{resources.hero.title}</>}
        lede={resources.hero.lede}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {resources.categories.map((cat) => (
            <div key={cat.name}>
              <div className="mb-8 max-w-2xl">
                <h2 className="font-display text-3xl font-bold tracking-tight mb-2">{cat.name}</h2>
                {cat.description && (
                  <p className="text-muted-foreground leading-relaxed">{cat.description}</p>
                )}
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.links.map((link) => (
                  <SmartLink
                    key={link.title}
                    to={link.url}
                    className="group border border-foreground/10 p-6 flex flex-col hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        →
                      </span>
                    </div>
                    {link.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {link.description}
                      </p>
                    )}
                  </SmartLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
