import type { Post } from "../types";
import hero from "@/assets/blog/parking.jpg";

export const post: Post = {
  slug: "nettoyage-parking-souterrain",
  title: "Nettoyage d'un parking souterrain : balayage mécanisé et hydrocarbures",
  description:
    "Balayage mécanisé, gestion des hydrocarbures et désodorisation : la méthode pour un parking propre et conforme.",
  category: "Guides Pratiques",
  date: "2025-11-03",
  readingTime: 9,
  hero,
  heroAlt: "Balayeuse mécanisée en intervention dans un parking souterrain éclairé",
  intro:
    "Un parking souterrain mal entretenu, c'est plus qu'une question d'image : c'est un risque de glissade, un risque incendie (hydrocarbures), une pollution mesurable de l'air intérieur du bâtiment au-dessus. Le nettoyage de parking est une spécialité à part entière. Voici la méthode ELITESY.",
  content: [
    { type: "h2", text: "Les enjeux spécifiques d'un parking" },
    { type: "p", text: "Trois enjeux cumulés : hygiène (urines, déchets, poussières), sécurité (huiles, traces d'hydrocarbures glissantes), réglementaire (rejets eaux pluviales, débourbeurs-déshuileurs). Chaque enjeu impose des techniques précises." },
    { type: "h2", text: "Le balayage mécanisé : la base du quotidien" },
    { type: "p", text: "Une balayeuse autoportée ou autoaspirante traite 2 000 à 5 000 m²/h. Elle ramasse poussières, gravillons, papiers, feuilles. Fréquence recommandée : hebdomadaire sur parking d'immeuble, biquotidienne sur parking commercial à fort trafic." },
    { type: "p", text: "Sans balayage régulier, les poussières migrent vers l'extérieur (vêtements, voitures) et vers l'air ambiant (particules fines). Un parking 'visiblement propre' baisse aussi le sentiment d'insécurité des usagers." },
    { type: "h2", text: "Le lavage haute pression périodique" },
    { type: "p", text: "Tous les 3 à 6 mois selon usage, lavage complet à la haute pression avec dégraissant alcalin. Élimine les dépôts gras, les traces noires, ravive l'aspect du sol. Intervention de nuit ou en zone fermée car bruyante et humide." },
    { type: "h2", text: "Le traitement des taches d'hydrocarbures" },
    { type: "ol", items: [
      "Identifier la tache (huile moteur, gasoil, essence, antigel)",
      "Couvrir immédiatement de produit absorbant minéral (vermiculite, sépiolite)",
      "Laisser agir 30 minutes minimum",
      "Balayer et collecter l'absorbant saturé dans un bidon DASRI ou contenant hydrocarbures",
      "Appliquer un dégraissant biodégradable, brosser, rincer",
      "Évacuer les déchets en filière agréée avec bordereau",
    ]},
    { type: "callout", text: "ELITESY intervient en parking souterrain avec balayeuses, monobrosses et filière de déchets agréée. 06 09 16 50 99." },
    { type: "h2", text: "Les déchets et leur filière" },
    { type: "p", text: "Les déchets d'un parking ne sont pas des ordures ménagères : hydrocarbures, batteries abandonnées, déchets verts (feuilles), piles, mégots concentrés. Filière spécifique pour chaque catégorie, bordereau de suivi obligatoire pour les dangereux. Ce point doit figurer au contrat." },
    { type: "h2", text: "La gestion des odeurs" },
    { type: "p", text: "Les odeurs d'urine et d'humidité sont les plus fréquentes. Traitement : nettoyage mécanique répété, application de bactéries dégradantes (enzymatiques) dans les angles, ventilation forcée temporaire, désinfection trimestrielle des grilles d'évacuation. Pas de désodorisant — il masque sans traiter." },
    { type: "h2", text: "Le marquage au sol et la signalétique" },
    { type: "p", text: "Un parking propre est aussi un parking lisible. Rafraîchissement annuel des marquages au sol (places, sens de circulation, accessibilité PMR), vérification des panneaux et numéros de place, nettoyage des extincteurs et BAES. Ces éléments font partie d'une prestation d'entretien sérieuse." },
    { type: "h2", text: "Le coût" },
    { type: "p", text: "Balayage mécanisé hebdomadaire : 0,15 à 0,30 €/m²/passage. Lavage haute pression complet : 0,80 à 1,50 €/m². Traitement ponctuel hydrocarbure : 50 à 150 € HT par intervention. Budget annuel typique pour un parking de 1 500 m² : 4 500 à 8 000 € HT." },
    { type: "h2", text: "Sécurité de l'intervention" },
    { type: "p", text: "EPI complets (chaussures antidérapantes, gilet haute visibilité, gants chimiques pour les hydrocarbures), balisage des zones traitées, fermeture éventuelle de niveau pendant le lavage, communication aux usagers. Le parking est un environnement avec circulation de véhicules — vigilance permanente." },
    { type: "h2", text: "Conclusion : un actif technique à part entière" },
    { type: "p", text: "Le parking souterrain est trop souvent traité en dernière priorité. Pourtant, son entretien conditionne la sécurité, l'image et la conformité du bâtiment. ELITESY traite plusieurs dizaines de parkings résidentiels et tertiaires en Île-de-France." },
  ],
  status: "published",
};