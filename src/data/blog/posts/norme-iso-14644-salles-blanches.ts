import type { Post } from "../types";
import hero from "@/assets/blog/bionettoyage-hospitalier.jpg";

export const post: Post = {
  slug: `norme-iso-14644-salles-blanches`,
  title: `Norme ISO 14644 : les salles blanches expliquées (classes ISO 5 à 8)`,
  description: `Comprendre la norme ISO 14644 : classification des salles blanches, contrôles particulaires et bionettoyage.`,
  category: `Normes & réglementations`,
  date: `2025-07-14`,
  readingTime: 10,
  hero,
  heroAlt: `Salle blanche pharmaceutique avec technicien en combinaison stérile`,
  intro: `La norme ISO 14644 définit les exigences de propreté particulaire des salles blanches. Indispensable en pharmacie, microélectronique, biotech, optique de précision. Le nettoyage en salle blanche obéit à des règles spécifiques très strictes.`,
  content: [
    { type: "h2", text: `Qu'est-ce qu'une salle blanche ?` },
    { type: "p", text: `Espace dont la concentration en particules aéroportées est contrôlée et qui minimise l'introduction, la génération et la rétention de particules. Air filtré HEPA ou ULPA, surpression, contrôle température, hygrométrie et débit d'air. Présente en industries pharmaceutiques, semi-conducteurs, biotechnologies, aéronautique.` },
    { type: "h2", text: `Les classes ISO 5 à 8` },
    { type: "ul", items: [
      `ISO 5 (équivalent classe 100 US) : zones de remplissage stérile aseptique`,
      `ISO 6 (classe 1000) : préparation pharmaceutique stérile`,
      `ISO 7 (classe 10 000) : zones de support pharmaceutique`,
      `ISO 8 (classe 100 000) : zones de support, salles d'arrière`,
      `ISO 9 : équivalent air ambiant industriel propre`
    ] },
    { type: "h2", text: `Le contrôle particulaire` },
    { type: "p", text: `Mesure par compteur de particules selon ISO 14644-1, en état au repos et en activité. Fréquence : tous les 6 à 12 mois selon classe. Le bionettoyage joue directement sur le maintien de la classe : un nettoyage non conforme peut faire perdre la qualification.` },
    { type: "h2", text: `La tenue obligatoire` },
    { type: "p", text: `Combinaison intégrale stérile, charlotte, cagoule, sur-chaussures, gants stériles, masque. Habillage dans sas selon protocole en plusieurs étapes. Tout cheveu, fibre ou bijou interdit. L'agent de nettoyage suit exactement le même protocole que les opérateurs.` },
    { type: "h2", text: `Le matériel spécifique` },
    { type: "ul", items: [
      `Microfibres salle blanche stérilisées et conditionnées sous vide`,
      `Seaux pré-imprégnés, jamais de seau ouvert`,
      `Frange ou raclette en matière non particulante`,
      `Aspirateur HEPA si présent`,
      `Désinfectants validés ISO et compatibles classe`
    ] },
    { type: "h2", text: `Le protocole de bionettoyage` },
    { type: "ol", items: [
      `Sas et habillage selon procédure`,
      `Nettoyage du haut vers le bas (plafond, murs, sol)`,
      `Nettoyage du fond vers la sortie (jamais reculer dans une zone propre)`,
      `Méthode pré-imprégnée systématique`,
      `Désinfection avec rotation des produits (éviter sélection)`,
      `Traçabilité horodatée signée`
    ] },
    { type: "callout", text: `ELITESY ne réalise pas le bionettoyage en salles blanches classées : c'est un métier d'ultra-spécialiste. En revanche, nous traitons les zones périphériques pharmaceutiques et industrielles avec rigueur. 06 09 16 50 99.` },
    { type: "h2", text: `La rotation des biocides` },
    { type: "p", text: `Pour éviter la sélection de souches résistantes, les biocides sont alternés selon un cycle (généralement mensuel). Mélange d'oxydants (peroxyde, acide peracétique), d'alcools (éthanol 70%, IPA), et d'ammoniums quaternaires. Validation par tests microbiologiques.` },
    { type: "h2", text: `Le contrôle microbiologique` },
    { type: "p", text: `Géloses contact sur surfaces, biocollecteurs d'air, écouvillonnages. Limites définies par classe (ex: ISO 5, < 1 UFC/m³). Tout dépassement déclenche investigation et action corrective. Le bionettoyage en est souvent la cause directe.` },
    { type: "h2", text: `La formation et la qualification` },
    { type: "p", text: `Tout agent intervenant en salle blanche est qualifié sur dossier : formation initiale (5 jours minimum), test pratique sous observation, requalification annuelle. Aucun intérimaire non qualifié n'est admis.` },
    { type: "h2", text: `Coût et fréquence` },
    { type: "p", text: `Bionettoyage quotidien d'une salle ISO 7 de 50 m² : 1h30 à 2h en agent unique. Bionettoyage terminal mensuel (vidé) : demi-journée à journée complète. Coût horaire double du nettoyage standard du fait de la qualification et du matériel.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Les salles blanches sont l'environnement de nettoyage le plus exigeant qui soit. ISO 14644 fixe les règles, mais c'est la rigueur de l'opérateur qui fait la conformité.` }
  ],
  status: "published",
};
