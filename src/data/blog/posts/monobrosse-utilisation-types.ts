import type { Post } from "../types";
import hero from "@/assets/blog/monobrosse.jpg";

export const post: Post = {
  slug: `monobrosse-utilisation-types`,
  title: `Monobrosse : usages, types et bons réflexes`,
  description: `Basse, haute ou ultra-haute vitesse : choisir et utiliser correctement une monobrosse professionnelle.`,
  category: `Produits & techniques`,
  date: `2025-03-10`,
  readingTime: 7,
  hero,
  heroAlt: `Agent utilisant une monobrosse sur sol marbre`,
  intro: `La monobrosse est l'outil polyvalent du professionnel du nettoyage : décapage, shampouinage, lustrage, cristallisation. Plusieurs vitesses, plusieurs disques : la connaissance des combinaisons fait la différence entre un sol abîmé et un sol sublimé.`,
  content: [
    { type: "h2", text: `Le principe` },
    { type: "p", text: `Machine à un disque rotatif horizontal, entraîné par moteur électrique. Vitesse mesurée en tours/minute (tr/min). Diamètre standard 43 cm (17 pouces) en France. Poids 40 à 60 kg : équilibre nécessaire pour bonne pression au sol.` },
    { type: "h2", text: `Les trois familles de vitesses` },
    { type: "ul", items: [
      `Basse vitesse (130-200 tr/min) : décapage et shampouinage`,
      `Haute vitesse (300-1000 tr/min) : lustrage et émulsion`,
      `Ultra-haute vitesse (1500-2500 tr/min) : cristallisation et brillance miroir`
    ] },
    { type: "h2", text: `Le décapage` },
    { type: "p", text: `Monobrosse basse vitesse + disque noir/marron + produit décapant alcalin. Objectif : enlever l'ancienne émulsion saturée. Suivi obligatoire d'un rinçage abondant et d'une remise en cire (émulsion). Opération trimestrielle ou annuelle selon trafic.` },
    { type: "h2", text: `Le shampouinage moquette` },
    { type: "p", text: `Monobrosse basse vitesse + brosse douce + shampoing moussant. La mousse encapsule la souillure puis se sèche, l'aspirateur ramasse les résidus. Plus économique que l'injection-extraction mais moins profond. Adapté à entretien régulier.` },
    { type: "h2", text: `Le lustrage` },
    { type: "p", text: `Monobrosse haute vitesse + disque blanc/beige + sol propre. Fait briller l'émulsion sans la déposer à nouveau. Opération hebdomadaire dans halls et accueils. Effet visuel immédiat, valorise l'établissement.` },
    { type: "h2", text: `La cristallisation` },
    { type: "p", text: `Monobrosse ultra-haute vitesse + disque acier ou laine d'acier + produit cristallisant. Réaction chimique sur marbres et pierres calcaires : effet miroir durable. Opération technique réservée à professionnels formés. Magnifie les sols nobles.` },
    { type: "callout", text: `ELITESY propose un service spécialisé sol dur : décapage, mise en cire, cristallisation marbre. Devis sur audit visuel. 06 09 16 50 99.` },
    { type: "h2", text: `Le choix du disque` },
    { type: "ul", items: [
      `Noir : décapage agressif`,
      `Marron : décapage standard`,
      `Vert : récurage moyen`,
      `Bleu : lavage humide`,
      `Rouge : lustrage léger`,
      `Blanc/beige : lustrage et émulsion`,
      `Acier/laine acier : cristallisation`
    ] },
    { type: "h2", text: `Les règles de sécurité` },
    { type: "p", text: `EPI : chaussures antidérapantes, gants, lunettes en cas de décapage agressif. Périmètre balisé. Sol non glissant pour l'opérateur (chiffon devant lui). Câble électrique géré (jamais sous la machine). Formation initiale obligatoire (port et démarrage tirent la machine).` },
    { type: "h2", text: `L'entretien de la machine` },
    { type: "p", text: `Nettoyage du disque après chaque usage. Vérification câble électrique régulière. Carter et roues nettoyés. Vidange du réservoir d'eau (si présent). Révision annuelle par fournisseur (moteur, charbons).` },
    { type: "h2", text: `Les erreurs classiques` },
    { type: "ul", items: [
      `Disque inadapté à la vitesse (risque rupture)`,
      `Pression insuffisante (résultat médiocre)`,
      `Vitesse trop élevée sur sol thermoplastique (fonte)`,
      `Décapage sans rinçage (résidus alcalins)`,
      `Cristallisation sur granit (effet nul à neutre)`
    ] },
    { type: "h2", text: `L'investissement` },
    { type: "p", text: `Monobrosse basse vitesse pro : 800 à 1500 €. Haute vitesse : 1200 à 2000 €. Ultra-haute vitesse : 1800 à 3500 €. Disques 5 à 15 € l'unité, consommables réguliers. Amortissement rapide pour entreprise multi-sites.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `La monobrosse est un outil noble qui exige formation et bons disques. Bien maîtrisée, elle valorise les sols et économise les remplacements. Mal utilisée, elle abîme rapidement les revêtements coûteux.` }
  ],
  status: "published",
};
