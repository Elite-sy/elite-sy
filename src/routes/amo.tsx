import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Compass,
  FileSearch,
  Gauge,
  HardHat,
  Handshake,
  KeyRound,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Picture } from "@/components/site/Picture";
import imgPicture from "@/assets/amo.jpg?format=avif;webp;jpg&w=640;1024;1600;1920&as=picture";
import img from "@/assets/amo.jpg";

const missions: { num: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    num: "01",
    title: "Rénovation",
    icon: Wrench,
    description:
      "Conduite de projets de rénovation de plateaux de bureaux, rénovations complexes, énergétiques (décret tertiaire) et opérations en site occupé sans interruption d'activité.",
  },
  {
    num: "02",
    title: "Réhabilitation",
    icon: Layers,
    description:
      "Programmation, structuration et pilotage de projets de réhabilitation lourde en tenant compte des contraintes patrimoniales, techniques et d'exploitation propres à chaque actif.",
  },
  {
    num: "03",
    title: "Construction neuve",
    icon: Building2,
    description:
      "Pilotage d'un projet de construction depuis la phase de faisabilité jusqu'à la livraison à l'occupant : VEFA, BEFA, CPI, contrats de promotion immobilière.",
  },
];

const expertises: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Faisabilité, conseil & programmation",
    icon: Compass,
    description:
      "Études d'opportunité, programmation fonctionnelle et technique, scénarios d'aménagement, estimations budgétaires et planning directeur pour sécuriser la décision d'investissement.",
  },
  {
    title: "Analyse VEFA, BEFA, CPI",
    icon: FileSearch,
    description:
      "Accompagnement technique et juridique sur l'analyse des notices descriptives, des contrats, des avenants et de la conformité livrée. Défense des intérêts du preneur ou de l'investisseur.",
  },
  {
    title: "Montage construction & rénovation",
    icon: HardHat,
    description:
      "Structuration du projet, choix de la maîtrise d'œuvre, consultation des entreprises, négociation des marchés et mise en place du dispositif de pilotage opérationnel.",
  },
  {
    title: "AMO & conduite d'opérations",
    icon: ClipboardCheck,
    description:
      "Pilotage coûts / délais / qualité, OPC, reporting comité, suivi financier, OPR, levée des réserves, GPA et mise en exploitation effective du bâtiment.",
  },
];

const audiences: { tag: string; title: string; bullets: string[]; icon: LucideIcon }[] = [
  {
    tag: "– 01",
    title: "Professionnels de l'immobilier",
    icon: Building2,
    bullets: [
      "Rationalisation des coûts de travaux et des risques projet",
      "Analyse de risque sur 120 points fondamentaux issus de retours d'expérience",
      "Garde-fou tout au long du projet pour limiter les aléas finaux",
      "Suivi digital de l'opération mis en place dès le démarrage",
    ],
  },
  {
    tag: "– 02",
    title: "Utilisateurs & locataires",
    icon: Users,
    bullets: [
      "Négociation du bail et défense des intérêts du preneur",
      "Définition du besoin et budget global du projet d'aménagement",
      "Découpage et pilotage de toutes les tâches jusqu'à la dernière réserve",
      "Logistique d'installation : fibre, mobilier, plans d'évacuation, contrôles réglementaires",
    ],
  },
  {
    tag: "– 03",
    title: "Syndics & copropriétés",
    icon: Handshake,
    bullets: [
      "Copropriétés de bureaux : maîtrise du décret tertiaire et des nuisances en site occupé",
      "Copropriétés de logements : gestion projet complète en collaboration avec le syndic",
      "Mobilisation d'un réseau d'experts et d'entreprises pour optimiser coûts et délais",
      "Spécialiste de l'obtention des aides financières (MaPrimeRénov', CEE, dispositifs locaux)",
    ],
  },
];

const process = [
  { step: "01", title: "Cadrage & faisabilité", description: "Audit de l'existant, formalisation des objectifs, scénarios et chiffrages comparatifs pour éclairer la décision d'investir." },
  { step: "02", title: "Programmation", description: "Programme technique et fonctionnel détaillé, planning directeur, budget global, identification des risques et stratégie de consultation." },
  { step: "03", title: "Consultation & contractualisation", description: "Sélection de la maîtrise d'œuvre et des entreprises, analyse des offres, négociation et mise au point des marchés." },
  { step: "04", title: "Pilotage des travaux", description: "Coordination OPC, contrôle qualité, suivi financier, gestion des avenants, reporting au comité et arbitrages techniques." },
  { step: "05", title: "Réception & exploitation", description: "OPR, levée des réserves, GPA, mise en exploitation, transfert vers les équipes utilisateurs et logistique d'installation." },
];

const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Indépendance totale", icon: ShieldCheck, description: "Aucun lien capitalistique avec maîtrise d'œuvre, entreprises ou fournisseurs. Notre seul intérêt est le vôtre." },
  { title: "Maîtrise coûts & délais", icon: Gauge, description: "Contrôle rigoureux à chaque jalon, anticipation des dérives, négociation et arbitrages éclairés." },
  { title: "120 points de contrôle", icon: ClipboardCheck, description: "Grille d'analyse de risque issue de nos retours d'expérience, déployée tout au long du projet." },
  { title: "Suivi digital", icon: Sparkles, description: "Plateforme de pilotage mise en place au démarrage : reporting, planning, budget, levée de réserves." },
  { title: "Réseau d'experts", icon: Users, description: "Bureaux d'études, économistes, juristes, AMO énergie : mobilisation rapide selon les besoins." },
  { title: "Continuité jusqu'à l'usage", icon: KeyRound, description: "De la faisabilité à l'installation effective : mobilier, fibre, plans, contrôles réglementaires." },
];

