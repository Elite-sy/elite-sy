import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Check, ClipboardList, Sparkles, Leaf, Building2, Mail, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import pilotageImg from "@/assets/sf-pilotage.jpg";
import dechetsImg from "@/assets/sf-dechets.jpg";
import exterieursImg from "@/assets/sf-exterieurs.jpg";
import logistiqueImg from "@/assets/sf-logistique.jpg";
import maintenanceImg from "@/assets/sf-maintenance.jpg";
import occupantsImg from "@/assets/sf-occupants.jpg";

type ServiceDetail = {
  label: string;
  tagline: string;
  icon: LucideIcon;
  img: string;
  intro: string;
  challenges: string[];
  prestations: { title: string; desc: string }[];
};

export const services: Record<string, ServiceDetail> = {
  "pilotage-multiservices": {
    label: "Pilotage multiservices",
    tagline: "Un référent unique, un reporting consolidé, des engagements de service mesurés en continu.",
    icon: ClipboardList,
    img: pilotageImg,
    intro:
      "ELITESY orchestre l'ensemble de vos prestations multiservices via un site manager dédié. Vous bénéficiez d'un point de contact unique, d'une vision consolidée des indicateurs de performance et d'une démarche d'amélioration continue qui transforme vos services support en levier de valeur.",
    challenges: [
      "Coordination de prestataires multiples sur un même site",
      "Visibilité en temps réel sur les engagements de service",
      "Réactivité face aux demandes ponctuelles des occupants",
      "Optimisation des coûts par la mutualisation",
    ],
    prestations: [
      { title: "Site manager dédié", desc: "Un référent unique sur site pour piloter, animer et arbitrer toutes vos prestations support." },
      { title: "Reporting consolidé", desc: "Indicateurs de performance partagés, tableaux de bord mensuels et revues d'activité." },
      { title: "Amélioration continue", desc: "Plans d'action correctifs, retours d'expérience et innovations déployées tout au long du contrat." },
    ],
  },
  "gestion-dechets": {
    label: "Gestion des déchets",
    tagline: "Tri à la source, valorisation et traçabilité pour réduire votre empreinte environnementale.",
    icon: Sparkles,
    img: dechetsImg,
    intro:
      "ELITESY structure la collecte, le tri et la valorisation de l'ensemble de vos flux de déchets. De la mise en place de la signalétique au reporting réglementaire en passant par la formation des occupants, nous accompagnons vos engagements RSE avec rigueur et pédagogie.",
    challenges: [
      "Conformité réglementaire (tri 5 flux, biodéchets, DEEE)",
      "Traçabilité documentaire des filières de valorisation",
      "Sensibilisation et adhésion des occupants au tri",
      "Réduction du volume global et des coûts associés",
    ],
    prestations: [
      { title: "Tri à la source", desc: "Implantation des points d'apport volontaire, signalétique claire et accompagnement des collaborateurs." },
      { title: "Collecte et valorisation", desc: "Sortie des bacs, regroupement, partenariats filières et suivi des tonnages valorisés." },
      { title: "Traçabilité réglementaire", desc: "Bordereaux de suivi, reporting annuel et accompagnement de vos audits environnementaux." },
    ],
  },
  "espaces-exterieurs": {
    label: "Entretien des espaces extérieurs",
    tagline: "Des abords entretenus toute l'année, dans une démarche raisonnée et durable.",
    icon: Leaf,
    img: exterieursImg,
    intro:
      "Tonte, taille, nettoyage des voiries, ramassage des feuilles : ELITESY entretient vos espaces extérieurs avec des équipes formées et un matériel adapté. Une approche raisonnée, respectueuse de la biodiversité et programmée selon les saisons.",
    challenges: [
      "Image soignée dès l'arrivée sur site",
      "Sécurité des cheminements (feuilles, neige, déchets)",
      "Gestion écologique (zéro phyto, mulching, paillage)",
      "Planification adaptée aux saisons et aux usages",
    ],
    prestations: [
      { title: "Tonte et taille", desc: "Pelouses, haies et plantations entretenues selon un calendrier saisonnier rigoureux." },
      { title: "Nettoyage des abords", desc: "Parkings, voiries, cheminements piétons, ramassage des feuilles et déchets extérieurs." },
      { title: "Entretien des espaces verts", desc: "Désherbage raisonné, fleurissement, paillage et accompagnement de la biodiversité." },
    ],
  },
  "logistique-sur-site": {
    label: "Logistique sur site",
    tagline: "Aménagement, déménagements internes et réorganisation des espaces de travail.",
    icon: Building2,
    img: logistiqueImg,
    intro:
      "ELITESY prend en charge tous vos mouvements internes : montage de mobilier, installation de signalétique, reconfiguration de salles, déménagements de service. Une équipe logistique réactive, mobilisable rapidement et formée aux contraintes des sites en activité.",
    challenges: [
      "Continuité d'activité pendant les réorganisations",
      "Respect des délais et des contraintes d'accès",
      "Manipulation soignée du mobilier et du matériel",
      "Coordination avec les équipes IT et facility",
    ],
    prestations: [
      { title: "Montage / démontage de mobilier", desc: "Bureaux, armoires, chaises, cloisons : installation et désinstallation conformes aux notices." },
      { title: "Réorganisation d'espaces", desc: "Reconfiguration de plateaux, déménagements internes et mise en place de salles de réunion." },
      { title: "Installation de signalétique", desc: "Panneaux, affichage, tableaux et supports muraux posés proprement et durablement." },
    ],
  },
  "maintenance-legere": {
    label: "Entretien et maintenance légère",
    tagline: "Les petits travaux du quotidien pris en charge par une équipe technique sur site.",
    icon: Mail,
    img: maintenanceImg,
    intro:
      "Ampoules, poignées, petites fixations, retouches peinture : ELITESY mobilise un technicien multiservices pour traiter rapidement les demandes de maintenance courante. Une réponse efficace pour préserver le confort des occupants et la qualité de vos espaces.",
    challenges: [
      "Délai de prise en charge des demandes (SLA)",
      "Coordination avec les contrats de maintenance spécialisés",
      "Qualité des finitions visibles par les occupants",
      "Traçabilité des interventions",
    ],
    prestations: [
      { title: "Petites réparations", desc: "Remplacement d'ampoules accessibles, réglage de portes et poignées, fixation d'éléments muraux." },
      { title: "Réparations mobilier", desc: "Resserrage, ajustement et réparations mineures du mobilier de bureau." },
      { title: "Retouches peinture", desc: "Reprises locales pour effacer les traces et préserver l'image de vos espaces." },
    ],
  },
  "services-occupants": {
    label: "Services aux occupants",
    tagline: "Une présence attentionnée au service du quotidien de vos collaborateurs.",
    icon: Users,
    img: occupantsImg,
    intro:
      "Préparation des salles de réunion, accueil ponctuel, organisation des espaces partagés : ELITESY déploie des équipes formées à la posture de service. Un soutien discret mais essentiel qui contribue directement à la qualité de vie au travail.",
    challenges: [
      "Disponibilité aux heures clés de la journée",
      "Posture de service irréprochable face aux occupants",
      "Coordination avec les équipes événementielles",
      "Anticipation des besoins récurrents",
    ],
    prestations: [
      { title: "Préparation des salles", desc: "Mise en place du mobilier, des consommables, remise en état entre deux réunions." },
      { title: "Assistance aux collaborateurs", desc: "Support quotidien sur les petits besoins internes : réassorts, dépannage, orientation." },
      { title: "Organisation des espaces partagés", desc: "Tisaneries, espaces détente et zones de convivialité entretenus tout au long de la journée." },
    ],
  },
};

