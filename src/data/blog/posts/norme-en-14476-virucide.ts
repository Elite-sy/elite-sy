import type { Post } from "../types";
import hero from "@/assets/blog/en14476.jpg";

export const post: Post = {
  slug: `norme-en-14476-virucide`,
  title: `Norme EN 14476 : que garantit-elle vraiment ?`,
  description: `Comprendre la norme EN 14476 : tests d'efficacité virucide des désinfectants et temps de contact à respecter.`,
  category: `Normes & réglementations`,
  date: `2025-06-02`,
  readingTime: 8,
  hero,
  heroAlt: `Test d'efficacité virucide d'un désinfectant en laboratoire`,
  intro: `La norme EN 14476 est la référence européenne pour l'efficacité virucide des désinfectants chimiques. Indispensable dans le contexte post-Covid, elle reste mal comprise. Voici ce qu'elle garantit vraiment.`,
  content: [
    { type: "h2", text: `Le cadre normatif` },
    { type: "p", text: `NF EN 14476 'Antiseptiques et désinfectants chimiques - Essai quantitatif de suspension pour l'évaluation de l'activité virucide dans le domaine médical'. Norme européenne adoptée en France. Définit le protocole d'essai en laboratoire pour qualifier un produit de virucide.` },
    { type: "h2", text: `Les virus testés` },
    { type: "ul", items: [
      `Polyovirus (référent virus non enveloppé résistant)`,
      `Adénovirus (référent virus non enveloppé)`,
      `Norovirus murin (gastro-entérites)`,
      `Virus vaccinia (référent virus enveloppé)`,
      `BVDV (Bovine Viral Diarrhea Virus, modèle hépatite C)`,
      `MVA (Modified Vaccinia Ankara, modèle SARS-CoV-2)`
    ] },
    { type: "h2", text: `Les niveaux d'activité` },
    { type: "p", text: `Activité virucide complète : actif sur tous les virus testés (polyovirus inclus). Activité virucide limitée : actif sur virus enveloppés uniquement (vaccinia). Activité virucide étendue : actif sur virus enveloppés et adénovirus + norovirus. Le marquage doit préciser le niveau et les conditions (temps, température, charge).` },
    { type: "h2", text: `Les conditions d'essai` },
    { type: "p", text: `Concentration d'usage du produit, temps de contact défini (souvent 5 minutes), température (20 °C ou 10 °C), conditions de charge (sols propres = conditions propres ; sols souillés = conditions sales avec albumine bovine). Un même produit peut être virucide en conditions propres mais pas sales.` },
    { type: "h2", text: `Le temps de contact : crucial` },
    { type: "p", text: `C'est l'erreur la plus fréquente : appliquer le produit puis essuyer aussitôt. Si la norme est validée à 5 minutes, le produit doit rester humide 5 minutes. Sinon, l'activité virucide n'est pas garantie. Un produit 'virucide' mal utilisé n'est pas virucide.` },
    { type: "h2", text: `La différence avec EN 1276 et EN 1500` },
    { type: "ul", items: [
      `EN 1276 : activité bactéricide en suspension (référence bactéries)`,
      `EN 1500 : antisepsie hygiénique des mains (gels hydroalcooliques)`,
      `EN 14476 : activité virucide en suspension (référence virus)`,
      `EN 13727 : bactéricide en conditions cliniques`,
      `EN 13624 : fongicide en conditions cliniques`
    ] },
    { type: "callout", text: `ELITESY utilise exclusivement des désinfectants conformes EN 14476 dans les zones sensibles (cabinets médicaux, écoles en période épidémique). Fiches techniques fournies. 06 09 16 50 99.` },
    { type: "h2", text: `SARS-CoV-2 : ce qu'il faut savoir` },
    { type: "p", text: `Le SARS-CoV-2 est un virus enveloppé donc fragile. L'activité virucide limitée EN 14476 (sur vaccinia) suffit à le neutraliser. Tous les produits désinfectants courants à base d'alcool 70%, eau de Javel diluée, ammoniums quaternaires sont efficaces.` },
    { type: "h2", text: `Comment lire une fiche technique` },
    { type: "p", text: `Vérifier : numéro de la norme (EN 14476), date (versions 2013, 2019, 2022), concentration testée, temps de contact, conditions (propres/sales), souches testées. Sans ces précisions, l'allégation 'virucide' est commerciale et non scientifique.` },
    { type: "h2", text: `Les pièges marketing` },
    { type: "p", text: `'Élimine 99,9 % des virus' sans norme citée = aucune valeur juridique. 'Virucide' sans norme = idem. 'Conforme aux normes européennes' sans précision = idem. Toujours exiger les références EN et les conditions.` },
    { type: "h2", text: `La rotation des biocides` },
    { type: "p", text: `En environnement hospitalier ou pharmaceutique, alterner les biocides évite la sélection de souches résistantes. Combinaison d'oxydants (peroxyde), d'alcools (éthanol), d'ammoniums (DDAC) sur cycle mensuel.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `EN 14476 est un outil scientifique précieux mais elle exige rigueur de lecture et respect du temps de contact. Un bon désinfectant mal utilisé n'est plus un bon désinfectant.` }
  ],
  status: "published",
};
