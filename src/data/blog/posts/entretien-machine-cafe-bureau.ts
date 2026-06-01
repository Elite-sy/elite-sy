import type { Post } from "../types";
import hero from "@/assets/blog/machine-cafe.jpg";

export const post: Post = {
  slug: "entretien-machine-cafe-bureau",
  title: "Entretien de la machine à café au bureau : le geste oublié",
  description:
    "Limiter bactéries, odeurs et pannes : méthode, fréquence et conseils pratiques pour un café propre et une machine durable.",
  category: "Conseils d'entretien",
  date: "2026-02-12",
  readingTime: 8,
  hero,
  heroAlt: "Machine à café professionnelle en cuisine de bureau en cours d'entretien",
  intro:
    "La machine à café du bureau est l'équipement le plus utilisé après le clavier. C'est aussi l'un des moins entretenus. Le résultat se voit (calcaire), se sent (odeur) et se mesure (bactéries dans le bac). Voici comment éviter le pire — et prolonger la vie d'un appareil souvent coûteux.",
  content: [
    { type: "h2", text: "Pourquoi une machine sale est un problème sanitaire" },
    { type: "p", text: "Le bac à marc, le bac d'égouttage et la buse vapeur constituent un environnement chaud et humide idéal pour le développement bactérien (levures, moisissures, biofilm). Plusieurs études ont mesuré sur des machines de bureau non entretenues des charges microbiennes supérieures à celles d'un évier de cuisine partagé." },
    { type: "p", text: "Au-delà du risque sanitaire (rare mais documenté), c'est surtout le goût qui en pâtit : café amer, lait à goût rance, odeur persistante de torréfaction brûlée." },
    { type: "h2", text: "Le rituel quotidien — 2 minutes" },
    { type: "ul", items: [
      "Vider le bac à marc",
      "Vider et rincer le bac d'égouttage",
      "Passer un coup d'éponge sur la grille",
      "Purger 1 tasse d'eau seule pour rincer le circuit",
      "Si machine à lait : purger la buse vapeur après chaque utilisation",
    ]},
    { type: "h2", text: "Le rituel hebdomadaire — 15 minutes" },
    { type: "ul", items: [
      "Nettoyage complet du bac à marc à l'eau savonneuse",
      "Démontage et lavage du bac d'égouttage",
      "Démontage de la buse vapeur, lavage et désinfection",
      "Nettoyage des grilles et plateaux à l'eau chaude savonneuse",
      "Essuyage extérieur avec microfibre et produit alimentaire",
    ]},
    { type: "h2", text: "Le détartrage — selon dureté de l'eau" },
    { type: "p", text: "Le calcaire est l'ennemi numéro un. Il bouche les circuits, abîme la résistance, dégrade le goût. Fréquence : toutes les 200 à 300 utilisations en eau dure (Île-de-France), toutes les 500 en eau douce. Utiliser exclusivement le détartrant préconisé par le fabricant — un produit générique peut endommager la pompe." },
    { type: "p", text: "Conseil ELITESY : installer une cartouche filtrante en entrée d'eau. Coût initial 80 €, fréquence détartrage divisée par trois, durée de vie machine doublée." },
    { type: "h2", text: "Le programme de nettoyage automatique" },
    { type: "p", text: "La plupart des machines professionnelles ont un cycle automatique de nettoyage. Le lancer une fois par jour minimum, idéalement en fin de matinée et fin d'après-midi sur les machines à fort débit. C'est 4 minutes qui changent tout." },
    { type: "callout", text: "Vous voulez confier l'entretien des espaces office à votre prestataire ? ELITESY intègre l'entretien des machines à café au forfait — 06 09 16 50 99." },
    { type: "h2", text: "Qui doit s'en occuper ?" },
    { type: "p", text: "Trois options : un collaborateur volontaire (peu fiable dans la durée), le prestataire de nettoyage (à inscrire au cahier des charges), le prestataire café lui-même (souvent inclus dans le contrat de location-maintenance). La meilleure pratique : le prestataire café gère le détartrage et la maintenance ; le prestataire de nettoyage gère le quotidien et l'hebdomadaire." },
    { type: "h2", text: "Le ROI du bon entretien" },
    { type: "p", text: "Une machine professionnelle bureau coûte 2 000 à 6 000 €. Bien entretenue, elle tient 7 à 10 ans. Mal entretenue, 3 à 4 ans. Le différentiel d'amortissement seul justifie largement le temps d'entretien — sans parler de la qualité du café et de la satisfaction des équipes." },
    { type: "h2", text: "Conclusion : une routine, pas une corvée" },
    { type: "p", text: "Un protocole d'entretien clair, affiché et respecté transforme la machine à café en équipement durable. ELITESY le formalise pour ses clients et le suit dans le reporting qualité mensuel." },
  ],
  status: "published",
};