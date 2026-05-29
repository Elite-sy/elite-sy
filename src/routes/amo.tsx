import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/amo.jpg";

export const Route = createFileRoute("/amo")({
  head: () => ({
    meta: [
      { title: "Assistance à Maîtrise d'Ouvrage (AMO) — ELITESY" },
      { name: "description", content: "AMO pour projets immobiliers et tertiaires : programmation, pilotage, exploitation. Une garantie d'exécution." },
      { property: "og:title", content: "AMO — ELITESY" },
      { property: "og:description", content: "Sécurisez vos projets immobiliers avec une assistance indépendante et opérationnelle." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service · AMO"
      title="Vos projets immobiliers, sécurisés à chaque étape."
      description="Notre cellule AMO accompagne les maîtres d'ouvrage publics et privés depuis la phase de programmation jusqu'à la mise en exploitation. Indépendance, expertise opérationnelle et pilotage rigoureux : nous portons votre intérêt à chaque arbitrage."
      image={img}
      features={[
        { title: "Programmation & faisabilité", description: "Études d'opportunité, programmation fonctionnelle et technique, estimations budgétaires et planning directeur." },
        { title: "Pilotage opérationnel", description: "Consultation des maîtres d'œuvre, suivi de conception, OPC, pilotage financier et reporting au comité." },
        { title: "Réception & exploitation", description: "OPR, levée des réserves, GPA, mise en exploitation et accompagnement des équipes utilisateurs." },
      ]}
      process={[
        { step: "01", title: "Cadrage", description: "Compréhension de vos enjeux stratégiques, audit de l'existant et formalisation des objectifs du projet." },
        { step: "02", title: "Pilotage", description: "Coordination des intervenants, contrôle qualité, maîtrise des coûts et des délais à chaque jalon." },
        { step: "03", title: "Livraison", description: "Réception conforme, mise en service, transfert de compétences vers vos équipes d'exploitation." },
      ]}
      benefits={[
        "Indépendance totale vis-à-vis de la maîtrise d'œuvre et des entreprises",
        "Maîtrise des coûts, des délais et de la qualité à chaque jalon",
        "Reporting clair pour vos comités de direction et instances",
        "Anticipation des risques techniques, juridiques et financiers",
        "Continuité jusqu'à l'exploitation effective des ouvrages",
      ]}
    />
  ),
});