import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, ArrowLeft, Building2, Home, HeartPulse, HardHat, Store, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";

type ClientDetail = {
  label: string;
  tagline: string;
  icon: LucideIcon;
  intro: string;
  challenges: string[];
  prestations: { title: string; desc: string }[];
};

const clients: Record<string, ClientDetail> = {
  "bureaux-tertiaire": {
    label: "Bureaux / Tertiaire",
    tagline: "Des espaces de travail impeccables, à la hauteur de votre image de marque.",
    icon: Building2,
    intro:
      "Sièges sociaux, open spaces, cabinets et espaces de coworking : ELITESY conçoit des prestations de propreté discrètes et rigoureuses, exécutées en horaires adaptés pour ne jamais perturber vos collaborateurs.",
    challenges: [
      "Discrétion absolue et respect de la confidentialité",
      "Horaires flexibles (matin, soir, journée continue)",
      "Adaptation aux nouveaux usages (flex office, hybride)",
      "Image de marque visible dès l'accueil",
    ],
    prestations: [
      { title: "Entretien quotidien", desc: "Bureaux, salles de réunion, espaces communs et sanitaires selon vos protocoles." },
      { title: "Vitrerie & finitions", desc: "Surfaces vitrées intérieures, miroirs, parois et façades accessibles." },
      { title: "Prestations périodiques", desc: "Shampoing moquettes, cristallisation, remise en état, grands nettoyages." },
    ],
  },
  "syndics-copropriete": {
    label: "Syndics de copropriétés",
    tagline: "Des parties communes entretenues avec soin pour valoriser votre patrimoine.",
    icon: Home,
    intro:
      "Halls, escaliers, ascenseurs, locaux poubelles, parkings : ELITESY accompagne les syndics et conseils syndicaux avec des équipes fidélisées qui connaissent chaque résidence et un référent unique pour toutes vos demandes.",
    challenges: [
      "Fidélisation et stabilité des équipes sur site",
      "Gestion rigoureuse des bacs roulants et des encombrants",
      "Réactivité face aux incidents et aux demandes ponctuelles",
      "Reporting clair pour les conseils syndicaux",
    ],
    prestations: [
      { title: "Entretien des parties communes", desc: "Halls, cages d'escalier, paliers, ascenseurs, couloirs et locaux techniques." },
      { title: "Sortie et rentrée des bacs", desc: "Gestion complète du tri, nettoyage et désinfection des locaux poubelles." },
      { title: "Interventions spécifiques", desc: "Vitrerie, parkings, nettoyages après travaux, désinfection sur demande." },
    ],
  },
  "professionnels-sante": {
    label: "Professionnels de santé",
    tagline: "Bionettoyage rigoureux pour des environnements de soin sereins.",
    icon: HeartPulse,
    intro:
      "Cabinets médicaux, centres de soins, laboratoires, maisons de santé : ELITESY déploie des protocoles de bionettoyage stricts et des équipes formées à la maîtrise du risque infectieux pour garantir un environnement sain à vos patients comme à vos équipes.",
    challenges: [
      "Maîtrise du risque infectieux et lutte contre les BMR",
      "Protocoles validés et traçabilité des interventions",
      "Produits et matériels dédiés par zone",
      "Respect du calme et de la confidentialité patient",
    ],
    prestations: [
      { title: "Bionettoyage des salles de soins", desc: "Protocoles spécifiques pour salles d'examen, de prélèvement et de consultation." },
      { title: "Entretien des espaces communs", desc: "Accueil, salle d'attente, sanitaires et circulations avec produits adaptés." },
      { title: "Gestion des DASRI", desc: "Collecte, conditionnement et traçabilité conformes à la réglementation." },
    ],
  },
  "professionnels-batiment": {
    label: "Professionnels du bâtiment",
    tagline: "Nettoyage de chantier et entretien de base vie, pour des sites propres et conformes.",
    icon: HardHat,
    intro:
      "Promoteurs, entreprises générales, artisans : ELITESY intervient sur vos chantiers pour la remise en état avant livraison et l'entretien régulier des bases vie. Des équipes mobiles, équipées et formées aux exigences des sites en activité.",
    challenges: [
      "Remise en état pour réception dans les délais",
      "Coactivité avec les corps d'état et respect des PPSPS",
      "Entretien continu des bases vie (sanitaires, vestiaires, bureaux)",
      "Gestion des déchets et tri sélectif de chantier",
    ],
    prestations: [
      { title: "Nettoyage de fin de chantier", desc: "Dépoussiérage complet, décollement des étiquettes, vitrerie, sols et sanitaires." },
      { title: "Entretien de base vie", desc: "Sanitaires, vestiaires, réfectoires et bureaux de chantier au rythme adapté." },
      { title: "Remise en état avant livraison", desc: "Préparation des locaux pour la visite de réception et la livraison au client final." },
    ],
  },
  "surface-vente-erp": {
    label: "Surface de vente / ERP",
    tagline: "Un environnement propre, sain et attractif pour vos clients et visiteurs.",
    icon: Store,
    intro:
      "Boutiques, showrooms, centres commerciaux, établissements recevant du public : ELITESY garantit une propreté irréprochable conforme aux exigences d'hygiène et à votre image de marque, avec des interventions en horaires décalés pour ne jamais gêner votre activité.",
    challenges: [
      "Interventions en heures creuses ou de nuit",
      "Conformité aux exigences d'hygiène ERP",
      "Mise en valeur des surfaces de vente et vitrines",
      "Réactivité sur les zones à fort trafic",
    ],
    prestations: [
      { title: "Entretien des surfaces de vente", desc: "Sols, mobilier, cabines, vitrines et linéaires entretenus au quotidien." },
      { title: "Sanitaires publics", desc: "Réapprovisionnement, désinfection et contrôles fréquents en journée." },
      { title: "Vitrerie & finitions", desc: "Vitrines, devantures et parois vitrées maintenues éclatantes." },
    ],
  },
  industrie: {
    label: "Industrie",
    tagline: "Entretien des sites industriels, entrepôts et plateformes logistiques.",
    icon: Factory,
    intro:
      "Ateliers, entrepôts, plateformes logistiques : ELITESY garantit un environnement propre, sécurisé et conforme aux exigences d'hygiène, contribuant à la performance opérationnelle et à l'image de votre activité auprès de vos clients et partenaires.",
    challenges: [
      "Continuité de service et respect des cadences",
      "Sécurité des intervenants en zones d'exploitation",
      "Nettoyage des grandes surfaces avec autolaveuses",
      "Entretien des locaux sociaux et bureaux d'exploitation",
    ],
    prestations: [
      { title: "Propreté industrielle", desc: "Ateliers, zones de stockage, quais de chargement et locaux techniques." },
      { title: "Entretien des bureaux & locaux sociaux", desc: "Bureaux d'exploitation, vestiaires, sanitaires, réfectoires." },
      { title: "Prestations périodiques", desc: "Nettoyage haute pression, dépoussiérage en hauteur, remise en état." },
    ],
  },
};

