import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kenya Informatics Olympiad" },
      {
        name: "description",
        content:
          "How the Kenya Informatics Olympiad collects, uses, and protects personal information from students, schools, donors, and partners.",
      },
      { property: "og:title", content: "Privacy Policy — KIO" },
      {
        property: "og:description",
        content: "How KIO handles personal information collected via registration and donations.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal // Privacy"
        title={
          <>
            Privacy <span className="text-primary">Policy.</span>
          </>
        }
        lede="How we collect, use, and protect the personal information you share with the Kenya Informatics Olympiad."
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 prose-legal space-y-10 text-foreground/80 leading-relaxed">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-mono">
            Last updated: February 2026
          </p>

          <Block heading="Who we are">
            <p>
              The Kenya Informatics Olympiad ("KIO", "we", "us") is a volunteer-run programme that
              identifies and trains Kenyan secondary school students in competitive informatics.
            </p>
          </Block>

          <Block heading="What we collect">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Registration data:</strong> student name, school, class, date of birth,
                guardian contact, email.
              </li>
              <li>
                <strong>Contest data:</strong> submissions, scores, and standings from KIO rounds.
              </li>
              <li>
                <strong>Donation data:</strong> for donors — name, contact, and payment reference
                (we do not store card numbers; payments run through M-Pesa or the bank).
              </li>
              <li>
                <strong>Correspondence:</strong> messages you send us by email.
              </li>
            </ul>
          </Block>

          <Block heading="How we use it">
            <ul className="list-disc pl-5 space-y-2">
              <li>Run the selection rounds, camps, and PAIO/IOI team logistics.</li>
              <li>Contact students, guardians, and schools about the programme.</li>
              <li>Acknowledge donors and issue receipts.</li>
              <li>Publish scores and team announcements — student names may appear on this site
                and in press releases.</li>
            </ul>
          </Block>

          <Block heading="What we don't do">
            <ul className="list-disc pl-5 space-y-2">
              <li>We do not sell personal data.</li>
              <li>We do not share guardian contacts with third parties for marketing.</li>
              <li>We do not run advertising trackers on this site.</li>
            </ul>
          </Block>

          <Block heading="Minors">
            <p>
              Most KIO participants are under 18. Registration requires guardian consent, and
              guardians may withdraw a student and request deletion of their data at any time by
              writing to <a className="text-primary" href="mailto:hello@kio.ke">hello@kio.ke</a>.
            </p>
          </Block>

          <Block heading="Retention">
            <p>
              Registration and contest data is kept for the current cycle plus three years to
              support alumni records and continuity. Donation records are kept as required by
              Kenyan tax and accounting law.
            </p>
          </Block>

          <Block heading="Your rights">
            <p>
              You can request a copy of the data we hold about you, correct it, or ask us to delete
              it. Email <a className="text-primary" href="mailto:hello@kio.ke">hello@kio.ke</a> and
              we will respond within 30 days.
            </p>
          </Block>

          <Block heading="Contact">
            <p>
              Data protection queries:{" "}
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
