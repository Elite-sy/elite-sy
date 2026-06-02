import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
 ArrowLeft,
 ArrowRight,
 Check,
 FlaskConical,
 Store,
 CreditCard,
 Snowflake,
 ShieldCheck,
 ClipboardList,
 Eye,
 MessageSquare,
 CalendarCheck,
 Sparkles,
 HeartHandshake,
 Droplets,
 Pill,
 Leaf,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { LazyImage } from "@/components/site/LazyImage";
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/pharma-hero.jpg";
import cleanroomImg from "@/assets/pharma-cleanroom.jpg";
import labImg from "@/assets/pharma-lab.jpg";
import airlockImg from "@/assets/pharma-airlock.jpg";
import productionImg from "@/assets/pharma-production.jpg";
import warehouseImg from "@/assets/pharma-warehouse.jpg";
import teamImg from "@/assets/elitesy-team.jpg";

export const Route = createFileRoute("/proprete/pharmaceutique")({
 head: () => ({
 meta: [
 { title: "Nettoyage pharmacie & officine — Protocole ARS | ELITESY" },
 {
 name: "description",
 content:
 "Nettoyage et bionettoyage d'officines de pharmacie : protocole par zone, désinfection comptoir & TPE, frigos médicaments, conformité ARS et démarche qualité DQO.",
 },
 { property: "og:title", content: "Nettoyage pharmacie & officine — ELITESY" },
 {
 property: "og:description",
 content:
 "Protocole d'hygiène complet pour officines : espace de vente, comptoir & TPE, back-office, réfrigérateurs médicaments, sanitaires. Traçabilité prête pour inspection ARS.",
 },
 { property: "og:image", content: heroImg },
 { property: "og:url", content: "https://elite-sy.lovable.app/proprete/pharmaceutique" },
 ],
 links: [{ rel: "canonical", href: "https://elite-sy.lovable.app/proprete/pharmaceutique" }],
 }),
 component: PharmaceutiquePage,
});

type Zone = {
 id: string;
 label: string;
 icon: LucideIcon;
 image: string;
 description: string;
 bullets: string[];
};

const zones: Zone[] = [
 {
 id: "espace-vente",
 label: "Espace de vente",
 icon: Store,
 image: cleanroomImg,
 description:
 "La zone de vente est la vitrine de votre officine. Nous intervenons hors heures de pointe (avant ouverture, pause midi, après fermeture) pour maintenir des sols, linéaires et vitrines impeccables sans gêner le flux patients.",
 bullets: [
 "Sols quotidiens en franges pré-imprégnées",
 "Dépoussiérage des rayonnages du haut vers le bas",
 "Vitrines hebdomadaires, ajustées selon exposition",
 "Produits peu odorants et à faibles COV",
 ],
 },
 {
 id: "comptoir",
 label: "Comptoir & TPE",
 icon: CreditCard,
 image: labImg,
 description:
 "Le comptoir concentre les risques : ordonnances, paiement, signature, écrans tactiles. Nous appliquons une désinfection deux fois par jour des points de contact (TPE, stylos, plateau, sonnette, poignées) avec respect strict du temps de contact.",
 bullets: [
 "Désinfection 2x/jour (pause midi + fermeture)",
 "Produits virucides EN 14476 sur surfaces haut contact",
 "Application sur lavette dédiée (jamais pulvérisé sur le TPE)",
 "Renfort en période de forte affluence ou épidémie",
 ],
 },
 {
 id: "back-office",
 label: "Back-office & préparations",
 icon: Pill,
 image: airlockImg,
 description:
 "Le back-office est moins visible mais plus sensible. Bionettoyage du plan de travail de préparation selon une méthode stable : matériel dédié, code couleur par zone, séquence reproductible et limitation des contaminations croisées.",
 bullets: [
 "Bionettoyage du plan de préparation",
 "Lavettes codées par zone (vente, back-office, sanitaires)",
 "Détergents-désinfectants compatibles produits de santé",
 "Stockage séparé des produits d'entretien et médicaments",
 ],
 },
 {
 id: "frigos",
 label: "Réfrigérateurs médicaments",
 icon: Snowflake,
 image: productionImg,
 description:
 "Nettoyage mensuel des réfrigérateurs à médicaments avec procédure dédiée et traçabilité. Une opération simple mais documentée, intégrée à votre dossier qualité « prêt inspection ARS ».",
 bullets: [
 "Espace temporaire propre préparé pour les produits",
 "Nettoyage étagères, parois et contrôle des joints",
 "Vérification visuelle de la condensation",
 "Fiche datée signée : opérateur, observations, actions",
 ],
 },
 {
 id: "sanitaires",
 label: "Sanitaires & zones humides",
 icon: Droplets,
 image: warehouseImg,
 description:
 "Désinfection renforcée des sanitaires (personnel et public si accessibles). Matériel strictement séparé pour éviter tout transfert de germes vers les zones de vente ou de préparation.",
 bullets: [
 "Surfaces, robinetterie, poignées, cuvettes, sols",
 "Réassort des consommables (savon, papier)",
 "Lavettes et gants dédiés, jamais croisés",
 "Routine courte et constante, traçée à chaque passage",
 ],
 },
 {
 id: "annexes",
 label: "Bureaux & espace pause",
 icon: Sparkles,
 image: teamImg,
 description:
 "Au-delà des zones réglementées, nous entretenons les espaces de travail de l'équipe : bureau du titulaire, espace de pause, vestiaires. Une qualité homogène, partout dans votre officine.",
 bullets: [
 "Entretien du bureau du titulaire et coin administratif",
 "Espace pause, micro-ondes, frigo, vaisselle",
 "Vestiaires et coin équipe",
 "Vitrerie intérieure et miroirs",
 ],
 },
];

