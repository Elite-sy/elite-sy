import type { Post } from "../types";
import hero from "@/assets/blog/qualipropre.jpg";

export const post: Post = {
  slug: `certification-qualipropre`,
  title: `Certification Qualipropre : référentiel qualité de la propreté`,
  description: `Qualipropre : le référentiel qualité de la profession propreté décrypté pour les donneurs d'ordre.`,
  category: `Normes & réglementations`,
  date: `2025-06-23`,
  readingTime: 8,
  hero,
  heroAlt: `Équipe de nettoyage professionnelle certifiée en intervention`,
  intro: `Qualipropre est la certification de la profession propreté en France, délivrée par l'organisme certificateur de la branche. Elle atteste de la fiabilité du prestataire : organisation, qualité de service, gestion des ressources humaines, sécurité.`,
  content: [
    { type: "h2", text: `Origine et objectif` },
    { type: "p", text: `Créée par la branche professionnelle de la propreté (Monde de la Propreté, FEP), Qualipropre est une certification volontaire qui distingue les entreprises engagées dans une démarche qualité reconnue. Délivrée par AFNOR Certification ou Bureau Veritas selon l'organisme retenu par l'entreprise.` },
    { type: "h2", text: `Les domaines audités` },
    { type: "ul", items: [
      `Organisation générale et management qualité`,
      `Gestion commerciale et relation client`,
      `Gestion des ressources humaines et formation`,
      `Sécurité et conditions de travail`,
      `Contrôle qualité des prestations`,
      `Gestion des produits et matériels`,
      `Démarche environnementale`
    ] },
    { type: "h2", text: `Pourquoi c'est important pour le client` },
    { type: "p", text: `Une entreprise certifiée Qualipropre apporte des garanties contractuelles : agents formés, procédures écrites, contrôle qualité en place, conformité réglementaire (URSSAF, droit du travail). Pour un donneur d'ordre, c'est un critère de sélection objectif lors d'un appel d'offres.` },
    { type: "h2", text: `Les écarts les plus fréquents` },
    { type: "p", text: `Manque de traçabilité des contrôles qualité, formations non à jour, EPI non systématiques, sous-traitance non encadrée, fiches de poste incomplètes. La certification oblige à corriger ces points avant son obtention.` },
    { type: "callout", text: `ELITESY est engagée dans une démarche qualité de type Qualipropre : procédures écrites, agents formés, traçabilité, fournisseurs validés. Demandez nos engagements contractuels. 06 09 16 50 99.` },
    { type: "h2", text: `Le coût et l'investissement` },
    { type: "p", text: `Coût initial : 5 000 à 15 000 € selon taille de l'entreprise (audit + mise en conformité). Coût récurrent : 2 000 à 4 000 €/an (audits de suivi). Investissement temps significatif : 6 mois à 1 an pour la première certification.` },
    { type: "h2", text: `Qualipropre et appels d'offres` },
    { type: "p", text: `De plus en plus de cahiers des charges publics et grands comptes exigent Qualipropre ou équivalent ISO 9001. Sans certification, l'entreprise est exclue des appels d'offres importants. C'est devenu un standard de marché.` },
    { type: "h2", text: `La différence avec ISO 9001` },
    { type: "p", text: `ISO 9001 est généraliste (toute industrie). Qualipropre est spécifique au métier de la propreté. Elle intègre les particularités du secteur : ressources humaines diffuses, contrôle terrain, gestion des produits chimiques. Beaucoup d'entreprises ont les deux.` },
    { type: "h2", text: `Le label RSE` },
    { type: "p", text: `Qualipropre se complète souvent avec un engagement RSE (Lucie 26000, label numérique responsable, etc.). Les grands donneurs d'ordre demandent désormais un volet environnemental clair (Ecolabel, bilan carbone, parc véhicules).` },
    { type: "h2", text: `Comment vérifier la certification` },
    { type: "p", text: `Tout client peut demander le certificat en cours de validité et vérifier l'inscription au registre AFNOR ou Bureau Veritas. Méfiez-vous des affirmations non documentées.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Qualipropre n'est pas un label marketing : c'est un engagement audité. Pour un donneur d'ordre, c'est l'un des meilleurs critères de fiabilité d'un prestataire de nettoyage professionnel.` }
  ],
  status: "published",
};
