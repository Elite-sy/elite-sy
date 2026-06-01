import type { Post } from "../types";
import hero from "@/assets/blog/salle-sport.jpg";

export const post: Post = {
  slug: "nettoyage-salle-sport-entreprise",
  title: "Nettoyage d'une salle de sport d'entreprise : hygiène des vestiaires et matériel",
  description:
    "Hygiène des vestiaires, désinfection du matériel et qualité de l'air : la méthode ELITESY pour une salle de sport tertiaire impeccable.",
  category: "Guides Pratiques",
  date: "2025-10-20",
  readingTime: 9,
  hero,
  heroAlt: "Salle de sport d'entreprise en cours de nettoyage avec haltères et tapis",
  intro:
    "Une salle de sport d'entreprise est l'un des espaces les plus exposés au risque sanitaire d'un site tertiaire : transpiration, humidité, contacts répétés. C'est aussi l'un des plus valorisés par les collaborateurs. Le nettoyage y est donc un sujet à part entière. Voici notre protocole.",
  content: [
    { type: "h2", text: "Les enjeux sanitaires spécifiques" },
    { type: "p", text: "Transpiration sur appareils et tapis, mycoses dans les vestiaires humides, bactéries sur les poignées de poids et haltères, biofilm dans les douches. Plusieurs études (ANSES, FFEPGV) classent les salles de sport collectives parmi les espaces à plus forte concentration microbienne d'un bâtiment tertiaire." },
    { type: "h2", text: "Le protocole quotidien" },
    { type: "ul", items: [
      "Désinfection complète des appareils cardio (tapis, vélos, elliptiques) — poignées, écrans, sièges",
      "Désinfection des poids, haltères et barres",
      "Nettoyage des tapis de sol et tapis de yoga (vapeur sèche idéale)",
      "Bionettoyage complet des vestiaires et douches",
      "Désinfection des casiers (intérieur et extérieur)",
      "Vidage et désinfection des poubelles (souvent oubliées)",
      "Lavage des miroirs",
      "Aspiration et lavage des sols",
    ]},
    { type: "h2", text: "Les douches : la zone critique" },
    { type: "p", text: "Humidité permanente = développement de moisissures et biofilm dans les joints. Protocole quotidien : raclage de l'eau, désinfection des parois et du sol, nettoyage des bondes, vérification des siphons. Fréquence : chaque utilisation idéalement, minimum biquotidien." },
    { type: "p", text: "Une fois par mois : détartrage complet des robinetteries, désinfection profonde des grilles d'évacuation, vérification des joints (à refaire dès apparition de noir)." },
    { type: "h2", text: "Les tapis : éviter les mycoses" },
    { type: "p", text: "Les tapis de yoga, pilates et stretching sont les vecteurs principaux de mycoses plantaires en salle de sport. Solution : nettoyage à la vapeur sèche après chaque créneau, séchage complet avant rangement, désinfection alcoolisée hebdomadaire, remplacement annuel obligatoire." },
    { type: "callout", text: "ELITESY structure le protocole hygiène des salles de sport d'entreprise — audit gratuit sur site au 06 09 16 50 99." },
    { type: "h2", text: "La qualité de l'air" },
    { type: "p", text: "Une salle de sport doit être ventilée en permanence pendant l'usage et au moins 30 minutes après. CO2 et humidité explosent rapidement en groupe. Vérification mensuelle des grilles de soufflage et reprise, nettoyage trimestriel des bouches." },
    { type: "h2", text: "Mise à disposition de matériel sanitaire" },
    { type: "p", text: "Spray désinfectant + papier essuie-tout à disposition libre des utilisateurs avec consigne d'essuyage des appareils après usage. C'est le complément indispensable du nettoyage professionnel — il responsabilise les usagers et lisse la charge entre deux passages." },
    { type: "h2", text: "Les fréquences" },
    { type: "ul", items: [
      "Nettoyage quotidien complet (fin de journée)",
      "Intervention express à mi-journée si forte fréquentation",
      "Désinfection mensuelle approfondie (vapeur, joints, casiers)",
      "Rénovation périodique des sols (PVC ou caoutchouc)",
    ]},
    { type: "h2", text: "Le coût" },
    { type: "p", text: "Salle de 100-200 m² : 600 à 1 200 € HT/mois pour le nettoyage quotidien. Le coût est plus élevé qu'un tertiaire classique (densité d'interventions et fournitures sanitaires plus importantes), mais l'enjeu sanitaire et la perception collaborateurs le justifient pleinement." },
    { type: "h2", text: "Conclusion : un espace haut risque à traiter sérieusement" },
    { type: "p", text: "La salle de sport ne tolère pas l'à-peu-près. ELITESY applique un protocole renforcé inspiré du milieu hospitalier sur les salles de sport d'entreprise de ses clients." },
  ],
  status: "published",
};