const missions = [
 {
 icon: Store,
 title: "Espace de vente",
 items: [
 "Sols quotidiens, vitrines hebdomadaires",
 "Dépoussiérage des linéaires et mobilier",
 "Interventions hors heures de pointe",
 "Produits peu odorants pour le confort patients",
 ],
 },
 {
 icon: ShieldCheck,
 title: "Conformité ARS & DQO",
 items: [
 "Plan de nettoyage-désinfection (PND) par zone",
 "Alignement avec la Démarche Qualité Officine",
 "Fiches techniques et FDS à disposition",
 "Dossier « prêt inspection ARS » à jour",
 ],
 },
 {
 icon: CreditCard,
 title: "Comptoir & points haut contact",
 items: [
 "Désinfection 2x/jour du comptoir et TPE",
 "Produits virucides (référence EN 14476)",
 "Respect des temps de contact et séchage à l'air",
 "Renfort en période épidémique",
 ],
 },
 {
 icon: Pill,
 title: "Bionettoyage back-office",
 items: [
 "Plan de préparation traité en bionettoyage",
 "Matériel dédié, code couleur par zone",
 "Produits compatibles stockage médicaments",
 "Pas de mélanges, pas de lavettes multi-usages",
 ],
 },
 {
 icon: Snowflake,
 title: "Réfrigérateurs médicaments",
 items: [
 "Nettoyage mensuel tracé",
 "Contrôle joints et condensation",
 "Fiche datée signée par l'opérateur",
 "Intégration au dossier qualité",
 ],
 },
 {
 icon: Leaf,
 title: "Produits & engagement écologique",
 items: [
 "Produits éco-labellisés quand l'usage le permet",
 "Solutions à faibles COV pour l'air intérieur",
 "Microfibres professionnelles, juste dose",
 "Stockage séparé et étiquetage clair",
 ],
 },
];