export const Route = createFileRoute("/soft-facility_/$slug")({
  loader: ({ params }) => {
    const service = services[params.slug];
    if (!service) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const service = services[loaderData.slug];
    if (!service) return { meta: [] };
    return {
      meta: [
        { title: `${service.label} — Soft Facility | ELITESY` },
        { name: "description", content: service.tagline },
        { property: "og:title", content: `Soft Facility · ${service.label} — ELITESY` },
        { property: "og:description", content: service.tagline },
        { property: "og:image", content: service.img },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Page introuvable</p>
          <h1 className="text-4xl font-bold mb-6">Ce service n'existe pas.</h1>
          <Link to="/soft-facility" className="inline-flex items-center gap-2 text-primary">
            <ArrowLeft size={16} /> Retour à Soft Facility
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
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useLoaderData() as { slug: string };
  const service = services[slug];
  const Icon = service.icon;
  const entries = Object.entries(services);
  const currentIndex = entries.findIndex(([s]) => s === slug);
  const prev = entries[(currentIndex - 1 + entries.length) % entries.length];
  const next = entries[(currentIndex + 1) % entries.length];
  const others = entries.filter(([s]) => s !== slug);

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground overflow-x-auto">
          <Link to="/" className="hover:text-primary transition">Accueil</Link>
          <span className="text-border">/</span>
          <Link to="/soft-facility" className="hover:text-primary transition">Soft Facility</Link>
          <span className="text-border">/</span>
          <span className="text-foreground font-semibold whitespace-nowrap">{service.label}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={service.img} alt="" className="w-full h-full object-cover opacity-40" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <Link to="/soft-facility" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={14} /> Soft Facility
            </Link>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30">
                <Icon className="text-primary" size={26} />
              </div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">Soft Facility</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">{service.label}</h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Prev / Next quick nav */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 grid grid-cols-2 gap-4">
          <Link
            to="/soft-facility/$slug"
            params={{ slug: prev[0] }}
            className="group flex items-center gap-4 p-4 rounded-sm border border-border hover:border-primary/60 transition"
          >
            <ArrowLeft className="text-primary shrink-0 group-hover:-translate-x-1 transition" size={18} />
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Précédent</div>
              <div className="text-sm md:text-base font-semibold truncate">{prev[1].label}</div>
            </div>
          </Link>
          <Link
            to="/soft-facility/$slug"
            params={{ slug: next[0] }}
            className="group flex items-center justify-end gap-4 p-4 rounded-sm border border-border hover:border-primary/60 transition text-right"
          >
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Suivant</div>
              <div className="text-sm md:text-base font-semibold truncate">{next[1].label}</div>
            </div>
            <ArrowRight className="text-primary shrink-0 group-hover:translate-x-1 transition" size={18} />
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Notre approche</p>
          <p className="text-xl text-foreground/90 leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Enjeux</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vos défis, nos réponses.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous bâtissons chaque dispositif autour des contraintes spécifiques de votre site et de vos équipes.
            </p>
          </div>
          <ul className="space-y-4">
            {service.challenges.map((c) => (
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
            {service.prestations.map((p, i) => (
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

      {/* Other services */}
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Explorer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Les autres prestations.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {others.map(([s, srv]) => (
              <Link
                key={s}
                to="/soft-facility/$slug"
                params={{ slug: s }}
                className="p-4 border border-border rounded-sm bg-background hover:border-primary/60 transition flex flex-col items-center text-center gap-2"
              >
                <srv.icon className="text-primary" size={20} />
                <span className="text-xs font-medium">{srv.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Un besoin sur {service.label.toLowerCase()} ?</h2>
          <p className="mt-6 text-muted-foreground text-lg">Parlons de vos enjeux et bâtissons une proposition adaptée.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}