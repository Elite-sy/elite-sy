import type { Post, PlannedPost } from "./types";
import { post as vitres } from "./posts/vitres-bureau-sans-traces";
import { post as ecolo } from "./posts/produits-ecologiques-nettoyage";
import { post as haccp } from "./posts/normes-haccp-restauration";
import { post as ars } from "./posts/conformite-ars-officine-pharmacie";
import { post as bionet } from "./posts/bionettoyage-hospitalier-protocole";
import { post as ecolabel } from "./posts/ecolabel-europeen-explication";
import { post as vitresHauteur } from "./posts/nettoyage-vitres-grande-hauteur";
import { post as frigo } from "./posts/nettoyage-frigo-bureau-protocole";
import { post as eauPure } from "./posts/eau-pure-osmosee-nettoyage-vitres";
import { post as microfibre } from "./posts/microfibre-vs-lavette-jetable";
import { post as codeCouleur } from "./posts/code-couleur-microfibres";
import { post as ete } from "./posts/nettoyage-ete-locaux-professionnels";
import { post as odeursClim } from "./posts/eliminer-odeurs-climatisation-bureau";
import { post as protocoleQuot } from "./posts/protocole-nettoyage-bureaux-quotidien";
import { post as moquette } from "./posts/entretien-moquette-bureaux";
import { post as cabinetMed } from "./posts/nettoyage-cabinet-medical-protocole";
import { post as creche } from "./posts/nettoyage-creche-protocole";
import { post as vapeur } from "./posts/nettoyage-vapeur-sans-produit";
import { post as autolaveuse } from "./posts/choisir-autolaveuse-bureaux";
import { post as ph } from "./posts/ph-produit-nettoyage-quel-choisir";
import { post as coutM2 } from "./posts/combien-coute-nettoyage-bureaux-m2";
import { post as ecranClavier } from "./posts/nettoyer-ecran-clavier-bureau";
import { post as tapis } from "./posts/tapis-barrieres-hiver-sols";
import { post as tachesCafe } from "./posts/taches-cafe-moquette-traiter";
import { post as machineCafe } from "./posts/entretien-machine-cafe-bureau";
import { post as aerer } from "./posts/aerer-bureaux-qualite-air";
import { post as absent } from "./posts/agent-nettoyage-ne-vient-pas-que-faire";
import { post as sanitaires } from "./posts/sanitaires-bureau-rester-impeccable";
import { post as ecoPresta } from "./posts/demander-nettoyage-ecologique-prestataire";
import { post as finChantier } from "./posts/nettoyage-fin-chantier-livraison";
import { post as locauxVacants } from "./posts/remise-en-etat-locaux-vacants";
import { post as marbre } from "./posts/decapage-cristallisation-marbre";
import { post as cageEscalier } from "./posts/nettoyage-cage-escalier-immeuble";
import { post as partiesCommunes } from "./posts/entretien-parties-communes-copropriete";
import { post as parking } from "./posts/nettoyage-parking-souterrain";
import { post as dechets } from "./posts/gestion-dechets-bureaux-tri";
import { post as salleSport } from "./posts/nettoyage-salle-sport-entreprise";
import { post as coworking } from "./posts/entretien-espace-coworking";
import { post as showroom } from "./posts/nettoyage-showroom-flagship";
import { post as hotelChambre } from "./posts/nettoyage-hotel-chambre-protocole";
import { post as restoFinService } from "./posts/nettoyage-restaurant-fin-service";

export const publishedPosts: Post[] = [
  vitres,
  ecolo,
  haccp,
  ars,
  bionet,
  ecolabel,
  vitresHauteur,
  frigo,
  eauPure,
  microfibre,
  codeCouleur,
  ete,
  odeursClim,
  protocoleQuot,
  moquette,
  cabinetMed,
  creche,
  vapeur,
  autolaveuse,
  ph,
  coutM2,
  ecranClavier,
  tapis,
  tachesCafe,
  machineCafe,
  aerer,
  absent,
  sanitaires,
  ecoPresta,
  finChantier,
  locauxVacants,
  marbre,
  cageEscalier,
  partiesCommunes,
  parking,
  dechets,
  salleSport,
  coworking,
  showroom,
  hotelChambre,
  restoFinService,
].sort(
  (a, b) => b.date.localeCompare(a.date),
);