const methode = [
 {
 icon: CalendarCheck,
 step: "01",
 title: "Audit de votre officine",
 text: "Visite avec le titulaire, cartographie des zones (vente, comptoir, back-office, stockage, frigos, sanitaires), recensement des flux patients et contraintes d'horaires.",
 },
 {
 icon: ClipboardList,
 step: "02",
 title: "Plan de nettoyage & produits",
 text: "Rédaction du PND par zone avec fréquences, choix des produits (compatibles médicaments, faibles COV, EN 14476 si besoin) et du matériel dédié. Validation avec vous.",
 },
 {
 icon: Eye,
 step: "03",
 title: "Formation des agents",
 text: "Formation aux gestes de bionettoyage, au code couleur des lavettes, aux temps de contact et à la confidentialité spécifique à l'officine. Agent référent attitré à votre site.",
 },
 {
 icon: MessageSquare,
 step: "04",
 title: "Pilotage & dossier ARS",
 text: "Check-lists datées à chaque passage, revue mensuelle avec le titulaire, actions correctives en cas d'écart. Votre dossier d'hygiène reste prêt en permanence pour l'inspection ARS.",
 },
];

const engagements = [
 {
 icon: ShieldCheck,
 title: "Prêt pour l'inspection ARS",
 text: "Plan de nettoyage-désinfection, FDS, check-lists datées et fiches frigo : votre dossier hygiène est à jour, cohérent avec la réalité du terrain et alignable sur la DQO.",
 },
 {
 icon: HeartHandshake,
 title: "Discrétion & continuité",
 text: "Agent référent fidélisé sur votre officine, interventions hors flux patients, remplaçants formés pour garantir un niveau constant toute l'année, y compris en saison épidémique.",
 },
 {
 icon: Leaf,
 title: "Produits compatibles santé",
 text: "Produits éco-labellisés à faibles COV quand c'est compatible, virucides EN 14476 sur points haut contact, microfibres pro et juste dose : efficacité sans sur-désinfection.",
 },
];

const faqs = [
 {
 q: "Quelle est la fréquence recommandée pour nettoyer une pharmacie ?",
 a: "Une base réaliste : sols de la zone vente au quotidien, comptoirs et surfaces à haut contact 1 à 2 fois par jour, vitrines de façon hebdomadaire (à ajuster selon l'exposition), réfrigérateurs médicaments mensuellement. Toutes ces fréquences sont consignées dans votre plan de nettoyage officine et ajustées selon l'affluence.",
 },
 {
 q: "Le terminal CB (TPE) doit-il être désinfecté tous les jours ?",
 a: "Oui, au minimum. C'est l'un des points de contact les plus manipulés de l'officine. Nous le désinfectons 2 fois par jour avec un produit appliqué sur lavette dédiée (jamais pulvérisé directement sur l'appareil), en respectant le temps de contact et en laissant sécher à l'air.",
 },
 {
 q: "Comment se passe le nettoyage du réfrigérateur à médicaments ?",
 a: "Une procédure simple et mensuelle : préparation d'un espace propre temporaire pour les produits, nettoyage des étagères et parois, vérification des joints et de la condensation, puis enregistrement sur une fiche datée (opérateur, observations). Cette traçabilité s'intègre directement à votre dossier qualité.",
 },
 {
 q: "Vos produits sont-ils compatibles avec le stockage de médicaments ?",
 a: "Oui. Nous privilégions des produits à faibles COV, peu odorants et éco-labellisés quand l'usage le permet, pour préserver la qualité de l'air et éviter toute interférence avec les produits de santé. Les produits virucides (EN 14476) sont réservés aux surfaces à haut contact où le risque est réel.",
 },
 {
 q: "Pouvez-vous intervenir hors heures d'ouverture ?",
 a: "C'est notre standard pour les officines. Nous planifions les passages avant ouverture, sur la pause méridienne ou après fermeture, pour ne pas perturber le flux patients. L'agent référent dispose d'un protocole d'accès convenu avec le titulaire et garantit la discrétion sur les zones confidentielles.",
 },
];

