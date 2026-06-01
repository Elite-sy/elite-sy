import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, ArrowLeft, Building2, Home, HeartPulse, HardHat, Store, Factory, FlaskConical, School, Hotel, Clock, Leaf, ShieldCheck, Users, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import bureauxHero from "@/assets/pr-bureaux-hero.jpg";
import bureauxVitrerie from "@/assets/pr-bureaux-vitrerie.jpg";
import bureauxAccueil from "@/assets/pr-bureaux-accueil.jpg";
import bureauxMeeting from "@/assets/pr-bureaux-meeting.jpg";

type ClientDetail = {
  label: string;
  tagline: string;
  icon: LucideIcon;
  intro: string;
  challenges: string[];
  prestations: { title: string; desc: string }[];
  heroImage?: string;
  gallery?: { src: string; caption: string }[];
  stats?: { value: string; label: string }[];
  typologies?: { title: string; desc: string; icon: LucideIcon }[];
  methodology?: { step: string; title: string; desc: string }[];
  engagements?: string[];
  faq?: { q: string; a: string }[];
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
    heroImage: bureauxHero,
    gallery: [
      { src: bureauxAccueil, caption: "Halls d'accueil & espaces d'image" },
      { src: bureauxMeeting, caption: "Salles de réunion & espaces collaboratifs" },
      { src: bureauxVitrerie, caption: "Vitrerie intérieure & parois" },
    ],
    stats: [
      { value: "+250", label: "sites tertiaires entretenus quotidiennement" },
      { value: "98%", label: "de taux de présence des équipes terrain" },
      { value: "< 2 h", label: "délai moyen d'intervention exceptionnelle" },
      { value: "ISO", label: "produits écolabellisés et protocoles certifiés" },
    ],
    typologies: [
      { title: "Sièges sociaux & ETI", desc: "Espaces de représentation, étages dirigeants, salles du conseil. Discrétion et finitions soignées.", icon: Building2 },
      { title: "Open spaces & flex office", desc: "Postes de travail mutualisés, casiers, phone booths : protocoles adaptés aux nouveaux usages.", icon: Users },
      { title: "Coworking & espaces partagés", desc: "Forte fréquentation, rotations rapides : interventions cadencées plusieurs fois par jour.", icon: Sparkles },
      { title: "Cabinets & professions libérales", desc: "Avocats, conseil, expertise comptable : confidentialité totale et créneaux hors présence.", icon: ShieldCheck },
    ],
    methodology: [
      { step: "01", title: "Audit sur site", desc: "Visite de vos locaux, cartographie des zones, fréquences et points sensibles. Recueil de vos contraintes horaires et de sécurité." },
      { step: "02", title: "Cahier des charges sur mesure", desc: "Élaboration d'un plan de prestations détaillé : zones, fréquences, produits, plannings, indicateurs de contrôle." },
      { step: "03", title: "Constitution de l'équipe", desc: "Sélection d'agents formés, attribution d'un référent unique et d'un encadrant dédié à votre compte." },
      { step: "04", title: "Démarrage encadré", desc: "Phase de mise en route accompagnée, formation aux spécificités du site, validation des protocoles avec vos équipes." },
      { step: "05", title: "Pilotage & amélioration continue", desc: "Contrôles qualité réguliers, reporting mensuel, points de revue trimestriels et ajustements selon vos retours." },
    ],
    engagements: [
      "Référent client unique joignable 6j/7",
      "Produits écolabellisés et microfibres lavables",
      "Agents formés, déclarés et fidélisés sur votre site",
      "Reporting mensuel et contrôles qualité tracés",
      "Réactivité < 2 h pour toute demande exceptionnelle",
      "Assurance RC pro et conformité sociale garanties",
    ],
    faq: [
      {
        q: "À quels horaires interviennent vos équipes ?",
        a: "Nous adaptons les créneaux à votre activité : tôt le matin avant l'arrivée des collaborateurs, en soirée après leur départ, en journée continue pour les sanitaires et espaces communs, ou en horaires décalés selon vos contraintes.",
      },
      {
        q: "Comment garantissez-vous la discrétion et la sécurité ?",
        a: "Chaque agent signe une clause de confidentialité, suit une formation sécurité et est habilité aux zones définies avec vous. Les accès, badges et clés sont tracés ; les interventions hors présence respectent vos protocoles internes.",
      },
      {
        q: "Quels produits utilisez-vous ?",
        a: "Nous privilégions les produits porteurs de l'Écolabel européen et les microfibres lavables. Les fiches de données de sécurité sont mises à votre disposition et les dosages sont contrôlés via centrales de dilution.",
      },
      {
        q: "Pouvez-vous reprendre un contrat en cours ?",
        a: "Oui. Nous gérons régulièrement des reprises de marché avec transfert conventionnel du personnel en place (annexe 7), garantissant la continuité de service et la stabilité des équipes que vos collaborateurs connaissent déjà.",
      },
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
  pharmaceutique: {
    label: "Pharmaceutique",
    tagline: "Salles blanches, bioproduction et environnements ultra-contrôlés.",
    icon: FlaskConical,
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
  construction: {
    label: "Construction",
    tagline: "Services support sur chantiers et sites de rénovation.",
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
  "education-collectivites": {
    label: "Education & Collectivités",
    tagline: "Entretien et maintenance des établissements publics et scolaires.",
    icon: School,
    intro:
      "Écoles, collèges, lycées, universités, mairies, centres culturels : ELITESY assure la propreté des établissements publics avec des protocoles adaptés aux horaires scolaires et aux contraintes des collectivités.",
    challenges: [
      "Respect des horaires scolaires et des périodes de vacances",
      "Sécurité et traçabilité dans les établissements sensibles",
      "Gestion des espaces mutualisés et à fort trafic",
      "Budgets maîtrisés et reporting transparent",
    ],
    prestations: [
      { title: "Entretien des espaces scolaires", desc: "Classes, amphithéâtres, bibliothèques, salles de sport et espaces communs." },
      { title: "Propreté des bâtiments publics", desc: "Mairies, centres culturels, espaces administratifs et réception du public." },
      { title: "Interventions périodiques", desc: "Vitrerie, remise en état des sols, désinfection saisonnière." },
    ],
  },
  hotellerie: {
    label: "Hôtellerie",
    tagline: "Services support aux hôtels et résidences pour un accueil parfait.",
    icon: Hotel,
    intro:
      "Hôtels, résidences de tourisme, appart'hôtels : ELITESY accompagne les établissements hôteliers avec des prestations de propreté discrètes et rigoureuses, pour un confort optimal des hôtes et une image irréprochable.",
    challenges: [
      "Discrétion et rapidité d'intervention",
      "Standards de propreté élevés pour l'image de marque",
      "Gestion des pics d'activité et des événements",
      "Coordination avec les équipes internes de l'établissement",
    ],
    prestations: [
      { title: "Propreté des chambres & espaces communs", desc: "Entretien quotidien des chambres, halls, salons, restaurants et salles de réunion." },
      { title: "Vitrerie & finitions", desc: "Surfaces vitrées, miroirs, parois et détails pour un éclat permanent." },
      { title: "Services événementiels", desc: "Remise en état rapide avant et après réceptions, séminaires et cérémonies." },
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
  const { client, slug } = Route.useLoaderData() as { client: ClientDetail; slug: string };
  const Icon = client.icon;
  const others = Object.entries(clients).filter(([s]) => s !== slug);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
        <div className={`mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 ${client.heroImage ? "grid lg:grid-cols-2 gap-16 items-center" : ""}`}>
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
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90">
                Demander un devis <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
          {client.heroImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-sm overflow-hidden"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img src={client.heroImage} alt={client.label} className="w-full h-[500px] object-cover" width={1600} height={1100} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Notre approche</p>
          <p className="text-xl text-foreground/90 leading-relaxed">{client.intro}</p>
        </div>
      </section>

      {/* Stats */}
      {client.stats && client.stats.length > 0 && (
        <section className="py-20 border-t border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {client.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">{s.value}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Typologies */}
      {client.typologies && client.typologies.length > 0 && (
        <section className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Typologies de sites</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">Une réponse pour chaque environnement.</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {client.typologies.map((t, i) => {
                const TIcon = t.icon;
                return (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="p-8 border border-border rounded-sm bg-card hover:border-primary/50 transition flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 shrink-0">
                      <TIcon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

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

      {/* Gallery */}
      {client.gallery && client.gallery.length > 0 && (
        <section className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">En images</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">L'exigence du détail.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {client.gallery.map((g, i) => (
                <motion.figure
                  key={g.caption}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-sm border border-border"
                >
                  <img src={g.src} alt={g.caption} className="w-full h-80 object-cover group-hover:scale-105 transition duration-700" loading="lazy" width={1280} height={900} />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 via-background/70 to-transparent text-sm font-medium">
                    {g.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Methodology */}
      {client.methodology && client.methodology.length > 0 && (
        <section className="py-24 border-t border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Méthode</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">De l'audit au pilotage continu.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {client.methodology.map((m, i) => (
                <motion.div
                  key={m.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="p-6 border border-border rounded-sm bg-background"
                >
                  <div className="text-primary font-display text-2xl font-bold mb-3">{m.step}</div>
                  <h3 className="font-semibold mb-2">{m.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Engagements */}
      {client.engagements && client.engagements.length > 0 && (
        <section className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos engagements</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ce sur quoi vous pouvez compter.</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Au-delà de la prestation technique, nous nous engageons sur la relation, la traçabilité et l'amélioration continue de votre service.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Clock size={16} className="text-primary" /> Réactivité &lt; 2 h</span>
                <span className="inline-flex items-center gap-2"><Leaf size={16} className="text-primary" /> Écolabel</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-primary" /> RC pro</span>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {client.engagements.map((e) => (
                <li key={e} className="flex items-start gap-3 p-4 rounded-sm border border-border bg-card">
                  <Check className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-sm text-foreground/90">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      {client.faq && client.faq.length > 0 && (
        <section className="py-24 border-t border-border bg-card/40">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Questions fréquentes</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Ce que nos clients nous demandent.</h2>
            <div className="space-y-4">
              {client.faq.map((f) => (
                <details key={f.q} className="group border border-border rounded-sm bg-background p-6 open:border-primary/50 transition">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-semibold">
                    <span>{f.q}</span>
                    <span className="text-primary transition group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

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