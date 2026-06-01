import type { Post } from "../types";
import hero from "@/assets/blog/moquette-bureau.jpg";

export const post: Post = {
  slug: "taches-cafe-moquette-traiter",
  title: "Taches de café sur moquette : solutions rapides et durables",
  description:
    "Les bons gestes à appliquer vite, sans abîmer les fibres, et quand appeler un professionnel.",
  category: "Conseils d'entretien",
  date: "2026-02-20",
  readingTime: 7,
  hero,
  heroAlt: "Moquette de bureau avec tache à traiter, intervention de nettoyage",
  intro:
    "C'est l'incident le plus fréquent en open-space : la tasse renversée sur la moquette. Bien traitée dans les cinq minutes, la tache disparaît à 95 %. Mal traitée, elle devient permanente. Voici le protocole qui marche à tous les coups.",
  content: [
    { type: "h2", text: "La règle absolue : agir dans les 5 minutes" },
    { type: "p", text: "Une tache de café traitée dans les 5 minutes est presque toujours réversible. Au-delà de 24 h, elle est à 50 % définitive. Au-delà d'une semaine, elle est ancrée. La vitesse d'intervention compte plus que la qualité du produit utilisé." },
    { type: "h2", text: "Le protocole en 5 étapes" },
    { type: "ol", items: [
      "Tamponner immédiatement avec un papier absorbant blanc — ne jamais frotter",
      "Continuer à tamponner du bord vers le centre pour ne pas étendre",
      "Asperger d'eau froide en pulvérisation fine, jamais en flot",
      "Tamponner à nouveau jusqu'à transfert minimal sur le papier",
      "Si trace résiduelle, appliquer une goutte de produit moquette neutre puis re-tamponner",
    ]},
    { type: "h2", text: "Pourquoi ne jamais frotter" },
    { type: "p", text: "Frotter en rond enfonce la salissure au cœur de la fibre et endommage la trame. La tache devient mécaniquement irréversible — même un professionnel ne pourra plus la retirer. Le tamponnage capillaire, lent mais efficace, extrait la salissure sans l'incruster." },
    { type: "h2", text: "Eau chaude ou eau froide ?" },
    { type: "p", text: "Toujours froide. L'eau chaude cuit les protéines du café (et du lait s'il y en a) dans la fibre, fixant définitivement la tache. C'est l'erreur la plus courante." },
    { type: "h2", text: "Les produits maison qui marchent (et ceux à éviter)" },
    { type: "ul", items: [
      "Eau gazeuse : excellente pour les taches fraîches — le gaz aide l'extraction",
      "Vinaigre blanc dilué à 50 % : efficace, mais à rincer ensuite",
      "Liquide vaisselle neutre dilué : pour les taches grasses (café au lait, expresso crème)",
      "Eau de Javel : à proscrire — décolore les fibres synthétiques",
      "Détachant solvant : à proscrire sur moquette polypropylène — dissolution des fibres",
      "Sel : mythe — n'absorbe rien en quantité significative, peut décolorer",
    ]},
    { type: "callout", text: "Affichez le protocole en cuisine et dans les open-spaces — kit de premiers secours moquette fourni gratuitement à nos clients ELITESY. 06 09 16 50 99." },
    { type: "h2", text: "Quand appeler un professionnel" },
    { type: "p", text: "Si après le protocole maison une trace persiste, ou si la tache date de plus de 24 h, faire intervenir un professionnel dans la semaine. Une injection-extraction localisée coûte 80 à 150 € HT et sauve souvent la zone. Au-delà d'un mois, l'efficacité chute fortement." },
    { type: "h2", text: "Le kit de premiers secours moquette" },
    { type: "p", text: "À tenir disponible en cuisine de bureau : rouleau de papier absorbant blanc, pulvérisateur d'eau froide, flacon de détachant moquette neutre certifié pour fibres synthétiques, micro-brosse souple. Coût total inférieur à 30 €." },
    { type: "h2", text: "Conclusion : un protocole simple, un résultat radical" },
    { type: "p", text: "Avec une formation de 3 minutes des collaborateurs et un kit en libre accès, vous traitez 90 % des taches à la source. C'est la différence entre une moquette qui vieillit dignement et une moquette à remplacer au bout de 3 ans." },
  ],
  status: "published",
};