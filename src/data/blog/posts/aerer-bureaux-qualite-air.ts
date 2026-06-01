import type { Post } from "../types";
import hero from "@/assets/blog/aerer-bureaux.jpg";

export const post: Post = {
  slug: "aerer-bureaux-qualite-air",
  title: "Aérer ses bureaux pour améliorer la qualité de l'air",
  description:
    "Quand ouvrir, combien de temps et comment limiter CO2, COV et humidité dans un environnement de travail.",
  category: "Conseils d'entretien",
  date: "2026-02-05",
  readingTime: 8,
  hero,
  heroAlt: "Bureaux modernes ouverts avec lumière naturelle et plantes vertes",
  intro:
    "L'air intérieur d'un bureau est en moyenne 5 à 10 fois plus pollué que l'air extérieur. Pourtant, ouvrir une fenêtre 5 minutes suffit à diviser par deux la concentration en CO2. L'aération est l'action la plus simple, la moins coûteuse et la plus efficace pour la santé au travail. Voici le mode d'emploi.",
  content: [
    { type: "h2", text: "Ce que contient l'air d'un bureau fermé" },
    { type: "p", text: "CO2 issu de la respiration (un collaborateur produit 0,5 kg de CO2 par jour), COV émis par les meubles, peintures, imprimantes, produits de nettoyage, particules fines, humidité, allergènes de moquette. Au-dessus de 1 000 ppm de CO2, les fonctions cognitives baissent mesurablement. À 1 500 ppm, la fatigue devient sensible." },
    { type: "h2", text: "Les bons réflexes d'aération" },
    { type: "ul", items: [
      "Ouvrir en grand 5 à 10 minutes, deux fois par jour minimum (matin et après-midi)",
      "Privilégier l'aération transversale (deux fenêtres opposées) — 10 fois plus efficace",
      "Aérer aussi en hiver — la perte de chaleur est négligeable, le gain qualité d'air est majeur",
      "Aérer après chaque réunion fermée de plus de 30 minutes",
      "Aérer après le passage du prestataire de nettoyage — chasse les COV résiduels",
    ]},
    { type: "h2", text: "Le piège du chauffage continu" },
    { type: "p", text: "Garder les fenêtres closes pour ne pas perdre de chaleur est contre-productif : la baisse de fonctions cognitives induite coûte largement plus que les quelques centimes de chauffage économisés. Une aération courte mais énergique recharge l'air sans refroidir significativement la structure du bâtiment." },
    { type: "h2", text: "Mesurer la qualité d'air : capteurs CO2" },
    { type: "p", text: "Un capteur CO2 coûte 80 à 250 € HT. Placé en zone de travail, il affiche en temps réel la qualité d'air et alerte au-delà de 1 000 ppm. C'est l'outil le plus pédagogique pour faire évoluer les habitudes d'une équipe. Plusieurs ARS recommandent leur installation systématique en bureau partagé." },
    { type: "callout", text: "ELITESY intègre dans ses audits site une mesure CO2 et COV de référence, et conseille la fréquence d'aération optimale. 06 09 16 50 99." },
    { type: "h2", text: "Et la VMC ?" },
    { type: "p", text: "La VMC (Ventilation Mécanique Contrôlée) ne remplace pas l'aération naturelle dans un bureau ancien. Dans un bâtiment récent à VMC double flux, le renouvellement est suffisant si le système est bien entretenu (filtres changés tous les 6 mois). Mais 60 % des VMC professionnelles présentent des défauts à l'audit — vérifiez régulièrement." },
    { type: "h2", text: "Les sources de pollution à limiter" },
    { type: "ul", items: [
      "Imprimantes laser : émissions de COV et particules fines — placer hors zone de travail",
      "Produits ménagers : privilégier l'écolabel et la microfibre eau pure",
      "Mobilier neuf : forte émission de formaldéhyde pendant 3-6 mois, aération renforcée",
      "Désodorisants sprays : ajoutent des COV au lieu d'en retirer — à proscrire",
      "Plantes vertes : effet de filtration modéré mais réel, et bénéfice psychologique avéré",
    ]},
    { type: "h2", text: "Le froid n'est pas un argument" },
    { type: "p", text: "Une aération de 5 minutes en plein hiver fait baisser la température de surface des meubles de moins de 1 °C. La pièce retrouve sa température en moins de 15 minutes. La perte énergétique réelle est inférieure à 0,5 % de la facture annuelle." },
    { type: "h2", text: "Conclusion : l'air est un sujet de propreté" },
    { type: "p", text: "La qualité d'air est une dimension à part entière de la propreté d'un site. Sans elle, des sols impeccables et des vitres brillantes ne suffisent pas à créer un environnement vraiment sain. ELITESY accompagne ses clients sur le diagnostic, les bonnes pratiques et le choix matériel." },
  ],
  status: "published",
};