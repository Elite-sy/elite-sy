import type { Post } from "../types";
import hero from "@/assets/blog/cuisine-bureau.jpg";

export const post: Post = {
  slug: `garder-cuisine-bureau-propre`,
  title: `Garder la cuisine du bureau propre entre deux passages`,
  description: `Règles simples à afficher pour l'équipe et bons réflexes pour maintenir la cuisine de bureau propre toute la journée.`,
  category: `Conseils d'entretien`,
  date: `2025-01-06`,
  readingTime: 6,
  hero,
  heroAlt: `Cuisine de bureau propre et bien organisée`,
  intro: `La cuisine de bureau passe en 30 minutes du propre au catastrophique. L'agent de nettoyage la traite une fois par jour, le reste relève des bonnes pratiques de l'équipe. Voici comment installer une culture du propre durable.`,
  content: [
    { type: "h2", text: `Le constat` },
    { type: "p", text: `La cuisine de bureau cristallise les tensions internes : vaisselle sale, frigo qui sent, micro-ondes graisseux, plans de travail collants. Ce n'est pas un problème de prestataire de nettoyage : c'est un problème de discipline collective.` },
    { type: "h2", text: `Les 5 règles à afficher` },
    { type: "ol", items: [
      `Je lave et range immédiatement ma vaisselle`,
      `Je ferme bien le micro-ondes avant utilisation (couvercle anti-projections)`,
      `J'essuie ce que je salis sur le plan de travail`,
      `Je sors mon repas du frigo le jour même`,
      `Je signale tout incident (fuite, panne) à l'office manager`
    ] },
    { type: "h2", text: `L'équipement à fournir` },
    { type: "ul", items: [
      `Cloche/couvercle micro-ondes (élimine 90% des projections)`,
      `Lavette éponge + détergent vaisselle (renouvelés)`,
      `Essuie-tout (à proscrire, préférer microfibres lavables)`,
      `Sacs poubelle tri (déchets organiques, recyclables)`,
      `Affichage des règles avec ton positif et humour`
    ] },
    { type: "h2", text: `Le frigo : sujet conflictuel` },
    { type: "p", text: `Règle d'or : tout est jeté le vendredi soir. Affichage clair. Sans cette règle, les restes s'accumulent et le frigo devient inutilisable. Nettoyage hebdo par l'équipe propreté (vider, désinfecter, contrôler température). Voir notre article dédié au protocole frigo bureau.` },
    { type: "h2", text: `Le micro-ondes : zone de guerre` },
    { type: "p", text: `Couvercle anti-projection obligatoire. Nettoyage interne quotidien par l'équipe nettoyage. Au-delà : implication de l'équipe. Petit truc : un verre d'eau citronnée chauffé 2 min décolle les projections en 30 secondes d'essuyage.` },
    { type: "h2", text: `La machine à café` },
    { type: "p", text: `Détartrage mensuel par l'équipe nettoyage. Vidage des marcs deux fois par jour (matin et midi) par l'équipe interne. Bac d'égouttement vidé quotidiennement. Voir notre article dédié à l'entretien machine à café bureau.` },
    { type: "callout", text: `ELITESY propose un kit 'cuisine bureau propre' aux clients : affichage règles, matériel adapté, formation collaborateurs en 30 min. 06 09 16 50 99.` },
    { type: "h2", text: `L'évier : foyer bactérien` },
    { type: "p", text: `Désinfection 1x/jour par l'équipe propreté. Cuvette en inox : tolère détartrant régulier. Filtre vidange : à nettoyer hebdomadairement (souvent oublié). Préférer plonge double bac (un eau savon, un rinçage) pour gain hygiène.` },
    { type: "h2", text: `Les déchets` },
    { type: "p", text: `Tri obligatoire (loi AGEC) : biodéchets séparés depuis 2024 pour tous les producteurs. Poubelles distinctes claires (couleurs, pictogrammes). Vidage 2x/jour minimum aux heures de pointe.` },
    { type: "h2", text: `Le coin café/eau` },
    { type: "p", text: `Souvent la zone la plus chargée. Plateau d'égouttement pour les tasses qui sèchent. Distributeur d'eau régulièrement détartré. Pichet propre dédié. Capsules café triées (filière dédiée Tassimo/Nespresso).` },
    { type: "h2", text: `Les bonnes pratiques managériales` },
    { type: "p", text: `Charte simple co-créée avec l'équipe (et non imposée). Rotation hebdomadaire d'un référent cuisine. Bilan trimestriel en réunion d'équipe. Reconnaissance des bons gestes plutôt que punition des mauvais.` },
    { type: "h2", text: `Le rôle de l'office manager` },
    { type: "p", text: `Pilote la propreté collective au quotidien : réapprovisionnement, signalement, animation des règles. Travaille main dans la main avec l'équipe nettoyage. Communication régulière auprès des collaborateurs.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `La cuisine propre est l'affaire de tous, pas seulement du prestataire. Quelques règles simples, un peu d'équipement adapté et une animation managériale suffisent. Le climat de bureau s'améliore avec la propreté collective.` }
  ],
  status: "published",
};
