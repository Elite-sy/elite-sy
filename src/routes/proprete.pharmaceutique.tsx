import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FlaskConical,
  Microscope,
  Beaker,
  Wind,
  ShieldCheck,
  ClipboardList,
  Eye,
  MessageSquare,
  CalendarCheck,
  Sparkles,
  HeartHandshake,
  Boxes,
  Pill,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";
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
      { title: "Pharmaceutique — Bionettoyage salles blanches & ZAC | ELITESY" },
      {
        name: "description",
        content:
          "Bionettoyage des salles blanches, laboratoires et zones à atmosphère contrôlée. Protocoles BPF, ISO 14644 et traçabilité complète pour vos environnements pharmaceutiques.",
      },
      { property: "og:title", content: "Pharmaceutique — ELITESY Propreté" },
      {
        property: "og:description",
        content:
          "Salles blanches, laboratoires, bioproduction, logistique : des équipes formées aux BPF et des protocoles validés pour vos environnements sensibles.",
      },
      { property: "og:image", content: heroImg },
    ],
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
    id: "salles-blanches",
    label: "Salles blanches (ZAC)",
    icon: Wind,
    image: cleanroomImg,
    description:
      "Bionettoyage des zones à atmosphère contrôlée classées ISO 5 à ISO 8. Nos protocoles validés respectent les exigences BPF, GMP et ISO 14644 pour garantir l'intégrité de vos environnements de production stérile.",
    bullets: [
      "Bionettoyage en flux validé (sens, dosage, temps de contact)",
      "Microfibres dédiées à code couleur par classe ISO",
      "Détergents-désinfectants homologués spectre large",
      "Contrôles particulaires et microbiologiques tracés",
    ],
  },
  {
    id: "laboratoires",
    label: "Laboratoires R&D et CQ",
    icon: Microscope,
    image: labImg,
    description:
      "Entretien des laboratoires de recherche, contrôle qualité et bioanalyse. Nos agents formés aux risques biologiques et chimiques préservent vos paillasses, hottes, postes de sécurité microbiologique et instruments analytiques.",
    bullets: [
      "Nettoyage des paillasses et plans de travail inox",
      "Entretien des PSM, sorbonnes et zones d'analyse",
      "Gestion des déchets DASRI et chimiques",
      "Respect strict des zones et flux du laboratoire",
    ],
  },
  {
    id: "sas-vestiaires",
    label: "Sas & vestiaires",
    icon: Beaker,
    image: airlockImg,
    description:
      "Les sas d'habillage et vestiaires sont la première barrière biologique de votre établissement. Nous garantissons un bionettoyage rigoureux, respectant la séparation des flux propres et sales.",
    bullets: [
      "Bionettoyage des sas d'habillage et de déshabillage",
      "Désinfection des bancs, vestiaires et sanitaires associés",
      "Réapprovisionnement des consommables stériles",
      "Respect de la marche en avant et des flux",
    ],
  },
  {
    id: "production",
    label: "Zones de production",
    icon: Pill,
    image: productionImg,
    description:
      "Bionettoyage des ateliers de production, salles de remplissage, locaux de pesée et zones de conditionnement. Interventions cadencées sur vos arrêts techniques et campagnes de production.",
    bullets: [
      "Nettoyage entre lots et fins de campagne",
      "Décontamination des équipements et bâtis inox",
      "Sols époxy, plafonds techniques et parois lessivables",
      "Validation et traçabilité documentaire complète",
    ],
  },
  {
    id: "logistique",
    label: "Logistique & stockage",
    icon: Boxes,
    image: warehouseImg,
    description:
      "Entretien des zones logistiques, magasins matières premières, articles de conditionnement et produits finis. Maintien des conditions de stockage et propreté des zones de réception et d'expédition.",
    bullets: [
      "Balayage et lavage mécanisé des sols",
      "Dépoussiérage des rayonnages et palettiers",
      "Nettoyage des quais et zones de transit",
      "Respect des plans de circulation et FIFO",
    ],
  },
  {
    id: "tertiaire",
    label: "Bureaux & espaces périphériques",
    icon: Sparkles,
    image: teamImg,
    description:
      "Au-delà des zones réglementées, nous entretenons les espaces tertiaires de votre site : bureaux d'études, salles de réunion, espaces de restauration et zones d'accueil. Une qualité homogène, partout sur votre site.",
    bullets: [
      "Entretien quotidien des bureaux et open spaces",
      "Vitrerie, miroirs et parois vitrées",
      "Salles de réunion et espaces de convivialité",
      "Sanitaires et zones de restauration",
    ],
  },
];

