import type { Post } from "../types";
import hero from "@/assets/blog/aerer-bureaux.jpg";

export const post: Post = {
  slug: `reduction-cov-air-interieur`,
  title: `Réduire les COV pour améliorer l'air intérieur des bureaux`,
  description: `Composés Organiques Volatils : choix des produits, ventilation et bonnes pratiques pour un air intérieur sain au bureau.`,
  category: `Écologie & environnement`,
  date: `2025-04-14`,
  readingTime: 8,
  hero,
  heroAlt: `Bureau bien aéré avec plantes pour qualité de l'air intérieur`,
  intro: `Les Composés Organiques Volatils (COV) sont une famille de polluants chimiques qui dégradent l'air intérieur des bureaux. Nettoyage, mobilier, matériaux : tout en émet. Le choix des produits d'entretien est un levier majeur d'amélioration.`,
  content: [
    { type: "h2", text: `Qu'est-ce qu'un COV ?` },
    { type: "p", text: `Composés Organiques Volatils : molécules carbonées qui s'évaporent facilement à température ambiante. Sources : solvants, peintures, colles, parfums synthétiques, produits d'entretien, mobilier neuf (formaldéhyde), désodorisants. Mesurés en µg/m³.` },
    { type: "h2", text: `Les effets sur la santé` },
    { type: "ul", items: [
      `Maux de tête et fatigue`,
      `Irritation des yeux, du nez, de la gorge`,
      `Aggravation de l'asthme et des allergies`,
      `Effets cancérogènes pour certains (formaldéhyde, benzène)`,
      `Syndrome des bâtiments malsains (SBM)`
    ] },
    { type: "h2", text: `Le cadre réglementaire` },
    { type: "p", text: `Décret 2011-1727 : surveillance obligatoire de la qualité de l'air dans les ERP accueillant des enfants. Code du travail : obligation d'évaluer les risques chimiques (DUERP). Étiquetage A+, A, B, C des matériaux de construction selon émissions COV.` },
    { type: "h2", text: `Les COV dans les produits de nettoyage` },
    { type: "p", text: `Détergents conventionnels riches en COV : limonène (parfum agrumes), terpènes (parfum pin), éthanol, propylène glycol. Désodorisants en spray particulièrement chargés. Les produits parfumés sont les principaux émetteurs.` },
    { type: "h2", text: `La substitution Ecolabel` },
    { type: "p", text: `Les produits Ecolabel européen ont une teneur en COV limitée. Privilégier savon noir, vinaigre blanc dilué, bicarbonate, microfibre + eau. Les produits sans parfum ou parfumés aux huiles essentielles dosées sont préférables aux parfums synthétiques.` },
    { type: "h2", text: `La vapeur : zéro COV` },
    { type: "p", text: `Le nettoyage à la vapeur sèche n'émet aucun COV. Idéal en environnement sensible (écoles, crèches, EHPAD). Investissement initial supérieur mais bénéfice santé important. Adapté à 80% des surfaces dans les bureaux modernes.` },
    { type: "callout", text: `ELITESY propose un service 'air intérieur sain' avec produits sans COV (Ecolabel, vapeur, eau pure) pour les clients exigeants (écoles, EHPAD, cabinets médicaux). 06 09 16 50 99.` },
    { type: "h2", text: `La ventilation : indispensable` },
    { type: "p", text: `Aérer minimum 10 minutes deux fois par jour, même en hiver. VMC fonctionnelle et entretenue (filtres changés). Capteurs CO₂ pour piloter le renouvellement d'air (seuil 1000 ppm). La meilleure dilution des COV reste le renouvellement d'air.` },
    { type: "h2", text: `Les désodorisants : à proscrire` },
    { type: "p", text: `Spray, diffuseurs électriques, encens : sources majeures de COV. Préférer aération + nettoyage des sources d'odeur (poubelles, sanitaires). Plantes dépolluantes (chlorophytum, ficus) : effet symbolique mais réel à long terme.` },
    { type: "h2", text: `Le mobilier neuf : période critique` },
    { type: "p", text: `Tout mobilier neuf (panneaux de bois, mousses) émet des COV intensivement les premiers 6 mois (off-gassing). Aérer renforcée, éviter d'installer pendant les vacances longues. Préférer mobilier classé A+ et certifié FSC.` },
    { type: "h2", text: `La mesure des COV` },
    { type: "p", text: `Mesures professionnelles par laboratoire accrédité : 500 à 1500 € selon nombre de points. Capteurs domestiques (Foobot, Awair) : indicatifs. Valeur guide OMS : COV totaux < 200 µg/m³. Au-dessus, action corrective recommandée.` },
    { type: "h2", text: `Le rôle du prestataire` },
    { type: "p", text: `Prestataire engagé : produits Ecolabel, FDS fournies, formation des agents, suivi conso annuel. Bonus : audit qualité air en début de contrat, accompagnement substitution si nécessaire. Critère de plus en plus demandé en appel d'offres.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Réduire les COV au bureau améliore le confort, la santé et la productivité des occupants. Le choix des produits de nettoyage en est un levier direct, immédiat et accessible.` }
  ],
  status: "published",
};
