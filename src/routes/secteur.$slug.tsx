import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { sectors } from "./soft-facility";

type SectorDetail = {
  intro: string;
  challenges: string[];
  prestations: { title: string; desc: string }[];
};

const details: Record<string, SectorDetail> = {
  agroalimentaire: {
    intro:
      "Les sites de production agroalimentaires exigent une hygiène irréprochable et une parfaite maîtrise des risques sanitaires. ELITESY intervient en zones sensibles (IAA, frigorifiques, conditionnement) avec des protocoles HACCP rigoureux et des équipes spécifiquement formées.",
    challenges: [
      "Respect strict de la chaîne du froid et des normes HACCP",
      "Traçabilité complète des interventions et des produits utilisés",
      "Bionettoyage des lignes de production en fenêtres d'arrêt",
      "Gestion des nuisibles et démarche d'amélioration continue",
    ],
    prestations: [
      { title: "Nettoyage en zone à risque", desc: "Procédures validées pour zones de production, ateliers de découpe, salles d'emballage." },
      { title: "Désinfection NEP & manuelle", desc: "Maîtrise des équipements et des protocoles pour limiter les risques microbiologiques." },
      { title: "Services support", desc: "Vestiaires, sanitaires, locaux sociaux entretenus avec la même exigence que les zones de prod." },
    ],
  },
  industrie: {
    intro:
      "Du nettoyage technique à la gestion logistique, ELITESY accompagne les sites industriels dans la maîtrise de leur environnement de travail. Notre approche : libérer vos équipes de production en orchestrant tous les services support.",
    challenges: [
      "Continuité de service et respect des cadences de production",
      "Sécurité des intervenants sur sites complexes (Seveso, ATEX)",
      "Nettoyage technique de machines et lignes automatisées",
      "Gestion des déchets industriels et valorisation",
    ],
    prestations: [
      { title: "Propreté industrielle", desc: "Ateliers, zones de stockage, bureaux et locaux techniques." },
      { title: "Logistique & manutention", desc: "Magasinage, gestion des flux internes, préparation des expéditions." },
      { title: "Gestion des déchets", desc: "Tri, traçabilité, valorisation et reporting réglementaire." },
    ],
  },
  nucleaire: {
    intro:
      "Le secteur nucléaire impose un cadre exceptionnel d'exigences réglementaires et de sûreté. ELITESY mobilise des équipes habilitées (PR, CSQ, SCN) et des protocoles éprouvés pour intervenir en zones contrôlées comme en zones conventionnelles.",
    challenges: [
      "Habilitations PR, CSQ, SCN, SCN2 et formation continue",
      "Traçabilité dosimétrique et reporting réglementaire",
      "Logistique de chantier et coactivité maîtrisée",
      "Démarche qualité et culture sûreté permanente",
    ],
    prestations: [
      { title: "Interventions en zone contrôlée", desc: "Nettoyage, décontamination et services support sous régime spécifique." },
      { title: "Services tertiaires sur site", desc: "Bureaux, salles de conduite, locaux sociaux et restauration légère." },
      { title: "Logistique de chantier", desc: "Gestion des flux, magasinage, préparation et conditionnement." },
    ],
  },
  pharmaceutique: {
    intro:
      "Salles blanches, laboratoires, bioproduction : la pharmaceutique exige des standards de propreté microbiologique extrêmement élevés. ELITESY déploie des équipes formées aux BPF et des protocoles validés pour vos environnements ZAC.",
    challenges: [
      "Conformité BPF, ISO 14644 et exigences GMP",
      "Habillage spécifique, gestion des consommables stériles",
      "Bionettoyage en flux validé, contrôles particulaires",
      "Documentation complète et audits clients",
    ],
    prestations: [
      { title: "Bionettoyage salles blanches", desc: "Classes ISO 5 à 8, protocoles validés, traçabilité complète." },
      { title: "Entretien laboratoires", desc: "R&D, contrôle qualité, paillasses et environnements sensibles." },
      { title: "Services périphériques", desc: "Zones logistiques, vestiaires, bureaux et locaux techniques." },
    ],
  },
  "sante-et-soins": {
    intro:
      "Hôpitaux, cliniques, EHPAD, centres de soins : le secteur de la santé impose une lutte permanente contre les infections nosocomiales. ELITESY accompagne les établissements de santé avec des équipes formées au bionettoyage hospitalier.",
    challenges: [
      "Maîtrise du risque infectieux et bionettoyage en chambres",
      "Coordination avec les équipes soignantes et continuité 24/7",
      "Protocoles spécifiques pour blocs opératoires et zones critiques",
      "Respect du bien-être des patients et des résidents",
    ],
    prestations: [
      { title: "Bionettoyage hospitalier", desc: "Chambres, circulations, salles de soins selon protocoles CLIN." },
      { title: "Blocs opératoires", desc: "Préparation, nettoyage entre vacations et désinfection terminale." },
      { title: "Services hôteliers", desc: "Restauration, lingerie, accueil des familles et services aux patients." },
    ],
  },
  "surfaces-de-vente": {
    intro:
      "Centres commerciaux, boutiques, grandes surfaces : votre point de vente est votre première vitrine. ELITESY intervient en flux tendu, en horaires décalés, pour offrir à vos clients un environnement impeccable dès l'ouverture.",
    challenges: [
      "Interventions de nuit ou en heures creuses",
      "Réactivité sur les zones à fort trafic",
      "Mise en valeur des vitrines et des espaces clients",
      "Gestion saisonnière des pics d'activité",
    ],
    prestations: [
      { title: "Nettoyage des surfaces de vente", desc: "Sols, vitrines, cabines d'essayage, mobilier de présentation." },
      { title: "Vitrerie & mise en éclat", desc: "Vitrines intérieures et extérieures, miroirs, parois vitrées." },
      { title: "Services support", desc: "Sanitaires, réserves, parkings, zones logistiques et de livraison." },
    ],
  },
  tertiaire: {
    intro:
      "Sièges sociaux, bureaux, cabinets d'avocats : le tertiaire est notre coeur de métier historique. ELITESY transforme vos espaces de travail en environnements valorisants, qui reflètent l'image de votre marque et le soin porté à vos collaborateurs.",
    challenges: [
      "Expérience occupant et image de marque",
      "Flexibilité face aux nouveaux modes de travail (flex office, hybride)",
      "Discrétion et confidentialité en zones sensibles",
      "Démarche RSE visible et mesurée",
    ],
    prestations: [
      { title: "Propreté de bureaux", desc: "Open spaces, salles de réunion, espaces de convivialité, sanitaires." },
      { title: "Accueil & services", desc: "Hôtes/hôtesses, courrier, conciergerie, préparation des salles." },
      { title: "Espaces verts intérieurs", desc: "Mur végétal, plantes d'intérieur, entretien et fleurissement." },
    ],
  },
  "syndics-gestionnaires": {
    intro:
      "Copropriétés, immeubles tertiaires et résidences gérées exigent une continuité visible : halls impeccables, circulations entretenues, petites interventions coordonnées et communication claire avec les occupants.",
    challenges: [
      "Qualité constante des parties communes et des abords",
      "Réactivité sur incidents, encombrants et demandes occupants",
      "Coordination avec conseils syndicaux, gardiens et gestionnaires",
      "Traçabilité des passages et maîtrise budgétaire",
    ],
    prestations: [
      { title: "Entretien des parties communes", desc: "Halls, escaliers, ascenseurs, locaux techniques, parkings et abords." },
      { title: "Services aux occupants", desc: "Petite logistique, affichage, remontées terrain et suivi des demandes." },
      { title: "Pilotage gestionnaire", desc: "Planning, contrôles qualité, reporting et coordination multiservices." },
    ],
  },
  construction: {
    intro:
      "Chantiers, rénovations et opérations en site occupé nécessitent des services support fiables pour maintenir la sécurité, la propreté et le bon déroulement des travaux sans gêner l'exploitation.",
    challenges: [
      "Coactivité maîtrisée entre entreprises et occupants",
      "Nettoyage fin de chantier et remise en état progressive",
      "Gestion des flux, déchets et zones de stockage",
      "Respect des délais de livraison et des contraintes sécurité",
    ],
    prestations: [
      { title: "Nettoyage chantier", desc: "Bases vie, circulations, zones livrées, dépoussiérage et remise en état." },
      { title: "Logistique sur site", desc: "Aide à l'installation, déplacements internes, signalétique et petits supports opérationnels." },
      { title: "Gestion des déchets", desc: "Tri, évacuation, suivi des bennes et reporting de valorisation." },
    ],
  },
  "education-collectivites": {
    intro:
      "Écoles, collectivités et établissements recevant du public demandent une organisation rigoureuse, compatible avec les horaires d'accueil et les exigences d'hygiène des espaces partagés.",
    challenges: [
      "Interventions en horaires contraints et zones occupées",
      "Hygiène renforcée des sanitaires, classes et espaces communs",
      "Sécurité des publics sensibles et maîtrise des produits",
      "Souplesse pendant vacances, événements et pics d'activité",
    ],
    prestations: [
      { title: "Entretien quotidien", desc: "Salles, bureaux administratifs, sanitaires, circulations et espaces extérieurs." },
      { title: "Remises en état", desc: "Nettoyages périodiques, sols, vitrerie et préparations de rentrée." },
      { title: "Services support", desc: "Petite logistique, gestion des consommables et accompagnement événementiel." },
    ],
  },
  hotellerie: {
    intro:
      "Hôtels, résidences et lieux d'accueil doivent maintenir un niveau de service irréprochable à chaque contact client. ELITESY renforce vos équipes sur les zones visibles et les services support.",
    challenges: [
      "Exigence esthétique élevée et contrôles fréquents",
      "Interventions discrètes en présence de clientèle",
      "Variations d'activité selon saisons, événements et taux d'occupation",
      "Coordination avec housekeeping, maintenance et réception",
    ],
    prestations: [
      { title: "Espaces communs", desc: "Lobbies, couloirs, sanitaires publics, salles de réunion et zones de restauration." },
      { title: "Renfort opérationnel", desc: "Appui ponctuel aux équipes, logistique interne et préparation d'espaces." },
      { title: "Image & détails", desc: "Vitrerie, sols, finitions visibles et contrôles qualité orientés expérience client." },
    ],
  },
  transport: {
    intro:
      "Gares, aéroports, métros, flottes : le transport impose une exigence opérationnelle 7/7 et une visibilité immédiate de la qualité. ELITESY intervient avec des équipes dédiées, capables d'opérer en flux continus et en environnement public.",
    challenges: [
      "Continuité de service 24/7 et plages d'intervention contraintes",
      "Sécurité des intervenants et des voyageurs",
      "Réactivité face aux flux et aux incidents",
      "Image de marque visible par des millions d'usagers",
    ],
    prestations: [
      { title: "Espaces voyageurs", desc: "Halls, quais, salles d'embarquement, zones commerciales." },
      { title: "Matériel roulant", desc: "Nettoyage de trains, métros, bus, avions selon planning d'exploitation." },
      { title: "Services support", desc: "Sanitaires publics, locaux d'exploitation, espaces VIP et lounges." },
    ],
  },
};

