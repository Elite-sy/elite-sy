import type { Post } from "../types";
import hero from "@/assets/blog/cabinet-medical.jpg";

export const post: Post = {
  slug: `reglementation-dasri-officine`,
  title: `Gestion des DASRI en officine et cabinet médical : règles complètes`,
  description: `Tri, conditionnement, traçabilité et filières d'élimination des DASRI en officine et cabinet médical.`,
  category: `Normes & réglementations`,
  date: `2025-06-16`,
  readingTime: 8,
  hero,
  heroAlt: `Collecteur DASRI jaune dans un cabinet médical`,
  intro: `Les Déchets d'Activités de Soins à Risques Infectieux (DASRI) sont strictement réglementés. Officines et cabinets médicaux y sont confrontés au quotidien. Mauvaise gestion = sanctions, et risque sanitaire pour les agents de nettoyage.`,
  content: [
    { type: "h2", text: `Définition réglementaire` },
    { type: "p", text: `Les DASRI sont définis par les articles R.1335-1 à R.1335-8 du Code de la santé publique : déchets issus d'activités de diagnostic, suivi, traitement, comportant un risque infectieux. Inclut OPCT (Objets Piquants Coupants Tranchants), pansements souillés, prélèvements biologiques.` },
    { type: "h2", text: `Les producteurs concernés` },
    { type: "ul", items: [
      `Officines de pharmacie (collecte DASTRI patients diabétiques)`,
      `Cabinets médicaux et infirmiers libéraux`,
      `Laboratoires d'analyses médicales`,
      `EHPAD et établissements de santé`,
      `Cabinets vétérinaires`,
      `Tatoueurs et perceurs`
    ] },
    { type: "h2", text: `Le tri à la source` },
    { type: "p", text: `DASRI strictement séparés des déchets ménagers, dès la production. Code couleur : sacs et collecteurs jaunes pour DASRI courants, boîtes OPCT pour aiguilles et lames. Jamais de mélange. Le geste de tri appartient au producteur (médecin, IDE), jamais au nettoyeur.` },
    { type: "h2", text: `Le conditionnement` },
    { type: "p", text: `Sacs DASRI homologués (NF X 30-501) pour matériel mou (compresses, gants), collecteurs rigides (NF X 30-500) pour OPCT, grands fûts (60L) pour gros volume. Fermeture définitive avant collecte, jamais réouverts. Étiquetage avec date, producteur, type.` },
    { type: "h2", text: `La durée de stockage maximale` },
    { type: "ul", items: [
      `Production < 5 kg/mois : 3 mois maximum`,
      `Production 5 à 100 kg/mois : 7 jours maximum`,
      `Production > 100 kg/mois : 72 heures maximum`
    ] },
    { type: "h2", text: `Le local DASRI` },
    { type: "p", text: `Local dédié obligatoire au-dessus de 5 kg/mois : fermé à clé, ventilé, sol et murs lavables, point d'eau à proximité, signalétique réglementaire. Au-dessous, un emplacement matérialisé suffit.` },
    { type: "callout", text: `ELITESY nettoie le local DASRI dans le cadre du contrat (désinfection mensuelle), mais ne manipule jamais les déchets. Cadre clair entre les responsabilités du producteur et du prestataire de nettoyage. 06 09 16 50 99.` },
    { type: "h2", text: `La filière d'élimination` },
    { type: "p", text: `Collecte par prestataire agréé (DASTRI, SITA, Veolia, etc.) avec convention. Transport par véhicule ADR. Élimination par banalisation (pré-traitement par autoclave puis incinération) ou incinération directe. Bordereau CERFA 11351 obligatoire.` },
    { type: "h2", text: `La traçabilité` },
    { type: "p", text: `Bordereaux CERFA 11351 conservés 3 ans. Registre des entrées-sorties tenu à jour. Convention de collecte avec le prestataire. Tout est exigible en cas de contrôle ARS ou DREAL.` },
    { type: "h2", text: `Les sanctions` },
    { type: "p", text: `Élimination irrégulière : 75 000 € d'amende et 2 ans de prison (article L.541-46 Code de l'environnement). Pour les professionnels de santé, sanctions ordinales en plus. Ne jamais transiger sur ce sujet.` },
    { type: "h2", text: `Le coût` },
    { type: "p", text: `Collecte mensuelle 30 L : 25 à 40 €. Collecte annuelle (petit producteur) : 100 à 200 €. Le coût est intégré aux honoraires des actes par les organismes professionnels.` },
    { type: "h2", text: `Le rôle de l'agent de nettoyage` },
    { type: "p", text: `Ne touche jamais aux DASRI en cours ou conditionnés. Désinfecte le local DASRI vide. Signale tout déchet trouvé hors collecteur (aiguille au sol par ex.) sans le ramasser : appel du responsable. Vaccinations hépatite B obligatoires.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `La gestion DASRI est un sujet réglementaire sérieux. Le producteur en porte la responsabilité, mais le prestataire de nettoyage doit connaître les règles pour protéger ses agents et bien collaborer.` }
  ],
  status: "published",
};
