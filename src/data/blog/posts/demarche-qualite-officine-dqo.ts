import type { Post } from "../types";
import hero from "@/assets/blog/conformite-ars-pharmacie.jpg";

export const post: Post = {
  slug: `demarche-qualite-officine-dqo`,
  title: `Démarche Qualité Officine (DQO) : intégrer l'hygiène au protocole`,
  description: `La DQO en pharmacie : comment le protocole de nettoyage s'intègre à la démarche qualité de l'officine.`,
  category: `Normes & réglementations`,
  date: `2025-06-30`,
  readingTime: 8,
  hero,
  heroAlt: `Intérieur d'une pharmacie moderne et impeccable`,
  intro: `La Démarche Qualité Officine (DQO) est le référentiel d'amélioration continue des pharmacies françaises, porté par l'Ordre national des Pharmaciens. L'hygiène et le protocole de nettoyage en sont un volet structurant, audité régulièrement.`,
  content: [
    { type: "h2", text: `Qu'est-ce que la DQO ?` },
    { type: "p", text: `La Démarche Qualité Officine est un outil d'auto-évaluation et d'amélioration continue mis à disposition par l'Ordre des Pharmaciens depuis 2003. Adhésion volontaire mais fortement encouragée. Elle structure l'organisation de l'officine autour de processus documentés et tracés.` },
    { type: "h2", text: `La place de l'hygiène dans la DQO` },
    { type: "p", text: `La DQO comporte un volet 'Locaux et équipements' qui inclut le protocole de nettoyage, le tri des déchets, le bionettoyage des préparatoires, la gestion des préparations magistrales. Tout doit être documenté, formé, tracé et audité en interne.` },
    { type: "h2", text: `Les documents à produire` },
    { type: "ul", items: [
      `Plan de Nettoyage et Désinfection (PND) avec fréquences`,
      `Fiches techniques produits et leur classement`,
      `Procédures de bionettoyage du préparatoire`,
      `Procédures de désinfection des plans de comptoir`,
      `Habilitations et formations du personnel ou du prestataire`,
      `Traçabilité des opérations`,
      `Plan de gestion des déchets (DASRI, MNU, déchets ménagers)`
    ] },
    { type: "h2", text: `Le bionettoyage du préparatoire` },
    { type: "p", text: `Le préparatoire est la zone la plus sensible (préparations magistrales, gélules, pommades). Bionettoyage quotidien avant et après chaque préparation : balance, plan de travail, sol. Désinfection avec produit homologué. Traçabilité sur fiche.` },
    { type: "h2", text: `Les plans de comptoir` },
    { type: "p", text: `Désinfection plusieurs fois par jour entre clients (recommandation post-Covid maintenue). Produit virucide EN 14476, action rapide. Lingettes désinfectantes plutôt que spray pour éviter aérosolisation. Distributeur de gel à disposition client.` },
    { type: "callout", text: `ELITESY accompagne des officines parisiennes dans leur démarche DQO : audit du protocole, mise en conformité, formation des équipes. 06 09 16 50 99.` },
    { type: "h2", text: `Les zones spécifiques officine` },
    { type: "ul", items: [
      `Préparatoire : bionettoyage quotidien`,
      `Comptoir : désinfection pluri-quotidienne`,
      `Back-office et stock : nettoyage quotidien`,
      `Vitrines et linéaires : dépoussiérage hebdomadaire`,
      `Frigos médicaments : nettoyage et désinfection mensuels (chaîne du froid)`,
      `Sanitaires personnel : bionettoyage quotidien`,
      `Local DASRI : désinfection hebdomadaire`
    ] },
    { type: "h2", text: `Les déchets pharmaceutiques` },
    { type: "p", text: `Tri rigoureux : DASRI (collecteurs OPCT jaunes), MNU médicaments non utilisés (Cyclamed), DEEE (piles, ampoules), déchets ménagers. Local dédié, fermé, ventilé. Traçabilité par bordereaux CERFA. Convention avec collecteur agréé.` },
    { type: "h2", text: `L'audit interne DQO` },
    { type: "p", text: `Audit annuel par le pharmacien titulaire avec grille DQO. Identification des écarts, plan d'action, suivi. Le volet hygiène fait souvent l'objet d'écarts (procédures non à jour, traçabilité incomplète, formation périmée). Une mise à niveau régulière s'impose.` },
    { type: "h2", text: `Le rôle du prestataire de nettoyage` },
    { type: "p", text: `S'il est externalisé, le prestataire doit fournir les pièces DQO : protocoles, fiches techniques, attestations de formation des agents, traçabilité des interventions. Un prestataire généraliste sans expertise pharmacie n'est pas adapté.` },
    { type: "h2", text: `DQO et certification` },
    { type: "p", text: `La DQO peut conduire à une certification volontaire (Qualipharma, etc.). Elle valorise l'officine, sécurise l'inspection ARS et améliore la qualité du service patient. C'est un investissement temps mais à fort retour.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `La DQO formalise ce qu'une bonne officine fait déjà. Le nettoyage et l'hygiène doivent y être documentés au même titre que le reste : c'est le gage d'une officine sûre et inspectable.` }
  ],
  status: "published",
};
