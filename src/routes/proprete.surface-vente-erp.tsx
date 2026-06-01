import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Store,
  ShoppingBag,
  Building,
  Utensils,
  Sparkles,
  ShieldCheck,
  ClipboardList,
  Eye,
  MessageSquare,
  CalendarCheck,
  HeartHandshake,
  Clock,
  Trash2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { LazyImage } from "@/components/site/LazyImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/erp-hero.jpg";
import salesFloorImg from "@/assets/erp-sales-floor.jpg";
import vitrineImg from "@/assets/erp-vitrine.jpg";
import sanitairesImg from "@/assets/erp-sanitaires.jpg";
import mallImg from "@/assets/erp-mall.jpg";
import restaurantImg from "@/assets/erp-restaurant.jpg";
import teamImg from "@/assets/elitesy-team.jpg";

export const Route = createFileRoute("/proprete/surface-vente-erp")({
  head: () => ({
    meta: [
      { title: "Surface de vente & ERP — Propreté commerces & lieux publics | ELITESY" },
      {
        name: "description",
        content:
          "Boutiques, centres commerciaux et ERP : un environnement propre, sain et attractif pour vos clients. Interventions en horaires décalés et conformité hygiène garantie.",
      },
      { property: "og:title", content: "Surface de vente & ERP — ELITESY Propreté" },
      {
        property: "og:description",
        content:
          "Boutiques, showrooms, centres commerciaux, restaurants : un service de propreté à la hauteur de votre image de marque et de l'expérience client.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "https://elite-sy.lovable.app/proprete/surface-vente-erp" },
    ],
    links: [{ rel: "canonical", href: "https://elite-sy.lovable.app/proprete/surface-vente-erp" }],
  }),
  component: ErpPage,
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
    id: "surfaces-vente",
    label: "Surfaces de vente",
    icon: ShoppingBag,
    image: salesFloorImg,
    description:
      "Boutiques, showrooms, magasins de prêt-à-porter ou de mobilier : la propreté de la surface de vente conditionne l'expérience client. Nos équipes interviennent en heures creuses ou de nuit pour livrer un espace impeccable à l'ouverture.",
    bullets: [
      "Lavage et lustrage des sols (autolaveuse, monobrosse)",
      "Dépoussiérage des linéaires, mobilier et présentoirs",
      "Nettoyage des cabines d'essayage et zones d'attente",
      "Désinfection des points de contact et caisses",
    ],
  },
  {
    id: "vitrines",
    label: "Vitrines & devantures",
    icon: Store,
    image: vitrineImg,
    description:
      "La vitrine est votre première vendeuse. Nous garantissons des vitrines et devantures éclatantes, intérieures comme extérieures, avec interventions cadencées et matériel adapté pour les hauteurs.",
    bullets: [
      "Vitrines extérieures et intérieures sans traces",
      "Devantures, enseignes et seuils d'entrée",
      "Parois vitrées, miroirs et présentoirs en verre",
      "Nacelle ou perches télescopiques pour les hauteurs",
    ],
  },
  {
    id: "sanitaires",
    label: "Sanitaires publics",
    icon: Sparkles,
    image: sanitairesImg,
    description:
      "Premier critère de satisfaction client, les sanitaires publics exigent des contrôles fréquents en journée. Réapprovisionnement, désinfection et passages tracés pour un niveau d'hygiène constant.",
    bullets: [
      "Passages contrôlés plusieurs fois par jour",
      "Réapprovisionnement papier, savon, essuie-mains",
      "Désinfection complète robinetterie et cuvettes",
      "Fiche de passage signée affichée",
    ],
  },
  {
    id: "galeries-mall",
    label: "Galeries marchandes",
    icon: Building,
    image: mallImg,
    description:
      "Centres commerciaux et galeries marchandes : grandes surfaces, fort trafic, exigences ERP. Nous mobilisons des équipes nombreuses et du matériel mécanisé pour garantir la propreté en continu.",
    bullets: [
      "Balayage et lavage mécanisé des allées",
      "Vidage des corbeilles et collecte des déchets",
      "Nettoyage des aires de repos et food courts",
      "Interventions en journée respectant les flux",
    ],
  },
  {
    id: "restauration",
    label: "Restauration & food courts",
    icon: Utensils,
    image: restaurantImg,
    description:
      "Restaurants, food courts et espaces de restauration : exigence d'hygiène HACCP, rotations rapides entre services, gestion fine des déchets organiques. Nos équipes sont formées aux contraintes de la restauration.",
    bullets: [
      "Nettoyage entre services, salle et zones clients",
      "Désinfection des tables, banquettes et plateaux",
      "Entretien des zones de préparation périphériques",
      "Gestion du tri et des déchets organiques",
    ],
  },
  {
    id: "accueil-image",
    label: "Accueil & image de marque",
    icon: HeartHandshake,
    image: heroImg,
    description:
      "Sas d'entrée, halls d'accueil, espaces VIP : les premières secondes conditionnent la perception de votre enseigne. Nous traitons ces zones avec un soin particulier, à toute heure d'ouverture.",
    bullets: [
      "Sols, paillassons et seuils d'entrée immaculés",
      "Mobilier d'accueil dépoussiéré et désinfecté",
      "Vitrages, portes automatiques et inox lustrés",
      "Présence discrète aux heures d'affluence",
    ],
  },
];

const missions = [
  {
    icon: ShoppingBag,
    title: "Surfaces de vente",
    items: [
      "Lavage et lustrage des sols",
      "Dépoussiérage des linéaires et mobilier",
      "Cabines d'essayage et zones d'attente",
      "Désinfection des points de contact",
    ],
  },
  {
    icon: Store,
    title: "Vitrerie & devantures",
    items: [
      "Vitrines intérieures et extérieures",
      "Devantures, enseignes et seuils",
      "Parois vitrées et miroirs",
      "Interventions en hauteur (nacelle, perches)",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Hygiène ERP",
    items: [
      "Conformité aux exigences ERP",
      "Sanitaires publics à passages fréquents",
      "Désinfection des zones à fort trafic",
      "Produits et protocoles homologués",
    ],
  },
  {
    icon: Trash2,
    title: "Gestion des déchets",
    items: [
      "Vidage des corbeilles intérieures et extérieures",
      "Tri sélectif et compactage",
      "Évacuation vers les locaux dédiés",
      "Nettoyage et désinfection des locaux poubelles",
    ],
  },
  {
    icon: Sparkles,
    title: "Remises en état",
    items: [
      "Décapage et cristallisation des sols",
      "Shampoing moquettes et tissus",
      "Nettoyage après travaux ou réagencement",
      "Préparation des ouvertures de boutiques",
    ],
  },
  {
    icon: ClipboardList,
    title: "Suivi & reporting",
    items: [
      "Registre de passage signé",
      "Contrôles qualité par notre encadrement",
      "Reporting mensuel au directeur de site",
      "Suivi des consommables sanitaires",
    ],
  },
];

const methode = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Visite & cahier des charges",
    text: "Visite du point de vente, identification des zones à fort trafic, des contraintes horaires et des standards de votre enseigne. Élaboration d'un plan de prestations sur mesure.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Planning aligné sur votre activité",
    text: "Interventions de nuit, tôt le matin, en heures creuses ou en journée selon vos flux. Équipes dédiées et référent unique pour le directeur de magasin.",
  },
  {
    icon: Eye,
    step: "03",
    title: "Contrôles qualité réguliers",
    text: "Visites surprises de l'encadrement, grilles d'évaluation, registre de passage signé. Indicateurs partagés avec votre management de site.",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "Réactivité & communication",
    text: "Ligne directe avec votre directeur de site, intervention exceptionnelle sous 2 h, comptes rendus mensuels au responsable retail ou exploitation.",
  },
];

