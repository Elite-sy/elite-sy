import type { Post } from "../types";
import hero from "@/assets/blog/poignees-portes.jpg";

export const post: Post = {
  slug: `desinfection-poignees-portes`,
  title: `Désinfection des poignées de porte : la routine qui change tout`,
  description: `Fréquence, produits et organisation : la désinfection des poignées de porte en période épidémique et au quotidien.`,
  category: `Conseils d'entretien`,
  date: `2025-01-13`,
  readingTime: 6,
  hero,
  heroAlt: `Désinfection d'une poignée de porte au bureau`,
  intro: `Les poignées de portes sont les points de contact les plus touchés au bureau : centaines de manipulations par jour. Foyer principal de transmission de virus et bactéries. Une routine simple change radicalement le climat sanitaire d'un bureau.`,
  content: [
    { type: "h2", text: `Le chiffre clé` },
    { type: "p", text: `Une poignée de porte d'entreprise de bureaux est touchée en moyenne 300 à 500 fois par jour. Une étude de l'Université d'Arizona a montré qu'un virus déposé sur une poignée contamine 50% des employés en 4 heures. C'est le premier vecteur de transmission après les mains.` },
    { type: "h2", text: `Les points de contact à traiter` },
    { type: "ul", items: [
      `Poignées de toutes portes (entrée, bureaux, sanitaires)`,
      `Boutons d'ascenseur (intérieur et palier)`,
      `Interrupteurs`,
      `Robinets et chasses d'eau`,
      `Distributeurs (savon, papier, café)`,
      `Ramps d'escalier`,
      `Téléphones partagés et imprimantes`
    ] },
    { type: "h2", text: `La fréquence optimale` },
    { type: "p", text: `Bureau standard : une fois par jour matin. Période épidémique (Covid, grippe, gastro) : 2-3 fois par jour (matin, midi, fin de journée). Établissements sensibles (écoles, cabinets médicaux) : toutes les heures sur les zones critiques.` },
    { type: "h2", text: `Le bon produit` },
    { type: "p", text: `Désinfectant virucide EN 14476 (limité ou complet). Lingettes pré-imprégnées (rapidité) ou pulvérisation + microfibre rouge dédiée. Alcool 70% (idéal pour métaux, séchage rapide). Eau de Javel diluée (efficace mais corrosif et odorant).` },
    { type: "h2", text: `La méthode` },
    { type: "ol", items: [
      `Lingette imprégnée ou pulvérisation directe sur la poignée`,
      `Frotter toute la surface 30 secondes (action mécanique + chimique)`,
      `Laisser sécher à l'air (temps de contact respecté)`,
      `Passer à la poignée suivante avec face propre de la lingette`
    ] },
    { type: "h2", text: `La microfibre dédiée` },
    { type: "p", text: `Code couleur rouge pour sanitaires ET points de contact. Une microfibre par étage maximum. Lavage à 90 °C entre chaque utilisation. Ne JAMAIS utiliser une microfibre touchée par les sanitaires sur les zones bureautique sans relavage.` },
    { type: "callout", text: `ELITESY déploie sur demande un protocole 'désinfection renforcée points de contact' : passages multi-quotidiens, lingettes Ecolabel, contrôle qualité. 06 09 16 50 99.` },
    { type: "h2", text: `Les distributeurs de gel hydroalcoolique` },
    { type: "p", text: `Complément essentiel : à l'entrée, dans les couloirs, près des ascenseurs, dans les salles de réunion. Remplissage régulier (gel sec = inutile). Communication interne pour rappeler le réflexe.` },
    { type: "h2", text: `Les portes automatiques : la meilleure solution` },
    { type: "p", text: `Investissement souvent rentable : suppression d'un point de contact majeur (entrée principale). Cellules infrarouge ou boutons coude. Coût installation 800-3000 € par porte. ROI sanitaire évident en période épidémique.` },
    { type: "h2", text: `La sensibilisation des utilisateurs` },
    { type: "p", text: `Affichage 'lavez-vous les mains' aux sanitaires, 'utilisez votre coude' aux portes. Distribution de lingettes individuelles. Formation des nouveaux entrants. Une bonne hygiène est culturelle autant que technique.` },
    { type: "h2", text: `Les erreurs à éviter` },
    { type: "ul", items: [
      `Désinfecter sans nettoyer (matière organique masque le virus)`,
      `Spray dans les yeux (pulvériser sur le chiffon)`,
      `Mélange Javel + ammoniaque (chloramines toxiques)`,
      `Réutiliser une lingette saturée`,
      `Oublier les boutons d'ascenseur (haute charge virale)`
    ] },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `La désinfection régulière des poignées et points de contact est l'action sanitaire avec le meilleur rapport coût/bénéfice au bureau. Routine simple, impact majeur sur la transmission virale et la confiance des collaborateurs.` }
  ],
  status: "published",
};
