import type { Post } from "../types";
import hero from "@/assets/blog/moquette-bureau.jpg";

export const post: Post = {
  slug: `aspirateur-professionnel-criteres`,
  title: `Choisir un aspirateur professionnel : les vrais critères`,
  description: `Filtration HEPA, niveau sonore, dépression et débit d'air : les critères pour choisir un aspirateur professionnel.`,
  category: `Produits & techniques`,
  date: `2025-03-03`,
  readingTime: 7,
  hero,
  heroAlt: `Aspirateur professionnel en intervention dans des bureaux`,
  intro: `Les aspirateurs professionnels n'ont rien à voir avec les modèles domestiques. Performance, durée de vie, niveau sonore, ergonomie : autant de critères à connaître pour faire le bon choix. Voici un guide d'achat objectif.`,
  content: [
    { type: "h2", text: `Les trois familles` },
    { type: "ul", items: [
      `Aspirateur dorsal : ergonomie et mobilité (escaliers, bureaux denses)`,
      `Aspirateur traîneau : polyvalence classique`,
      `Aspirateur autoporté : très grandes surfaces (supermarchés)`,
      `Aspirateur autonome (robot) : usage entretien continu`
    ] },
    { type: "h2", text: `La filtration : critère santé n°1` },
    { type: "p", text: `Filtration HEPA H13 ou H14 obligatoire en environnement sensible (médical, allergies, salles blanches). Standard H13 retient 99,95% des particules > 0,3 µm. H14 retient 99,995%. Un aspirateur sans filtration HEPA redisperse les fines particules.` },
    { type: "h2", text: `La dépression et le débit d'air` },
    { type: "p", text: `Dépression (en mmCE) : capacité d'aspiration ponctuelle. Débit d'air (m³/h) : volume traité. Compromis nécessaire : haute dépression sans débit = aspirateur qui colle au sol et n'aspire pas en pratique. Bon ratio : 200 mbar / 60 L/s minimum.` },
    { type: "h2", text: `La puissance utile` },
    { type: "p", text: `Critère trompeur : la 'puissance moteur' annoncée (1000, 1500, 2000 W) n'a rien à voir avec la performance d'aspiration. C'est l'AirWatt (AW) qui compte : 250 AW minimum pour usage pro. Les fabricants honnêtes le précisent.` },
    { type: "h2", text: `Le niveau sonore` },
    { type: "p", text: `Bureau de jour : 65 dB max recommandé (sinon gênant). Modèles silencieux : 55-58 dB. Modèles standard : 65-72 dB. Modèles bruyants : 80 dB (inutilisables en journée). Si nettoyage de jour pratiqué, c'est un critère prioritaire.` },
    { type: "h2", text: `La capacité` },
    { type: "ul", items: [
      `Sac/cuve 6 L : usage léger 200 m²`,
      `Sac/cuve 12 L : usage standard 500 m²`,
      `Sac/cuve 20 L : grandes surfaces`,
      `Sac/cuve 40-70 L : industriel`
    ] },
    { type: "callout", text: `ELITESY équipe ses équipes en aspirateurs Numatic NV/NVM et Karcher T 7/1 selon usage. Tous filtration HEPA, niveau sonore inférieur à 65 dB. 06 09 16 50 99.` },
    { type: "h2", text: `L'ergonomie` },
    { type: "p", text: `Poids : moins de 7 kg pour usage prolongé. Roues caoutchouc anti-rayures (sols nobles). Câble 10-15 m (limite changements de prise). Suceurs interchangeables pour parquets, moquettes, recoins. Brosse motorisée optionnelle pour moquettes profondes.` },
    { type: "h2", text: `Sac jetable vs cuve` },
    { type: "p", text: `Sac jetable : hygiénique (changement sans contact poussière), légèrement plus cher en usage. Cuve : économique mais vidage exposant à la poussière. Pour environnements sensibles, sac obligatoire. Sacs HEPA = filtration complémentaire.` },
    { type: "h2", text: `La durée de vie` },
    { type: "p", text: `Pro de qualité : 8 à 12 ans en usage 30h/semaine. Charbons moteur changeables (50 € + main d'œuvre). Filtres HEPA à changer tous les 12-18 mois. Investissement initial 200 à 800 € amorti sur la durée.` },
    { type: "h2", text: `Les marques pro` },
    { type: "p", text: `Numatic (Henry, NV) : robustesse légendaire, anglais, 500-800 €. Karcher T-series : standard allemand, 400-700 €. Nilfisk : industriel, 600-1500 €. Sebo : haut de gamme moquettes, 700-1200 €. Tennant : grandes surfaces, 1500-5000 €.` },
    { type: "h2", text: `Le robot aspirateur` },
    { type: "p", text: `Maturité atteinte pour bureaux et halls. Nettoyage de nuit autonome, retour à la base, surveillance via app. Investissement 1500-5000 €. ROI 2-3 ans en remplacement d'heures humaines. Complément, pas remplacement total.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Le bon aspirateur dépend de l'usage : filtration, sonore, ergonomie, puissance utile. Ne pas se fier aux chiffres marketing mais aux spécifications techniques. Un investissement bien fait dure 10 ans.` }
  ],
  status: "published",
};
