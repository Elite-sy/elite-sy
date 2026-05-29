import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Home,
  DoorOpen,
  Trash2,
  Sparkles,
  Trees,
  Car,
  ShieldCheck,
  ClipboardList,
  CalendarCheck,
  Eye,
  MessageSquare,
  Scale,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hallImg from "@/assets/syndic-hall.jpg";
import heroImg from "@/assets/syndic-hero.jpg";
import staircaseImg from "@/assets/syndic-staircase.jpg";
import parkingImg from "@/assets/syndic-parking.jpg";

import binsImg from "@/assets/syndic-bins.jpg";
import glassImg from "@/assets/syndic-glass.jpg";
import gardenImg from "@/assets/syndic-garden.jpg";

export const Route = createFileRoute("/proprete/syndics-copropriete")({
  head: () => ({
    meta: [
      { title: "Syndics de copropriétés — Entretien des parties communes | ELITESY" },
      {
        name: "description",
        content:
          "Entretien complet des copropriétés : propreté, hygiène et valorisation de votre immeuble grâce à un service fiable, régulier et adapté aux exigences des syndics.",
      },
      { property: "og:title", content: "Syndics de copropriétés — ELITESY Propreté" },
      {
        property: "og:description",
        content:
          "Halls, escaliers, ascenseurs, locaux poubelles, parkings, espaces verts : un service rigoureux et traçable pour chaque copropriété.",
      },
      { property: "og:image", content: hallImg },
    ],
  }),
  component: SyndicsPage,
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
    id: "halls",
    label: "Halls d'entrée",
    icon: DoorOpen,
    image: hallImg,
    description:
      "Premier contact des résidents et visiteurs, le hall reflète immédiatement la qualité de gestion de l'immeuble. Nous garantissons un accueil impeccable à toute heure.",
    bullets: [
      "Lavage et lustrage des sols",
      "Dépoussiérage du mobilier et boîtes aux lettres",
      "Désinfection des points de contact",
      "Nettoyage des portes vitrées",
    ],
  },
  {
    id: "escaliers",
    label: "Escaliers & paliers",
    icon: Home,
    image: staircaseImg,
    description:
      "Zones de fort passage soumises à l'usure quotidienne. Notre intervention préserve la sécurité, l'hygiène et l'esthétique de chaque étage.",
    bullets: [
      "Balayage et lavage des marches",
      "Dépoussiérage des rampes et plinthes",
      "Nettoyage des paliers et coursives",
      "Contrôle hebdomadaire des éclairages",
    ],
  },
  {
    id: "ascenseurs",
    label: "Ascenseurs",
    icon: Sparkles,
    image: glassImg,
    description:
      "Espace confiné à fort enjeu d'hygiène. Cabines, miroirs et boutons sont traités avec des produits adaptés pour garantir confort et sécurité sanitaire.",
    bullets: [
      "Lavage du sol et des parois",
      "Désinfection des boutons et poignées",
      "Lustrage des miroirs et inox",
      "Vérification visuelle de l'état général",
    ],
  },
  {
    id: "poubelles",
    label: "Locaux poubelles",
    icon: Trash2,
    image: binsImg,
    description:
      "Gestion complète des containers : sortie, rentrée, nettoyage et désinfection. Un local poubelle entretenu limite les nuisances et préserve l'hygiène collective.",
    bullets: [
      "Sortie et rentrée des bacs aux jours de collecte",
      "Lavage et désinfection des bacs roulants",
      "Nettoyage du sol et des parois du local",
      "Traitement anti-nuisibles préventif",
    ],
  },
  {
    id: "parkings",
    label: "Parkings & accès",
    icon: Car,
    image: parkingImg,
    description:
      "Balayage mécanisé des sous-sols et entrées extérieures pour des accès propres, sécurisés et accueillants à toute heure.",
    bullets: [
      "Balayage manuel ou mécanisé",
      "Nettoyage des entrées et rampes",
      "Dégraissage ponctuel des sols",
      "Vidage des corbeilles extérieures",
    ],
  },
  {
    id: "exterieurs",
    label: "Espaces verts & abords",
    icon: Trees,
    image: gardenImg,
    description:
      "Trottoirs, cours intérieures et espaces verts : nous valorisons l'environnement immédiat de l'immeuble pour le confort des résidents.",
    bullets: [
      "Balayage des trottoirs et abords",
      "Ramassage des déchets extérieurs",
      "Entretien léger des espaces verts",
      "Nettoyage des grilles et caniveaux",
    ],
  },
];

const missions = [
  {
    icon: Sparkles,
    title: "Entretien courant",
    items: [
      "Balayage, aspiration et lavage des sols",
      "Dépoussiérage des surfaces, rampes et boîtes aux lettres",
      "Nettoyage des halls, couloirs et escaliers",
      "Entretien complet des ascenseurs",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Hygiène & désinfection",
    items: [
      "Désinfection des points de contact (poignées, interrupteurs)",
      "Nettoyage des sanitaires communs",
      "Traitement renforcé des zones à fort passage",
      "Protocoles validés et produits homologués",
    ],
  },
  {
    icon: Trash2,
    title: "Gestion des déchets",
    items: [
      "Sortie et rentrée des containers",
      "Nettoyage et désinfection des locaux poubelles",
      "Entretien des bacs et zones de stockage",
      "Tri sélectif et conformité collecte",
    ],
  },
  {
    icon: DoorOpen,
    title: "Vitrerie & surfaces",
    items: [
      "Nettoyage des vitres et portes d'entrée",
      "Entretien des miroirs et parois vitrées",
      "Décapage et lustrage des sols durs",
      "Cristallisation des marbres",
    ],
  },
  {
    icon: Trees,
    title: "Entretien des extérieurs",
    items: [
      "Balayage des entrées, trottoirs et parkings",
      "Nettoyage des abords de l'immeuble",
      "Entretien des espaces verts",
      "Gestion des feuilles et déchets saisonniers",
    ],
  },
  {
    icon: ClipboardList,
    title: "Suivi & reporting",
    items: [
      "Registre de passage signé",
      "Contrôles qualité mensuels",
      "Compte-rendu au syndic et au conseil syndical",
      "Suivi des consommables et signalements",
    ],
  },
];

const methode = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Cahier des charges sur mesure",
    text: "Visite du site, audit des besoins et définition d'un planning adapté à la taille, à la fréquentation et aux contraintes de la copropriété.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Planning d'intervention clair",
    text: "Affichage des passages, équipe dédiée et référent unique pour le syndic. Chaque résident sait quand et comment l'immeuble est entretenu.",
  },
  {
    icon: Eye,
    step: "03",
    title: "Contrôles qualité réguliers",
    text: "Visites surprises de l'encadrement, grilles d'évaluation et registre de passage signé pour garantir une exécution constante.",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "Communication transparente",
    text: "Ligne directe avec le syndic et le conseil syndical. Réactivité sur les incidents et reporting clair à chaque assemblée générale.",
  },
];

