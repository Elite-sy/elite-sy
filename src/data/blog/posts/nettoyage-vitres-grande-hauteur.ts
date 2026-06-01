import type { Post } from "../types";
import hero from "@/assets/blog/vitres-grande-hauteur.jpg";

export const post: Post = {
  slug: "nettoyage-vitres-grande-hauteur",
  title: "Nettoyage de vitres en grande hauteur : sécurité, méthodes et choix de la bonne technique",
  description:
    "Perche d'eau pure, nacelle, cordistes, échafaudage : comment choisir la technique adaptée à votre façade, et les obligations de sécurité incontournables.",
  category: "Guides Pratiques",
  date: "2026-04-14",
  readingTime: 11,
  hero,
  heroAlt:
    "Cordiste laveur de vitres suspendu à une corde devant la façade vitrée d'un immeuble de bureaux parisien",
  intro:
    "Une façade vitrée d'immeuble de bureau, c'est la première chose que voient vos visiteurs, vos collaborateurs et vos voisins. Quand elle est propre, elle valorise le bâtiment. Quand elle est sale, elle dégrade tout — image, lumière intérieure, qualité de vie. Mais nettoyer une vitre à 30 mètres du sol n'a rien à voir avec un coup de raclette au rez-de-chaussée. Quatre techniques coexistent, chacune avec ses avantages, ses coûts et ses contraintes de sécurité. Voici comment ELITESY choisit la bonne pour chaque chantier.",
  content: [
    { type: "h2", text: "Pourquoi la grande hauteur change tout" },
    {
      type: "p",
      text: "Au-delà de 3 mètres, on quitte le domaine du nettoyage classique pour entrer dans celui du travail en hauteur, encadré par le Code du travail (articles R.4323-58 et suivants). Toute intervention doit faire l'objet d'une évaluation des risques, d'un plan de prévention si elle a lieu sur un site extérieur à l'entreprise, et exécutée par du personnel formé et habilité. Le donneur d'ordres (vous) reste juridiquement co-responsable de la sécurité de l'intervention.",
    },
    {
      type: "p",
      text: "Cette réalité change la nature même du choix technique. La question n'est pas seulement 'comment obtenir des vitres propres' mais 'comment les obtenir propres avec le risque le plus faible possible pour les opérateurs'. C'est ce qui guide la sélection ELITESY.",
    },
    { type: "h2", text: "Technique n°1 — La perche d'eau pure : la révolution discrète" },
    {
      type: "p",
      text: "C'est la technique qui a transformé le métier ces quinze dernières années. Le principe : une perche télescopique en fibre de carbone, équipée d'une brosse, alimentée par un tuyau d'eau pure osmosée. L'opérateur reste au sol et brosse la vitre, l'eau pure rince sans laisser de trace en séchant.",
    },
    { type: "h3", text: "Avantages" },
    {
      type: "ul",
      items: [
        "Aucune nacelle, aucune corde, aucun échafaudage : risque chute zéro",
        "Pas de produit chimique : compatible bâtiments certifiés HQE, BREEAM",
        "Aucune fermeture de voirie ni nuisance pour les occupants",
        "Productivité élevée : 200 à 400 m² de vitres par heure et par opérateur",
        "Coût d'intervention divisé par deux à trois par rapport à la nacelle",
      ],
    },
    { type: "h3", text: "Limites" },
    {
      type: "ul",
      items: [
        "Plafond technique : 22 mètres environ avec une perche standard, 30 m avec matériel haut de gamme",
        "Inefficace sur les façades très encrassées ou avec dépôts gras anciens — nécessite une intervention manuelle préalable",
        "Sensible au vent au-delà de 25 km/h",
        "Investissement matériel important (groupe à osmose inverse, perches télescopiques en carbone)",
      ],
    },
    {
      type: "callout",
      text: "Pour une majorité d'immeubles de bureau parisiens (R+5 à R+7), la perche d'eau pure couvre 100 % des besoins. C'est notre solution de premier choix.",
    },
    { type: "h2", text: "Technique n°2 — La nacelle élévatrice" },
    {
      type: "p",
      text: "Plate-forme élévatrice mobile (PEMP), articulée ou télescopique, sur camion ou sur remorque. L'opérateur travaille debout dans la nacelle, harnais antichute fixé au point d'ancrage. Utilisée quand la perche ne suffit pas ou quand l'accès au sol n'est pas dégagé.",
    },
    { type: "h3", text: "Avantages" },
    {
      type: "ul",
      items: [
        "Hauteur de travail jusqu'à 70 mètres pour les modèles les plus grands",
        "Précision du geste — l'opérateur est au contact direct de la vitre",
        "Permet le nettoyage manuel approfondi sur dépôts difficiles",
      ],
    },
    { type: "h3", text: "Limites" },
    {
      type: "ul",
      items: [
        "Nécessite un sol porteur, dégagé, accessible : pas toujours possible en milieu urbain dense",
        "Souvent requiert une autorisation d'occupation du domaine public (mairie) avec délais",
        "Opérateur titulaire du CACES R486 obligatoire",
        "Coût élevé : location nacelle + opérateur + AOT, plusieurs centaines d'euros par jour",
        "Productivité plus faible que la perche",
      ],
    },
    { type: "h2", text: "Technique n°3 — Le travail sur cordes (cordistes)" },
    {
      type: "p",
      text: "L'opérateur travaille suspendu à deux cordes indépendantes (corde de travail + corde de sécurité), équipé d'un descendeur, d'un bloqueur et d'un système de récupération. Métier réglementé, formation CQP cordiste obligatoire, recyclage tous les 12 mois.",
    },
    { type: "h3", text: "Avantages" },
    {
      type: "ul",
      items: [
        "Accès à des façades inaccessibles autrement : tours, atriums intérieurs, formes complexes",
        "Aucune emprise au sol — idéal en centre-ville dense",
        "Mise en œuvre rapide une fois les points d'ancrage validés",
      ],
    },
    { type: "h3", text: "Limites" },
    {
      type: "ul",
      items: [
        "Nécessite des points d'ancrage certifiés en toiture, contrôlés annuellement",
        "Métier physique, productivité plus faible que la perche",
        "Coût intermédiaire, mais avec encadrement renforcé obligatoire",
        "Conditions météo strictes : pas de vent fort, pas de pluie, pas de gel",
      ],
    },
    { type: "h2", text: "Technique n°4 — Échafaudage roulant ou fixe" },
    {
      type: "p",
      text: "Technique de moins en moins utilisée pour le nettoyage seul, car lente et coûteuse à monter. Reste pertinente pour les chantiers longs combinant nettoyage, ravalement et entretien.",
    },
    { type: "h2", text: "L'arbre de décision ELITESY" },
    {
      type: "p",
      text: "Sur chaque devis, nous suivons une logique simple pour proposer la technique la mieux adaptée. L'objectif n'est pas de vendre la solution la plus chère, mais celle qui combine sécurité, qualité et coût optimal.",
    },
    {
      type: "ol",
      items: [
        "Hauteur sous 22 m + façade accessible au sol + état standard → perche d'eau pure",
        "Hauteur 22-30 m + sol porteur disponible + accès véhicule → nacelle",
        "Hauteur supérieure à 30 m ou centre-ville dense sans accès véhicule → cordistes",
        "Chantier long avec autres interventions de façade → échafaudage",
        "Façade très encrassée → intervention préalable au produit + technique principale",
      ],
    },
    { type: "h2", text: "Fréquence : combien de fois par an ?" },
    {
      type: "p",
      text: "La fréquence optimale dépend de l'exposition, du trafic environnant et de l'usage du bâtiment. Pour des bureaux parisiens standards, ELITESY recommande deux passages par an au minimum, quatre pour les vitrines commerciales en zone urbaine très polluée, six à douze pour les enseignes haut de gamme et les hôtels.",
    },
    {
      type: "p",
      text: "Une vitre rincée tous les trois mois reste accumule moins de calcaire et se nettoie plus vite à chaque passage — le coût annuel converge vers celui d'un nettoyage biannuel mal préparé.",
    },
    { type: "h2", text: "La sécurité : ce qu'un donneur d'ordres doit exiger" },
    {
      type: "p",
      text: "Avant tout chantier en hauteur, votre prestataire doit pouvoir fournir un plan de prévention, le PPSPS si applicable, les attestations de formation et habilitation des opérateurs, et les certificats de vérification du matériel (CACES, vérification générale périodique des nacelles, contrôle des points d'ancrage). Tout refus ou délai de communication de ces pièces est un signal d'alerte.",
    },
    {
      type: "ul",
      items: [
        "Attestation R486 nacelle, CQP cordiste, formations habilitation travail en hauteur",
        "Vérification générale périodique du matériel (semestrielle minimum)",
        "Assurance RC professionnelle avec garantie travaux en hauteur",
        "Déclaration préalable à la mairie si occupation du domaine public",
        "Périmètre de sécurité au sol pendant l'intervention",
      ],
    },
    { type: "h2", text: "L'expérience ELITESY en Île-de-France" },
    {
      type: "p",
      text: "Nos équipes interviennent sur tout type de bâtiment : sièges sociaux du quartier Madeleine, immeubles HLM du 13e, hôtels du 8e, copropriétés haussmanniennes du 17e. Nous combinons systématiquement perche d'eau pure et intervention spécialisée selon les besoins du site, avec un planning annuel cadencé pour éviter les urgences.",
    },
    {
      type: "callout",
      text: "Vitres ternes, encadrements salis, image dégradée ? Demandez un diagnostic façade gratuit au 06 09 16 50 99 — un expert ELITESY se déplace sous 5 jours.",
    },
  ],
  status: "published",
};