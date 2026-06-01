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
import { post as boulangerie } from "./posts/nettoyage-boulangerie-patisserie";
import { post as laboAnalyses } from "./posts/nettoyage-laboratoire-analyses";
import { post as ecoleMat } from "./posts/nettoyage-ecole-maternelle-primaire";
import { post as collegeLycee } from "./posts/nettoyage-college-lycee";
import { post as museeGalerie } from "./posts/nettoyage-musee-galerie";
import { post as salleSpectacle } from "./posts/nettoyage-salle-spectacle";
import { post as iso14644 } from "./posts/norme-iso-14644-salles-blanches";
import { post as dqo } from "./posts/demarche-qualite-officine-dqo";
import { post as qualipropre } from "./posts/certification-qualipropre";
import { post as dasri } from "./posts/reglementation-dasri-officine";
import { post as duerp } from "./posts/evaluation-risques-document-unique-nettoyage";
import { post as en14476 } from "./posts/norme-en-14476-virucide";
import { post as biocides } from "./posts/reglementation-produits-biocides";
import { post as accessibilite } from "./posts/accessibilite-erp-entretien";
import { post as registreSec } from "./posts/registre-securite-erp";
import { post as cov } from "./posts/reduction-cov-air-interieur";
import { post as zeroPlastique } from "./posts/nettoyage-zero-plastique-bureau";
import { post as elecVsTherm } from "./posts/materiel-nettoyage-electrique-vs-thermique";
import { post as monobrosse } from "./posts/monobrosse-utilisation-types";
import { post as aspirateur } from "./posts/aspirateur-professionnel-criteres";
import { post as chariot } from "./posts/chariot-de-menage-organisation";
import { post as dilution } from "./posts/dilution-produits-detergents";
import { post as detartrant } from "./posts/detartrant-sanitaires-choisir";
import { post as degraissant } from "./posts/degraissant-cuisine-professionnelle";
import { post as poignees } from "./posts/desinfection-poignees-portes";
import { post as cuisineBureau } from "./posts/garder-cuisine-bureau-propre";
import { post as frequence } from "./posts/frequence-nettoyage-bureaux-recommandee";
import { post as jourVsSoir } from "./posts/nettoyage-jour-vs-soir-avantages";
import { post as etudeCasParis } from "./posts/etude-cas-siege-tertiaire-paris";

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
  boulangerie,
  laboAnalyses,
  ecoleMat,
  collegeLycee,
  museeGalerie,
  salleSpectacle,
  iso14644,
  dqo,
  qualipropre,
  dasri,
  duerp,
  en14476,
  biocides,
  accessibilite,
  registreSec,
  cov,
  zeroPlastique,
  elecVsTherm,
  monobrosse,
  aspirateur,
  chariot,
  dilution,
  detartrant,
  degraissant,
  poignees,
  cuisineBureau,
  frequence,
  jourVsSoir,
  etudeCasParis,
].sort(
  (a, b) => b.date.localeCompare(a.date),
);

export const plannedPosts: PlannedPost[] = [
  // Tous les articles planifiés ont été publiés (70/70).
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