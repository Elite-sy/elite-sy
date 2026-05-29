import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/soft-facility.jpg";

export const Route = createFileRoute("/soft-facility")({
  head: () => ({
    meta: [
      { title: "Soft Facility Management — ELITESY" },
      { name: "description", content: "Pilotage des services aux occupants : accueil, courrier, conciergerie, espaces verts, multi-technique léger." },
      { property: "og:title", content: "Soft Facility Management — ELITESY" },
      { property: "og:description", content: "Une expérience occupant fluide, un pilotage centralisé, des indicateurs clairs." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service · Soft Facility"
      title="Le confort de vos occupants, pris en charge de A à Z."
      description="Nous pilotons l'ensemble des services qui font la qualité de vie sur vos sites : accueil, courrier, conciergerie, espaces verts, salles de réunion, restauration légère. Une gouvernance unique, des équipes intégrées, une expérience occupant sans couture."
      image={img}
      features={[
        { title: "Accueil & services généraux", description: "Hôtes et hôtesses formés à votre image, gestion du courrier, badges, salles de réunion et événements internes." },
        { title: "Conciergerie & confort", description: "Conciergerie d'entreprise, pressing, livraisons, espaces verts, plantes intérieures et qualité d'air." },
        { title: "Pilotage multi-services", description: "Un référent unique, un reporting consolidé, des SLA mesurables sur l'ensemble des prestations." },
      ]}
      process={[
        { step: "01", title: "Cartographie", description: "Inventaire des prestations existantes, points de friction occupant, opportunités d'optimisation et de mutualisation." },
        { step: "02", title: "Schéma directeur", description: "Conception de l'offre de services cible, organisation des équipes, outils de pilotage et indicateurs." },
        { step: "03", title: "Exploitation & amélioration", description: "Déploiement progressif, comités de pilotage trimestriels et démarche d'amélioration continue." },
      ]}
      benefits={[
        "Interlocuteur unique pour l'ensemble des services aux occupants",
        "Expérience employé valorisée, satisfaction mesurée en continu",
        "Économies par la mutualisation et la rationalisation des contrats",
        "Tableaux de bord en temps réel et engagements contractuels SLA",
        "Flexibilité d'évolution selon vos cycles d'activité",
      ]}
    />
  ),
});