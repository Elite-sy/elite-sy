import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold tracking-[0.2em]">
            ELITE<span className="text-primary">SY</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            L'excellence opérationnelle au service de vos environnements professionnels.
            Propreté, Soft Facility (FM) et Assistance à Maîtrise d'Ouvrage.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/proprete" className="hover:text-primary">Propreté</Link></li>
            <li><Link to="/soft-facility" className="hover:text-primary">Soft Facility</Link></li>
            <li><Link to="/amo" className="hover:text-primary">AMO</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1 text-primary" /><span>contact@elitesy.fr</span></li>
            <li className="flex items-start gap-2"><Phone size={14} className="mt-1 text-primary" /><span>+33 6 09 16 50 99</span></li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-primary" /><span>Paris, France</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} ELITESY. Tous droits réservés.</span>
          <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales · Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}