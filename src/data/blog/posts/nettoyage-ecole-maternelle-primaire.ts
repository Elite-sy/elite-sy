import type { Post } from "../types";
import hero from "@/assets/blog/ecole-primaire.jpg";

export const post: Post = {
  slug: `nettoyage-ecole-maternelle-primaire`,
  title: `Nettoyage d'une école maternelle et primaire : sanitaires, réfectoire et classes`,
  description: `Méthode hors temps scolaire : protocoles adaptés aux enfants, aux jouets, aux sanitaires et au réfectoire d'une école.`,
  category: `Guides Pratiques`,
  date: `2025-08-18`,
  readingTime: 9,
  hero,
  heroAlt: `Salle de classe d'école primaire propre et lumineuse`,
  intro: `Une école maternelle ou primaire est l'un des environnements les plus exigeants : enfants vulnérables, partage massif de surfaces et de jouets, créneau de nettoyage court hors temps scolaire. La méthode doit combiner efficacité, sécurité chimique et discrétion.`,
  content: [
    { type: "h2", text: `Le cadre réglementaire` },
    { type: "p", text: `La circulaire DGS/SD7A 2007 et le Plan National Santé Environnement encadrent l'usage des produits en écoles. Les biocides classés CMR sont interdits en présence d'enfants. Les produits doivent être Ecolabel ou équivalent dans la mesure du possible.` },
    { type: "h2", text: `Le zonage de l'école` },
    { type: "ul", items: [
      `Salles de classe (bureaux, sol, points de contact)`,
      `Sanitaires (très haute fréquence d'usage)`,
      `Réfectoire et cuisine (HACCP)`,
      `Dortoirs maternelle (couchettes, sol)`,
      `Cour et préau`,
      `Circulations et escaliers`
    ] },
    { type: "h2", text: `Les sanitaires : priorité absolue` },
    { type: "p", text: `Bionettoyage complet quotidien : cuvettes, urinoirs si présents, lavabos, miroirs, poignées, distributeurs. Désinfection avec produit virucide EN 14476. Réapprovisionnement papier, savon, essuie-mains. Contrôle plomberie (fuites, chasses d'eau). Hauteur adaptée aux enfants : ne pas oublier les zones basses.` },
    { type: "h2", text: `Les jouets et matériel pédagogique` },
    { type: "p", text: `Désinfection hebdomadaire des jouets en plastique : trempage dans solution désinfectante alimentaire compatible enfants, rinçage soigné, séchage. Les peluches partent en machine à 60 °C. Le matériel pédagogique (puzzles, livres cartonnés) est essuyé avec lingette désinfectante au quotidien en période épidémique.` },
    { type: "h2", text: `Les classes : le bon ordre` },
    { type: "ol", items: [
      `Aération préalable (10 minutes minimum)`,
      `Vidage des poubelles`,
      `Dépoussiérage des bureaux et points hauts`,
      `Désinfection des points de contact (poignées, interrupteurs, robinets)`,
      `Aspiration ou balayage humide du sol`,
      `Lavage du sol avec produit éco-labellisé`
    ] },
    { type: "callout", text: `ELITESY entretient des écoles privées et établissements scolaires sur Paris : nettoyage hors temps scolaire, produits sans CMR, agents formés au contexte enfance. 06 09 16 50 99.` },
    { type: "h2", text: `Le réfectoire et la cantine` },
    { type: "p", text: `Protocole HACCP applicable : nettoyage puis désinfection après chaque service, code couleur strict, traçabilité. Les tables sont désinfectées avec produit alimentaire à temps de contact respecté. Les chaises sont retournées sur les tables pour le lavage des sols.` },
    { type: "h2", text: `Les dortoirs maternelle` },
    { type: "p", text: `Aération obligatoire. Couchettes désinfectées hebdomadairement (et entre deux enfants si partage). Sol lavé chaque jour. Linge changé selon protocole de l'établissement (généralement hebdomadaire et à chaque souillure).` },
    { type: "h2", text: `La cour et les extérieurs` },
    { type: "p", text: `Balayage quotidien, lavage haute pression hebdomadaire des zones de jeu, vidage des poubelles plusieurs fois par semaine. Vérification de l'absence d'objets dangereux avant ouverture (verres, seringues si école en ville). Détartrage des préaux pluvieux.` },
    { type: "h2", text: `Les produits à proscrire` },
    { type: "p", text: `Eau de Javel pure (vapeurs), produits parfumés synthétiques forts (asthme), aérosols, biocides classés CMR, désodorisants chimiques. Privilégier savon noir, vinaigre blanc dilué, désinfectants Ecolabel à base d'alcool dénaturé.` },
    { type: "h2", text: `La discrétion et la sécurité` },
    { type: "p", text: `Les agents arrivent quand les enfants sont partis ou avant leur arrivée. Pas d'intervention en présence d'enfants. Stockage des produits dans local fermé à clé. Toutes les fiches FDS accessibles. Casier dédié pour les EPI.` },
    { type: "h2", text: `Délai d'intervention` },
    { type: "p", text: `École 5 classes (350 m²) : 2h30 en équipe de 2. Sanitaires séparés (passages multiples possibles dans la journée). Grand nettoyage pendant vacances scolaires : 1 à 2 journées par site.` },
    { type: "h2", text: `Conclusion` },
    { type: "p", text: `L'école est un environnement à enjeu sanitaire élevé. Le choix d'un prestataire formé au contexte scolaire est gage de qualité et de sérénité pour les équipes pédagogiques.` }
  ],
  status: "published",
};