function PharmaceutiquePage() {
 const [activeZone, setActiveZone] = useState<string>(zones[0].id);
 const current = zones.find((z) => z.id === activeZone)!;

 return (
 <Layout>
 {/* Hero */}
 <section className="relative overflow-hidden">
 <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
 <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">
 <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
 <Link to="/proprete" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-8 hover:gap-3 transition-all">
 <ArrowLeft size={14} /> Propreté
 </Link>
 <div className="flex items-center gap-5 mb-6">
 <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30">
 <FlaskConical className="text-primary" size={26} />
 </div>
 <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">Pharmacie & officine</p>
 </div>
 <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
 Nettoyage d'officine,<br />
 <span className="text-primary">protocole prêt pour l'ARS.</span>
 </h1>
 <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
 Protocole d'hygiène par zone, désinfection du comptoir et du TPE, bionettoyage du back-office, frigos médicaments tracés : un dispositif clair, reproductible et justifiable en cas d'inspection.
 </p>
 <div className="mt-10 flex flex-wrap gap-4">
 <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" ></a>
 <a href="#zones" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-border font-semibold hover:border-primary/60 transition">
 Découvrir nos prestations
 </a>
 </div>
 </motion.div>
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1 }}
 className="relative rounded-sm overflow-hidden"
 style={{ boxShadow: "var(--shadow-elegant)" }}
 >
 <img src={heroImg} alt="Nettoyage d'officine de pharmacie par ELITESY : désinfection du comptoir et du terminal CB" width={1600} height={1120} className="w-full h-[500px] object-cover" />
 <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
 </motion.div>
 </div>
 </section>

 {/* Intro */}
 <section className="py-24 border-t border-border">
 <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-[auto_1fr] gap-10 items-start">
 <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 shrink-0">
 <ShieldCheck className="text-primary" size={28} />
 </div>
 <div>
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-4 text-sm">Un partenaire pour votre officine</p>
 <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
 Une officine cumule des contraintes de commerce ouvert au public et d'activité de santé : il faut un protocole clair, reproductible et traçable.
 </h2>
 <p className="text-muted-foreground leading-relaxed text-lg">
 ELITESY structure l'hygiène de votre pharmacie autour d'un zoning pragmatique — espace de vente, comptoir et TPE, back-office et préparations, stockage et réfrigérateurs médicaments, sanitaires — avec une traçabilité simple alignée sur la Démarche Qualité Officine (DQO) et prête en cas d'inspection ARS.
 </p>
 </div>
 </div>
 </section>

 {/* Zones interactives */}
 <section id="zones" className="py-24 border-t border-border bg-card/40">
 <div className="mx-auto max-w-7xl px-6 lg:px-10">
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Zoning de votre officine</p>
 <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">Du plus public au plus sensible, chaque zone son protocole.</h2>
 <p className="text-muted-foreground max-w-2xl mb-12">Cliquez sur une zone pour découvrir fréquences, produits et points d'attention.</p>

 <div className="grid lg:grid-cols-[320px_1fr] gap-8">
 <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
 {zones.map((z) => {
 const Icon = z.icon;
 const active = z.id === activeZone;
 return (
 <button
 key={z.id}
 onClick={() => setActiveZone(z.id)}
 className={`shrink-0 lg:shrink text-left flex items-center gap-4 p-4 rounded-sm border transition-all ${
 active
 ? "border-primary bg-primary/10 text-foreground"
 : "border-border bg-background hover:border-primary/50 text-muted-foreground hover:text-foreground"
 }`}
 >
 <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${active ? "bg-primary/20" : "bg-card"}`}>
 <Icon className={active ? "text-primary" : "text-foreground/60"} size={18} />
 </div>
 <span className="font-semibold whitespace-nowrap lg:whitespace-normal">{z.label}</span>
 {active && <ArrowRight className="hidden lg:block ml-auto text-primary" size={16} />}
 </button>
 );
 })}
 </div>

 <motion.div
 key={current.id}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4 }}
 className="grid md:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden bg-background"
 >
 <div className="relative h-64 md:h-auto min-h-[320px]">
 <LazyImage src={current.image} alt={current.label} width={1280} height={900} className="absolute inset-0 w-full h-full object-cover" />
 </div>
 <div className="p-8 md:p-10 flex flex-col justify-center">
 <h3 className="text-2xl md:text-3xl font-bold mb-4">{current.label}</h3>
 <p className="text-muted-foreground leading-relaxed mb-6">{current.description}</p>
 <ul className="space-y-3 mt-6">
 {current.bullets.map((b) => (
 <li key={b} className="flex items-start gap-3 text-sm">
 <Check className="text-primary mt-0.5 shrink-0" size={16} />
 <span>{b}</span>
 </li>
 ))}
 </ul>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Nos missions */}
 <section className="py-24 border-t border-border">
 <div className="mx-auto max-w-7xl px-6 lg:px-10">
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Nos missions en officine</p>
 <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Un dispositif complet, de la vitrine au dossier qualité.</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {missions.map((m, i) => {
 const Icon = m.icon;
 return (
 <motion.div
 key={m.title}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.06 }}
 className="p-8 border border-border rounded-sm bg-card hover:border-primary/50 transition group"
 >
 <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition">
 <Icon className="text-primary" size={22} />
 </div>
 <h3 className="text-xl font-semibold mb-4">{m.title}</h3>
 <ul className="space-y-2">
 {m.items.map((it) => (
 <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
 <Check className="text-primary mt-0.5 shrink-0" size={14} />
 <span>{it}</span>
 </li>
 ))}
 </ul>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* Méthode */}
 <section className="py-24 border-t border-border bg-card/40">
 <div className="mx-auto max-w-7xl px-6 lg:px-10">
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Méthode & organisation</p>
 <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">De l'audit de l'officine au dossier inspection.</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {methode.map((m, i) => {
 const Icon = m.icon;
 return (
 <motion.div
 key={m.step}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.08 }}
 className="relative p-8 border border-border rounded-sm bg-background"
 >
 <div className="font-display text-primary/30 text-5xl font-bold absolute top-4 right-6">{m.step}</div>
 <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-6">
 <Icon className="text-primary" size={22} />
 </div>
 <h3 className="text-lg font-semibold mb-3">{m.title}</h3>
 <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* Pourquoi nous */}
 <section className="py-24 border-t border-border">
 <div className="mx-auto max-w-4xl px-6 lg:px-10">
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Pourquoi ELITESY</p>
 <h2 className="text-4xl md:text-5xl font-bold mb-10">Un partenaire fiable pour votre officine.</h2>
 <div className="space-y-6">
 {engagements.map((e) => {
 const Icon = e.icon;
 return (
 <div key={e.title} className="flex gap-5 p-5 rounded-sm border border-border bg-card">
 <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
 <Icon className="text-primary" size={22} />
 </div>
 <div>
 <h3 className="font-semibold text-lg mb-1">{e.title}</h3>
 <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-24 border-t border-border bg-card/40">
 <div className="mx-auto max-w-4xl px-6 lg:px-10">
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Questions fréquentes</p>
 <h2 className="text-4xl md:text-5xl font-bold mb-12">Vos questions, nos réponses.</h2>
 <Accordion type="single" collapsible className="w-full">
 {faqs.map((f, i) => (
 <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
 <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
 {f.q}
 </AccordionTrigger>
 <AccordionContent className="text-muted-foreground leading-relaxed text-base">
 {f.a}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </section>

 {/* CTA */}
 <section className="py-24">
 <div className="mx-auto max-w-4xl px-6 text-center">
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Passons à l'action</p>
 <h2 className="text-4xl md:text-5xl font-bold">Un devis adapté à votre officine.</h2>
 <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
 Décrivez-nous votre officine, vos horaires et votre zoning : nous construisons un protocole sur mesure, traçable et compatible avec votre démarche qualité.
 </p>
 <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" ></a>
 </div>
 </section>
 </Layout>
 );
}