export const Route = createFileRoute("/secteur/$slug")({
  loader: ({ params }) => {
    const sector = sectors.find((s) => s.slug === params.slug);
    if (!sector || !details[params.slug]) throw notFound();
    return { sector, detail: details[params.slug] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { sector } = loaderData;
    const url = `https://elite-sy.lovable.app/secteur/${sector.slug}`;
    return {
      meta: [
        { title: `${sector.label} — Soft Facility | ELITESY` },
        { name: "description", content: sector.tagline },
        { property: "og:title", content: `Soft Facility · ${sector.label} — ELITESY` },
        { property: "og:description", content: sector.tagline },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Secteur introuvable</p>
          <h1 className="text-4xl font-bold mb-6">Ce secteur n'existe pas.</h1>
          <Link to="/soft-facility" className="inline-flex items-center gap-2 text-primary">
            <ArrowLeft size={16} /> Retour aux secteurs
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
  component: SectorPage,
});

function SectorPage() {
  const { sector, detail } = Route.useLoaderData();
  const Icon = sector.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={sector.img} alt="" className="w-full h-full object-cover opacity-50" width={1280} height={800} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <Link to="/soft-facility" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={14} /> Soft Facility
            </Link>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30">
                <Icon className="text-primary" size={26} />
              </div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">Secteur</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">{sector.label}</h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{sector.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Notre approche</p>
          <p className="text-xl text-foreground/90 leading-relaxed">{detail.intro}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Enjeux</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Les défis propres à votre secteur.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous bâtissons chaque dispositif autour des contraintes spécifiques de votre activité, avec des équipes formées et des protocoles éprouvés.
            </p>
          </div>
          <ul className="space-y-4">
            {detail.challenges.map((c: string) => (
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
            {detail.prestations.map((p: { title: string; desc: string }, i: number) => (
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

      {/* Other sectors */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Explorer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Les autres secteurs.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {sectors.filter((s) => s.slug !== sector.slug).map((s) => (
              <Link
                key={s.slug}
                to="/secteur/$slug"
                params={{ slug: s.slug }}
                className="p-4 border border-border rounded-sm bg-background hover:border-primary/60 transition flex flex-col items-center text-center gap-2"
              >
                <s.icon className="text-primary" size={20} />
                <span className="text-xs font-medium">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Un projet dans le {sector.label.toLowerCase()} ?</h2>
          <p className="mt-6 text-muted-foreground text-lg">Parlons de vos enjeux et bâtissons une proposition adaptée.</p>
          <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Nous contacter <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </Layout>
  );
}