import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-background px-6 py-16 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="font-display font-bold text-xl tracking-tighter">
            KIO<span className="text-primary">.</span>
          </span>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            The Kenya Informatics Olympiad — identifying and training Kenya's next generation of
            algorithmic thinkers for the Pan-African and International Olympiads in Informatics.
          </p>
          <p className="mt-6 text-[11px] text-muted uppercase tracking-widest">
            © {new Date().getFullYear()} Kenya Informatics Olympiad
          </p>
          <div className="mt-3 flex gap-4 text-[11px] uppercase tracking-widest font-medium">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary">
              Terms
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium">
          <span className="text-muted">Program</span>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/competition" className="hover:text-primary">
            Competition
          </Link>
          <Link to="/training" className="hover:text-primary">
            Training
          </Link>
          <Link to="/resources" className="hover:text-primary">
            Resources
          </Link>
        </div>

        <div className="md:col-span-2 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium">
          <span className="text-muted">Engage</span>
          <Link to="/news" className="hover:text-primary">
            News
          </Link>
          <Link to="/team" className="hover:text-primary">
            Team
          </Link>
          <Link to="/register" className="hover:text-primary">
            Register
          </Link>
          <Link to="/support" className="hover:text-primary">
            Support
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        <div className="md:col-span-3 flex flex-col gap-3 text-[11px] uppercase tracking-widest font-medium">
          <span className="text-muted">Partners</span>
          <span>Kenya Mathematical Olympiad</span>
          <span>Summer STEM</span>
          <span>African Olympiad Academy</span>
        </div>
      </div>
    </footer>
  );
}
