import type { Post } from "../types";
import hero from "@/assets/blog/tri-dechets.jpg";

export const post: Post = {
  slug: "gestion-dechets-bureaux-tri",
  title: "Gestion des déchets de bureau et tri sélectif : décret 5 flux",
  description:
    "Mettre en place un dispositif de tri efficace et conforme au décret 5 flux dans un environnement tertiaire.",
  category: "Guides Pratiques",
  date: "2025-10-27",
  readingTime: 9,
  hero,
  heroAlt: "Bacs de tri sélectif aux couleurs réglementaires alignés dans un bureau",
  intro:
    "Le tri sélectif au bureau n'est plus une option : c'est une obligation légale depuis le décret 5 flux. Mais entre l'obligation et son application réelle, il y a souvent un fossé. Voici comment ELITESY structure le dispositif chez ses clients tertiaires, avec un dispositif qui tient dans la durée.",
  content: [
    { type: "h2", text: "Le cadre légal : le décret 5 flux étendu" },
    { type: "p", text: "Depuis 2016, étendu en 2021 et 2025, tout producteur ou détenteur de déchets de plus de 1 100 litres/semaine doit trier à la source : papier/carton, métal, plastique, verre, bois, biodéchets (depuis 2024), textiles, fraction minérale. Sept à neuf flux selon les sites. Le non-respect expose à une amende pouvant atteindre 150 000 €." },
    { type: "h2", text: "Le dispositif type d'un bureau" },
    { type: "ul", items: [
      "Bac jaune : papier, carton, plastique, métal (selon territoire et collecte)",
      "Bac vert ou marron : verre",
      "Bac marron : biodéchets (épluchures, restes alimentaires)",
      "Bac gris : déchets ultimes (résiduels)",
      "Caissette DEEE : piles, ampoules, petit électroménager",
      "Box confidentiel : papiers à détruire (RGPD)",
      "Toner et cartouches : collecte fabricant ou prestataire dédié",
    ]},
    { type: "h2", text: "Le piège : la corbeille individuelle" },
    { type: "p", text: "Les corbeilles individuelles sous chaque bureau cassent le tri : les collaborateurs y jettent tout en vrac, l'agent vide dans un seul sac. Le bon dispositif supprime les corbeilles individuelles et installe des îlots de tri (4 bacs accolés) tous les 15-20 postes." },
    { type: "p", text: "Cette suppression provoque toujours des résistances initiales, mais transforme radicalement l'efficacité du tri (+40 à +70 % de tri effectif en moyenne)." },
    { type: "h2", text: "La signalétique : claire, visuelle, multilingue" },
    { type: "p", text: "Pictogrammes universels au-dessus de chaque bac, codes couleur respectés, exemples visuels de ce qui va dans chaque bac (post-it adhésifs, gobelet, papier kleenex). Affichage en français + anglais sur les sites internationaux. Mise à jour à chaque évolution réglementaire." },
    { type: "callout", text: "ELITESY accompagne ses clients dans la mise en conformité au décret 5 flux : audit, dispositif, formation des équipes. 06 09 16 50 99." },
    { type: "h2", text: "Le rôle du prestataire de nettoyage" },
    { type: "p", text: "L'agent collecte les bacs et les regroupe au local poubelles en respectant la séparation. Il ne mélange jamais des flux différents — la traçabilité est rompue. Il signale les anomalies (bac jaune contenant des restes alimentaires) au référent site." },
    { type: "p", text: "Cette discipline est l'une des plus discriminantes entre prestataires. Un audit du local poubelles indique en 30 secondes le sérieux du tri pratiqué." },
    { type: "h2", text: "Les biodéchets : nouveauté 2024" },
    { type: "p", text: "Depuis le 1er janvier 2024, tout producteur, y compris petit, doit trier ses biodéchets. Cela concerne les cuisines de bureau, restaurants d'entreprise, machines à café (marc). Solutions : bac dédié avec sac compostable, collecte par prestataire spécialisé, ou composteur sur site. Coût de mise en place : 500 à 2 500 € selon configuration." },
    { type: "h2", text: "Traçabilité et reporting" },
    { type: "p", text: "Bordereau de suivi de déchets dangereux (BSD) obligatoire pour DEEE, piles, toners. Registre annuel des déchets produits exigible au-delà de certains seuils. Rapport annuel au bilan RSE pour les sociétés concernées. Le prestataire de collecte fournit ces documents — exigez-les." },
    { type: "h2", text: "Le ROI mesurable" },
    { type: "p", text: "Un tri bien fait réduit la facture déchets ultimes de 30 à 60 %, la TGAP de 20 à 40 %, et valorise économiquement les flux (papier, métal). Sur un site de 100 collaborateurs, l'économie nette est de 2 000 à 5 000 €/an. Plus une contribution mesurable au bilan carbone." },
    { type: "h2", text: "Conclusion : un dispositif, pas un slogan" },
    { type: "p", text: "Le tri sélectif efficace tient dans le dispositif physique, la signalétique et l'engagement du prestataire. ELITESY accompagne les sites tertiaires de l'audit initial au reporting RSE." },
  ],
  status: "published",
};