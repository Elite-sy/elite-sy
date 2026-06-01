import type { Post } from "../types";
import hero from "@/assets/blog/cage-escalier.jpg";

export const post: Post = {
  slug: "entretien-parties-communes-copropriete",
  title: "Entretien des parties communes en copropriété : cahier des charges type",
  description:
    "Cahier des charges, points de vigilance et rôle du syndic pour piloter efficacement le contrat de propreté.",
  category: "Guides Pratiques",
  date: "2025-11-10",
  readingTime: 9,
  hero,
  heroAlt: "Hall d'immeuble en copropriété parfaitement tenu et nettoyé",
  intro:
    "Le contrat de propreté est la première charge récurrente d'une copropriété et la première source de réclamations en assemblée générale. Un cahier des charges bien rédigé règle 80 % des litiges avant qu'ils n'apparaissent. Voici la trame ELITESY, éprouvée sur des centaines d'immeubles d'Île-de-France.",
  content: [
    { type: "h2", text: "Les zones à couvrir explicitement" },
    { type: "ul", items: [
      "Hall d'entrée (sol, vitres intérieures, miroirs, mobilier, boîtes aux lettres)",
      "Cages d'escalier (marches, paliers, mains courantes, fenêtres)",
      "Ascenseur (cabine, palier, miroir, boutons)",
      "Couloirs de caves et locaux communs",
      "Local vélos et poussettes",
      "Local poubelles et abords (sortie/rentrée des bacs si demandé)",
      "Espaces extérieurs immédiats (perron, sas)",
    ]},
    { type: "h2", text: "Les fréquences par zone" },
    { type: "p", text: "Un cahier des charges sérieux fixe une fréquence par zone, pas une fréquence globale. Hall : quotidien à 5x/semaine. Cages d'escalier : 2 à 5x/semaine selon trafic. Ascenseur : quotidien. Caves : hebdomadaire. Local poubelles : 2x/semaine + désinfection mensuelle." },
    { type: "h2", text: "Les prestations périodiques à intégrer" },
    { type: "ul", items: [
      "Vitrerie hall et halls intermédiaires : trimestrielle",
      "Vitrerie cages d'escalier : semestrielle",
      "Décapage et remise en émulsion sols durs : annuelle",
      "Shampouinage moquettes : annuelle (si moquette)",
      "Désinfection local poubelles : mensuelle",
      "Nettoyage murs lessivables hall : annuel",
    ]},
    { type: "h2", text: "Les engagements à exiger" },
    { type: "p", text: "Délai de remplacement en cas d'absence (4 à 24 h ouvrées maximum), procédure de remontée des réclamations, présence ponctuelle du chef d'équipe (1 visite/mois minimum), reporting trimestriel au syndic, audit qualité annuel contradictoire, fournitures sanitaires sur sites équipés (à inscrire explicitement)." },
    { type: "callout", text: "ELITESY propose aux syndics un modèle de cahier des charges gratuit, adaptable à chaque copropriété. Demandez-le au 06 09 16 50 99." },
    { type: "h2", text: "Le rôle du conseil syndical" },
    { type: "p", text: "Le conseil syndical est l'interlocuteur naturel du prestataire entre deux AG. Une réunion trimestrielle de 30 minutes avec le chef d'équipe règle l'essentiel des remontées. Sans ce dialogue, les sujets s'accumulent et explosent en AG." },
    { type: "h2", text: "Les pièges classiques du contrat" },
    { type: "ul", items: [
      "Forfait global sans détail des zones et fréquences : impossible à contrôler",
      "Reconduction tacite sans clause de révision : prestataire enfermé dans son tarif",
      "Absence de clause sur le matériel utilisé : ouverture à la sous-traitance dégradée",
      "Pas de mention du SMIC propreté : tarif sous le coût réel = travail au noir caché",
      "Pas d'engagement de continuité de service : risque de site sans prestataire",
    ]},
    { type: "h2", text: "La révision tarifaire annuelle" },
    { type: "p", text: "Le contrat doit prévoir une révision annuelle indexée sur la convention collective de la propreté (revalorisation du SMIC professionnel). Refuser cette clause expose à l'abandon de site ou à la dégradation discrète. L'indice ICHTrev-TS est la référence usuelle." },
    { type: "h2", text: "Procédure en cas de litige" },
    { type: "p", text: "Trois étapes : remontée écrite au prestataire avec photos et délai de réponse de 8 jours ; réunion contradictoire si non-résolution ; mise en demeure formelle avec délai d'exécution. La résiliation ne devient possible qu'après respect de cette procédure — sauf clause spécifique." },
    { type: "h2", text: "Conclusion : un contrat clair, des relations apaisées" },
    { type: "p", text: "La meilleure copropriété entretenue, c'est celle où le contrat ne fait pas débat. Cahier des charges précis, fréquences claires, engagements écrits — c'est la base de la sérénité. ELITESY accompagne les syndics dans cette structuration depuis 2014." },
  ],
  status: "published",
};