export const Route = createFileRoute("/proprete/$slug")({
  loader: ({ params }) => {
    const client = clients[params.slug];
    if (!client) throw notFound();
    return { client, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { client } = loaderData;
    return {
      meta: [
        { title: `${client.label} — Propreté | ELITESY` },
        { name: "description", content: client.tagline },
        { property: "og:title", content: `Propreté · ${client.label} — ELITESY` },
        { property: "og:description", content: client.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Page introuvable</p>
          <h1 className="text-4xl font-bold mb-6">Ce type de client n'existe pas.</h1>
          <Link to="/proprete" className="inline-flex items-center gap-2 text-primary">
            <ArrowLeft size={16} /> Retour à Propreté
          </Link>
        </div>
      </section>
    </Layout>
  ),
  errorComponent: ({ reset }) => (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-3xl font-bold mb-6">Une erreur est survenue.</h1>
          <button onClick={reset} className="px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold">
            Réessayer
          </button>
        </div>
      </section>
    </Layout>
  ),
  component: ClientPage,
});

function ClientPage() {
  const { client, slug } = Route.useLoaderData();
  const Icon = client.icon;
  const others = Object.entries(clients).filter(([s]) => s !== slug);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <Link to="/proprete" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={14} /> Propreté
            </Link>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30">
                <Icon className="text-primary" size={26} />
              </div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">Propreté</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">{client.label}</h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{client.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Notre approche</p>
          <p className="text-xl text-foreground/90 leading-relaxed">{client.intro}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Enjeux</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vos défis, nos réponses.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous bâtissons chaque dispositif autour des contraintes spécifiques de votre activité, avec des équipes formées et des protocoles éprouvés.
            </p>
          </div>
          <ul className="space-y-4">
            {client.challenges.map((c) => (
              <li key={c} className="flex items-start gap-4 p-5 rounded-sm border border-border bg-background">
                <Check className="text-primary mt-0.5 shrink-0" size={20} />
                <span className="text-foreground/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos prestations</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">Ce que nous prenons en charge.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {client.prestations.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 border border-border rounded-sm bg-card hover:border-primary/50 transition"
              >
                <div className="text-primary font-display text-3xl font-bold mb-4">0{i + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other clients */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Explorer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Les autres types de clients.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {others.map(([s, c]) => (
              <Link
                key={s}
                to="/proprete/$slug"
                params={{ slug: s }}
                className="p-4 border border-border rounded-sm bg-background hover:border-primary/60 transition flex flex-col items-center text-center gap-2"
              >
                <c.icon className="text-primary" size={20} />
                <span className="text-xs font-medium">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Un projet pour {client.label} ?</h2>
          <p className="mt-6 text-muted-foreground text-lg">Parlons de vos enjeux et bâtissons une proposition adaptée.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}