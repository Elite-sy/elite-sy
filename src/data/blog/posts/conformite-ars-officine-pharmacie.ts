import type { Post } from "../types";
import hero from "@/assets/blog/conformite-ars-pharmacie.jpg";

export const post: Post = {
  slug: "conformite-ars-officine-pharmacie",
  title: "Conformité ARS en officine de pharmacie : le dossier prêt pour l'inspection",
  description:
    "Plan de nettoyage, traçabilité, produits homologués, formation du personnel : tout ce qu'attend l'ARS lors d'une inspection en officine, et comment ELITESY structure votre dossier en 21 jours.",
  category: "Normes & réglementations",
  date: "2026-05-05",
  readingTime: 12,
  hero,
  heroAlt:
    "Intérieur d'une pharmacie d'officine moderne avec comptoir bois clair et étagères blanches alignées",
  intro:
    "Une inspection ARS dans une officine ne ressemble à aucun autre contrôle qualité. L'inspecteur n'évalue pas seulement la propreté visible — il vérifie qu'un système documentaire vivant pilote chaque geste d'hygiène, depuis la préparation magistrale jusqu'au comptoir où sont délivrés des médicaments stériles. Voici ce que l'ARS attend vraiment, et comment ELITESY construit avec les pharmaciens titulaires un dossier opposable, prêt à être présenté sans préparation de dernière minute.",
  content: [
    { type: "h2", text: "Le cadre réglementaire : ce que l'ARS contrôle réellement" },
    {
      type: "p",
      text: "L'Agence Régionale de Santé n'invente rien sur place. Elle applique les Bonnes Pratiques de Dispensation (BPD), le Code de la Santé Publique, et le référentiel d'évaluation de l'Ordre national des pharmaciens. Sur le volet hygiène, l'inspecteur vérifie trois choses : que les locaux et équipements ne peuvent pas contaminer le médicament délivré, que les produits utilisés sont compatibles avec l'activité pharmaceutique, et que tout ce qui est fait est tracé.",
    },
    {
      type: "p",
      text: "Beaucoup d'officines pensent être conformes parce que la pharmacie est propre. C'est insuffisant. L'ARS demande la preuve que la propreté est obtenue de façon reproductible, par une procédure écrite, exécutée par un personnel formé, contrôlée et corrigée si besoin. C'est la différence entre faire le ménage et appliquer un plan de nettoyage.",
    },
    { type: "h2", text: "Le plan de nettoyage : pièce maîtresse du dossier" },
    {
      type: "p",
      text: "C'est le document que l'inspecteur demande en premier. Il doit décrire, zone par zone, ce qui est nettoyé, à quelle fréquence, avec quel produit, à quelle dilution, par qui, et comment c'est contrôlé. Pour une officine standard, ELITESY structure le plan en cinq zones distinctes, chacune ayant son propre niveau d'exigence.",
    },
    { type: "h3", text: "Zone 1 — Comptoir et espace de vente" },
    {
      type: "p",
      text: "Surface en contact direct avec le public et le médicament au moment de la délivrance. Désinfection plusieurs fois par jour avec un produit détergent-désinfectant à large spectre, normes EN 1276 (bactéricide) et EN 14476 (virucide) au minimum. Temps de contact respecté, microfibre dédiée à code couleur.",
    },
    { type: "h3", text: "Zone 2 — Préparatoire" },
    {
      type: "p",
      text: "Lieu où sont réalisées les préparations magistrales et hospitalières. Sols et paillasses nettoyés en début et fin de journée, plan de travail désinfecté avant chaque préparation. Aucun produit parfumé, aucune lavette en coton — uniquement microfibre lavée à 90 °C sans adoucissant.",
    },
    { type: "h3", text: "Zone 3 — Back-office, robot, tiroirs et rayonnages" },
    {
      type: "p",
      text: "Dépoussiérage hebdomadaire, désinfection mensuelle. Le robot est ouvert et nettoyé selon le protocole constructeur, avec consignation dans le carnet d'entretien. Les rayonnages sont vidés une à deux fois par an pour un nettoyage en profondeur.",
    },
    { type: "h3", text: "Zone 4 — Sanitaires, vestiaires, salle de pause" },
    {
      type: "p",
      text: "Quotidien minimum. Microfibres dédiées (code couleur rouge), produits sanitaires spécifiques, contrôle visuel signé.",
    },
    { type: "h3", text: "Zone 5 — Réserves, escaliers, parties communes" },
    {
      type: "p",
      text: "Hebdomadaire avec traçabilité. C'est souvent la zone oubliée — et c'est précisément là que l'inspecteur ira regarder pour vérifier la sincérité du dossier.",
    },
    { type: "h2", text: "Traçabilité : ce qui transforme un ménage en preuve" },
    {
      type: "p",
      text: "Sans traçabilité, le plan de nettoyage ne vaut rien aux yeux de l'ARS. Chaque passage doit être consigné. Trois options coexistent dans les officines françaises : la fiche papier signée affichée dans chaque zone, le carnet de liaison centralisé, ou la solution numérique avec QR codes scannés à chaque intervention. ELITESY déploie par défaut un système hybride : papier sur le terrain pour la signature à chaud, consolidation numérique mensuelle pour le tableau de bord.",
    },
    {
      type: "callout",
      text: "Une traçabilité conforme tient en quatre informations par intervention : date, heure, zone, signature de l'agent. Tout le reste est du confort de gestion.",
    },
    {
      type: "p",
      text: "Les fiches doivent être archivées trois ans minimum. Lors d'une inspection, l'ARS demande couramment six mois d'historique. Une absence de traçabilité sur la période contrôlée est un motif récurrent d'observation, voire d'injonction.",
    },
    { type: "h2", text: "Le choix des produits : la zone grise la plus dangereuse" },
    {
      type: "p",
      text: "Beaucoup d'officines utilisent encore des produits de grande surface ou des lingettes désinfectantes ménagères. C'est un risque double. D'abord parce que ces produits n'apportent pas la preuve de leur efficacité virucide ou bactéricide selon les normes EN exigées. Ensuite parce qu'ils peuvent contenir des substances incompatibles avec le médicament — parfums puissants, COV, résidus tensioactifs susceptibles de migrer sur les blisters.",
    },
    {
      type: "ul",
      items: [
        "Détergent-désinfectant homologué normes EN 1276, EN 14476 et idéalement EN 13697",
        "Fiche de données de sécurité (FDS) classée et accessible sous 30 secondes",
        "Document de Suivi de Désinfection (DSD) ou équivalent fourni par le fabricant",
        "Dilution réalisée avec doseur étalonné, jamais à l'œil",
        "Produit unique sans parfum pour la zone préparatoire",
      ],
    },
    { type: "h2", text: "Formation du personnel : le maillon le plus contrôlé" },
    {
      type: "p",
      text: "L'inspecteur peut interroger n'importe quel agent de nettoyage ou préparateur sur son protocole. Si la réponse est approximative, l'observation tombe. ELITESY forme chaque agent dédié à une officine pendant une demi-journée minimum, avec validation des acquis : connaissance des cinq zones, code couleur des microfibres, dilution des produits, conduite à tenir en cas de bris de flacon de médicament ou de contamination accidentelle.",
    },
    {
      type: "p",
      text: "La formation est documentée : émargement, support pédagogique signé, attestation versée au dossier qualité de l'officine. Elle est réactualisée tous les 12 mois, ou immédiatement en cas de changement de produit ou de procédure.",
    },
    { type: "h2", text: "Les contrôles internes : la dernière barrière avant l'ARS" },
    {
      type: "p",
      text: "Le titulaire ne peut pas tout vérifier lui-même. Un système de contrôle interne périodique est attendu : audit visuel mensuel par le pharmacien adjoint, audit microbiologique annuel par prélèvement de surface dans la zone préparatoire (boîtes de Pétri envoyées en laboratoire agréé), audit documentaire trimestriel pour vérifier que les fiches sont bien remplies, signées et archivées.",
    },
    {
      type: "p",
      text: "ELITESY fournit aux pharmaciens un kit d'audit prêt à l'emploi : grilles, photos types, seuils d'alerte. Le titulaire ouvre son audit en moins de 15 minutes par mois.",
    },
    { type: "h2", text: "Étude de cas : remise à niveau d'une officine du 11e arrondissement" },
    {
      type: "p",
      text: "Officine de quartier, 180 m², trois préparatrices, robot de stockage. Inspection ARS prévue à 6 mois. Diagnostic ELITESY : pas de plan de nettoyage écrit, produits ménagers utilisés au comptoir, microfibres lavées à la machine domestique avec adoucissant, aucune traçabilité.",
    },
    {
      type: "ol",
      items: [
        "Semaine 1 : audit complet, photos, rédaction du plan de nettoyage en 5 zones",
        "Semaine 2 : changement de la gamme produits (3 références au lieu de 11), commande des microfibres à code couleur",
        "Semaine 3 : formation des agents et de l'équipe officinale (3 sessions de 2 h)",
        "Semaine 4 : mise en route du système de traçabilité, audit interne de calibrage",
        "Mois 2 à 6 : intervention quotidienne ELITESY + audit mensuel signé par le titulaire",
      ],
    },
    {
      type: "p",
      text: "Inspection passée sans observation sur le volet hygiène. Le titulaire a présenté son dossier en moins de 10 minutes, fiches à l'appui.",
    },
    { type: "h2", text: "Les erreurs qui font basculer une inspection" },
    {
      type: "ul",
      items: [
        "Fiches de traçabilité antidatées le matin de l'inspection : l'inspecteur le voit toujours",
        "Produit ménager du commerce conservé sous le comptoir, même 'au cas où'",
        "Lingette désinfectante grand public utilisée pour désinfecter le plan de préparation",
        "Plan de nettoyage rédigé une fois, jamais relu, jamais signé par les nouveaux agents",
        "Stock de produits périmés dans le local technique — y compris des désinfectants",
      ],
    },
    { type: "h2", text: "Ce que ELITESY apporte à une officine" },
    {
      type: "p",
      text: "Notre approche n'est pas commerciale, elle est méthodique. Nous arrivons avec un référentiel construit pour la pharmacie d'officine, des produits validés, des agents formés et un système de traçabilité prêt à l'emploi. Le titulaire reste le responsable juridique de son officine, mais il ne porte plus la charge opérationnelle du dossier hygiène.",
    },
    {
      type: "p",
      text: "Nos équipes interviennent en région parisienne, avec un référent dédié par officine. La continuité du service est garantie y compris pendant les congés ou en cas d'absence.",
    },
    {
      type: "callout",
      text: "Préparez sereinement votre prochaine inspection ARS. Un appel au 06 09 16 50 99 suffit pour planifier un diagnostic gratuit sur site sous 7 jours.",
    },
  ],
  status: "published",
};