const engagements = [
  {
    icon: Scale,
    title: "Obligation légale respectée",
    text: "Le syndic doit assurer l'entretien des parties communes. Nous garantissons la conformité de cette mission au quotidien.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & salubrité",
    text: "Prévention des chutes, hygiène collective, lutte contre les nuisibles : un cadre sain et sécurisé pour tous les résidents.",
  },
  {
    icon: HeartHandshake,
    title: "Valorisation du patrimoine",
    text: "Un immeuble propre se loue mieux, se vend mieux et se vit mieux. Un investissement direct dans la valeur de votre copropriété.",
  },
];

const faqs = [
  {
    q: "À quelle fréquence intervenez-vous ?",
    a: "Nous proposons des passages quotidiens, hebdomadaires, bi-hebdomadaires ou périodiques. La fréquence est définie avec le syndic en fonction de la taille de l'immeuble, du nombre d'occupants et du niveau de fréquentation des espaces.",
  },
  {
    q: "Comment garantissez-vous la qualité dans le temps ?",
    a: "Chaque site dispose d'un référent dédié, d'un registre de passage signé et de contrôles qualité réguliers de notre encadrement. Un point trimestriel est organisé avec le syndic et le conseil syndical.",
  },
  {
    q: "Que se passe-t-il en cas d'absence d'un agent ?",
    a: "Nos équipes sont organisées en binômes avec un volant de remplaçants formés. La continuité de service est garantie, même en période de congés ou en cas d'imprévu.",
  },
  {
    q: "Gérez-vous la sortie et la rentrée des bacs ?",
    a: "Oui, la gestion complète des containers fait partie de nos prestations standard pour les copropriétés : sortie aux jours de collecte, rentrée après ramassage, nettoyage et désinfection des locaux et des bacs.",
  },
  {
    q: "Pouvez-vous intervenir ponctuellement (après travaux, dégât) ?",
    a: "Absolument. Nous réalisons des prestations exceptionnelles : remise en état après travaux, nettoyage après sinistre, désinfection complète, vitrerie en hauteur. Devis sous 48 h.",
  },
];

function SyndicsPage() {
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
                <Home className="text-primary" size={26} />
              </div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">Syndics de copropriétés</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
              L'entretien de vos immeubles,<br />
              <span className="text-primary">une exigence partagée.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Propreté, hygiène et valorisation de votre immeuble grâce à un service fiable, régulier et adapté aux exigences des syndics et copropriétaires.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
                Demander un devis <ArrowRight size={16} />
              </Link>
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
            <img src={heroImg} alt="Équipe ELITESY entretenant les parties communes d'une copropriété parisienne" width={1600} height={1120} className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Intro — obligation légale */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-[auto_1fr] gap-10 items-start">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 shrink-0">
            <Scale className="text-primary" size={28} />
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-4 text-sm">Une prestation indispensable et encadrée</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              L'entretien des parties communes est une obligation légale, assurée par le syndic pour le compte des copropriétaires.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Un nettoyage régulier garantit la salubrité des lieux, prévient les risques (chutes, hygiène, incendie), maintient un cadre de vie agréable et préserve la valeur du bien immobilier.
            </p>
          </div>
        </div>
      </section>

      {/* Zones interactives */}
      <section id="zones" className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Les zones que nous entretenons</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">Chaque espace collectif, traité avec rigueur.</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">Cliquez sur une zone pour découvrir notre méthode d'intervention.</p>

          <div className="grid lg:grid-cols-[320px_1fr] gap-8">
            {/* Tabs verticaux */}
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

            {/* Contenu */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden bg-background"
            >
              <div className="relative h-64 md:h-auto min-h-[320px]">
                <img src={current.image} alt={current.label} loading="lazy" width={1200} height={900} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{current.label}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{current.description}</p>
                <ul className="space-y-3 mt-auto">
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
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Nos missions en copropriété</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Un périmètre complet, ajusté à chaque immeuble.</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Un pilotage rigoureux, une traçabilité totale.</h2>
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

      {/* Pourquoi nous + image */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-sm overflow-hidden"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img src={glassImg} alt="Agent ELITESY entretenant l'entrée d'une copropriété" loading="lazy" width={1200} height={900} className="w-full h-[500px] object-cover" />
          </motion.div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Pourquoi ELITESY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Un partenaire fiable pour votre syndic.</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold">Un devis adapté à votre copropriété en 48 h.</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Décrivez-nous votre immeuble : nous vous proposons un cahier des charges sur mesure et une équipe dédiée.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Demander un devis personnalisé <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}