const engagements = [
  {
    icon: Clock,
    title: "Horaires alignés sur votre activité",
    text: "Nuit, ouverture, fermeture, heures creuses : nous adaptons nos créneaux à votre exploitation. Aucune gêne pour vos clients ni vos équipes commerciales.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité hygiène ERP",
    text: "Protocoles validés pour établissements recevant du public : sanitaires, points de contact, gestion des fluides corporels, traçabilité des interventions.",
  },
  {
    icon: HeartHandshake,
    title: "Valorisation de votre image",
    text: "Une boutique propre vend mieux. Nous soignons les détails — vitrines sans traces, sols qui brillent, sanitaires impeccables — qui font la différence en magasin.",
  },
];

const faqs = [
  {
    q: "À quelles heures intervenez-vous ?",
    a: "Nous adaptons les créneaux à votre activité : de nuit après la fermeture, tôt le matin avant l'ouverture, en heures creuses ou en journée pour les sanitaires et zones à fort trafic. Le planning est défini avec le directeur de site.",
  },
  {
    q: "Êtes-vous conformes aux exigences ERP ?",
    a: "Oui. Nos protocoles respectent les obligations d'hygiène applicables aux établissements recevant du public : passages contrôlés, désinfection des points de contact, gestion des sanitaires publics et traçabilité des interventions affichée sur site.",
  },
  {
    q: "Pouvez-vous gérer un parc multi-sites ?",
    a: "Absolument. Nous accompagnons les enseignes et foncières sur plusieurs points de vente avec un interlocuteur unique au siège, une homogénéité de prestation et un reporting consolidé. Idéal pour les directions retail et exploitation.",
  },
  {
    q: "Intervenez-vous pour les ouvertures de boutiques ?",
    a: "Oui, nous réalisons les nettoyages de fin de chantier et les remises en état avant ouverture : dépoussiérage complet, décollement d'étiquettes, lustrage des sols, vitrerie. Devis sous 48 h et mobilisation rapide.",
  },
  {
    q: "Quels produits utilisez-vous ?",
    a: "Nous privilégions les produits porteurs de l'Écolabel européen, les microfibres lavables et les centrales de dilution pour maîtriser les dosages. Les fiches de données de sécurité sont disponibles sur site et les produits adaptés aux contraintes ERP.",
  },
];

