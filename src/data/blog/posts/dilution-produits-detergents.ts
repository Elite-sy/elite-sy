import type { Post } from "../types";
import hero from "@/assets/blog/dilution-produits.jpg";

export const post: Post = {
  slug: `dilution-produits-detergents`,
  title: `Dilution des produits détergents : les bons dosages`,
  description: `Centrales murales, doseurs et règles de calcul à connaître pour bien diluer les produits détergents professionnels.`,
  category: `Produits & techniques`,
  date: `2025-02-10`,
  readingTime: 7,
  hero,
  heroAlt: `Centrale murale de dilution de produits détergents`,
  intro: `Mal diluer un produit détergent c'est gaspiller (sur-dosage) ou laver pour rien (sous-dosage), exposer les agents à des risques chimiques et abîmer les surfaces. Voici les règles et outils pour des dilutions justes.`,
  content: [
    { type: "h2", text: `Pourquoi diluer` },
    { type: "p", text: `Les produits professionnels sont vendus en concentrés (5 L, 10 L, 25 L) pour optimiser transport et stockage. Dilution à l'usage : 1 à 5% selon produit. Une bouteille spray 750 ml de produit prêt = 0,75 L à 5% du concentré = 37,5 mL de concentré seulement.` },
    { type: "h2", text: `Les trois modes de dilution` },
    { type: "ul", items: [
      `Manuel : bouchon doseur du bidon (économique mais imprécis)`,
      `Doseur mécanique : pompe calibrée sur bidon (précis, 30-80 €)`,
      `Centrale murale : dilution automatique avec eau réseau (idéal multi-sites)`
    ] },
    { type: "h2", text: `La centrale murale` },
    { type: "p", text: `Système fixe en local technique : bidons concentrés branchés sur dilueur, eau du réseau, flacons d'usage remplis au robinet. Dilution garantie, traçabilité, ergonomie (pas de manipulation de pur). Investissement 300-800 €, ROI 18 mois site moyen.` },
    { type: "h2", text: `Le doseur mécanique` },
    { type: "p", text: `Pompe à visser sur bidon, dose calibrée (10 mL, 20 mL, 30 mL par pression). Économique (30-80 €), précis. Adapté pour produits à dilution standard. Limites : compatibilité avec viscosité du produit, usure annuelle.` },
    { type: "h2", text: `Le calcul de dilution` },
    { type: "p", text: `Règle simple : pour 1L de produit prêt à 2%, mettre 20 mL de concentré + 980 mL d'eau. Pour 5%, 50 mL + 950 mL. Le pourcentage indique la part de concentré dans le produit final, pas l'inverse. Erreur classique.` },
    { type: "h2", text: `Les dilutions standard` },
    { type: "ul", items: [
      `Détergent neutre multi-surfaces : 1-2%`,
      `Dégraissant cuisine : 3-5%`,
      `Détartrant sanitaires : prêt à l'emploi ou 5-10%`,
      `Désinfectant virucide : 0,5-2% selon produit`,
      `Décapant sol : 10-20%`
    ] },
    { type: "callout", text: `ELITESY équipe les sites clients en centrales de dilution sur demande : dilution garantie, économies de produit, sécurité agents. 06 09 16 50 99.` },
    { type: "h2", text: `La sécurité` },
    { type: "p", text: `Jamais mélanger deux produits (eau de Javel + acide = chlore gazeux toxique). Toujours ajouter le concentré dans l'eau, jamais l'inverse (projection). EPI obligatoire pour manipulation concentré (gants, lunettes). Local de dilution ventilé.` },
    { type: "h2", text: `La stabilité après dilution` },
    { type: "p", text: `Produit dilué : durée de conservation limitée (24h à 7 jours selon formule). Étiqueter le flacon avec date de préparation. Jeter au-delà. La dilution affaiblit les conservateurs : risque microbiologique si conservation longue.` },
    { type: "h2", text: `L'eau du réseau : qualité variable` },
    { type: "p", text: `Eau très calcaire (région parisienne) : neutralise certains désinfectants. Préférer eau adoucie ou produits compatibles eau dure. Pour zones sensibles, dilution avec eau osmosée.` },
    { type: "h2", text: `Les économies réalisées` },
    { type: "p", text: `Sur 100 flacons spray par mois : passage du prêt-à-l'emploi à la dilution concentrée économise 60-70% du budget produit. Sur un bureau de 500 m², 800 à 1500 €/an. ROI rapide de la centrale ou des doseurs.` },
    { type: "h2", text: `Le contrôle qualité` },
    { type: "p", text: `Audit annuel de la dilution : test pH et concentration avec bandelettes (kits fournisseur). Vérification entartrage centrale (changement annuel des filtres). Formation agents au remplissage propre. Traçabilité dans le SMQ.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Bien diluer est un acte technique simple mais souvent mal réalisé. Outils, formation et contrôle régulier garantissent économies et efficacité. La centrale murale est l'investissement le plus rentable pour multi-sites.` }
  ],
  status: "published",
};