const missions = [
  {
    icon: Wind,
    title: "Bionettoyage ZAC",
    items: [
      "Protocoles validés classes ISO 5 à ISO 8",
      "Flux entrant et sortant maîtrisés",
      "Détergents-désinfectants homologués",
      "Matériel dédié par classe de propreté",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Conformité BPF & GMP",
    items: [
      "Procédures rédigées selon vos référentiels",
      "Modes opératoires validés avec votre QA",
      "Traçabilité complète des interventions",
      "Préparation et accompagnement aux audits",
    ],
  },
  {
    icon: Microscope,
    title: "Laboratoires sensibles",
    items: [
      "Entretien des paillasses, PSM et sorbonnes",
      "Gestion des DASRI et déchets chimiques",
      "Agents formés aux risques biologiques",
      "Respect strict des zones et flux",
    ],
  },
  {
    icon: Pill,
    title: "Production pharmaceutique",
    items: [
      "Bionettoyage entre lots et campagnes",
      "Décontamination des équipements inox",
      "Interventions sur arrêts techniques",
      "Validation documentaire complète",
    ],
  },
  {
    icon: Boxes,
    title: "Logistique & stockage",
    items: [
      "Balayage et lavage mécanisé",
      "Dépoussiérage rayonnages et palettiers",
      "Maintien des conditions de stockage",
      "Nettoyage quais et zones de transit",
    ],
  },
  {
    icon: ClipboardList,
    title: "Documentation & traçabilité",
    items: [
      "Fiches de relevés par zone et par passage",
      "Plans de nettoyage et de désinfection",
      "Bilans qualité mensuels et trimestriels",
      "Dossier audit prêt à présenter",
    ],
  },
];

const methode = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Audit & qualification du site",
    text: "Visite des zones avec votre référent QA, cartographie des classes ISO, identification des flux propres et sales, recensement des contraintes BPF spécifiques à votre activité.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Rédaction des protocoles",
    text: "Élaboration des modes opératoires par zone, choix des produits et matériels validés, plans de nettoyage et grilles de contrôle. Validation conjointe avec votre assurance qualité.",
  },
  {
    icon: Eye,
    step: "03",
    title: "Formation & habilitation",
    text: "Formation des agents aux BPF, à l'habillage en cascade, aux gestes de bionettoyage. Habilitation par zone et tests microbiologiques périodiques pour garantir la conformité.",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "Pilotage & amélioration continue",
    text: "Référent dédié, contrôles qualité tracés, revue mensuelle avec votre QA, plan d'actions correctives. Accompagnement complet lors de vos audits internes et clients.",
  },
];

const engagements = [
  {
    icon: ShieldCheck,
    title: "Conformité réglementaire",
    text: "BPF, GMP, ISO 14644, USP <797> : nos protocoles sont alignés sur les référentiels en vigueur et adaptés à votre niveau d'exigence interne.",
  },
  {
    icon: HeartHandshake,
    title: "Équipes stables & habilitées",
    text: "Agents formés, habilités par zone et fidélisés sur votre site. Aucun intérimaire non habilité, continuité de service garantie via un volant de remplaçants formés.",
  },
  {
    icon: ClipboardList,
    title: "Traçabilité audit-ready",
    text: "Chaque intervention est documentée : fiches de relevés, registres signés, plans de nettoyage à jour. Votre dossier audit est prêt en permanence.",
  },
];