const stats = [
  { value: "120", label: "points d'analyse de risque" },
  { value: "5", label: "étapes maîtrisées de A à Z" },
  { value: "100%", label: "indépendance vis-à-vis des entreprises" },
  { value: "IDF", label: "Paris, Île-de-France & France métropolitaine" },
];

export const Route = createFileRoute("/amo")({
  head: () => ({
    meta: [
      { title: "Assistance à Maîtrise d'Ouvrage (AMO) — ELITESY" },
      {
        name: "description",
        content:
          "AMO indépendante à Paris et Île-de-France : programmation, pilotage de rénovation, réhabilitation et construction. VEFA, BEFA, CPI, décret tertiaire, copropriétés.",
      },
      { property: "og:title", content: "AMO — ELITESY" },
      {
        property: "og:description",
        content:
          "Conseil, aide à la décision et conduite d'opérations pour propriétaires, utilisateurs et copropriétés. Maîtrise des coûts, des délais et de la qualité.",
      },
      { property: "og:image", content: img },
      { property: "twitter:image", content: img },
      { property: "og:url", content: "https://elite-sy.lovable.app/amo" },
    ],
    links: [{ rel: "canonical", href: "https://elite-sy.lovable.app/amo" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Assistance à Maîtrise d'Ouvrage (AMO)",
          provider: { "@type": "Organization", name: "ELITESY" },
          areaServed: "Paris, Île-de-France, France",
          url: "https://elite-sy.lovable.app/amo",
          description:
            "AMO indépendante : programmation, pilotage de rénovation, réhabilitation et construction. VEFA, BEFA, CPI, décret tertiaire.",
        }),
      },
    ],
  }),
  component: AmoPage,
});

function AmoPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">
              Service · AMO
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
              Conduire, sécuriser et livrer vos projets immobiliers.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              ELITESY est spécialisée dans l'<strong className="text-foreground">Assistance à Maîtrise d'Ouvrage</strong> à Paris,
              en Île-de-France et en France métropolitaine. Nous veillons à la bonne conduite de vos travaux de
              réhabilitation, rénovation et construction, simplifions votre installation dans vos nouveaux locaux et
              favorisons la valorisation de vos actifs : bureaux, logements, hôtellerie, commerce, activité, stockage.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90">
                Discuter de votre projet <ArrowRight size={16} />
              </a>
              <a
                href="#expertises"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-border font-semibold hover:border-primary/60"
              >
                Découvrir nos expertises
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
            <Picture source={imgPicture} alt="Assistance à maîtrise d'ouvrage" className="w-full h-[500px] object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Baseline */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-8 items-center">
          <p className="font-display text-2xl md:text-3xl font-semibold leading-tight md:col-span-2">
            Conseil · Aide à la décision · Accompagnement.
            <span className="block text-muted-foreground text-base font-normal mt-3">
              Pour mandataires, occupants, bailleurs et copropriétés — nous représentons les utilisateurs finaux et
              portons l'expression technique et fonctionnelle de leur projet, du premier croquis à la dernière réserve.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-primary pl-4">
                <div className="font-display text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missions: Rénovation / Réhabilitation / Construction */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos missions</p>
              <h2 className="text-4xl font-bold max-w-2xl md:text-2xl">Diriger, construire, livrer.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Trois familles d'opérations, une même exigence : sécuriser l'investissement et garantir un ouvrage
              conforme aux usages réels.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-border rounded-sm bg-card hover:border-primary/50 transition"
              >
                <m.icon className="text-primary mb-6" size={32} />
                <div className="text-primary font-display text-sm font-semibold mb-2 tracking-widest">– {m.num}</div>
                <h3 className="text-xl font-semibold mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section id="expertises" className="py-24 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos métiers</p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mb-16">
            Nous accompagnons nos clients sur l'ensemble de la chaîne projet.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expertises.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-6 p-8 border border-border rounded-sm bg-background hover:border-primary/50 transition"
              >
                <div className="shrink-0 w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                  <e.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">À qui nous nous adressons</p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mb-16">
            Un accompagnement calibré sur mesure selon vos enjeux.
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-border rounded-sm bg-card flex flex-col"
              >
                <a.icon className="text-primary mb-6" size={28} />
                <div className="text-primary font-display text-xs font-semibold mb-2 tracking-widest">{a.tag}</div>
                <h3 className="text-2xl font-bold mb-5">{a.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-primary mt-1">→</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Méthode</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">Notre approche en 5 étapes.</h2>
          <div className="space-y-px">
            {process.map((p) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-[120px_1fr] gap-6 py-8 border-t border-border"
              >
                <div className="font-display text-primary text-4xl font-bold">{p.step}</div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Pourquoi ELITESY</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">Ce que vous gagnez.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-sm border border-border bg-card"
              >
                <b.icon className="text-primary mb-4" size={24} />
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Démarrer</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Un projet de rénovation, réhabilitation ou construction ?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Échangeons sur vos enjeux. Premier rendez-vous gratuit, sans engagement, à Paris ou en visio.
          </p>
          <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90">
            Nous contacter <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </Layout>
  );
}