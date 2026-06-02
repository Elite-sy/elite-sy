import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, SprayCan, Building2, Users2, Shield, Award, Users, Briefcase, Hotel, Landmark, Stethoscope, GraduationCap, Factory, CheckCircle2, Clock, Leaf, Sparkles, Phone, Mail, MapPin, Target, HeartHandshake, BadgeCheck } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Picture } from "@/components/site/Picture";
import { LazyImage } from "@/components/site/LazyImage";
import heroImg from "@/assets/hero.jpg?format=avif;webp;jpg&w=640;1024;1600;1920&as=picture";
import elitesyTeamImg from "@/assets/elitesy-team.jpg";
import propreteImg from "@/assets/proprete.jpg";
import softImg from "@/assets/soft-facility.jpg";
import amoImg from "@/assets/amo.jpg";

import prBureauxVitrerieImg from "@/assets/pr-bureaux-vitrerie.jpg";
import santeChambreImg from "@/assets/sante-chambre.jpg";
import pharmaCleanroomImg from "@/assets/pharma-cleanroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELITESY — Propreté, Soft Facility (FM) & AMO à Paris" },
      { name: "description", content: "ELITESY : propreté professionnelle, soft facility management et assistance à maîtrise d'ouvrage (AMO) à Paris et en Île-de-France. Devis gratuit sous 24 h." },
      { property: "og:title", content: "ELITESY — Propreté, Soft Facility (FM) & AMO" },
      { property: "og:description", content: "Services premium aux entreprises : propreté, soft facility (FM) et AMO. Paris & Île-de-France." },
      { property: "og:url", content: "https://elite-sy.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://elite-sy.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ELITESY",
          url: "https://elite-sy.lovable.app/",
          inLanguage: "fr-FR",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://elite-sy.lovable.app/blog?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    to: "/proprete",
    number: "1",
    icon: SprayCan,
    title: "Propreté",
    subtitle: "Pour professionnels",
    desc: "Des prestations de nettoyage sur-mesure pour des environnements propres, sains et accueillants.\n\n",
    img: propreteImg,
  },
  {
    to: "/soft-facility",
    number: "2",
    icon: Building2,
    title: "Soft Fm",
    subtitle: "Facility management",
    desc: "Gestion multiservices de vos bâtiments : maintenance, accueil, espaces verts, courrier, petits travaux… Nous simplifions votre quotidien.",
    img: softImg,
  },
  {
    to: "/amo",
    number: "3",
    icon: Users2,
    title: "AMO",
    subtitle: "Assistance à maîtrise d'ouvrage",
    desc: "Un accompagnement indépendant à chaque étape de votre projet pour sécuriser vos décisions et garantir la réussite.",
    img: amoImg,
  },
];

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "168+", label: "Clients accompagnés" },
  { value: "98%", label: "Taux de fidélisation" },
  { value: "24/7", label: "Disponibilité" },
];

const sectors = [
  { icon: Briefcase, label: "Sièges sociaux" },
  { icon: Hotel, label: "Hôtellerie de luxe" },
  { icon: Landmark, label: "Institutions publiques" },
  { icon: Stethoscope, label: "Santé & cliniques" },
  { icon: GraduationCap, label: "Enseignement supérieur" },
  { icon: Factory, label: "Industrie & logistique" },
];

const advantages = [
  { icon: BadgeCheck, title: "Exigence quotidienne", desc: "Des contrôles qualité réguliers et un encadrement de proximité sur chaque site." },
  { icon: Clock, title: "Réactivité 24/7", desc: "Une astreinte joignable jour et nuit pour les interventions urgentes et imprévues." },
  { icon: Leaf, title: "Démarche responsable", desc: "Produits écolabellisés, microfibres, dosage maîtrisé et gestion raisonnée des déchets." },
  { icon: HeartHandshake, title: "Relation durable", desc: "Un interlocuteur unique, transparent, qui connaît vos sites et vos équipes." },
  { icon: Sparkles, title: "Finitions premium", desc: "Un niveau de finition pensé pour les environnements à forte exposition visuelle." },
  { icon: Target, title: "Résultats mesurables", desc: "Reporting, indicateurs de satisfaction et plans d'amélioration continue." },
];



