import type { Post } from "../types";
import hero from "@/assets/blog/musee.jpg";

export const post: Post = {
  slug: `nettoyage-musee-galerie`,
  title: `Nettoyage d'un musée ou d'une galerie d'art : préserver les œuvres`,
  description: `Méthode adaptée aux musées et galeries : entretien des vitrines, encadrement des agents et préservation des œuvres.`,
  category: `Guides Pratiques`,
  date: `2025-08-04`,
  readingTime: 9,
  hero,
  heroAlt: `Salle d'exposition d'un musée d'art moderne propre et vide`,
  intro: `Un musée ou une galerie d'art impose un nettoyage d'une discrétion absolue, sans risque pour les œuvres, sans produits parfumés ni vibrations. L'agent doit être formé spécifiquement et travailler en dehors des heures d'ouverture ou sous protocole stricte de proximité.`,
  content: [
    { type: "h2", text: `Le cadre conservation préventive` },
    { type: "p", text: `Les œuvres sont sensibles à la lumière, à l'humidité, à la poussière, aux vibrations et aux composés chimiques volatils. Le protocole de nettoyage est défini en lien avec le conservateur ou régisseur. Aucune initiative n'est laissée à l'agent.` },
    { type: "h2", text: `Les zones à traiter` },
    { type: "ul", items: [
      `Salles d'exposition (sol, vitrines, mobilier)`,
      `Vitrines et socles (extérieur uniquement)`,
      `Accueil et boutique`,
      `Sanitaires visiteurs`,
      `Réserves (accès très restreint)`,
      `Espaces administratifs`,
      `Quais de livraison et zones techniques`
    ] },
    { type: "h2", text: `Les règles d'or` },
    { type: "ol", items: [
      `Aucun contact avec les œuvres ou les vitrines (extérieur uniquement)`,
      `Aucun produit parfumé ou volatil (COV)`,
      `Aucun aérosol ni spray`,
      `Aspirateur à filtration HEPA obligatoire`,
      `Distance de sécurité d'1 mètre minimum des œuvres`,
      `Signalement immédiat de tout incident au régisseur`
    ] },
    { type: "h2", text: `Les vitrines : nettoyage extérieur uniquement` },
    { type: "p", text: `Produit non parfumé spécifique vitrines, chiffon microfibre dédié, mouvements souples. Jamais d'eau ruisselante (risque infiltration). L'ouverture des vitrines pour nettoyage intérieur est exclusivement réalisée par le régisseur ou conservateur.` },
    { type: "h2", text: `Les sols et la poussière` },
    { type: "p", text: `La poussière est le principal vecteur de dégradation des œuvres. Aspiration HEPA quotidienne, lavage des sols avec produit neutre, jamais de balai sec (soulève la poussière). Tapis d'entrée renforcés pour piéger la pollution extérieure.` },
    { type: "h2", text: `L'éclairage et l'air` },
    { type: "p", text: `L'agent ne touche jamais aux éclairages (calibrés pour la conservation). Pas d'aération forcée (modifie hygrométrie). Le nettoyage humide est limité pour ne pas augmenter l'humidité relative au-delà du seuil de conservation (50-55 %).` },
    { type: "callout", text: `ELITESY est intervenu dans plusieurs galeries d'art et fondations à Paris (zone Marais, Saint-Germain). Agents formés à la conservation préventive et procédures spécifiques. 06 09 16 50 99.` },
    { type: "h2", text: `La formation des agents` },
    { type: "p", text: `Formation initiale conservation préventive (3 jours minimum), encadrement renforcé les premières semaines, fiches procédures détaillées par salle, protocole d'urgence en cas d'incident (dégât des eaux, casse). Stabilité de l'équipe : éviter la rotation des agents.` },
    { type: "h2", text: `Les sanitaires visiteurs` },
    { type: "p", text: `Bionettoyage standard mais avec produits non parfumés (l'odeur ne doit pas diffuser dans les salles). Détartrage hebdomadaire. Contrôle régulier dans la journée par l'équipe d'accueil.` },
    { type: "h2", text: `La boutique et l'accueil` },
    { type: "p", text: `Nettoyage standard mais avec attention particulière aux vitrines marchandes, comptoir et matériel informatique. Les livres et catalogues ne sont jamais essuyés (essuyage = abrasion couverture).` },
    { type: "h2", text: `Les réserves` },
    { type: "p", text: `Accès strictement encadré, accompagnement obligatoire par un agent du musée, aspiration uniquement, jamais de produits humides. Le nettoyage des réserves est exceptionnel et toujours sous supervision.` },
    { type: "h2", text: `Traçabilité et reporting` },
    { type: "p", text: `Cahier de liaison entre l'équipe propreté et la régie. Tout incident signalé immédiatement. Réunion mensuelle avec le régisseur. Adaptation du protocole en cas de nouvelle exposition (œuvres fragiles, installations particulières).` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Le nettoyage en musée ou galerie est un métier à part entière : discrétion, formation, respect absolu des œuvres. Un partenariat de long terme avec un prestataire spécialisé est la meilleure garantie.` }
  ],
  status: "published",
};
