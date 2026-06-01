import type { Post } from "../types";
import hero from "@/assets/blog/ecran-clavier.jpg";

export const post: Post = {
  slug: "nettoyer-ecran-clavier-bureau",
  title: "Nettoyer écran et clavier sans abîmer son matériel",
  description:
    "Les bons produits, les bons gestes et la bonne fréquence pour préserver vos écrans, claviers et souris au quotidien.",
  category: "Conseils d'entretien",
  date: "2026-03-08",
  readingTime: 8,
  hero,
  heroAlt: "Microfibre passée délicatement sur un écran d'ordinateur dans un bureau",
  intro:
    "Un clavier de bureau abrite en moyenne plus de bactéries qu'une cuvette de WC. Un écran rayé par un mauvais produit coûte plusieurs centaines d'euros. Entre ces deux extrêmes, il existe une méthode simple, sûre et rapide pour nettoyer son poste informatique sans le détruire. La voici.",
  content: [
    { type: "h2", text: "Pourquoi le matériel informatique nécessite un soin particulier" },
    { type: "p", text: "Les écrans modernes (LCD, OLED, LED rétroéclairés) ont un revêtement antireflet fragile. Les claviers concentrent salissures alimentaires, peaux mortes et bactéries dans les interstices des touches. Les souris accumulent un biofilm gras invisible mais bien présent. Trois surfaces, trois protocoles." },
    { type: "h2", text: "L'écran : la règle d'or, jamais de produit directement" },
    { type: "p", text: "Toujours pulvériser sur la microfibre, jamais sur l'écran. La projection de liquide directement risque d'infiltrer le cadre et d'endommager l'électronique. Mouvements en lignes droites, jamais circulaires. Pression légère — l'écran se nettoie, ne se frotte pas." },
    { type: "p", text: "Produit recommandé : eau déminéralisée pure, ou solution dédiée écrans (alcool isopropylique dilué à 50 %). À proscrire absolument : alcool à 90 %, vinaigre, ammoniaque, lingettes domestiques parfumées, essuie-tout (microrayures garanties)." },
    { type: "h2", text: "Le clavier : retourner, secouer, brosser, désinfecter" },
    { type: "ol", items: [
      "Débrancher ou éteindre le clavier",
      "Le retourner et le secouer doucement au-dessus d'une corbeille",
      "Passer une bombe d'air sec entre les touches pour expulser les particules tenaces",
      "Brosser légèrement avec un pinceau souple les interstices",
      "Passer une microfibre légèrement imprégnée d'alcool isopropylique 70 % sur les touches et le boîtier",
      "Laisser sécher 5 minutes avant rebranchement",
    ]},
    { type: "h2", text: "La souris : le geste oublié qui change tout" },
    { type: "p", text: "Microfibre + alcool isopropylique 70 %, attention au capteur optique (souffler uniquement, ne pas frotter). Pour les souris à roulette mécanique, démontage rapide de la molette une fois par trimestre. Les souris partagées (open-space, salles de réunion) doivent être désinfectées après chaque utilisateur." },
    { type: "callout", text: "ELITESY intègre la désinfection hebdomadaire des points informatiques au forfait tertiaire. Vos collaborateurs travaillent sur un poste propre — 06 09 16 50 99." },
    { type: "h2", text: "Fréquences recommandées" },
    { type: "ul", items: [
      "Écran : dépoussiérage hebdomadaire, nettoyage humide mensuel",
      "Clavier : dépoussiérage hebdomadaire, désinfection mensuelle (ou après chaque rhume)",
      "Souris : désinfection hebdomadaire, hebdomadaire renforcée si partagée",
      "Téléphone fixe et combiné : désinfection bihebdomadaire",
      "Casque audio (mousse) : désinfection mensuelle",
    ]},
    { type: "h2", text: "Les erreurs courantes" },
    { type: "ul", items: [
      "Vaporiser le produit directement sur l'écran : infiltration et panne",
      "Utiliser une lingette désinfectante grand public sur un écran : abrasion du revêtement",
      "Frotter avec essuie-tout : microrayures permanentes",
      "Nettoyer un clavier sans le débrancher : risque court-circuit",
      "Mélanger alcool et autre produit ménager : émanations toxiques",
    ]},
    { type: "h2", text: "Et l'ordinateur portable ?" },
    { type: "p", text: "Même protocole, avec une attention supplémentaire à la ventilation (souffler à l'air sec une fois par trimestre pour éviter la surchauffe) et aux ports USB (brosse fine et air sec uniquement). Jamais d'aspirateur domestique : la décharge statique abîme l'électronique." },
    { type: "h2", text: "Conclusion : protéger un actif" },
    { type: "p", text: "Le poste informatique d'un collaborateur représente entre 800 et 2 500 € HT. Un entretien régulier prolonge sa durée de vie de 30 à 50 %, améliore l'hygiène au travail et la qualité perçue du poste. ELITESY forme ses agents à ces protocoles précis pour ses clients tertiaires." },
  ],
  status: "published",
};