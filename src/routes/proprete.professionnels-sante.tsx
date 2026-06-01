import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  HeartPulse,
  BedDouble,
  Microscope,
  Stethoscope,
  Users,
  ShieldCheck,
  ClipboardList,
  Eye,
  MessageSquare,
  CalendarCheck,
  Sparkles,
  Syringe,
  Leaf,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/sante-hero.jpg";
import chambreImg from "@/assets/sante-chambre.jpg";
import blocImg from "@/assets/sante-bloc.jpg";
import ehpadImg from "@/assets/sante-ehpad.jpg";
import laboImg from "@/assets/sante-labo.jpg";
import cabinetImg from "@/assets/sante-cabinet.jpg";
import teamImg from "@/assets/elitesy-team.jpg";

export const Route = createFileRoute("/proprete/professionnels-sante")({
  head: () => ({
    meta: [
      { title: "Santé & Soins — Bionettoyage hospitalier & établissements de santé | ELITESY" },
      {
        name: "description",
        content:
          "Bionettoyage, désinfection et entretien des établissements de santé : hôpitaux, cliniques, EHPAD, cabinets médicaux et laboratoires. Maîtrise du risque infectieux et traçabilité.",
      },
      { property: "og:title", content: "Santé & Soins — ELITESY Propreté" },
      {
        property: "og:description",
        content:
          "Hôpitaux, cliniques, EHPAD, cabinets et laboratoires : protocoles de bionettoyage, agents formés au risque infectieux, traçabilité complète.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: SantePage,
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
    id: "chambres",
    label: "Chambres & services de soins",
    icon: BedDouble,
    image: chambreImg,
    description:
      "Chambres patients, salles de soins et postes infirmiers : nos équipes appliquent les protocoles de bionettoyage en deux temps (détergent puis désinfectant) avec rotation des microfibres et traçabilité de chaque passage.",
    bullets: [
      "Bionettoyage quotidien et à la sortie du patient",
      "Désinfection des points de contact à haute fréquence",
      "Réfection des sanitaires et locaux annexes",
      "Traçabilité signée à chaque intervention",
    ],
  },
  {
    id: "bloc",
    label: "Blocs opératoires & salles techniques",
    icon: Syringe,
    image: blocImg,
    description:
      "Blocs opératoires, salles de réveil, endoscopie : zones à risque élevé, protocoles renforcés. Nos agents formés interviennent entre interventions et en bionettoyage approfondi de fin de programme.",
    bullets: [
      "Bionettoyage entre interventions",
      "Bionettoyage approfondi de fin de programme",
      "Détergents-désinfectants conformes EN 14476",
      "Tenues, gants et matériel dédiés à la zone",
    ],
  },
  {
    id: "ehpad",
    label: "EHPAD & résidences seniors",
    icon: Users,
    image: ehpadImg,
    description:
      "EHPAD, résidences services seniors, USLD : nos équipes interviennent avec discrétion et bienveillance auprès des résidents, dans le respect du rythme de vie de l'établissement et de la prévention des IAS.",
    bullets: [
      "Entretien des chambres, parties communes et salons",
      "Bionettoyage des salles de restaurant et animations",
      "Désinfection des aides techniques (déambulateurs, fauteuils)",
      "Agents formés au contact des publics fragiles",
    ],
  },
  {
    id: "laboratoires",
    label: "Laboratoires d'analyses",
    icon: Microscope,
    image: laboImg,
    description:
      "Laboratoires d'analyses médicales, salles de prélèvement, plateaux techniques : entretien respectueux des équipements sensibles et gestion conforme des DASRI.",
    bullets: [
      "Bionettoyage des paillasses et zones techniques",
      "Désinfection des salles de prélèvement",
      "Gestion des DASRI et déchets à risque",
      "Respect des plans de prévention et du marquage des zones",
    ],
  },
  {
    id: "cabinets",
    label: "Cabinets médicaux & maisons de santé",
    icon: Stethoscope,
    image: cabinetImg,
    description:
      "Cabinets médicaux, dentaires, paramédicaux, maisons de santé pluriprofessionnelles : interventions en dehors des consultations, désinfection des salles de soins entre deux journées.",
    bullets: [
      "Bionettoyage des salles d'examen et de consultation",
      "Désinfection complète des points de contact",
      "Salles d'attente accueillantes et impeccables",
      "Entretien des sanitaires patients à fréquence élevée",
    ],
  },
  {
    id: "circulations",
    label: "Circulations & accueils",
    icon: HeartPulse,
    image: heroImg,
    description:
      "Halls, couloirs, ascenseurs, accueils : zones de passage stratégiques qui conditionnent la perception de l'établissement. Présence continue en journée, contrôles renforcés aux heures de pointe.",
    bullets: [
      "Lavage mécanisé des sols et couloirs",
      "Désinfection des rampes, poignées et boutons d'ascenseur",
      "Vitrages, banques d'accueil et signalétique",
      "Présence visible aux heures d'affluence",
    ],
  },
];

const missions = [
  {
    icon: ShieldCheck,
    title: "Bionettoyage hospitalier",
    items: [
      "Protocole en deux temps (détergent + désinfectant)",
      "Microfibres à code couleur par zone",
      "Détergents-désinfectants EN 14476 / EN 1276",
      "Suivi quotidien des consommations produits",
    ],
  },
  {
    icon: Syringe,
    title: "Maîtrise du risque infectieux",
    items: [
      "Agents formés à la prévention des IAS",
      "Protocoles BMR / Clostridium difficile",
      "Gestion des chambres en isolement",
      "Procédures d'habillage et déshabillage",
    ],
  },
  {
    icon: ClipboardList,
    title: "Traçabilité & qualité",
    items: [
      "Fiche de passage signée par chambre",
      "Audits visuels et bionettoyage par ATP-métrie",
      "Plan d'assurance qualité par établissement",
      "Reporting mensuel au cadre d'hygiène",
    ],
  },
  {
    icon: Sparkles,
    title: "Locaux techniques & annexes",
    items: [
      "Locaux ménages, vidoirs, sas DASRI",
      "Lingeries et offices alimentaires",
      "Vestiaires personnels soignants",
      "Locaux poubelles et zones logistiques",
    ],
  },
  {
    icon: HeartPulse,
    title: "Continuité 24/7",
    items: [
      "Astreintes nuit, week-end et jours fériés",
      "Renforts en cas d'épidémie ou de pic d'activité",
      "Intervention exceptionnelle sous 2 h",
      "Polyvalence et rotations sécurisées",
    ],
  },
  {
    icon: Leaf,
    title: "Démarche responsable",
    items: [
      "Produits écolabellisés quand cliniquement compatibles",
      "Centrales de dilution pour limiter les déchets",
      "Tri des DASRI et déchets recyclables",
      "Formation continue au geste juste",
    ],
  },
];

const methode = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Diagnostic & cartographie des zones",
    text: "Visite avec l'EOH ou le cadre d'hygiène, identification des zones à risque (1 à 4), cartographie des fréquences et des protocoles applicables par local.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Protocoles & plan d'assurance qualité",
    text: "Rédaction des modes opératoires, choix des produits validés par votre pharmacie, dimensionnement des équipes et planning aligné sur l'activité de soins.",
  },
  {
    icon: Eye,
    step: "03",
    title: "Contrôles qualité & ATP-métrie",
    text: "Audits visuels hebdomadaires, contrôles par bioluminescence ATP, suivi des indicateurs IAS partagés avec le CLIN et le cadre d'hygiène.",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "Pilotage & amélioration continue",
    text: "Comité de suivi mensuel, plan d'actions correctives, formation continue des agents, ajustement des protocoles aux retours d'expérience.",
  },
];

const engagements = [
  {
    icon: ShieldCheck,
    title: "Conformité aux exigences hospitalières",
    text: "Protocoles alignés sur les recommandations SF2H, gestion des BMR et des chambres en isolement, produits validés par votre pharmacie hospitalière.",
  },
  {
    icon: Users,
    title: "Agents formés au milieu de soins",
    text: "Formation initiale au bionettoyage et au risque infectieux, formation continue, encadrement de proximité par un chef d'équipe dédié à votre site.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    text: "Astreintes nuit, week-end et jours fériés. Renforts mobilisables en cas d'épidémie, de pic d'activité ou d'intervention exceptionnelle sous 2 h.",
  },
];

const faqs = [
  {
    q: "Vos agents sont-ils formés au bionettoyage hospitalier ?",
    a: "Oui. Chaque agent affecté à un établissement de santé suit une formation initiale au bionettoyage, à la prévention des IAS et aux protocoles BMR. Des sessions de recyclage sont organisées chaque année et un chef d'équipe dédié assure l'encadrement quotidien.",
  },
  {
    q: "Quels produits utilisez-vous ?",
    a: "Nous utilisons exclusivement des détergents-désinfectants conformes aux normes EN 14476 (virucide) et EN 1276 (bactéricide), validés par votre pharmacie hospitalière. Les centrales de dilution garantissent un dosage précis et limitent les déchets d'emballages.",
  },
  {
    q: "Comment gérez-vous les chambres en isolement ou les BMR ?",
    a: "Nous appliquons des protocoles renforcés : matériel dédié, désinfection terminale après la sortie du patient, gestion stricte des DASRI et habillage/déshabillage selon les procédures de votre EOH. La traçabilité est complète et conservée à votre disposition.",
  },
  {
    q: "Intervenez-vous la nuit, le week-end et les jours fériés ?",
    a: "Oui, nous assurons une continuité 24/7 avec astreintes téléphoniques et équipes mobilisables. Les rotations de nuit sont organisées avec un encadrement de proximité et nous garantissons une intervention exceptionnelle sous 2 h en cas d'urgence (souillure, isolement, dégât des eaux).",
  },
  {
    q: "Comment garantissez-vous la qualité des prestations ?",
    a: "Nous mettons en place un Plan d'Assurance Qualité avec audits visuels hebdomadaires, contrôles par bioluminescence ATP, fiches de passage signées et indicateurs partagés mensuellement avec le CLIN et le cadre d'hygiène. Tout écart fait l'objet d'un plan d'actions correctives.",
  },
];

function SantePage() {
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
                <HeartPulse className="text-primary" size={26} />
              </div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">Santé & Soins</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
              Bionettoyage hospitalier,<br />
              <span className="text-primary">maîtrise du risque infectieux.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hôpitaux, cliniques, EHPAD, cabinets médicaux et laboratoires : des protocoles rigoureux, des agents formés et une traçabilité complète pour des environnements sains au service de vos patients.
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
            <img src={heroImg} alt="Couloir d'hôpital entretenu par ELITESY" width={1600} height={1120} className="w-full h-[500px] object-cover" />
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
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-4 text-sm">L'hygiène, premier acte de soin</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Dans un établissement de santé, la propreté n'est pas une option : c'est une condition de la qualité des soins.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ELITESY accompagne hôpitaux, cliniques, EHPAD, cabinets et laboratoires avec des dispositifs alignés sur les recommandations SF2H, des agents formés au risque infectieux et une traçabilité complète des interventions. Une prestation rigoureuse, partenaire de votre équipe opérationnelle d'hygiène.
            </p>
          </div>
        </div>
      </section>

      {/* Zones interactives */}
      <section id="zones" className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Les environnements que nous entretenons</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">De la chambre du patient au bloc opératoire.</h2>
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
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Nos missions en milieu de soins</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Un périmètre complet au service de l'hygiène hospitalière.</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Un pilotage rigoureux, partenaire de votre EOH.</h2>
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
            <img src={teamImg} alt="L'équipe ELITESY : agents formés au bionettoyage hospitalier" loading="lazy" width={1280} height={960} className="w-full h-[500px] object-cover" />
          </motion.div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Pourquoi ELITESY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Un partenaire fiable pour votre établissement.</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold">Un dispositif sur mesure pour votre établissement de santé.</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Décrivez-nous votre site et vos contraintes : nous construisons une prestation alignée sur vos protocoles, votre EOH et votre activité de soins.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Demander un devis personnalisé <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}