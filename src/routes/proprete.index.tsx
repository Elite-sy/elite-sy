import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/proprete.jpg";

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
    />
  ),
});