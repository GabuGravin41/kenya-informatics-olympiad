import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "Terms under which the Kenya Informatics Olympiad website, competitions, and training programme are offered.",
      },
      { property: "og:title", content: "Terms of Use — KIO" },
      {
        property: "og:description",
        content: "Terms of use for the KIO website, competitions, and training programme.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal // Terms"
        title={
          <>
            Terms of <span className="text-primary">Use.</span>
          </>
        }
        lede="The ground rules for using the KIO website, entering our competitions, and taking part in training."
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-foreground/80 leading-relaxed">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-mono">
            Last updated: February 2026
          </p>

          <Block heading="Acceptance">
            <p>
              By using this website or entering a KIO competition you agree to these terms. If you
              do not agree, please do not use the service.
            </p>
          </Block>

          <Block heading="Eligibility">
            <ul className="list-disc pl-5 space-y-2">
              <li>KIO competitions are open to Kenyan secondary school students.</li>
              <li>Participants under 18 must have guardian consent.</li>
              <li>KIO organisers, coaches, and their immediate family may not compete for team
                selection.</li>
            </ul>
          </Block>

          <Block heading="Contest conduct">
            <ul className="list-disc pl-5 space-y-2">
              <li>All submitted work must be your own. No collaboration during contests.</li>
              <li>No use of pre-written libraries or AI tools unless explicitly permitted for a
                given round.</li>
              <li>Violations may lead to disqualification and a ban from future cycles.</li>
              <li>The Chief Judge's decisions on scoring and disqualification are final.</li>
            </ul>
          </Block>

          <Block heading="Content on this site">
            <p>
              Text, code, problem statements, and imagery on this site are the intellectual
              property of KIO or credited third parties. You may quote or link to material for
              non-commercial educational purposes with attribution.
            </p>
          </Block>

          <Block heading="Donations">
            <p>
              Donations to KIO are voluntary and non-refundable except in the case of duplicate
              transactions. Funds are used for training camps, contest infrastructure, and travel
              for the national team.
            </p>
          </Block>

          <Block heading="No warranty">
            <p>
              This website is provided "as is". We do our best to keep it accurate and available
              but cannot guarantee it will always be error-free or online.
            </p>
          </Block>

          <Block heading="Changes">
            <p>
              We may update these terms as the programme evolves. Material changes will be posted
              on this page with a new "Last updated" date.
            </p>
          </Block>

          <Block heading="Contact">
            <p>
              Questions about these terms:{" "}
              <a className="text-primary" href="mailto:hello@kio.ke">hello@kio.ke</a>
            </p>
          </Block>
        </div>
      </section>
    </PageShell>
  );
}

function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-3">{heading}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