export const plannedPosts: PlannedPost[] = [
  // nettoyage-ete-locaux-professionnels → publié
  // eliminer-odeurs-climatisation-bureau → publié
  // nettoyage-frigo-bureau-protocole → publié
  // 20 articles vague 4 → publiés
  // protocole-nettoyage-bureaux-quotidien → publié
  // nettoyage-fin-chantier-livraison → publié
  // remise-en-etat-locaux-vacants → publié
  // nettoyage-vitres-grande-hauteur → publié
  // entretien-moquette-bureaux → publié
  // 10 articles secteurs vague 4 → publiés
  { slug: "nettoyage-boulangerie-patisserie", title: "Nettoyage d'une boulangerie-pâtisserie", description: "Laminoir, fournil et vitrines : hygiène et conformité DDPP.", category: "Guides Pratiques", date: "2025-09-15" },
  { slug: "nettoyage-laboratoire-analyses", title: "Nettoyage d'un laboratoire d'analyses", description: "Paillasses, hottes et gestion DASRI dans le respect des protocoles biologiques.", category: "Guides Pratiques", date: "2025-09-08" },
  // nettoyage-cabinet-medical-protocole → publié
  // nettoyage-creche-protocole → publié
  { slug: "nettoyage-ecole-maternelle-primaire", title: "Nettoyage d'une école maternelle et primaire", description: "Sanitaires, réfectoire et salles de classe : la méthode hors temps scolaire.", category: "Guides Pratiques", date: "2025-08-18" },
  { slug: "nettoyage-college-lycee", title: "Nettoyage d'un collège ou d'un lycée", description: "Volumes, flux et internat : organiser un entretien de qualité constante.", category: "Guides Pratiques", date: "2025-08-11" },
  { slug: "nettoyage-musee-galerie", title: "Nettoyage d'un musée ou d'une galerie d'art", description: "Préserver les œuvres, encadrer les agents et gérer les vitrines.", category: "Guides Pratiques", date: "2025-08-04" },
  { slug: "nettoyage-salle-spectacle", title: "Nettoyage d'une salle de spectacle", description: "Interventions en flux tendu entre deux représentations.", category: "Guides Pratiques", date: "2025-07-28" },
  // bionettoyage-hospitalier-protocole → publié
  { slug: "norme-iso-14644-salles-blanches", title: "Norme ISO 14644 : ce qu'il faut savoir sur les salles blanches", description: "Classes ISO 5 à 8, contrôles particulaires et méthode de bionettoyage.", category: "Normes & réglementations", date: "2025-07-14" },
  // conformite-ars-officine-pharmacie → publié
  { slug: "demarche-qualite-officine-dqo", title: "La Démarche Qualité Officine (DQO) et l'hygiène", description: "Intégrer le protocole de nettoyage à votre démarche qualité.", category: "Normes & réglementations", date: "2025-06-30" },
  { slug: "certification-qualipropre", title: "La certification Qualipropre : à quoi elle engage", description: "Le référentiel qualité de la profession propreté décrypté.", category: "Normes & réglementations", date: "2025-06-23" },
  { slug: "reglementation-dasri-officine", title: "Gestion des DASRI en officine et cabinet médical", description: "Tri, conditionnement, traçabilité et filières d'élimination.", category: "Normes & réglementations", date: "2025-06-16" },
  { slug: "evaluation-risques-document-unique-nettoyage", title: "Document unique et évaluation des risques pour le nettoyage", description: "Obligations employeur, TMS et exposition chimique : ce qu'il faut documenter.", category: "Normes & réglementations", date: "2025-06-09" },
  { slug: "norme-en-14476-virucide", title: "La norme EN 14476 : que garantit-elle vraiment ?", description: "Comprendre les tests d'efficacité virucide et les temps de contact.", category: "Normes & réglementations", date: "2025-06-02" },
  { slug: "reglementation-produits-biocides", title: "La réglementation des produits biocides en France", description: "Autorisations, étiquetage et obligations de l'utilisateur professionnel.", category: "Normes & réglementations", date: "2025-05-26" },
  { slug: "accessibilite-erp-entretien", title: "Accessibilité ERP : l'entretien des équipements PMR", description: "Cheminements, sanitaires accessibles et signalétique au quotidien.", category: "Normes & réglementations", date: "2025-05-19" },
  { slug: "registre-securite-erp", title: "Le registre de sécurité ERP : que doit-on y trouver ?", description: "Documents obligatoires, périodicité et lien avec le contrat de nettoyage.", category: "Normes & réglementations", date: "2025-05-12" },
  // nettoyage-vapeur-sans-produit → publié
  // microfibre-vs-lavette-jetable → publié
  // eau-pure-osmosee-nettoyage-vitres → publié
  { slug: "reduction-cov-air-interieur", title: "Réduire les COV pour améliorer l'air intérieur", description: "Choix des produits, ventilation et bonnes pratiques au quotidien.", category: "Écologie & environnement", date: "2025-04-14" },
  // ecolabel-europeen-explication → publié
  { slug: "nettoyage-zero-plastique-bureau", title: "Vers un nettoyage zéro plastique au bureau", description: "Recharges, contenants en verre et fournitures réutilisables.", category: "Écologie & environnement", date: "2025-03-31" },
  { slug: "materiel-nettoyage-electrique-vs-thermique", title: "Matériel de nettoyage : électrique ou thermique ?", description: "Bruit, émissions et coût d'usage : faire le bon choix selon le site.", category: "Écologie & environnement", date: "2025-03-24" },
  // choisir-autolaveuse-bureaux → publié
  { slug: "monobrosse-utilisation-types", title: "La monobrosse : usages, types et bons réflexes", description: "Basse, haute ou ultra-haute vitesse — choisir la bonne machine.", category: "Produits & techniques", date: "2025-03-10" },
  { slug: "aspirateur-professionnel-criteres", title: "Choisir un aspirateur professionnel : les vrais critères", description: "Filtration HEPA, niveau sonore, dépression et débit d'air.", category: "Produits & techniques", date: "2025-03-03" },
  { slug: "chariot-de-menage-organisation", title: "Organiser un chariot de ménage professionnel", description: "Code couleur, ergonomie et productivité sur le terrain.", category: "Produits & techniques", date: "2025-02-24" },
  // code-couleur-microfibres → publié
  { slug: "dilution-produits-detergents", title: "Dilution des produits détergents : les bons dosages", description: "Centrales murales, doseurs et règles de calcul à connaître.", category: "Produits & techniques", date: "2025-02-10" },
  // ph-produit-nettoyage-quel-choisir → publié
  { slug: "detartrant-sanitaires-choisir", title: "Choisir un détartrant pour sanitaires professionnels", description: "Force, compatibilité matériaux et précautions d'usage.", category: "Produits & techniques", date: "2025-01-27" },
  { slug: "degraissant-cuisine-professionnelle", title: "Dégraissant pour cuisine professionnelle : guide d'achat", description: "Hottes, sols, plans : sélectionner les bons produits par zone.", category: "Produits & techniques", date: "2025-01-20" },
  { slug: "desinfection-poignees-portes", title: "Désinfection des poignées de porte : la routine qui change tout", description: "Fréquence, produits et organisation en période épidémique.", category: "Conseils d'entretien", date: "2025-01-13" },
  { slug: "garder-cuisine-bureau-propre", title: "Garder la cuisine du bureau propre entre deux passages", description: "Règles simples à afficher pour l'équipe et bons réflexes.", category: "Conseils d'entretien", date: "2025-01-06" },
  // combien-coute-nettoyage-bureaux-m2 → publié
  { slug: "frequence-nettoyage-bureaux-recommandee", title: "Quelle fréquence de nettoyage pour des bureaux ?", description: "Quotidien, 3 fois par semaine, hebdomadaire — comment décider.", category: "FAQ", date: "2024-12-23" },
  { slug: "nettoyage-jour-vs-soir-avantages", title: "Nettoyage de jour ou de soir : avantages et inconvénients", description: "Coût, visibilité, qualité perçue : le débat tranché.", category: "FAQ", date: "2024-12-16" },
  { slug: "etude-cas-siege-tertiaire-paris", title: "Étude de cas : reprise du nettoyage d'un siège tertiaire à Paris", description: "12 000 m², 80 collaborateurs ELITESY, gains de qualité mesurés.", category: "Études de cas", date: "2024-12-09" },
];

export function getPostBySlug(slug: string): Post | undefined {
  return publishedPosts.find((p) => p.slug === slug);
}

export function getAllPostsForListing(): Array<{ slug: string; title: string; description: string; category: string; date: string; hero?: string; status: "published" | "planned" }> {
  const published = publishedPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    date: p.date,
    hero: p.hero,
    status: "published" as const,
  }));
  const planned = plannedPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    date: p.date,
    status: "planned" as const,
  }));
  return [...published, ...planned].sort((a, b) => b.date.localeCompare(a.date));
}