const certifications = [
  "Qualipropre",
  "ISO 9001",
  "ISO 14001",
  "MASE",
  "Écolabel européen",
  "RGE",
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Picture
            source={heroImg}
            alt="Équipe ELITESY assurant la propreté d'un bâtiment professionnel à Paris"
            className="w-full h-full object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs uppercase tracking-[0.25em] text-primary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Services premium aux entreprises
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] font-sans">
              Propreté, Soft Facility & AMO
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
                pour entreprises exigeantes.
              </span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              ELITESY accompagne les entreprises et institutions dans la propreté,
              le soft facility (FM) et l'assistance à maîtrise d'ouvrage.
              Une exigence intransigeante, des résultats mesurables.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                style={{ boxShadow: "var(--shadow-gold)" }}>
                Demander un devis <ArrowRight size={16} />
              </a>
              <Link
                to="/proprete"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition"
              >
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Services */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos métiers</p>
              <h2 className="text-4xl font-bold max-w-2xl md:text-2xl">Trois expertises, une seule promesse.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Chaque prestation est conçue sur-mesure, pilotée par des experts et mesurée à l'aune de votre satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={s.to} className="group block rounded-sm overflow-hidden border border-border bg-card hover:border-primary/60 transition h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <LazyImage src={s.img} alt={`${s.title} — ${s.subtitle} ELITESY`} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" width={1600} height={1200} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30">
                        <s.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-4xl font-bold text-foreground leading-none">{s.number}</span>
                        <div>
                          <h3 className="text-lg font-bold uppercase tracking-wider leading-tight">{s.title}</h3>
                          <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">{s.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-px bg-primary mb-5" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      En savoir plus <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-32 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Pourquoi ELITESY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Une signature reconnue par les directions exigeantes.</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Depuis plus de quinze ans, nous accompagnons des sièges sociaux, des hôtels haut de gamme,
              des cabinets d'avocats et des institutions publiques. Notre différence : une exigence
              opérationnelle au quotidien, sans jamais déléguer le contrôle qualité.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Shield, label: "Conformité totale" },
                { icon: Award, label: "Certifications ISO" },
                { icon: Users, label: "Équipes formées" },
              ].map((b) => (
                <div key={b.label} className="p-5 border border-border rounded-sm bg-background">
                  <b.icon className="text-primary mb-3" size={22} />
                  <div className="text-sm font-semibold">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-sm overflow-hidden"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <LazyImage src={elitesyTeamImg} alt="Équipe ELITESY au travail sur un site client à Paris" className="w-full h-[600px] object-cover" width={1920} height={1280} />
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos avantages</p>
            <h2 className="text-4xl md:text-5xl font-bold">Six raisons de nous confier vos sites.</h2>
            <p className="mt-6 text-muted-foreground">
              Une promesse claire : des prestations irréprochables, un suivi transparent, et une équipe
              qui s'engage à vos côtés sur la durée.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group p-8 border border-border rounded-sm bg-card/40 hover:border-primary/60 hover:bg-card/80 transition"
              >
                <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <a.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-bold mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Expertises spécialisées</p>
            <h2 className="text-4xl md:text-5xl font-bold">Des protocoles adaptés aux environnements critiques.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: santeChambreImg, title: "Santé & bionettoyage", desc: "Protocoles certifiés pour cliniques, EHPAD et cabinets médicaux.", to: "/proprete/professionnels-sante" },
              { img: pharmaCleanroomImg, title: "Pharmaceutique & salles blanches", desc: "Conformité ISO 14644, traçabilité et équipes habilitées.", to: "/proprete/pharmaceutique" },
              { img: prBureauxVitrerieImg, title: "Tertiaire & vitrerie", desc: "Bureaux, sièges sociaux, vitrerie grande hauteur, accueil.", to: "/proprete" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={c.to} className="group block relative aspect-[4/5] rounded-sm overflow-hidden border border-border hover:border-primary/60 transition">
                  <LazyImage src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" width={1200} height={1500} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{c.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Découvrir <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">Certifications & engagements</p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {certifications.map((c) => (
              <div key={c} className="px-6 py-3 rounded-full border border-border bg-card/60 text-sm font-semibold tracking-wide hover:border-primary/60 hover:text-primary transition">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Secteurs</p>
              <h2 className="text-3xl md:text-4xl font-bold max-w-xl">Des environnements aussi divers qu'exigeants.</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((s) => (
              <div key={s.label} className="p-6 border border-border rounded-sm bg-card/60 hover:border-primary/60 transition flex flex-col items-center text-center gap-3">
                <s.icon className="text-primary" size={24} />
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="rounded-sm border border-primary/30 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Prenons contact</p>
            <h2 className="text-4xl md:text-6xl font-bold">Élevons vos standards.</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Un échange de quinze minutes suffit pour comprendre vos enjeux et bâtir une proposition.
            </p>
            <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90"
              style={{ boxShadow: "var(--shadow-gold)" }}>
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
