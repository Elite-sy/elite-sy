import type { Post } from "../types";
import hero from "@/assets/blog/salle-spectacle.jpg";

export const post: Post = {
  slug: `nettoyage-salle-spectacle`,
  title: `Nettoyage d'une salle de spectacle : intervention en flux tendu`,
  description: `Théâtres, cinémas et salles de concert : organiser le nettoyage entre deux représentations sans interrompre l'exploitation.`,
  category: `Guides Pratiques`,
  date: `2025-07-28`,
  readingTime: 8,
  hero,
  heroAlt: `Salle de théâtre avec fauteuils rouges, vide entre deux représentations`,
  intro: `Théâtres, cinémas, salles de concert : créneaux de nettoyage souvent inférieurs à 30 minutes entre deux séances, exigence de qualité visuelle absolue pour le spectateur suivant. Une organisation au cordeau s'impose.`,
  content: [
    { type: "h2", text: `Le contexte d'exploitation` },
    { type: "p", text: `Une salle peut enchaîner 4 à 8 séances par jour. Le nettoyage doit être effectué entre chaque séance dans un délai parfois de 15 à 20 minutes. L'équipe est dimensionnée en conséquence : 4 à 6 agents pour une salle de 300 places.` },
    { type: "h2", text: `Les zones de nettoyage rapide` },
    { type: "ol", items: [
      `Ramassage des déchets dans les rangées (sacs poubelle distribués)`,
      `Inspection visuelle de chaque fauteuil (souillure, oubli)`,
      `Aspirateurs dorsaux pour les allées (rapidité)`,
      `Vérification sanitaires (réapprovisionnement, vidage poubelle)`,
      `Nettoyage entrée et hall (vitres, sol)`
    ] },
    { type: "h2", text: `Les fauteuils : matière sensible` },
    { type: "p", text: `Velours rouge classique des théâtres : aspiration uniquement, jamais d'humidité. Tissus tendus : brossage doux. Cuir et simili : essuyage chiffon humide. Détachage immédiat des taches (boisson, chewing-gum) avec produit adapté à la matière. Shampouinage trimestriel par prestataire spécialisé.` },
    { type: "h2", text: `Les sanitaires visiteurs` },
    { type: "p", text: `C'est le point critique : passage massif en quelques minutes après chaque séance. Réapprovisionnement papier et savon avant chaque vague. Désinfection rapide cuvettes et lavabos. Bionettoyage complet après dernière séance.` },
    { type: "h2", text: `Le hall et le bar` },
    { type: "p", text: `Sol nettoyé entre chaque séance (méthode mouillage rapide ou autolaveuse manuelle). Vitres extérieures inspectées chaque jour. Bar et comptoirs désinfectés. Verres collectés et passés en machine.` },
    { type: "callout", text: `ELITESY intervient sur plusieurs salles parisiennes (théâtres privés, cinémas indépendants, salles de concert). Équipes formées au flux tendu, planning calé sur la grille de représentation. 06 09 16 50 99.` },
    { type: "h2", text: `Le grand nettoyage hebdomadaire` },
    { type: "p", text: `Une journée par semaine sans séance (souvent lundi) : shampouinage moquettes, vitres, hauts de murs, plinthes, sanitaires en bionettoyage complet, loges artistes, espaces techniques (cabine projection, régie). 6 à 10 heures équipe complète.` },
    { type: "h2", text: `Les loges artistes` },
    { type: "p", text: `Bionettoyage avant chaque arrivée d'artiste : sanitaires, mobilier, sol, miroirs, points de contact. Mise en place des serviettes et fournitures selon rider artistique. Respect absolu de la confidentialité (jamais de photos, jamais d'objets manipulés).` },
    { type: "h2", text: `La scène et les coulisses` },
    { type: "p", text: `Nettoyage planché de scène avec produit spécifique (les danseurs glissent sinon), aspiration coulisses pour éviter chutes câbles. Le nettoyage scène est souvent fait par le personnel technique, jamais en présence de matériel scénique sans accompagnement régisseur.` },
    { type: "h2", text: `Sécurité et issues de secours` },
    { type: "p", text: `Vérification quotidienne du dégagement des issues de secours et de la signalétique. Sols antidérapants des escaliers contrôlés. Tout obstacle signalé immédiatement. Le nettoyeur participe à la sécurité du public en restant vigilant.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `Le nettoyage en salle de spectacle est un métier de rythme, de coordination et de discrétion. L'expérience du public commence par une salle impeccable.` }
  ],
  status: "published",
};
