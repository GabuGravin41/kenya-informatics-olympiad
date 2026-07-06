import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/competition", label: "Competition" },
  { to: "/training", label: "Training" },
  { to: "/resources", label: "Resources" },
  { to: "/news", label: "News" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/support", label: "Support" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter">
            KIO<span className="text-primary">.</span>
          </Link>
          <div className="hidden md:flex gap-6 text-[11px] uppercase tracking-widest font-medium">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/register"
            className="hidden sm:inline-block bg-foreground text-background px-5 py-2 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-all active:scale-95"
          >
            Register
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-[11px] uppercase tracking-widest font-bold px-3 py-2 border border-foreground/10"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-foreground/5 px-6 py-4 flex flex-col gap-3 text-[12px] uppercase tracking-widest font-medium bg-background">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1">
              {n.label}
            </Link>
          ))}
          <Link to="/register" onClick={() => setOpen(false)} className="py-1 text-primary">
            Register
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="py-1">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
