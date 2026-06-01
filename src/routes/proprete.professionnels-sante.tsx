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
  Shirt,
  Leaf,
  Clock,
  Award,
  Smile,
  Building2,
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
      { title: "EHPAD & Résidences Seniors — Nettoyage spécialisé & bionettoyage | ELITESY" },
      {
        name: "description",
        content:
          "Nettoyage des EHPAD et maisons de retraite : comment assurer hygiène, sécurité et qualité de vie. Protocoles certifiés et bionettoyage pour établissements médico-sociaux.",
      },
      { property: "og:title", content: "EHPAD & Résidences Seniors — Nettoyage spécialisé | ELITESY" },
      {
        property: "og:description",
        content:
          "Garantir hygiène, sécurité et dignité dans les EHPAD et résidences seniors : agents formés, protocoles ISO et continuité de service totale.",
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
    label: "Chambres & salles de bains",
    icon: BedDouble,
    image: chambreImg,
    description:
      "Les chambres et salles de bains des résidents concentrent l'essentiel des interactions quotidiennes. ELITESY y applique un entretien rigoureux pour limiter les risques infectieux et préserver le confort, la dignité et la sérénité de chacun.",
    bullets: [
      "Bionettoyage quotidien des chambres et sanitaires privatifs",
      "Désinfection des points de contact (poignées, télécommandes, rampes)",
      "Entretien des sols antidérapants sans résidus glissants",
      "Lessivage périodique des murs et plafonds, aération maîtrisée",
    ],
  },
  {
    id: "soins-lingerie",
    label: "Salles de soins, offices & lingerie",
    icon: Shirt,
    image: blocImg,
    description:
      "Salles de soins, offices alimentaires et lingerie sont soumis à des exigences sanitaires élevées. Nos protocoles respectent les circuits propre/sale, les règles d'hygiène alimentaire et la traçabilité attendue par votre direction.",
    bullets: [
      "Bionettoyage des salles de soins et postes infirmiers",
      "Hygiène des offices alimentaires (HACCP, marche en avant)",
      "Respect des circuits propre/sale en lingerie",
      "Gestion conforme des DASRI et déchets à risque",
    ],
  },
  {
    id: "espaces-vie",
    label: "Espaces de vie & restaurant",
    icon: Smile,
    image: ehpadImg,
    description:
      "Salons, salles d'animation, salle de restaurant : ces espaces sont au cœur de la vie sociale de l'établissement. Nous y intervenons avec discrétion, en respectant le rythme des résidents et les temps d'animation.",
    bullets: [
      "Entretien des salons, bibliothèques et salles d'activité",
      "Bionettoyage de la salle de restaurant entre les services",
      "Désinfection des aides techniques (fauteuils, déambulateurs)",
      "Confort olfactif et ambiance apaisée",
    ],
  },
  {
    id: "circulations",
    label: "Circulations, ascenseurs & points de contact",
    icon: Building2,
    image: heroImg,
    description:
      "Couloirs, ascenseurs, rampes et poignées : ce sont les principaux vecteurs de transmission. Une désinfection renforcée et des passages fréquents sont indispensables pour sécuriser ces zones de circulation.",
    bullets: [
      "Lavage mécanisé des sols (autolaveuse) dans les zones adaptées",
      "Désinfection ciblée des rampes, mains courantes et boutons d'ascenseur",
      "Vitrages, banques d'accueil et signalétique soignés",
      "Passages contrôlés aux heures d'affluence",
    ],
  },
  {
    id: "exterieurs",
    label: "Extérieurs, parkings & déchets",
    icon: Leaf,
    image: laboImg,
    description:
      "Une hygiène complète passe aussi par les abords : parkings, jardins thérapeutiques, locaux poubelles. Nous gérons la sortie des conteneurs, le nettoyage des locaux à déchets et l'entretien des parkings pour un cadre global maîtrisé.",
    bullets: [
      "Sortie et rentrée des poubelles et conteneurs",
      "Nettoyage et désinfection des locaux à déchets",
      "Entretien des parkings, abords et zones extérieures",
      "Lavage des vitres en hauteur (perches, nacelle)",
    ],
  },
  {
    id: "cabinets",
    label: "Cabinets, MSP & USLD",
    icon: Stethoscope,
    image: cabinetImg,
    description:
      "Au-delà des EHPAD, nous accompagnons cabinets médicaux, maisons de santé pluriprofessionnelles et USLD avec les mêmes exigences sanitaires : protocoles renforcés, agents formés et traçabilité complète.",
    bullets: [
      "Bionettoyage des salles d'examen et de consultation",
      "Désinfection complète des points de contact patients",
      "Salles d'attente accueillantes et impeccables",
      "Sanitaires patients à fréquence renforcée",
    ],
  },
];

