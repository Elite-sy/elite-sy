import type { Post } from "../types";
import hero from "@/assets/blog/coworking.jpg";

export const post: Post = {
  slug: "entretien-espace-coworking",
  title: "Entretien d'un espace de coworking : hauts flux et surfaces partagées",
  description:
    "Surfaces partagées, hauts flux, perception des membres : la méthode pour un coworking irréprochable.",
  category: "Guides Pratiques",
  date: "2025-10-13",
  readingTime: 9,
  hero,
  heroAlt: "Agent ELITESY nettoyant un espace de coworking moderne et lumineux",
  intro:
    "Un coworking n'est pas un bureau classique : c'est un service. Les membres jugent la qualité de leur abonnement sur la propreté autant que sur le café ou la connexion. La rotation des utilisateurs et les hauts flux exigent une organisation très différente du tertiaire traditionnel. Voici notre approche.",
  content: [
    { type: "h2", text: "Ce qui rend le coworking spécifique" },
    { type: "p", text: "Trois différences majeures : forte rotation horaire (un poste peut être occupé par 3-4 personnes différentes dans la journée), forte densité (zones partagées intensives), exigence client direct (le membre paie un service et le note publiquement). Le nettoyage doit s'adapter à ces trois contraintes." },
    { type: "h2", text: "L'intervention en flux continu : la clé" },
    { type: "p", text: "Le coworking ne peut pas se contenter d'un nettoyage de fin de journée. Il faut une présence en continu, même légère : un agent dédié 2 à 6 h par jour selon la taille, qui circule pour désinfecter les postes libérés, réapprovisionner les sanitaires, débarrasser les tasses oubliées." },
    { type: "p", text: "Cette présence visible est aussi un signal de qualité pour les membres : ils voient que le service tourne. C'est le différentiel commercial d'un coworking premium." },
    { type: "h2", text: "Les zones à fort enjeu" },
    { type: "ul", items: [
      "Cuisine et espace café : la zone la plus exposée — passage permanent",
      "Sanitaires : un sanitaire moyen sur un coworking voit 20-30 visites/heure aux pics",
      "Salles de réunion : libération/réservation rapide, nettoyage entre chaque créneau",
      "Phone booths : haute densité d'utilisation, contacts répétés",
      "Espaces lounge : tissus, coussins, tapis — biofilm rapide",
      "Imprimante partagée : papier, cartouches, désinfection des écrans tactiles",
    ]},
    { type: "h2", text: "Le protocole entre deux créneaux de salle de réunion" },
    { type: "p", text: "5 minutes maximum : ramassage des verres et bouteilles, lingette désinfectante sur table et accoudoirs, vérification du paperboard et des marqueurs, rangement des chaises, contrôle visuel. C'est l'opération qui rend le coworking compétitif face au bureau classique." },
    { type: "callout", text: "ELITESY adapte ses dispositifs aux coworkings parisiens et franciliens. Tarification à l'usage ou au forfait — 06 09 16 50 99." },
    { type: "h2", text: "La cuisine partagée" },
    { type: "p", text: "C'est la zone qui salit en continu et que tout le monde voit. Trois passages minimum par jour : milieu de matinée (après les cafés du matin), milieu d'après-midi (post-déjeuner), fin de journée (réinitialisation complète). Lave-vaisselle vidé et relancé deux fois par jour minimum." },
    { type: "h2", text: "Le rôle du community manager" },
    { type: "p", text: "Le community manager du coworking est l'interface entre les membres et le prestataire de nettoyage. Briefing hebdomadaire de 15 minutes : zones à renforcer, retours membres, ajustements. Ce dialogue régulier vaut beaucoup plus qu'un cahier des charges figé." },
    { type: "h2", text: "Les consommables : ne jamais tomber court" },
    { type: "p", text: "Stock J+3 minimum pour tous les consommables critiques : papier toilette, essuie-mains, savon, gel hydroalcoolique, sacs poubelle, café et thé si prestataire en gère le réassort. Un manque visible un matin = un avis négatif Google en deux clics." },
    { type: "h2", text: "L'air et l'odeur" },
    { type: "p", text: "Aération renforcée du fait de la densité, diffuseur d'huile essentielle léger à l'accueil (pas de spray), entretien strict de la VMC et des bouches. L'odeur perçue à l'entrée détermine la première impression d'un visiteur qui découvre l'espace." },
    { type: "h2", text: "Reporting et avis" },
    { type: "p", text: "Une fois par mois, faire le lien entre les avis Google/SiteCirculé et la qualité du nettoyage. Les commentaires les plus durs portent souvent sur la propreté. Le prestataire doit recevoir ce retour et y répondre par un plan d'action visible." },
    { type: "h2", text: "Conclusion : la propreté est le premier service" },
    { type: "p", text: "Dans un coworking, la propreté n'est pas une fonction support : c'est un élément central de l'offre commerciale. ELITESY structure ses interventions en partenariat opérationnel avec les opérateurs de coworking, pas en simple prestation." },
  ],
  status: "published",
};