const faqs = [
  {
    q: "Êtes-vous habitués aux environnements BPF / GMP ?",
    a: "Oui. Nos équipes interviennent quotidiennement dans des environnements pharmaceutiques et bioproduction soumis aux Bonnes Pratiques de Fabrication. Nos protocoles, formations et documents qualité sont conçus pour résister aux audits internes, clients et inspections ANSM.",
  },
  {
    q: "Quelles classes ISO traitez-vous ?",
    a: "Nous intervenons en zones classées ISO 5 à ISO 8 selon ISO 14644. Les protocoles, matériels et habillages sont adaptés à chaque classe, avec une séparation stricte des consommables et un code couleur par niveau de propreté.",
  },
  {
    q: "Comment garantissez-vous la traçabilité ?",
    a: "Chaque passage donne lieu à un relevé daté et signé : zone, opérateur, produits utilisés, lot, temps de contact. Les données sont consolidées dans un tableau de bord mensuel partagé avec votre QA, et l'historique complet est conservé pour vos audits.",
  },
  {
    q: "Pouvez-vous intervenir sur arrêts techniques et shutdowns ?",
    a: "Absolument. Nous mobilisons des équipes renforcées sur vos arrêts de production, shutdowns annuels, requalifications ou changements de campagne. Planning défini conjointement, équipes formées aux contraintes de votre site.",
  },
  {
    q: "Gérez-vous les déchets DASRI et chimiques ?",
    a: "Oui. Nous assurons la collecte, le conditionnement et la traçabilité des DASRI conformément à la réglementation, ainsi que la prise en charge des déchets chimiques en liaison avec vos prestataires d'évacuation agréés.",
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
              <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">Pharmaceutique</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
              Salles blanches & ZAC,<br />
              <span className="text-primary">l'exigence du détail.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Bionettoyage des environnements pharmaceutiques sensibles : protocoles BPF, équipes habilitées et traçabilité complète pour vos sites de production, laboratoires et zones logistiques.
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
            <img src={heroImg} alt="Salle blanche pharmaceutique ELITESY en bionettoyage" width={1600} height={1120} className="w-full h-[500px] object-cover" />
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
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-4 text-sm">Un partenaire à la hauteur de vos exigences</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Le bionettoyage pharmaceutique exige des protocoles validés, des équipes habilitées et une traçabilité sans faille.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ELITESY intervient sur l'ensemble de vos zones — production stérile, laboratoires R&D et contrôle qualité, sas d'habillage, logistique — avec des modes opératoires conformes aux Bonnes Pratiques de Fabrication, à la norme ISO 14644 et aux référentiels GMP.
            </p>
          </div>
        </div>
      </section>

      {/* Zones interactives */}
      <section id="zones" className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Les zones que nous traitons</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">Chaque environnement, son protocole.</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">Cliquez sur une zone pour découvrir notre méthode d'intervention.</p>

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
                <img src={current.image} alt={current.label} loading="lazy" width={1280} height={900} className="absolute inset-0 w-full h-full object-cover" />
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
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Nos missions en pharmaceutique</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Un périmètre complet, du laboratoire à la logistique.</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">De l'audit au pilotage continu.</h2>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-sm overflow-hidden"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img src={teamImg} alt="L'équipe ELITESY : agents habilités aux environnements pharmaceutiques" loading="lazy" width={1280} height={960} className="w-full h-[500px] object-cover" />
          </motion.div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Pourquoi ELITESY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Un partenaire fiable pour vos environnements sensibles.</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold">Un devis adapté à votre site pharmaceutique.</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Décrivez-nous vos zones et vos référentiels : nous construisons un dispositif sur mesure, conforme à vos exigences qualité.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Demander un devis personnalisé <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}