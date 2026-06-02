import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ELITESY" },
      { name: "description", content: "Contactez ELITESY pour un devis personnalisé : propreté, soft facility (FM), AMO." },
      { property: "og:title", content: "Contact — ELITESY" },
      { property: "og:description", content: "Échangeons sur vos besoins en propreté, soft facility et AMO." },
      { property: "og:url", content: "https://elite-sy.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://elite-sy.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ELITESY",
          email: "contact@elitesy.fr",
          telephone: "+33-6-09-16-50-99",
          url: "https://elite-sy.lovable.app/contact",
          address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
          areaServed: "FR",
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-semibold uppercase tracking-[0.3em] text-primary mb-6 text-lg">Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">Parlons de votre projet.</h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Un échange de quinze minutes suffit pour comprendre vos enjeux.
              Nous revenons vers vous sous 24 heures ouvrées avec une proposition adaptée.
            </p>
            <div className="mt-12 space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contact@elitesy.fr" },
                { icon: Phone, label: "Téléphone", value: "+33 6 09 16 50 99" },
                { icon: MapPin, label: "Adresse", value: "Paris, France" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-5 rounded-sm border border-border bg-card">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="text-foreground font-medium mt-1">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="p-8 md:p-10 rounded-sm border border-border bg-card space-y-5"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 flex items-center justify-center text-primary mb-6">
                  <Check size={26} />
                </div>
                <h3 className="text-2xl font-bold">Message envoyé</h3>
                <p className="mt-3 text-muted-foreground">Notre équipe vous recontacte sous 24 heures ouvrées.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2">Demande de devis</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nom" name="nom" required />
                  <Field label="Entreprise" name="entreprise" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Téléphone" name="tel" type="tel" />
                </div>
                <div>
                  <label htmlFor="contact-service" className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Service</label>
                  <select id="contact-service" name="service" className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none">
                    <option>Propreté</option>
                    <option>Soft Facility (FM)</option>
                    <option>Assistance à Maîtrise d'Ouvrage</option>
                    <option>Autre / multi-services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Message</label>
                  <textarea id="contact-message" name="message" rows={5} required className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none resize-none" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
                  Envoyer la demande <Send size={16} />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground focus:border-primary focus:outline-none"
      />
    </div>
  );
}