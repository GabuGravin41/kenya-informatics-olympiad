import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <section className="border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-9 animate-reveal">
          <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-6">
            {eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance mb-6">
            {title}
          </h1>
          {lede && <p className="max-w-2xl text-muted-foreground leading-relaxed text-lg">{lede}</p>}
        </div>
      </div>
    </section>
  );
}
