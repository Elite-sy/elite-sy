import type { Post } from "../types";
import hero from "@/assets/blog/degraissant.jpg";

export const post: Post = {
  slug: `degraissant-cuisine-professionnelle`,
  title: `Dégraissant pour cuisine professionnelle : guide d'achat`,
  description: `Hottes, sols, plans : sélectionner les bons dégraissants pour chaque zone d'une cuisine professionnelle.`,
  category: `Produits & techniques`,
  date: `2025-01-20`,
  readingTime: 7,
  hero,
  heroAlt: `Cuisine professionnelle inox parfaitement dégraissée`,
  intro: `Une cuisine professionnelle accumule rapidement des couches de graisse cuite, particulièrement sur les hottes, plans de cuisson et sols proches. Choisir le bon dégraissant par zone évite produit inadapté, perte de temps et surfaces abîmées.`,
  content: [
    { type: "h2", text: `Les types de graisse` },
    { type: "ul", items: [
      `Graisse fraîche (huile renversée) : tout produit alcalin fonctionne`,
      `Graisse cuite (plaque, fours) : dégraissant fort alcalin pH 13`,
      `Graisse polymérisée (hotte ancienne) : choc + mécanique`,
      `Graisse mixte avec sucre (pâtisserie) : produit spécifique`
    ] },
    { type: "h2", text: `Les familles de dégraissants` },
    { type: "ul", items: [
      `Alcalin doux pH 10-11 : entretien quotidien plans`,
      `Alcalin fort pH 12-13 : hottes, sols, hebdomadaire`,
      `Caustique pH 14 : décapage choc (manipulation EPI complet)`,
      `Solvant émulsionnant : graisses polymérisées résistantes`,
      `Enzymatique : graisses végétales, alimentaire moderne`
    ] },
    { type: "h2", text: `Le dégraissant pour hottes` },
    { type: "p", text: `Hotte : zone la plus chargée. Produit alcalin pH 12-13, pulvérisation, temps de contact 5-15 min, rinçage abondant. Filtres démontés et lavés au lave-vaisselle pro à 80 °C minimum. Hebdomadaire pour filtres, mensuel pour conduits.` },
    { type: "h2", text: `Le dégraissant pour plans de cuisson` },
    { type: "p", text: `Plan inox autour des feux : dégraissant alimentaire alcalin pH 11, pulvérisation, action 3 min, essuyage microfibre verte. Quotidien après chaque service. Hebdomadaire avec produit pH 12 pour graisses cuites résistantes.` },
    { type: "h2", text: `Le dégraissant pour sols cuisine` },
    { type: "p", text: `Sol carrelé adjacent : dégraissant alcalin pH 11-12 avec autolaveuse ou lavage manuel. Lavage en deux temps (savon puis rinçage) car résidu alcalin glissant. Anti-dérapant traité préservé avec choix produits compatibles.` },
    { type: "h2", text: `Le dégraissant pour fours` },
    { type: "p", text: `Fours pro : produit décapant spécifique à laisser agir 1-2h, brossage, rinçage. Souvent acheté en gel pour adhérence verticale. Fours auto-nettoyants : programme constructeur respecté, complément manuel mensuel.` },
    { type: "callout", text: `ELITESY intervient en sous-traitance cuisine pro à Paris (restaurants, traiteurs, cantines) : dégraissage hebdomadaire, hottes mensuelles, choc trimestriel. 06 09 16 50 99.` },
    { type: "h2", text: `La compatibilité alimentaire` },
    { type: "p", text: `Critique : produits utilisés en contact alimentaire doivent être homologués (rinçage obligatoire spécifié). FDS et fiches techniques accessibles. Code couleur vert exclusivement en cuisine alimentaire. Pas d'usage de produit non-alimentaire (mauvaise pratique HACCP).` },
    { type: "h2", text: `Les méthodes mécaniques` },
    { type: "p", text: `Brosse, éponge abrasive verte, monobrosse pour grandes surfaces. Pour graisses très cuites : raclette inox avant produit. Vapeur : très efficace sur graisses fraîches et émulsifiées, sans produit (zéro résidu).` },
    { type: "h2", text: `Les délais de traitement` },
    { type: "ul", items: [
      `Quotidien fin service : plans, sols, friteuses`,
      `Hebdomadaire : hottes, filtres, plinthes`,
      `Mensuel : conduits hotte, joints, ventilation`,
      `Trimestriel : décapage choc complet`,
      `Annuel : ramonage hotte par certifié (obligation assurance)`
    ] },
    { type: "h2", text: `La sécurité` },
    { type: "p", text: `Dégraissants pH 13+ : très alcalins, brûlures cutanées et oculaires. Gants nitrile épais, lunettes anti-éclaboussures, manches longues. Ventilation pendant usage. Rinçage immédiat en cas de contact peau.` },
    { type: "h2", text: `Les alternatives durables` },
    { type: "p", text: `Vapeur sèche : zéro produit, zéro COV. Cristaux de soude + acide citrique : combo dégraissant écolo. Enzymatique : doux mais nécessite temps. Bicarbonate + huile essentielle citron : entretien quotidien doux.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Le bon dégraissant dépend de la zone et de l'état d'encrassement. Alcalin pH 11-13 pour pro, vapeur pour démarche durable, choc occasionnel sur encrassement chronique. Toujours alimentaire et code couleur vert.` }
  ],
  status: "published",
};
