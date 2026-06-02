import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/proprete", label: "Propreté" },
  { to: "/soft-facility", label: "Soft Facility" },
  { to: "/amo", label: "AMO" },
  { to: "/blog", label: "Expertises" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-[0.2em] text-foreground">
          ELITE<span className="text-primary">SY</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition">
          Devis gratuit
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-foreground text-lg">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}