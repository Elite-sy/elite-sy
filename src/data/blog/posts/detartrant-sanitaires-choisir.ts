import type { Post } from "../types";
import hero from "@/assets/blog/sanitaires-bureau.jpg";

export const post: Post = {
  slug: `detartrant-sanitaires-choisir`,
  title: `Choisir un détartrant pour sanitaires professionnels`,
  description: `Force, compatibilité matériaux et précautions d'usage : guide d'achat des détartrants sanitaires professionnels.`,
  category: `Produits & techniques`,
  date: `2025-01-27`,
  readingTime: 7,
  hero,
  heroAlt: `Produits détartrants sanitaires professionnels`,
  intro: `Le calcaire est l'ennemi numéro 1 des sanitaires professionnels, surtout en Île-de-France où l'eau est très calcaire. Le bon détartrant prolonge la vie des équipements et préserve l'aspect visuel. Mais le choix doit être réfléchi.`,
  content: [
    { type: "h2", text: `Le calcaire : ennemi structurel` },
    { type: "p", text: `L'eau parisienne titre 28 à 35°F (très calcaire). Le calcaire se dépose sur cuvettes, robinetterie, parois douches, miroirs. Il abrite biofilm bactérien et urines, génère mauvaises odeurs, ternit l'aspect. Un sanitaire mal détartré est sale durablement.` },
    { type: "h2", text: `Les familles de détartrants` },
    { type: "ul", items: [
      `Acide chlorhydrique pur : interdit (dangereux)`,
      `Acide phosphorique : efficace, peu agressif`,
      `Acide formique : très efficace, attaque l'inox`,
      `Acide citrique : doux, écolabellisable`,
      `Acide sulfamique : standard pro, bon compromis`
    ] },
    { type: "h2", text: `Le pH : indicateur clé` },
    { type: "p", text: `Détartrant doux : pH 2-3 (entretien quotidien). Détartrant standard : pH 1-2 (hebdo). Détartrant choc : pH < 1 (mensuel). Plus le pH est bas, plus l'efficacité est rapide mais plus le risque corrosion est élevé. Adapter à la fréquence d'usage.` },
    { type: "h2", text: `La compatibilité matériaux` },
    { type: "ul", items: [
      `Inox : éviter acide formique et chlorhydrique (corrosion)`,
      `Chromé : tolère pH 1-2 avec rinçage immédiat`,
      `Marbre/calcaire : interdit (dissous la pierre)`,
      `Émail céramique : tous tolérés sauf chlorhydrique`,
      `Aluminium : éviter acides forts`,
      `Joints silicones : éviter usage prolongé`
    ] },
    { type: "h2", text: `Détartrant + désinfectant combiné` },
    { type: "p", text: `Produits 2-en-1 : pratiques pour l'entretien quotidien. Limites : compromis sur efficacité des deux fonctions. Préférer 2 produits distincts pour grand nettoyage. Coût similaire mais résultat supérieur.` },
    { type: "h2", text: `Le temps de contact` },
    { type: "p", text: `Détartrant doit rester en contact 5 à 15 minutes selon entartrement. Appliquer, laisser agir, frotter, rincer abondamment. Rincer immédiatement après détartrage : un résidu acide rétro-corrode.` },
    { type: "callout", text: `ELITESY utilise détartrant pro sulfamique pH 1,5 en entretien hebdo et choc phosphorique mensuel sur sanitaires fortement entartrés. Compatibilité testée selon matériaux du site. 06 09 16 50 99.` },
    { type: "h2", text: `Les méthodes d'application` },
    { type: "ul", items: [
      `Cuvette WC : laisser agir 15 minutes puis brossage`,
      `Robinetterie : essuyer généreusement, laisser 5 min, rincer`,
      `Parois douche : pulvériser, laisser 10 min, rincer`,
      `Miroirs : éviter (acide attaque le tain au verso)`
    ] },
    { type: "h2", text: `Le détartrage choc` },
    { type: "p", text: `Mensuel ou trimestriel selon dureté locale : détartrant choc + temps de contact long + brossage mécanique. Sanitaires retrouvés comme neufs. Indispensable en zone calcaire forte (Paris).` },
    { type: "h2", text: `Les alternatives écologiques` },
    { type: "p", text: `Acide citrique en poudre (sachet de 1 kg = 2-5 €) : efficace pour entretien régulier. Vinaigre blanc à 14% : alternative économique. Sels d'agrumes pour entretien quotidien. Limites : moins puissants sur entartrement épais.` },
    { type: "h2", text: `La sécurité` },
    { type: "p", text: `Gants nitrile, lunettes obligatoires. Ventilation pendant et après. JAMAIS mélanger avec eau de Javel (chlore toxique) ou ammoniaque (chloramines). Étiquetage CLP respecté. FDS accessible.` },
    { type: "h2", text: `L'entartrement préventif` },
    { type: "p", text: `Détartrage quotidien doux = jamais de gros entartrement. Plus économique et plus sain que les chocs trimestriels. Discipline d'équipe et formation.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Le bon détartrant : sulfamique pH 1,5 pour usage standard, citrique pour écolabel quotidien, phosphorique choc occasionnel. Compatibilité matériaux et temps de contact respectés.` }
  ],
  status: "published",
};
