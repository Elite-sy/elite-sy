import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, ArrowRight, type LucideIcon } from "lucide-react";
import { Layout } from "./Layout";
import { LazyImage } from "./LazyImage";

export interface SectorItem {
 slug: string;
 label: string;
 icon: LucideIcon;
 img: string;
 tagline: string;
}

export interface ServicePageProps {
 eyebrow: string;
 title: string;
 description: string;
 image: string;
 features?: { title: string; description: string; slug?: string }[];
 process: { step: string; title: string; description: string }[];
 benefits: string[];
 sectors?: SectorItem[];
}

export function ServicePage({ eyebrow, title, description, image, features, process, benefits, sectors }: ServicePageProps) {
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
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">{eyebrow}</p>
 <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">{title}</h1>
 <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">{description}</p>
 <div className="mt-10 flex gap-4">
 <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" ></a>
 </div>
 </motion.div>
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1 }}
 className="relative rounded-sm overflow-hidden"
 style={{ boxShadow: "var(--shadow-elegant)" }}
 >
 <img src={image} alt={title} className="w-full h-[500px] object-cover" loading="lazy" width={1600} height={1100} />
 <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
 </motion.div>
 </div>
 </section>

 {/* Features */}
 {features && features.length > 0 && (
 <section className="py-24 border-t border-border">
 <div className="mx-auto max-w-7xl px-6 lg:px-10">
 <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-2xl">Notre expertise</h2>
 <div className="grid md:grid-cols-3 gap-8">
 {features.map((f, i) => (
 <motion.div
 key={f.title}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 className="group p-8 border border-border rounded-sm bg-card hover:border-primary/50 transition"
 >
 {f.slug ? (
 <Link to="/proprete/$slug" params={{ slug: f.slug }} className="block">
 <div className="text-primary font-display text-3xl font-bold mb-4">0{i + 1}</div>
 <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
 {f.title}
 <ArrowRight size={18} className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
 </h3>
 <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{f.description}</p>
 </Link>
 ) : (
 <>
 <div className="text-primary font-display text-3xl font-bold mb-4">0{i + 1}</div>
 <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
 <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{f.description}</p>
 </>
 )}
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 )}

 {/* Sectors */}
 {sectors && sectors.length > 0 && (
 <section className="py-32 border-t border-border">
 <div className="mx-auto max-w-7xl px-6 lg:px-10">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
 <div>
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Nos secteurs</p>
 <h2 className="text-4xl font-bold max-w-2xl md:text-2xl">Une expertise multisectorielle.</h2>
 </div>
 <p className="text-muted-foreground max-w-md">
 Chaque environnement a ses contraintes. Nos équipes sont formées aux
 exigences spécifiques de votre secteur.
 </p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {sectors.map((s, i) => (
 <motion.div
 key={s.slug}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.05 }}
 >
 <Link
 to="/proprete/$slug"
 params={{ slug: s.slug }}
 className="group block relative aspect-[4/5] rounded-sm overflow-hidden border border-border hover:border-primary/60 transition"
 >
 <LazyImage src={s.img} alt={s.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" width={1280} height={800} />
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
 )}

 {/* Process & Benefits */}
 <section className="py-24 border-t border-border bg-card/40">
 <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-20">
 <div>
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Méthode</p>
 <h2 className="text-3xl md:text-4xl font-bold mb-12">Notre approche</h2>
 <div className="space-y-8">
 {process.map((p) => (
 <div key={p.step} className="flex gap-6">
 <div className="font-display text-primary text-2xl font-bold w-12 shrink-0">{p.step}</div>
 <div>
 <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
 <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div>
 <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Bénéfices</p>
 <h2 className="text-3xl md:text-4xl font-bold mb-12">Ce que vous gagnez</h2>
 <ul className="space-y-4">
 {benefits.map((b) => (
 <li key={b} className="flex items-start gap-4 p-4 rounded-sm border border-border bg-background">
 <Check className="text-primary mt-0.5 shrink-0" size={20} />
 <span className="text-foreground/90">{b}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-24">
 <div className="mx-auto max-w-4xl px-6 text-center">
 <h2 className="text-4xl md:text-5xl font-bold">Prêt à passer à l'excellence ?</h2>
 <p className="mt-6 text-muted-foreground text-lg">Échangeons sur vos besoins, sans engagement.</p>
 <a href="https://share-eu1.hsforms.com/1lM_viBXtQkeoO0DMIqgv-w2fo2b4" target="_blank" rel="noopener noreferrer" ></a>
 </div>
 </section>
 </Layout>
 );
}