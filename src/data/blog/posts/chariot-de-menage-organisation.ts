import type { Post } from "../types";
import hero from "@/assets/blog/protocole-quotidien.jpg";

export const post: Post = {
  slug: `chariot-de-menage-organisation`,
  title: `Organiser un chariot de ménage professionnel`,
  description: `Code couleur, ergonomie et productivité : comment organiser un chariot de ménage professionnel sur le terrain.`,
  category: `Produits & techniques`,
  date: `2025-02-24`,
  readingTime: 7,
  hero,
  heroAlt: `Chariot de ménage professionnel organisé en intervention`,
  intro: `Le chariot de ménage est le cœur de l'agent professionnel. Bien organisé, il augmente la productivité de 30%, réduit la fatigue et garantit la conformité HACCP/code couleur. Voici la méthode pour le concevoir.`,
  content: [
    { type: "h2", text: `Le rôle stratégique du chariot` },
    { type: "p", text: `Tout ce dont l'agent a besoin pendant sa tournée doit être sur le chariot : pas de retour au local en milieu d'intervention, pas de produit manquant. Un chariot bien pensé = une heure de gagnée par jour et 30% de fatigue en moins.` },
    { type: "h2", text: `Les zones du chariot` },
    { type: "ul", items: [
      `Zone haute : produits prêts à l'emploi (flacons spray)`,
      `Zone médiane : microfibres pliées par code couleur`,
      `Zone basse : seaux et lavettes`,
      `Zone arrière : sacs poubelle (jaune/noir)`,
      `Zone latérale : panneaux 'sol mouillé', balai`
    ] },
    { type: "h2", text: `Le code couleur sur le chariot` },
    { type: "p", text: `Le chariot matérialise visuellement le code couleur : compartiments dédiés rouges, jaunes, bleus, verts. Microfibres pliées par couleur dans bacs séparés. Seaux marqués. Aucun mélange possible. Audit visuel rapide pour le chef d'équipe.` },
    { type: "h2", text: `Le matériel de base` },
    { type: "ol", items: [
      `Frange microfibre montée sur balai pré-imprégnée`,
      `Spray multi-surfaces (5 couleurs)`,
      `Désinfectant virucide EN 14476`,
      `Détartrant sanitaires`,
      `Décrottant cuvettes`,
      `Microfibres pliées par couleur (4 paquets)`,
      `Gants nitrile, lunettes`,
      `Sacs poubelle 30 L et 100 L`,
      `Papier toilette, savon, essuie-mains de remplissage`,
      `Panneau 'sol mouillé'`
    ] },
    { type: "h2", text: `Le poids et l'ergonomie` },
    { type: "p", text: `Chariot chargé : 25-40 kg maximum. Roues caoutchouc silencieuses et anti-rayures. Hauteur poignée adaptée à l'agent. Frein de stationnement. Préférer chariot pliable pour ascenseurs. Modèles à 4 roues pivotantes pour manœuvrabilité.` },
    { type: "callout", text: `ELITESY équipe ses agents en chariots TTS Magic ou Vermop : modulaires, ergonomiques, code couleur intégré. Formation à l'organisation au démarrage. 06 09 16 50 99.` },
    { type: "h2", text: `La méthode pré-imprégnée` },
    { type: "p", text: `Microfibres pliées et imprégnées en local en début de tournée, transportées humides sur le chariot. Pas de seau d'eau sale qui voyage. Productivité supérieure, hygiène garantie, ergonomie améliorée (moins de seaux à porter).` },
    { type: "h2", text: `Le réapprovisionnement` },
    { type: "p", text: `Stock de consommables sur le chariot pour une demi-tournée. Réapprovisionnement au local en milieu de tournée. Liste de prise standardisée affichée. Inventaire visuel en fin de tournée pour préparation du lendemain.` },
    { type: "h2", text: `L'hygiène du chariot` },
    { type: "p", text: `Nettoyage complet hebdomadaire (le chariot lui-même se nettoie). Désinfection des bacs microfibres. Vidage et lavage des seaux. Vérification matériel. Ne pas laisser de microfibres sales dessus en fin de journée (renvoi en lessive).` },
    { type: "h2", text: `Les chariots spécialisés` },
    { type: "ul", items: [
      `Chariot 'pré-imprégnation' avec bacs trempage`,
      `Chariot 'sanitaires' (sans contact alimentaire)`,
      `Chariot 'hospitalier' avec couvercle hermétique`,
      `Chariot 'écolo' avec centrale de dilution intégrée`
    ] },
    { type: "h2", text: `Les erreurs fréquentes` },
    { type: "p", text: `Chariot surchargé (poids, accidents), microfibres mélangées (rupture code couleur), produits sans étiquetage clair (risque chimique), sacs poubelle débordants (fuites). Un audit régulier du chariot est essentiel.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Un chariot bien organisé est le signe d'un agent professionnel et d'une entreprise de propreté sérieuse. L'investissement (300-800 €) est rentabilisé en quelques mois par les gains de productivité et la baisse de la pénibilité.` }
  ],
  status: "published",
};