const missions = [
  {
    icon: Users,
    title: "Agents formés au médico-social",
    items: [
      "Compréhension des risques infectieux et contaminations croisées",
      "Postures et gestes adaptés aux personnes âgées fragiles",
      "Respect, discrétion et bienveillance auprès des résidents",
      "Encadrement de proximité par un responsable de secteur",
    ],
  },
  {
    icon: Award,
    title: "Protocoles certifiés ISO 9001 / 14001",
    items: [
      "Processus structurés et qualité garantie (ISO 9001)",
      "Engagement environnemental tracé (ISO 14001)",
      "Modes opératoires écrits par zone et par fréquence",
      "Traçabilité complète des interventions",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Maîtrise du risque infectieux",
    items: [
      "Protocoles renforcés type gastro, grippe, COVID",
      "Désinfection ciblée des points de contact à haute fréquence",
      "Matériel et microfibres à code couleur par zone",
      "Gestion des chambres en isolement",
    ],
  },
  {
    icon: Sparkles,
    title: "Produits & matériels adaptés",
    items: [
      "Détergents-désinfectants efficaces sans irritation",
      "Produits écolabellisés conformes à la démarche ISO 14001",
      "Sols traités pour rester sûrs et non glissants",
      "Aspiration moquettes et sols, lessivage murs et plafonds",
    ],
  },
  {
    icon: HeartPulse,
    title: "Continuité de service totale",
    items: [
      "Présence 7j/7 — un EHPAD ne ferme jamais",
      "Remplacements anticipés en cas d'absence",
      "Astreintes et intervention exceptionnelle sous 2 h",
      "Renforts mobilisables en cas d'épidémie",
    ],
  },
  {
    icon: ClipboardList,
    title: "Suivi qualité & traçabilité",
    items: [
      "Visites qualité régulières du responsable de secteur",
      "Grilles d'évaluation partagées avec la direction",
      "Fiches de passage signées par zone",
      "Reporting transparent et plans d'amélioration",
    ],
  },
];

const methode = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Évaluation complète du site",
    text: "Visite avec la direction et le médecin coordonnateur, cartographie des zones à risque, analyse des flux de résidents, de soignants et de visiteurs. Identification des contraintes spécifiques à l'établissement.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Protocoles ISO 9001 / 14001",
    text: "Rédaction des modes opératoires par zone et fréquence, choix des produits écolabellisés, dimensionnement des équipes et planning aligné sur la vie de l'établissement (toilettes, repas, animations).",
  },
  {
    icon: Users,
    step: "03",
    title: "Équipes formées, stables, encadrées",
    text: "Agents formés au milieu médico-social, équipe dédiée et stable pour rassurer résidents et familles, chef d'équipe sur site et responsable de secteur en encadrement de proximité.",
  },
  {
    icon: Eye,
    step: "04",
    title: "Suivi qualité & amélioration continue",
    text: "Visites qualité régulières, grilles d'évaluation, ajustements permanents, reporting transparent à la direction et plan d'actions correctives en cas d'écart.",
  },
];

const engagements = [
  {
    icon: ShieldCheck,
    title: "Réduction du risque infectieux",
    text: "Une hygiène maîtrisée limite la propagation des virus et bactéries (gastro, grippe, COVID), protège les résidents fragiles et réduit les épisodes infectieux dans l'établissement.",
  },
  {
    icon: Smile,
    title: "Bien-être & dignité des résidents",
    text: "Un cadre propre, sans odeurs, avec des sols sûrs et des sanitaires impeccables améliore la qualité de vie, le confort et la perception du lieu — pour les résidents comme pour leurs familles.",
  },
  {
    icon: HeartPulse,
    title: "Soutien aux équipes soignantes",
    text: "Un environnement stable, propre et sécurisé réduit la charge mentale des soignants et leur permet de se concentrer sur leur cœur de métier : le soin et l'accompagnement humain.",
  },
  {
    icon: Award,
    title: "Conformité & image de l'établissement",
    text: "Une hygiène maîtrisée, certifiée et tracée renforce la confiance des familles, facilite les inspections et valorise la réputation de votre EHPAD ou maison de retraite.",
  },
];

