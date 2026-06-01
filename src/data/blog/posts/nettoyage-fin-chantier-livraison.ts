import type { Post } from "../types";
import hero from "@/assets/blog/fin-chantier.jpg";

export const post: Post = {
  slug: "nettoyage-fin-chantier-livraison",
  title: "Nettoyage de fin de chantier avant livraison : la méthode",
  description:
    "Étapes, matériel et points de contrôle pour livrer un bâtiment impeccable et conforme aux attentes du maître d'ouvrage.",
  category: "Guides Pratiques",
  date: "2025-12-22",
  readingTime: 10,
  hero,
  heroAlt: "Équipe en EPI réalisant un nettoyage de fin de chantier dans un bâtiment neuf",
  intro:
    "Un chantier neuf, ce n'est pas un sol sale : c'est un sol contaminé par tout ce que la construction a produit. Poussière de plâtre incrustée, projections de peinture, traces de béton, autocollants, étiquettes. Le nettoyage de fin de chantier exige une méthode très différente de l'entretien courant. Voici la nôtre.",
  content: [
    { type: "h2", text: "Les trois phases d'un nettoyage fin de chantier" },
    { type: "h3", text: "Phase 1 — Nettoyage grossier (gros œuvre terminé)" },
    { type: "p", text: "Évacuation des gravats restants, balayage mécanisé des grandes surfaces, dépoussiérage des plénums et faux plafonds, aspiration des poussières chargées. Cette phase peut être réalisée par l'entreprise générale ; elle ne suffit jamais à la livraison." },
    { type: "h3", text: "Phase 2 — Nettoyage de finition (avant pose mobilier)" },
    { type: "p", text: "C'est la phase critique. Nettoyage de toutes les surfaces visibles, vitres, sanitaires, sols, intérieurs de placards, équipements. Décollement des autocollants protecteurs, retrait des films plastiques, dégraissage des inox neufs." },
    { type: "h3", text: "Phase 3 — Mise en état finale (avant remise des clés)" },
    { type: "p", text: "Polish des sols, lustrage, désinfection des points de contact, retrait des dernières poussières d'installation, traitement éventuel de marbres et émulsions, contrôle qualité avec rapport photo." },
    { type: "h2", text: "Le matériel mobilisé" },
    { type: "p", text: "Aspirateur HEPA grande capacité, autolaveuse, monobrosse, injecteur-extracteur si moquette, perches télescopiques, échafaudage léger ou nacelle si grande hauteur, dégraissants et décapants spécifiques chantier, EPI complets (masques FFP3 contre les poussières siliceuses)." },
    { type: "callout", text: "ELITESY intervient sur les fins de chantier en Île-de-France avec une équipe dédiée. Devis sous 48 h après visite — 06 09 16 50 99." },
    { type: "h2", text: "Les surfaces qui posent problème" },
    { type: "ul", items: [
      "Vitres avec traces de silicone et autocollants : grattoir céramique + alcool isopropylique",
      "Sols PVC avec traces de plâtre : pré-imprégnation alcaline puis émulsion neuve",
      "Sanitaires neufs avec dépôt de pose : détartrant doux puis lustrage",
      "Inox cuisines : dégraissant alcalin + microfibre dans le sens du grain",
      "Carrelage avec joints encrassés : brossage manuel + décrasseur joint",
      "Faux plafond avec poussière siliceuse : aspiration EPI masque obligatoire",
    ]},
    { type: "h2", text: "Le rendement réaliste" },
    { type: "p", text: "Un nettoyage fin de chantier coûte 4 à 12 €/m² HT selon le niveau de salissure et la nature des finitions. C'est 5 à 10 fois le tarif d'un entretien courant — normal vu la quantité de travail, le matériel spécifique et les heures. Un devis sous 3 €/m² est suspect (souvent compte tenu d'une phase 1 déjà faite par l'entreprise générale)." },
    { type: "h2", text: "Sécurité : un risque sous-estimé" },
    { type: "p", text: "Les poussières fines de chantier (silice, ciment, peinture) sont classées cancérogènes pour certaines. EPI obligatoires : masque FFP3, gants nitrile longs, lunettes anti-projection, chaussures de sécurité. La traçabilité des EPI fait partie du livrable contractuel pour les maîtres d'ouvrage publics." },
    { type: "h2", text: "Le procès-verbal de livraison propreté" },
    { type: "p", text: "À l'issue du nettoyage, un PV est signé entre le prestataire et le donneur d'ordres : zones traitées, points de contrôle (50 à 200 selon la surface), photos, réserves éventuelles. Ce document conditionne la levée des dernières réserves chantier." },
    { type: "h2", text: "Coordination avec l'OPC et le mainteneur" },
    { type: "p", text: "Un nettoyage fin de chantier réussi se coordonne avec l'OPC (ordonnancement-pilotage-coordination) et le futur mainteneur multi-technique. Les fluides doivent être ouverts, les ascenseurs en service, les zones tests sanitaires accessibles. Un planning mal coordonné fait perdre 30 à 50 % du temps utile." },
    { type: "h2", text: "Conclusion : la dernière impression compte plus que la première" },
    { type: "p", text: "Le donneur d'ordres mesure la qualité du chantier à l'état de propreté à la livraison. Un nettoyage bâclé efface deux ans de bon travail. ELITESY intervient en sous-traitance directe ou via entreprise générale sur des sites livrés de tous formats." },
  ],
  status: "published",
};