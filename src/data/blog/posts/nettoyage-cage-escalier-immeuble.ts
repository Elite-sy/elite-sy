import type { Post } from "../types";
import hero from "@/assets/blog/cage-escalier.jpg";

export const post: Post = {
  slug: "nettoyage-cage-escalier-immeuble",
  title: "Nettoyage d'une cage d'escalier en immeuble : méthode et fréquences",
  description:
    "Méthode, fréquences et matériel pour un entretien efficace des parties communes verticales en copropriété ou en tertiaire.",
  category: "Guides Pratiques",
  date: "2025-11-17",
  readingTime: 8,
  hero,
  heroAlt: "Cage d'escalier moderne en cours d'entretien dans un immeuble",
  intro:
    "Une cage d'escalier est la zone la plus passante d'un immeuble et la plus visible pour les visiteurs. C'est aussi la plus difficile à nettoyer : verticalité, marches, mains courantes, fenêtres en hauteur. La méthode change tout — voici la nôtre.",
  content: [
    { type: "h2", text: "Les zones à traiter à chaque passage" },
    { type: "ul", items: [
      "Marches et contremarches (chaque marche, dans le détail)",
      "Plinthes et bas de murs (zone de chocs et d'éclaboussures)",
      "Mains courantes (points de contact intense, désinfection)",
      "Portes palières extérieures (poignées surtout)",
      "Boîtes aux lettres et leurs supports",
      "Interrupteurs et minuteries",
      "Fenêtres et impostes accessibles",
      "Sols des paliers et tapis",
    ]},
    { type: "h2", text: "La méthode : toujours du haut vers le bas" },
    { type: "p", text: "Règle absolue : commencer par le palier supérieur, descendre étage par étage. Cela évite de salir les zones déjà traitées. Le balayage humide précède le lavage. Le lavage des marches se fait dans le sens de la descente, en évitant la fatigue d'avoir à enjamber des marches mouillées." },
    { type: "h2", text: "Les fréquences recommandées" },
    { type: "ul", items: [
      "Trafic intense (immeuble de bureaux, grande copropriété) : 5x/semaine",
      "Trafic moyen (copropriété résidentielle moyenne) : 2x/semaine",
      "Trafic faible (petite copropriété) : 1x/semaine",
      "Vitrerie de cage : 1x/trimestre minimum",
      "Désinfection points contact : à chaque passage en période épidémique",
    ]},
    { type: "h2", text: "Le matériel adapté" },
    { type: "p", text: "Chariot compact (les chariots tertiaires ne montent pas dans les escaliers), balai trapèze à frange pré-imprégnée, microfibres en code couleur, perche télescopique pour les fenêtres et plafonds, aspirateur dorsal léger pour les tapis et moquettes, gants de sécurité antidérapants pour l'agent." },
    { type: "callout", text: "ELITESY intervient en copropriété sur l'ensemble du parc résidentiel et tertiaire d'Île-de-France. Devis sous 48 h après visite — 06 09 16 50 99." },
    { type: "h2", text: "Sécurité de l'agent" },
    { type: "p", text: "La cage d'escalier est la première cause d'accident du travail dans le secteur propreté. Quatre règles : panneau 'sol mouillé' systématique en haut et bas de volée, chaussures antidérapantes obligatoires, pas plus de 4 étages traités sans pause, pas de pose de seau sur les marches." },
    { type: "h2", text: "Le cas spécifique des marches" },
    { type: "p", text: "Trois techniques selon le revêtement : marche en pierre ou carrelage — balayage humide + lavage à la microfibre humide, séchage spontané ; marche en bois — aspiration + microfibre légèrement humide uniquement ; marche moquettée — aspiration HEPA croisée puis spot treatment des taches." },
    { type: "h2", text: "L'aspect coût" },
    { type: "p", text: "Le tarif d'une cage d'escalier se calcule au passage plutôt qu'au m². Une cage de 6 étages : 25 à 50 € HT par passage selon état et fréquence. Pour une copropriété de 30 lots avec 2 passages/semaine : budget annuel de 2 500 à 5 000 € HT, à répartir au tantième." },
    { type: "h2", text: "Le cahier de présence" },
    { type: "p", text: "Affiché au RDC, signé à chaque passage : date, heure, agent, zones traitées. C'est l'outil de base pour répondre aux remontées des copropriétaires et tracer la prestation. Sans cahier visible, doute systématique sur l'effectivité du passage." },
    { type: "h2", text: "Conclusion : la cage, vitrine de l'immeuble" },
    { type: "p", text: "Une cage propre rassure visiteurs, locataires et acquéreurs potentiels. ELITESY adapte la fréquence et la méthode à chaque configuration de copropriété, avec reporting régulier au syndic." },
  ],
  status: "published",
};