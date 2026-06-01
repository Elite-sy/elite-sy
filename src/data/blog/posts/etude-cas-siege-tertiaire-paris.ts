import type { Post } from "../types";
import hero from "@/assets/blog/cout-nettoyage-m2.jpg";

export const post: Post = {
  slug: `etude-cas-siege-tertiaire-paris`,
  title: `Étude de cas : reprise du nettoyage d'un siège tertiaire à Paris (12 000 m²)`,
  description: `Reprise complète du nettoyage d'un siège tertiaire parisien de 12 000 m² : méthode ELITESY, équipe et gains mesurés.`,
  category: `Études de cas`,
  date: `2024-12-09`,
  readingTime: 8,
  hero,
  heroAlt: `Hall d'accueil d'un siège tertiaire parisien moderne`,
  intro: `Reprise en 2024 du contrat de nettoyage d'un siège tertiaire parisien de 12 000 m² : 800 collaborateurs, 4 étages, restauration interne, parking, accueil visiteurs. ELITESY a refondu la prestation. Retour d'expérience chiffré.`,
  content: [
    { type: "h2", text: `Le contexte initial` },
    { type: "p", text: `Site parisien 8ème arrondissement, immeuble années 2000, 12 000 m² SHON répartis sur 4 étages. Activité tertiaire (services). 800 collaborateurs, 200 visiteurs/jour. Restaurant inter-entreprises interne. Parking 80 places. Prestataire précédent en place depuis 7 ans.` },
    { type: "h2", text: `Le diagnostic` },
    { type: "p", text: `Audit en septembre 2024 : insatisfaction collaborateurs grandissante (sanitaires médiocres, vitres jamais propres), turnover agents très élevé (4 changements en 6 mois), conformité produits non documentée. Cahier des charges précis demandé par l'office manager.` },
    { type: "h2", text: `Le nouveau dispositif` },
    { type: "ul", items: [
      `Équipe dédiée 8 agents : 2 chefs d'équipe, 6 agents polyvalents`,
      `Plages horaires : 6h-9h passage matinal + 14h-17h passage après-midi + 20h-23h passage soir`,
      `Matériel : 3 autolaveuses, 4 aspirateurs dorsaux HEPA, centrale de dilution sur place`,
      `Produits : 90% Ecolabel, FDS classées et accessibles`,
      `Reporting : compte-rendu hebdomadaire + audit mensuel`
    ] },
    { type: "h2", text: `Les actions immédiates` },
    { type: "ol", items: [
      `Grand nettoyage de démarrage (week-end 50h équipe complète)`,
      `Détartrage choc de tous les sanitaires`,
      `Décapage et émulsion tous les sols PVC`,
      `Shampouinage moquettes étages dirigeants`,
      `Vitres complètes (intérieur + extérieur, cordistes)`,
      `Affichage charte propreté en cuisine et sanitaires`
    ] },
    { type: "h2", text: `La méthode d'animation` },
    { type: "p", text: `Réunion hebdomadaire chef d'équipe + office manager : retours, ajustements, signalements. Cahier de liaison à l'accueil pour collaborateurs (suggestions, alertes). Audit mensuel par le directeur d'exploitation ELITESY (grille INRS 30 points).` },
    { type: "h2", text: `Les indicateurs suivis` },
    { type: "ul", items: [
      `Taux de présence agents (objectif > 95%)`,
      `Taux de satisfaction collaborateurs (enquête trimestrielle)`,
      `Taux de conformité audit qualité (objectif > 90%)`,
      `Consommation produits (objectif -20% vs précédent)`,
      `Nombre de signalements/réclamations`
    ] },
    { type: "callout", text: `ELITESY accompagne les reprises de marchés complexes sur Paris : audit initial gratuit, mobilisation rapide, indicateurs partagés. 06 09 16 50 99.` },
    { type: "h2", text: `Les résultats à 6 mois` },
    { type: "p", text: `Satisfaction collaborateurs : 4,2/5 (vs 2,7/5 avant). Conformité audit qualité : 94% en moyenne. Turnover agents : 0 départ en 6 mois (équipe stable). Consommation produits : -28% grâce à centrale de dilution. Réclamations : 3 en 6 mois (vs 25 sur 6 mois précédents).` },
    { type: "h2", text: `Le retour d'investissement` },
    { type: "p", text: `Budget annuel client : +12% vs prestataire précédent. Mais : économie produits compensant 8%, économie remise en état des sols (différée 2 ans), économie absentéisme indirect (collaborateurs plus satisfaits). ROI réel positif dès la 1ère année.` },
    { type: "h2", text: `Les points clés du succès` },
    { type: "ol", items: [
      `Équipe stable et bien encadrée (chefs d'équipe expérimentés)`,
      `Matériel adapté et entretenu`,
      `Communication transparente avec le client (reporting, audit)`,
      `Implication des collaborateurs (charte, retours)`,
      `Démarche d'amélioration continue (PDCA mensuel)`
    ] },
    { type: "h2", text: `Les ajustements en cours d'année` },
    { type: "p", text: `Décembre : renforcement passage sanitaires en période grippe (passage supplémentaire midi). Mars : intégration tri biodéchets (loi AGEC). Mai : passage à 100% produits Ecolabel sur demande client RSE. Septembre : audit qualité annuel positif (96%).` },
    { type: "h2", text: `Les enseignements` },
    { type: "p", text: `Une reprise réussie demande : diagnostic précis, équipe dimensionnée, matériel adapté, animation managériale forte, indicateurs partagés. ELITESY applique cette méthode à chaque nouveau marché. La qualité dans la durée vaut largement la guerre des prix initiaux.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Cette étude de cas illustre la valeur d'une démarche professionnelle structurée. La propreté d'un siège tertiaire est un facteur direct de qualité de vie au travail et d'image entreprise. ELITESY en fait son métier.` }
  ],
  status: "published",
};
