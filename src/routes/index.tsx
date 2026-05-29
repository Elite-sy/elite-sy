import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, SprayCan, Building2, Users2, Shield, Award, Users, Briefcase, Hotel, Landmark, Stethoscope, GraduationCap, Factory } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import heroImg from "@/assets/hero.jpg";
import propreteImg from "@/assets/proprete.jpg";
import softImg from "@/assets/soft-facility.jpg";
import amoImg from "@/assets/amo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELITESY — Propreté, Soft Facility & AMO" },
      { name: "description", content: "Services premium aux entreprises : propreté, soft facility management et assistance à maîtrise d'ouvrage. L'exigence du détail." },
      { property: "og:title", content: "ELITESY — Excellence en services aux entreprises" },
      { property: "og:description", content: "Propreté, Soft Facility et AMO pour les environnements professionnels exigeants." },
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
    desc: "Des prestations de nettoyage sur-mesure pour des environnements propres, sains et accueillants.",
    img: propreteImg,
  },
  {
    to: "/soft-facility",
    number: "2",
    icon: Building2,
    title: "Services du",
    subtitle: "Soft Facility",
    desc: "Gestion multiservices de vos bâtiments : maintenance, accueil, espaces verts, courrier, petits travaux… Nous simplifions votre quotidien.",
    img: softImg,
  },
  {
    to: "/amo",
    number: "3",
    icon: Users2,
    title: "AMO",
    subtitle: "Assistance à maître d'ouvrage",
    desc: "Un accompagnement indépendant à chaque étape de votre projet pour sécuriser vos décisions et garantir la réussite.",
    img: amoImg,
  },
];

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "200+", label: "Clients accompagnés" },
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

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-50" width={1920} height={1280} />
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02]">
              L'exigence
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
                du détail.
              </span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              ELITESY accompagne les entreprises et institutions dans la propreté,
              le soft facility management et l'assistance à maîtrise d'ouvrage.
              Une exigence intransigeante, des résultats mesurables.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                Demander un devis <ArrowRight size={16} />
              </Link>
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

      {/* Services */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">Nos métiers</p>
              <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Trois expertises, une seule promesse.</h2>
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
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" width={1600} height={1200} />
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">Pourquoi ELITESY</p>
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
            <img src={heroImg} alt="" className="w-full h-[600px] object-cover" loading="lazy" width={1920} height={1280} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">Secteurs</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6">Prenons contact</p>
            <h2 className="text-4xl md:text-6xl font-bold">Élevons vos standards.</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Un échange de quinze minutes suffit pour comprendre vos enjeux et bâtir une proposition.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Démarrer maintenant <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
