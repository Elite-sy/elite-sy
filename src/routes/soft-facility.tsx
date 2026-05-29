import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Wheat,
  Factory,
  Atom,
  FlaskConical,
  HeartPulse,
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
import agro from "@/assets/sec-agro.jpg";
import industrie from "@/assets/sec-industrie.jpg";
import nucleaire from "@/assets/sec-nucleaire.jpg";
import pharma from "@/assets/sec-pharma.jpg";
import sante from "@/assets/sec-sante.jpg";
import retail from "@/assets/sec-retail.jpg";
import tertiaire from "@/assets/sec-tertiaire.jpg";
import transport from "@/assets/sec-transport.jpg";

export const Route = createFileRoute("/soft-facility")({
  head: () => ({
    meta: [
      { title: "Soft Facility Management — Services multiservices sur mesure | ELITESY" },
      { name: "description", content: "ELITESY pilote vos services multiservices : accueil, courrier, espaces verts, gestion des déchets, salles de réunion. Une expertise sur mesure pour 8 secteurs d'activité." },
      { property: "og:title", content: "Soft Facility Management — ELITESY" },
      { property: "og:description", content: "Partenaire premium des services sur site. Une approche multi-sectorielle, des équipes intégrées, une qualité mesurée." },
      { property: "og:image", content: "/og-soft-facility.jpg" },
    ],
  }),
  component: SoftFacilityPage,
});

const expertises = [
  { icon: ClipboardList, title: "Pilotage multiservices", desc: "Un référent unique, un reporting consolidé, des engagements de service mesurés en continu sur l'ensemble des prestations." },
  { icon: Sparkles, title: "Gestion des déchets", desc: "Tri à la source, valorisation, traçabilité réglementaire et accompagnement vers la réduction de l'empreinte environnementale." },
  { icon: Leaf, title: "Entretien des espaces verts", desc: "Aménagement, entretien et fleurissement intérieur comme extérieur, dans une démarche raisonnée et durable." },
  { icon: Building2, title: "Logistique sur site", desc: "Manutention, gestion des flux internes, magasinage et inventaire pilotés par des équipes formées à votre process." },
  { icon: Mail, title: "Courrier & reprographie", desc: "Gestion centralisée du courrier entrant et sortant, services de copie, numérisation et distribution interne." },
  { icon: Users, title: "Accueil & salles de réunion", desc: "Hôtes et hôtesses à votre image, préparation et remise en état des salles, accompagnement de vos événements internes." },
];

export const sectors = [
  { slug: "agroalimentaire", label: "Agroalimentaire", icon: Wheat, img: agro, tagline: "Hygiène et sécurité alimentaire en environnement sensible." },
  { slug: "industrie", label: "Industrie", icon: Factory, img: industrie, tagline: "Propreté technique et services support aux sites de production." },
  { slug: "nucleaire", label: "Nucléaire", icon: Atom, img: nucleaire, tagline: "Interventions habilitées, exigence de sûreté et de traçabilité." },
  { slug: "pharmaceutique", label: "Pharmaceutique", icon: FlaskConical, img: pharma, tagline: "Salles blanches, bioproduction et environnements ultra-contrôlés." },
  { slug: "sante-et-soins", label: "Santé & Soins", icon: HeartPulse, img: sante, tagline: "Bionettoyage hospitalier et accompagnement des établissements de santé." },
  { slug: "surfaces-de-vente", label: "Surfaces de vente", icon: Store, img: retail, tagline: "Mise en valeur de vos points de vente, prestations en flux tendu." },
  { slug: "tertiaire", label: "Tertiaire", icon: Briefcase, img: tertiaire, tagline: "Confort des occupants, expérience employé et image de marque." },
  { slug: "transport", label: "Transport", icon: Train, img: transport, tagline: "Gares, aéroports, flottes : exigence opérationnelle et continuité de service." },
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
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Service · Soft Facility Management</p>
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
              Acteur du <span className="text-foreground font-semibold">soft Facility Management</span>,
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
                className="p-8 border border-border rounded-sm bg-background hover:border-primary/50 transition group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 mb-6 group-hover:scale-110 transition">
                  <e.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="secteurs" className="py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos secteurs</p>
              <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Une expertise multisectorielle.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Chaque environnement a ses contraintes. Nos équipes sont formées aux
              exigences spécifiques de votre secteur, du tertiaire à l'industrie sensible.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to="/secteur/$slug"
                  params={{ slug: s.slug }}
                  className="group block relative aspect-[4/5] rounded-sm overflow-hidden border border-border hover:border-primary/60 transition"
                >
                  <img src={s.img} alt={s.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" width={1280} height={800} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <s.icon className="text-primary mb-3" size={22} />
                    <h3 className="text-lg font-bold uppercase tracking-wider">{s.label}</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.tagline}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary group-hover:gap-3 transition-all">
                      Découvrir <ArrowRight size={12} />
                    </div>
                  </div>
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