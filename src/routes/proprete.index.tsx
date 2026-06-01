import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/proprete.jpg";
import {
  Briefcase,
  Home,
  FlaskConical,
  Store,
  HeartPulse,
  HardHat,
  Factory,
  School,
  Hotel,
} from "lucide-react";
import tertiaire from "@/assets/sec-tertiaire.jpg";
import syndics from "@/assets/sec-syndics.jpg";
import pharma from "@/assets/sec-pharma.jpg";
import retail from "@/assets/sec-retail.jpg";
import sante from "@/assets/sec-sante.jpg";
import construction from "@/assets/sec-construction.jpg";
import industrie from "@/assets/sec-industrie.jpg";
import education from "@/assets/sec-education.jpg";
import hotellerie from "@/assets/sec-hotellerie.jpg";

const sectors = [
  { slug: "tertiaire", label: "Tertiaire", icon: Briefcase, img: tertiaire, tagline: "Confort des occupants, expérience employé et image de marque." },
  { slug: "syndics-gestionnaires", label: "Syndics & Gestionnaires", icon: Home, img: syndics, tagline: "Gestion technique et entretien des parties communes en copropriété." },
  { slug: "pharmaceutique", label: "Pharmaceutique", icon: FlaskConical, img: pharma, tagline: "Salles blanches, bioproduction et environnements ultra-contrôlés." },
  { slug: "surfaces-de-vente", label: "Surfaces de vente", icon: Store, img: retail, tagline: "Mise en valeur de vos points de vente, prestations en flux tendu." },
  { slug: "sante-et-soins", label: "Santé & Soins", icon: HeartPulse, img: sante, tagline: "Bionettoyage hospitalier et accompagnement des établissements de santé." },
  { slug: "construction", label: "Construction", icon: HardHat, img: construction, tagline: "Services support sur chantiers et sites de rénovation." },
  { slug: "industrie", label: "Industrie", icon: Factory, img: industrie, tagline: "Propreté technique et services support aux sites de production." },
  { slug: "education-collectivites", label: "Education & Collectivités", icon: School, img: education, tagline: "Entretien et maintenance des établissements publics et scolaires." },
  { slug: "hotellerie", label: "Hôtellerie", icon: Hotel, img: hotellerie, tagline: "Services support aux hôtels et résidences pour un accueil parfait." },
];

export const Route = createFileRoute("/proprete/")({
  head: () => ({
    meta: [
      { title: "Propreté premium pour entreprises — ELITESY" },
      { name: "description", content: "Prestations de propreté haut de gamme pour bureaux, sièges sociaux, hôtellerie et environnements exigeants." },
      { property: "og:title", content: "Propreté premium — ELITESY" },
      { property: "og:description", content: "Prestations sur-mesure, équipes qualifiées, exigence du détail." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service · Propreté"
      title="Une propreté digne de votre image de marque."
      description="Bureaux, sièges sociaux, hôtels haut de gamme, espaces premium : nous concevons des prestations de propreté sur-mesure, exécutées avec rigueur et discrétion. Nos équipes formées et nos protocoles certifiés garantissent un résultat irréprochable, jour après jour."
      image={img}
      features={[
        { slug: "bureaux-tertiaire", title: "Bureaux / tertiaire", description: "Entretien quotidien et hebdomadaire des bureaux, espaces communs, sanitaires et salles de réunion selon vos protocoles." },
        { slug: "syndics-copropriete", title: "Syndics de copropriétés", description: "Entretien des parties communes, gestion des bacs roulants et interventions spécifiques pour les résidences." },
        { slug: "professionnels-sante", title: "Professionnels de santé", description: "Protocoles de bionettoyage rigoureux pour cabinets médicaux, centres de soins et environnements exigeants." },
        { slug: "professionnels-batiment", title: "Professionnels du bâtiment", description: "​Nettoyage de chantier et entretien de base vie :\nremise en état pour réception et entretien régulier des espaces de vie (sanitaires, vestiaires, bureaux) garantissant propreté, hygiène et confort des équipes." },
        { slug: "surface-vente-erp", title: "Surface de vente / ERP", description: "​Entretien régulier des surfaces de vente et ERP :\ngarantie d’un environnement propre, sain et attractif, conforme aux exigences d’hygiène et à l’image de votre établissement." },
        { slug: "industrie", title: "​Industrie", description: "​Entretien régulier des surfaces industrielles, entrepôts et plateformes logistiques :\ngarantie d’un environnement propre, sécurisé et conforme aux exigences d’hygiène, contribuant à la performance et à l’image de votre activité." },
      ]}
      process={[
        { step: "01", title: "Audit sur site", description: "Diagnostic complet de vos locaux, identification des points sensibles et co-construction du cahier des charges." },
        { step: "02", title: "Plan de prestation", description: "Définition des fréquences, équipes dédiées, produits et matériels, indicateurs de qualité mesurables." },
        { step: "03", title: "Pilotage continu", description: "Référent unique, contrôles qualité hebdomadaires, reporting mensuel et ajustements en temps réel." },
      ]}
      benefits={[
        "Équipes formées, encadrées et fidélisées sur votre site",
        "Produits éco-certifiés et matériels professionnels haut de gamme",
        "Référent dédié joignable 7j/7 pour toute demande",
        "Reporting qualité mensuel avec photos et indicateurs",
        "Engagement contractuel sur la qualité et la réactivité",
      ]}
      sectors={sectors}
    />
  ),
});