const faqs = [
  {
    q: "Quels protocoles appliquez-vous en EHPAD et maison de retraite ?",
    a: "Nos protocoles s'appuient sur les certifications ISO 9001 et ISO 14001 et sur une analyse précise des risques de votre établissement. Chaque zone (chambres, salles de soins, offices, circulations) dispose d'un mode opératoire écrit, d'une fréquence définie et d'une traçabilité signée à chaque passage.",
  },
  {
    q: "Quels produits utilisez-vous auprès de publics fragiles ?",
    a: "Nous privilégions des détergents-désinfectants efficaces et non irritants, écolabellisés autant que possible et conformes à la démarche ISO 14001. Les sols sont traités pour rester sûrs et non glissants, et tous les produits sont validés en amont avec votre médecin coordonnateur.",
  },
  {
    q: "Quelle est la fréquence de nettoyage adaptée ?",
    a: "La fréquence varie selon les zones : chambres et sanitaires quotidiennement, points de contact plusieurs fois par jour, salles communes après chaque temps fort (repas, animations), circulations en continu. Nous complétons par des prestations périodiques (lessivage murs et plafonds, lavage des vitres, gestion des déchets, nettoyage de parkings).",
  },
  {
    q: "Comment garantissez-vous la continuité de service ?",
    a: "Un EHPAD ne ferme jamais. Nous garantissons une présence 7j/7, organisons les remplacements anticipés en cas d'absence, mobilisons des renforts en cas d'épidémie ou de pic d'activité, et assurons une astreinte avec intervention exceptionnelle sous 2 h pour toute urgence sanitaire.",
  },
  {
    q: "Vos agents sont-ils formés au milieu médico-social ?",
    a: "Oui. Chaque agent affecté à un EHPAD ou une maison de retraite suit une formation initiale au bionettoyage et à la prévention des infections, des sessions de recyclage annuelles, et bénéficie d'un encadrement de proximité par un chef d'équipe et un responsable de secteur. La stabilité de l'équipe est une de nos priorités pour rassurer résidents et familles.",
  },
  {
    q: "Comment se déroule le suivi qualité ?",
    a: "Nous appliquons un suivi qualité rigoureux : visites régulières du responsable de secteur, grilles d'évaluation partagées avec la direction, fiches de passage signées par zone, reporting mensuel transparent et plans d'actions correctives. Vous gardez à tout moment la visibilité sur l'exécution du contrat.",
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
              <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">EHPAD & Résidences Seniors</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
              Nettoyage des EHPAD<br />
              <span className="text-primary">& maisons de retraite.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl text-balance">
              Nettoyage des EHPAD et maisons de retraite : comment assurer hygiène, sécurité et qualité de vie. ELITESY déploie des équipes formées au médico-social et des protocoles certifiés pour protéger les publics les plus fragiles.
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
            <img src={heroImg} alt="Couloir d'établissement médico-social entretenu par ELITESY" width={1600} height={1120} className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Intro — enjeu sanitaire */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-[auto_1fr] gap-10 items-start">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 shrink-0">
            <ShieldCheck className="text-primary" size={28} />
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-4 text-sm">Un enjeu sanitaire majeur</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Les résidents des EHPAD figurent parmi les publics les plus vulnérables. Leur protection commence par la propreté.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Système immunitaire affaibli, vie en collectivité, interactions continues : les gastro-entérites, la grippe ou les épisodes viraux circulent vite dans les lieux clos. Chaque poignée, rampe, bouton d'ascenseur ou table peut devenir un vecteur de transmission.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              La qualité de vie dépend aussi fortement de l'environnement : une salle de bain mal entretenue, une odeur persistante ou un sol glissant dégradent le confort, la dignité et la sécurité. ELITESY accompagne les directions d'établissement avec une exigence à la hauteur de ces enjeux.
            </p>
          </div>
        </div>
      </section>

      {/* Zones interactives */}
      <section id="zones" className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Les zones critiques que nous entretenons</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">Où concentrer les efforts de propreté.</h2>
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
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Qu'attendre d'une entreprise spécialisée</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Compétences spécifiques, organisation structurée.</h2>
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
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Notre méthode</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Comment ELITESY structure ses interventions.</h2>
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

      {/* Bénéfices concrets */}
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
            <img src={teamImg} alt="L'équipe ELITESY : agents formés au milieu médico-social" loading="lazy" width={1280} height={960} className="w-full h-[500px] object-cover" />
          </motion.div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Les bénéfices concrets</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Pourquoi choisir ELITESY pour votre établissement.</h2>
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

      {/* Continuité — bandeau */}
      <section className="py-20 border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {[
            { icon: Clock, title: "Présence 7j/7", text: "Un EHPAD ne ferme jamais. Notre organisation garantit une continuité totale du service." },
            { icon: Microscope, title: "Renforts épidémie", text: "Équipes mobilisables sous 24 h en cas de gastro, grippe ou pic infectieux." },
            { icon: MessageSquare, title: "Astreinte 2 h", text: "Intervention exceptionnelle sous 2 h pour toute urgence sanitaire (souillure, dégât, isolement)." },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Questions fréquentes</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Comprendre le nettoyage des EHPAD.</h2>
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
      <section className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">La propreté, pilier du bien-être</p>
          <h2 className="text-4xl md:text-5xl font-bold">Vous dirigez un EHPAD ou une maison de retraite ?</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Renforcez l'hygiène et la qualité de vie dans votre établissement. Nous construisons avec vous un dispositif sur mesure, certifié et tracé.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Demander un devis personnalisé <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}