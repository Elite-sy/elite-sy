import type { Post } from "../types";
import hero from "@/assets/blog/haccp-restauration.jpg";

export const post: Post = {
  slug: "normes-haccp-restauration",
  title: "Normes HACCP : le nettoyage en restauration sans jargon",
  description:
    "Plan de maîtrise sanitaire, protocole nettoyage-désinfection, contrôles DDPP, formation des équipes : tout ce qu'un restaurateur ou un traiteur doit savoir pour aborder un contrôle sereinement.",
  category: "Normes & réglementations",
  date: "2026-04-14",
  readingTime: 12,
  hero,
  heroAlt:
    "Agent de nettoyage en polo bleu marine et gants alimentaires nettoyant un plan de travail inox dans une cuisine professionnelle",
  intro:
    "HACCP, PMS, DDPP, marche en avant : derrière ces sigles se cache une seule réalité, celle d'un restaurateur qui doit prouver qu'il maîtrise les risques sanitaires de son établissement. Sur le terrain, l'enjeu est moins l'état des locaux le jour du contrôle que la cohérence entre ce qui est écrit, ce qui est fait, et ce qui peut être prouvé. Ce guide ELITESY remet à plat ce que recouvre vraiment l'hygiène HACCP côté nettoyage.",
  content: [
    { type: "h2", text: "HACCP : une démarche, pas une norme" },
    {
      type: "p",
      text: "Contrairement à une idée reçue, HACCP n'est pas une norme à respecter à la lettre comme une ISO. C'est une méthode d'analyse des dangers et de maîtrise des points critiques (Hazard Analysis Critical Control Points) que tout établissement manipulant des denrées doit appliquer depuis le « Paquet Hygiène » européen de 2006. La traduction concrète, en France, prend la forme du Plan de Maîtrise Sanitaire (PMS), exigé par la DDPP en cas de contrôle.",
    },
    {
      type: "p",
      text: "Le PMS est un classeur (papier ou numérique) qui décrit comment vous maîtrisez les risques liés aux locaux, au personnel, aux denrées et au nettoyage. Pour la partie nettoyage, il contient au minimum un plan de nettoyage-désinfection par zone, les fiches techniques des produits, les enregistrements de contrôle et les actions correctives.",
    },
    { type: "h2", text: "Les trois piliers du nettoyage HACCP" },
    { type: "h3", text: "1. Le plan de nettoyage-désinfection (PND)" },
    {
      type: "p",
      text: "C'est le document central. Il décrit pour chaque zone (réception, stockage froid, stockage sec, préparation chaude, préparation froide, plonge, salle, sanitaires) : la fréquence, la méthode, le produit, la dilution, le temps de contact, le matériel, et la personne responsable. Un PND robuste tient sur 2 à 4 pages et doit refléter ce qui est réellement fait — pas un idéal théorique.",
    },
    { type: "h3", text: "2. La séparation des zones et la marche en avant" },
    {
      type: "p",
      text: "La marche en avant est le principe selon lequel les denrées progressent dans une seule direction, du sale (réception) vers le propre (assiette dressée), sans jamais revenir en arrière ni croiser des flux contaminés. Côté nettoyage, cela impose un code couleur strict des microfibres et des lavettes — typiquement rouge pour sanitaires, bleu pour plan de travail froid, jaune pour cuisine chaude, vert pour zone légumes — et un matériel qui ne croise jamais les zones.",
    },
    { type: "h3", text: "3. La traçabilité au quotidien" },
    {
      type: "p",
      text: "Un contrôle DDPP ne se gagne pas le jour du contrôle, il se gagne tous les jours. Les feuilles d'enregistrement (températures des frigos, nettoyage des chambres froides, suivi de l'huile de friture, plans de lutte anti-nuisibles) doivent être tenues régulièrement et conservées au moins 1 an. Une feuille blanche pour les trois derniers mois est plus problématique qu'une feuille avec une erreur corrigée — la régularité prime sur la perfection.",
    },
    { type: "h2", text: "Zones critiques : où porter l'effort en priorité" },
    {
      type: "p",
      text: "Toutes les zones n'ont pas le même niveau de risque. Concentrer l'effort là où il compte vraiment évite de diluer le protocole et de relâcher la vigilance sur les vrais points critiques.",
    },
    {
      type: "ul",
      items: [
        "Chambres froides positives et négatives : nettoyage complet mensuel, traçabilité écrite, contrôle des joints",
        "Plans de travail de découpe et de dressage : bionettoyage entre chaque service et désinfection en fin de service",
        "Trancheuse, hachoir, robot-coupe : démontage et bionettoyage systématique après chaque utilisation à risque",
        "Siphons et bondes : entretien hebdomadaire pour éviter biofilm et nuisibles",
        "Plonge et lave-vaisselle : contrôle de la température de rinçage (≥ 82 °C) tracé chaque service",
        "Hottes et filtres : dégraissage trimestriel obligatoire et tracé (risque incendie + DDPP)",
      ],
    },
    { type: "h2", text: "Produits : ce qu'il faut, ce qu'il faut éviter" },
    {
      type: "p",
      text: "En cuisine professionnelle, les produits doivent être homologués contact alimentaire et porter une fiche de données de sécurité (FDS) accessible à l'équipe. Le couple gagnant pour la plupart des zones, c'est un détergent-désinfectant deux-en-un, à action virucide (norme EN 14476) et bactéricide (EN 1276 / EN 13697), utilisé à la dilution exacte et avec un temps de contact respecté — généralement 5 minutes avant rinçage.",
    },
    {
      type: "p",
      text: "Ce qu'il faut éviter : les mélanges « maison », les produits ménagers grand public sans FDS professionnelle, les pulvérisateurs ré-utilisés sans étiquetage clair, et le stockage des produits chimiques à proximité des denrées. Une centrale de dilution murale règle 80 % des problèmes de surdosage et de mélanges accidentels.",
    },
    { type: "h2", text: "Formation des équipes : l'angle mort de beaucoup d'établissements" },
    {
      type: "p",
      text: "Le PMS impose qu'au moins une personne dans l'établissement ait suivi une formation hygiène alimentaire de 14 h (HACCP). Au-delà de cette obligation, c'est la formation continue de l'équipe qui fait la différence : un commis qui découvre le code couleur des lavettes le jour d'un contrôle ne pourra pas répondre à l'inspecteur. Nos protocoles ELITESY incluent systématiquement une session courte d'onboarding sur site pour vos équipes.",
    },
    { type: "h2", text: "Le contrôle DDPP : ce que regarde vraiment l'inspecteur" },
    {
      type: "p",
      text: "L'inspecteur de la DDPP ne cherche pas à piéger. Il vérifie d'abord la cohérence entre vos documents et la réalité : si votre PND dit « nettoyage chambre froide tous les vendredis », il regarde la feuille de relevé et il ouvre la chambre froide. Si les deux concordent, vous avez gagné l'essentiel. S'ils divergent, c'est là que le contrôle se complique — et que la note d'évaluation (système Alim'confiance, affichage obligatoire depuis 2017) peut tomber à « à améliorer » ou « à corriger de manière urgente ».",
    },
    {
      type: "ul",
      items: [
        "PMS à jour, consultable en moins de 5 minutes",
        "Relevés de température des frigos et chambres froides du jour et du mois précédent",
        "Plan de nettoyage affiché en cuisine, à jour, signé par le responsable",
        "FDS des produits chimiques accessibles à l'équipe",
        "Vestiaires séparés des zones de denrées, sans effets personnels en cuisine",
        "Plan de lutte anti-nuisibles avec passages d'un prestataire agréé",
      ],
    },
    { type: "h2", text: "Externaliser le nettoyage HACCP : quand et pourquoi ?" },
    {
      type: "p",
      text: "Le bionettoyage en fin de service, les dégraissages de hotte trimestriels, le nettoyage approfondi des chambres froides : ce sont les postes les plus chronophages et les moins valorisants pour vos équipes de cuisine, qui ont déjà 50 ou 60 heures par semaine derrière elles. Les confier à un prestataire formé HACCP, c'est libérer du temps utile pour la production, sécuriser la traçabilité, et obtenir un niveau de propreté plus constant qu'avec une équipe interne fatiguée.",
    },
    {
      type: "p",
      text: "ELITESY intervient en cuisine professionnelle avec des équipes formées HACCP, du matériel dédié (code couleur strict, microfibres lavées séparément, centrales de dilution murales) et une traçabilité hebdomadaire intégrable directement à votre PMS.",
    },
    {
      type: "callout",
      text: "Vous préparez un contrôle DDPP ou vous voulez sécuriser votre PMS ? Appelez ELITESY au 06 09 16 50 99 pour un audit gratuit de votre cuisine en 48 h.",
    },
  ],
  status: "published",
  related: [
    "produits-ecologiques-nettoyage",
    "nettoyage-frigo-bureau-protocole",
    "vitres-bureau-sans-traces",
  ],
};