function ErpPage() {
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
                <Store className="text-primary" size={26} />
              </div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary text-lg">Surface de vente / ERP</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
              Un environnement propre,<br />
              <span className="text-primary">à la hauteur de votre marque.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Boutiques, showrooms, centres commerciaux, restaurants : un service de propreté discret, conforme aux exigences d'hygiène ERP et aligné sur l'image de votre enseigne.
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
            <img src={heroImg} alt="Boutique haut de gamme entretenue par ELITESY avant ouverture" width={1600} height={1120} className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-[auto_1fr] gap-10 items-start">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 shrink-0">
            <Sparkles className="text-primary" size={28} />
          </div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-4 text-sm">L'expérience client commence par la propreté</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Dans le retail, chaque détail compte : un sol qui brille, une vitrine sans traces, des sanitaires impeccables.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ELITESY accompagne enseignes, foncières et exploitants de centres commerciaux avec des dispositifs adaptés aux horaires d'ouverture, aux flux clients et aux exigences ERP. Une présence discrète, une exécution rigoureuse, des standards constants sur tous vos sites.
            </p>
          </div>
        </div>
      </section>

      {/* Zones interactives */}
      <section id="zones" className="py-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Les zones que nous entretenons</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">Du sas d'entrée aux food courts.</h2>
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
                <LazyImage src={current.image} alt={current.label} width={1280} height={900} className="absolute inset-0 w-full h-full object-cover" />
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
          <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Nos missions en retail</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Un périmètre complet, ajusté à chaque point de vente.</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">Un pilotage rigoureux, une traçabilité totale.</h2>
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
            <LazyImage src={teamImg} alt="L'équipe ELITESY : agents formés au retail et aux ERP" width={1280} height={960} className="w-full h-[500px] object-cover" />
          </motion.div>
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-sm">Pourquoi ELITESY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Un partenaire fiable pour votre enseigne.</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold">Un devis adapté à votre point de vente en 48 h.</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Décrivez-nous vos sites : nous construisons un dispositif sur mesure, conforme à l'image de votre enseigne.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            Demander un devis personnalisé <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}