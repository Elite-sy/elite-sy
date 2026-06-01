import type { Post } from "../types";
import hero from "@/assets/blog/code-couleur-microfibres.jpg";

export const post: Post = {
  slug: "code-couleur-microfibres",
  title: "Le code couleur des microfibres : pourquoi et comment l'imposer",
  description:
    "Convention HACCP et hygiène hospitalière, application pratique, formation des agents et erreurs fréquentes : tout ce qu'il faut savoir pour ne plus croiser les risques.",
  category: "Produits & techniques",
  date: "2026-03-17",
  readingTime: 9,
  hero,
  heroAlt:
    "Piles de microfibres professionnelles classées par couleur rouge, bleu, jaune et vert sur fond clair",
  intro:
    "Une microfibre sanitaire qui termine sa journée sur la table de réunion. Un chiffon de cuisine utilisé sur le clavier du commercial. Ce sont les gestes invisibles qui font basculer la qualité d'un service de propreté, et la confiance d'un site dans son prestataire. Le code couleur des microfibres est la réponse simple, universelle et redoutablement efficace à ce risque. Voici comment ELITESY l'applique au quotidien.",
  content: [
    { type: "h2", text: "Le principe : une couleur, une zone, jamais l'inverse" },
    {
      type: "p",
      text: "Le code couleur consiste à attribuer une couleur distincte de microfibre à chaque catégorie de zone à nettoyer. L'agent ne réfléchit plus : il sait que la microfibre rouge va aux sanitaires, point. Cette segmentation rend impossible la contamination croisée, même par inattention.",
    },
    {
      type: "p",
      text: "Ce n'est pas une invention récente. La convention est utilisée depuis des décennies en hygiène hospitalière, et elle a été reprise par les démarches HACCP en restauration. Elle est aujourd'hui un standard tacite de la propreté professionnelle sérieuse.",
    },
    { type: "h2", text: "La convention de référence ELITESY" },
    {
      type: "p",
      text: "Il n'existe pas une norme unique imposée par la loi française pour le tertiaire. Plusieurs conventions cohabitent — la nôtre s'aligne sur celle de la SF2H (Société française d'hygiène hospitalière), la plus rigoureuse et la plus répandue dans les établissements sérieux.",
    },
    { type: "h3", text: "Rouge — Sanitaires et zones à risque sanitaire élevé" },
    {
      type: "p",
      text: "WC, urinoirs, lavabos, cuvettes, poignées de chasse, sols de sanitaires. La microfibre rouge ne quitte jamais cette zone. Elle est lavée à part, à 90 °C minimum, sans adoucissant.",
    },
    { type: "h3", text: "Jaune — Surfaces de soins et zones sensibles" },
    {
      type: "p",
      text: "Lavabos hors sanitaires, paillasses techniques, surfaces de soins (cabinet médical, infirmerie d'entreprise), zones à risque modéré. À utiliser systématiquement avec produit détergent-désinfectant.",
    },
    { type: "h3", text: "Bleu — Mobilier et surfaces hautes hors zone de soins" },
    {
      type: "p",
      text: "Bureaux, tables, étagères, plinthes, portes, mains courantes. C'est la microfibre la plus utilisée en tertiaire. Elle est dédiée à une zone (un open-space, un étage) et lavée par lot.",
    },
    { type: "h3", text: "Vert — Restauration et alimentaire" },
    {
      type: "p",
      text: "Cuisines collectives, tables de cantine, plans de travail alimentaires, surfaces en contact avec la nourriture. Convention HACCP. Produits compatibles contact alimentaire obligatoires.",
    },
    {
      type: "callout",
      text: "Quatre couleurs suffisent à couvrir 95 % des cas. Inutile d'ajouter du blanc, de l'orange ou du violet pour des sous-catégories — ça brouille le message et personne ne retient.",
    },
    { type: "h2", text: "Pourquoi ça marche réellement" },
    {
      type: "p",
      text: "Trois raisons cumulées expliquent l'efficacité spectaculaire du code couleur sur le terrain. Premièrement, il élimine la charge mentale de l'agent : pas de décision à prendre, donc pas d'erreur possible. Deuxièmement, il rend visible une erreur instantanément — une microfibre rouge dans une cuisine se voit en une seconde par le chef d'équipe. Troisièmement, il facilite la formation des nouveaux agents : trois minutes suffisent à transmettre la règle.",
    },
    { type: "h2", text: "L'application au matériel — pas seulement aux chiffons" },
    {
      type: "p",
      text: "Le code couleur ne s'arrête pas aux microfibres. Pour être pleinement efficace, il doit s'étendre à tout le matériel qui entre en contact avec les surfaces : seaux, balais à frange, têtes de balai trapèze, gants de protection, parfois même les produits eux-mêmes via étiquette colorée.",
    },
    {
      type: "ul",
      items: [
        "Seaux à code couleur : un par zone, jamais partagés",
        "Têtes de balai trapèze à code couleur : essentiel en santé",
        "Gants jetables nitrile : code couleur recommandé en santé, optionnel en tertiaire",
        "Étiquetage des flacons de produits selon la zone d'usage",
      ],
    },
    { type: "h2", text: "L'organisation du lavage — le moment critique" },
    {
      type: "p",
      text: "Tout le bénéfice du code couleur s'effondre si les microfibres sont mélangées au lavage. La règle est non négociable : lavage par couleur, à part, dans un cycle dédié. Sur un site qui dispose d'une laverie interne, prévoir quatre bacs de pré-tri étiquetés et formés à l'équipe.",
    },
    {
      type: "p",
      text: "Sur un site externalisé chez un prestataire blanchisserie professionnel, la traçabilité par lot couleur est un point de contrat à exiger. Demandez le protocole de tri, la fréquence de contrôle qualité, et la traçabilité du retour matériel.",
    },
    { type: "h2", text: "Formation des agents : 15 minutes bien investies" },
    {
      type: "p",
      text: "Le code couleur est l'une des règles les plus faciles à transmettre. Notre protocole de formation initiale ELITESY consacre 15 minutes au sujet, structurées comme suit : présentation visuelle de la convention, parcours sur site avec mise en situation, quiz de validation (cinq photos, l'agent dit quelle couleur utiliser), affichette plastifiée remise dans le local technique.",
    },
    {
      type: "p",
      text: "Une remise à niveau de 5 minutes est intégrée au point qualité mensuel. C'est largement suffisant pour ancrer la pratique de façon durable.",
    },
    { type: "h2", text: "Les erreurs fréquentes — et comment les détecter" },
    {
      type: "ul",
      items: [
        "Microfibre 'multi-usage' achetée en grande surface, sans couleur distinctive : interdire dans le contrat",
        "Lavage à la machine domestique de l'agent, sans tri : perte totale du bénéfice — exiger le circuit professionnel",
        "Microfibre rouge utilisée pour 'gagner du temps' sur une tâche tenace : sanction immédiate, c'est un acte grave",
        "Code couleur affiché en français uniquement : prévoir un affichage pictographique pour les équipes multilingues",
        "Absence de bac de tri sur le chariot : la microfibre sale finit avec la propre, contamination garantie",
      ],
    },
    { type: "h2", text: "Le contrôle qualité côté donneur d'ordres" },
    {
      type: "p",
      text: "Vérifier l'application du code couleur prend trente secondes. À la prochaine visite de votre prestataire, demandez à voir le chariot d'un agent et le local technique : présence des quatre couleurs, séparation propre/sale, étiquetage du matériel. Un prestataire sérieux n'a rien à cacher.",
    },
    {
      type: "callout",
      text: "Votre prestataire actuel applique-t-il vraiment un code couleur ? Demandez un audit gratuit sur site au 06 09 16 50 99 — nous vous remettons un rapport visuel sous 48 h.",
    },
    { type: "h2", text: "Conclusion : la simplicité comme garantie" },
    {
      type: "p",
      text: "Le code couleur est l'un de ces dispositifs rares où la solution simple est aussi la plus efficace. Quatre couleurs, une règle, une organisation. Quand il est correctement appliqué, il rend visible la rigueur d'un prestataire. Quand il est absent, c'est généralement le signal qu'il faut chercher plus loin.",
    },
  ],
  status: "published",
};