import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Wheat,
  Factory,
  HardHat,
  FlaskConical,
  HeartPulse,
  Home,
  Hotel,
  School,
  Store,
  Briefcase,
  Train,
  Check,
  Users,
  Leaf,
  Mail,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import hero from "@/assets/sf-hero.jpg";
import industrie from "@/assets/sec-industrie.jpg";
import pharma from "@/assets/sec-pharma.jpg";
import sante from "@/assets/sec-sante.jpg";
import retail from "@/assets/sec-retail.jpg";
import tertiaire from "@/assets/sec-tertiaire.jpg";
import syndics from "@/assets/sec-syndics.jpg";
import construction from "@/assets/sec-construction.jpg";
import education from "@/assets/sec-education.jpg";
import hotellerie from "@/assets/sec-hotellerie.jpg";

export const Route = createFileRoute("/soft-facility")({
  head: () => ({
    meta: [
      { title: "Soft Facility (FM) — Services multiservices sur mesure | ELITESY" },
      { name: "description", content: "ELITESY pilote vos services multiservices : accueil, courrier, espaces verts, gestion des déchets, salles de réunion. Une expertise sur mesure pour 8 secteurs d'activité." },
      { property: "og:title", content: "Soft Facility (FM) — ELITESY" },
      { property: "og:description", content: "Partenaire premium des services sur site. Une approche multi-sectorielle, des équipes intégrées, une qualité mesurée." },
      { property: "og:image", content: "/og-soft-facility.jpg" },
      { property: "og:url", content: "https://elite-sy.lovable.app/soft-facility" },
    ],
    links: [{ rel: "canonical", href: "https://elite-sy.lovable.app/soft-facility" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Soft Facility Management (FM)",
          provider: { "@type": "Organization", name: "ELITESY" },
          areaServed: "Paris, Île-de-France, France",
          url: "https://elite-sy.lovable.app/soft-facility",
          description:
            "Pilotage multiservices : accueil, courrier, espaces verts, gestion des déchets, logistique sur site, maintenance légère.",
        }),
      },
    ],
  }),
  component: SoftFacilityPage,
});

const expertises = [
  { slug: "pilotage-multiservices", icon: ClipboardList, title: "Pilotage multiservices", desc: "Un référent unique, un reporting consolidé, des engagements de service mesurés en continu sur l'ensemble des prestations." },
  { slug: "gestion-dechets", icon: Sparkles, title: "Gestion des déchets", desc: "Tri à la source, valorisation, traçabilité réglementaire et accompagnement vers la réduction de l'empreinte environnementale." },
  { slug: "espaces-exterieurs", icon: Leaf, title: "Entretien des espaces extérieurs", desc: "Tonte des pelouses\nTaille des haies et plantations\nNettoyage des parkings et voiries\nEntretien des espaces verts\nRamassage des feuilles et déchets extérieurs" },
  { slug: "logistique-sur-site", icon: Building2, title: "Logistique sur site", desc: "​Montage / démontage de mobilier (bureaux, armoires, chaises)\nRéorganisation d’espaces de travail\nInstallation de signalétique (panneaux, affichage)\nMise en place de salles de réunion\nInstallation de tableaux, supports, décorations\ndéménagements internes ou optimisation des bureaux" },
  { slug: "maintenance-legere", icon: Mail, title: "Entretien et travaux de maintenance légère ", desc: "​Remplacement d’ampoules (si simple et accessible)\nRéglage de portes / poignées / petits éléments\nFixation d’éléments muraux (cadres, supports…)\nRéparation mineure du mobilier\nRetouches simples (peinture légère locale)" },
  { slug: "services-occupants", icon: Users, title: "​Services aux occupants", desc: "​Préparation des salles de réunion\nAssistance aux collaborateurs\nOrganisation des espaces partagés\nSupport quotidien (petits besoins internes)" },
];

