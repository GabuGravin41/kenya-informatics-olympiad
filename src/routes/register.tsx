import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/page-shell";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Kenya Informatics Olympiad 2026" },
      {
        name: "description",
        content:
          "Register for the Kenya Informatics Olympiad 2026 cycle. Open to all Kenyan secondary school students. Open Round qualifier in March 2026.",
      },
      { property: "og:title", content: "Register — KIO 2026" },
      {
        property: "og:description",
        content: "Sign up for the Kenya Informatics Olympiad 2026 cycle.",
      },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Cycle 2026 // Registration Open"
        title={
          <>
            Take your seat for <br />
            <span className="text-primary">the Open Round.</span>
          </>
        }
        lede="Registration is free and open to every Kenyan secondary school student. We will email you contest credentials, practice problems, and venue information in the weeks leading up to the Open Round."
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="border border-foreground/10 p-10 text-center">
              <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">
                Registration received
              </div>
              <h2 className="font-display text-4xl font-bold mb-4">See you at the Open Round.</h2>
              <p className="text-muted-foreground">
                We've recorded your interest in Cycle 2026. A confirmation email with next steps
                will follow shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-8 border border-foreground/10 p-8 md:p-10"
            >
              <FormField label="Full name" name="name" required />
              <FormField label="Email" name="email" type="email" required />
              <FormField label="Date of birth" name="dob" type="date" required />
              <FormField label="School name" name="school" required />
              <FormField label="County" name="county" required />
              <div className="grid gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  Programming experience
                </label>
                <select
                  name="experience"
                  className="bg-transparent border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  required
                >
                  <option value="">Select…</option>
                  <option>None — total beginner</option>
                  <option>Some — I've written small programs</option>
                  <option>Intermediate — I've solved algorithm problems</option>
                  <option>Advanced — I compete regularly</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all"
              >
                Submit registration
              </button>
              <p className="text-xs text-muted-foreground">
                By registering you agree to the KIO code of conduct. Personal details are used
                solely for competition logistics.
              </p>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="bg-transparent border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}
