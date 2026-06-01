import type { Post } from "../types";
import hero from "@/assets/blog/nettoyage-jour.jpg";

export const post: Post = {
  slug: `nettoyage-jour-vs-soir-avantages`,
  title: `Nettoyage de jour ou de soir : avantages et inconvénients`,
  description: `Coût, visibilité, qualité perçue, recrutement : le débat tranché entre nettoyage de jour et nettoyage de soir.`,
  category: `FAQ`,
  date: `2024-12-16`,
  readingTime: 7,
  hero,
  heroAlt: `Agent de nettoyage en journée dans des bureaux en activité`,
  intro: `Pendant des décennies, le nettoyage des bureaux s'est fait en horaires décalés (très tôt ou très tard). Depuis 2015, le 'nettoyage de jour' se développe : agent présent en journée, visible, intégré à l'équipe. Avantages, limites et critères de décision.`,
  content: [
    { type: "h2", text: `Le nettoyage classique (horaires décalés)` },
    { type: "p", text: `Modèle historique : agent intervient avant arrivée (5h-8h) ou après départ (18h-22h) des collaborateurs. Avantages : pas d'interaction, accès complet aux espaces. Inconvénients : recrutement difficile (horaires pénibles), invisibilité du travail, absentéisme plus fréquent.` },
    { type: "h2", text: `Le nettoyage de jour : principe` },
    { type: "p", text: `Agent intervient pendant les heures de bureau (9h-17h ou 13h-19h). Visible des collaborateurs, peut interagir. Modèle plus humain, plus qualitatif. Recrutement facilité : horaires normaux, agent intégré comme un collègue.` },
    { type: "h2", text: `Les avantages du nettoyage de jour` },
    { type: "ul", items: [
      `Recrutement plus facile (horaires diurnes)`,
      `Turnover divisé par 2 chez l'agent`,
      `Reconnaissance sociale et lutte contre l'invisibilisation`,
      `Économie d'énergie (pas d'éclairage hors heures)`,
      `Réactivité aux incidents (un déversement traité immédiatement)`,
      `Communication directe avec les collaborateurs`
    ] },
    { type: "h2", text: `Les inconvénients` },
    { type: "ul", items: [
      `Gêne sonore (aspirateur en open-space)`,
      `Présence visible (image à soigner : tenue, comportement)`,
      `Certaines tâches peu compatibles (sols mouillés en open-space)`,
      `Formation comportementale renforcée nécessaire`,
      `Acceptabilité parfois difficile au démarrage`
    ] },
    { type: "h2", text: `La répartition optimale` },
    { type: "p", text: `Modèle hybride courant : sanitaires et cuisines en passage matinal court (8h-9h) + nettoyage principal en journée (10h-14h) + finalisation en début de soirée (17h-19h). Agent présent toute la journée mais activités cadrées par horaire.` },
    { type: "h2", text: `Le coût comparé` },
    { type: "p", text: `Nettoyage de jour souvent 5 à 15% plus cher : matériel plus sophistiqué (aspirateurs silencieux), tenues, formation. Compensé par : réduction turnover, meilleure qualité, communication client améliorée. ROI positif sur 18 mois.` },
    { type: "callout", text: `ELITESY accompagne ses clients dans le passage au nettoyage de jour : formation des agents, équipement silencieux, communication interne. Démarche RSE valorisable. 06 09 16 50 99.` },
    { type: "h2", text: `La transition : méthode` },
    { type: "p", text: `Pilote sur un étage ou une zone pendant 3 mois. Information préalable des collaborateurs (réunion, charte). Évaluation à 3 mois (satisfaction agents, collaborateurs). Généralisation progressive. Accompagnement RH des agents (changement horaires).` },
    { type: "h2", text: `Le matériel adapté` },
    { type: "ul", items: [
      `Aspirateurs silencieux (< 60 dB)`,
      `Microfibre pré-imprégnée (élimine seaux et bruits)`,
      `Charges mécaniques électriques (autolaveuses silencieuses)`,
      `Lampes frontales pour zones sombres`,
      `Chariots à roues caoutchouc`
    ] },
    { type: "h2", text: `L'image et la tenue` },
    { type: "p", text: `Tenue propre et identifiable (badge entreprise), comportement professionnel. Possibilité d'identifier l'agent comme membre de l'équipe (badge personnalisé, intégration aux événements internes). Lutte contre l'invisibilisation.` },
    { type: "h2", text: `Les retours d'expérience` },
    { type: "p", text: `Études FEP et ANACT : 80% des entreprises ayant basculé en jour ne reviennent pas en arrière. Taux de satisfaction des agents : +35%. Taux d'absentéisme : -30%. Qualité perçue collaborateurs : +20%.` },
    { type: "h2", text: `Les freins culturels` },
    { type: "p", text: `Résistance fréquente : 'on ne veut pas voir le nettoyage', 'cela gêne notre travail'. Pédagogie nécessaire. Pilote convainquant. Témoignage des collaborateurs convertis. Évolution culturelle inéluctable.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Le nettoyage de jour est l'avenir du métier : meilleur pour les agents, pour la qualité, pour l'image de l'entreprise. La transition demande un peu d'accompagnement mais les bénéfices sont durables. ELITESY accompagne cette transformation.` }
  ],
  status: "published",
};
