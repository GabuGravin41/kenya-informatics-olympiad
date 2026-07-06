type Sponsor = {
  name: string;
  logo?: string;
  url?: string;
};

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  const content = sponsor.logo ? (
    <img
      src={sponsor.logo}
      alt={sponsor.name}
      loading="lazy"
      className="h-12 w-auto max-w-[180px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
    />
  ) : (
    <span className="font-display font-bold text-lg tracking-tighter text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap">
      {sponsor.name}
    </span>
  );

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noreferrer noopener"
        className="shrink-0 flex items-center"
        title={sponsor.name}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="shrink-0 flex items-center" title={sponsor.name}>
      {content}
    </div>
  );
}

export function SponsorMarquee({ items }: { items: Sponsor[] }) {
  if (!items.length) return null;

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-16 pr-16"
          >
            {items.map((s, i) => (
              <SponsorLogo key={`${copy}-${s.name}-${i}`} sponsor={s} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
