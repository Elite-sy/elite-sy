import type { Post } from "../types";
import hero from "@/assets/blog/cout-nettoyage-m2.jpg";

export const post: Post = {
  slug: "agent-nettoyage-ne-vient-pas-que-faire",
  title: "Que faire si l'agent de nettoyage ne vient pas ?",
  description:
    "Réflexes immédiats, vérifications du contrat, preuves à conserver et solutions préventives en cas d'absence du prestataire.",
  category: "FAQ",
  date: "2026-01-28",
  readingTime: 8,
  hero,
  heroAlt: "Bureau du gestionnaire de site consultant un contrat de prestation de nettoyage",
  intro:
    "Vous arrivez le matin, les corbeilles sont pleines, les sanitaires intacts, le sol jonché de la veille. Le prestataire n'est pas venu. Première fois, on tolère. Deuxième fois, on s'inquiète. Voici le protocole à appliquer, dès la première occurrence.",
  content: [
    { type: "h2", text: "Étape 1 : constater factuellement, ne pas accuser" },
    { type: "p", text: "Photographier les zones non traitées (sanitaires, corbeilles, sols), noter l'heure du constat, vérifier la dernière feuille de présence ou le badge de l'agent. Un agent peut être venu mais avoir mal fait — la photo permet de distinguer absence et défaut qualité." },
    { type: "h2", text: "Étape 2 : contacter immédiatement le prestataire" },
    { type: "p", text: "Appeler le contact d'astreinte mentionné au contrat. Tout prestataire sérieux a un numéro joignable en journée et en soirée. L'absence de réponse est en soi un signal." },
    { type: "p", text: "Demander quatre choses : la cause de l'absence, le délai d'intervention de remplacement (norme : sous 24 h ouvrées), l'engagement de rattrapage (intervention supplémentaire ou avoir), la procédure pour éviter la récidive." },
    { type: "h2", text: "Étape 3 : envoyer un email récapitulatif" },
    { type: "p", text: "Toute discussion téléphonique doit être confirmée par email le jour même. Sujet : 'Absence du XX/XX/XXXX – demande de mesures correctives'. Pièces jointes : photos horodatées. C'est la preuve écrite indispensable en cas de litige." },
    { type: "callout", text: "ELITESY garantit contractuellement le remplacement sous 4 h ouvrées en cas d'absence, sans surcoût. Demandez à voir la clause — 06 09 16 50 99." },
    { type: "h2", text: "Vérifier les clauses contractuelles essentielles" },
    { type: "ul", items: [
      "Engagement de remplacement (délai et conditions)",
      "Pénalités pour absence non justifiée",
      "Procédure d'escalade en cas de non-réponse",
      "Conditions de résiliation pour défaillance répétée",
      "Modalités de reporting et de rattrapage",
    ]},
    { type: "p", text: "Si l'un de ces points manque au contrat, c'est qu'il a été négocié à l'avantage exclusif du prestataire. À renégocier impérativement." },
    { type: "h2", text: "Les causes les plus fréquentes d'absence" },
    { type: "ul", items: [
      "Arrêt maladie de l'agent sans organisation de remplacement (signal d'alarme)",
      "Sous-effectif structurel du prestataire (problème récurrent)",
      "Conflit interne (turnover élevé, mauvaise gestion RH)",
      "Oubli planning (faute d'encadrement)",
      "Panne véhicule, accident — légitime mais doit déclencher une solution de secours",
    ]},
    { type: "h2", text: "Quand changer de prestataire ?" },
    { type: "p", text: "Trois critères de bascule, dans l'ordre : trois absences en six mois sans plan d'amélioration, absence de réponse écrite à une réclamation formelle, baisse mesurable de la qualité (audit). Au-delà, le coût caché d'un mauvais prestataire (réclamations, image, productivité) dépasse vite le coût d'un changement." },
    { type: "h2", text: "Comment prévenir le risque dès la signature" },
    { type: "p", text: "Trois précautions à la signature : exiger un binôme de référence (agent titulaire + remplaçant nommé), inscrire la procédure de continuité de service noir sur blanc, prévoir une clause d'audit qualité tous les 3 mois avec présence du client." },
    { type: "h2", text: "Conclusion : un absent, ce n'est pas une fatalité" },
    { type: "p", text: "Une absence isolée arrive — ce qui fait la différence, c'est la réactivité du prestataire et la transparence sur la cause. ELITESY traite chaque absence comme une priorité opérationnelle, avec retour client sous 4 h ouvrées maximum." },
  ],
  status: "published",
};