export const sectors = [
  { slug: "tertiaire", label: "Tertiaire", icon: Briefcase, img: tertiaire, tagline: "Confort des occupants, expérience employé et image de marque." },
  { slug: "syndics-gestionnaires", label: "Syndics & Gestionnaires", icon: Home, img: syndics, tagline: "Gestion technique et entretien des parties communes en copropriété." },
  { slug: "pharmaceutique", label: "Pharmaceutique", icon: FlaskConical, img: pharma, tagline: "Salles blanches, bioproduction et environnements ultra-contrôlés." },
  { slug: "surfaces-de-vente", label: "Surfaces de vente", icon: Store, img: retail, tagline: "Mise en valeur de vos points de vente, prestations en flux tendu." },
  { slug: "sante-et-soins", label: "Santé & Soins", icon: HeartPulse, img: sante, tagline: "Bionettoyage hospitalier et accompagnement des établissements de santé." },
  { slug: "construction", label: "Construction", icon: HardHat, img: construction, tagline: "Services support sur chantiers et sites de rénovation." },
  { slug: "industrie", label: "Industrie", icon: Factory, img: industrie, tagline: "Propreté technique et services support aux sites de production." },
  { slug: "education-collectivites", label: "Education & Collectivités", icon: School, img: education, tagline: "Entretien et maintenance des établissements publics et scolaires." },
  { slug: "hotellerie", label: "Hôtellerie", icon: Hotel, img: hotellerie, tagline: "Services support aux hôtels et résidences pour un accueil parfait." },
] as const;

function SoftFacilityPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="" className="w-full h-full object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Service · Soft Facility (FM)</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Services multiservices,
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
                sur mesure.
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Les entreprises ont aujourd'hui besoin d'un partenaire capable d'orchestrer
              l'ensemble des services qui font la qualité de vie sur leurs sites. ELITESY
              conçoit, déploie et pilote des prestations multiservices adaptées à chaque
              secteur d'activité.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
                Demander un devis <ArrowRight size={16} />
              </Link>
              <a href="#secteurs" className="inline-flex items-center gap-2 px-7 py-4 rounded-sm border border-border hover:border-primary hover:text-primary transition">
                Voir nos secteurs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Notre conviction</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
            Un partenaire premium pour des services sur site qui dépassent vos attentes.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-muted-foreground leading-relaxed">
            <p>
              Dans un environnement de travail en constante évolution, les prestations
              de services doivent s'adapter rapidement aux nouveaux usages. ELITESY
              s'appuie sur une connaissance fine des sites de ses clients et sur ses
              expertises multisectorielles pour offrir un haut niveau de qualité de
              service, en milieu classique comme sensible.
            </p>
            <p>
              Acteur du <span className="text-foreground font-semibold">soft Facility (FM)</span>,
              nous combinons un savoir-faire éprouvé en management d'équipes avec la
              création de solutions <span className="text-foreground font-semibold">sur mesure</span>.
              Cette approche stratégique contribue directement à la chaîne de valeur de
              chacun de nos clients et couvre l'ensemble des métiers du multiservices.
            </p>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos prestations</p>
              <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Une gamme complète de services intégrés.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Du pilotage à l'exploitation, nous orchestrons chaque détail pour libérer
              vos équipes de la gestion des services support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to="/soft-facility/$slug"
                  params={{ slug: e.slug }}
                  className="block h-full p-8 border border-border rounded-sm bg-background hover:border-primary/50 transition group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 mb-6 group-hover:scale-110 transition">
                    <e.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{e.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Pourquoi nous</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Une gestion intégrée, des résultats tangibles.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Choisir ELITESY, c'est confier ses services support à un partenaire qui
              transforme vos défis opérationnels en opportunités de performance, avec
              flexibilité et réactivité.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Interlocuteur unique pour l'ensemble de vos services sur site",
              "Équipes intégrées, formées aux contraintes de votre secteur",
              "Mutualisation des prestations et rationalisation des coûts",
              "Reporting consolidé et indicateurs de performance partagés",
              "Démarche d'amélioration continue et innovation au service du quotidien",
            ].map((b) => (
              <li key={b} className="flex items-start gap-4 p-4 rounded-sm border border-border bg-background">
                <Check className="text-primary mt-0.5 shrink-0" size={20} />
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Construisons votre dispositif sur mesure.</h2>
          <p className="mt-6 text-muted-foreground text-lg">Un échange suffit pour cartographier vos enjeux et bâtir une proposition.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}