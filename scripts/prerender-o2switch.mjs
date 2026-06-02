#!/usr/bin/env node
// Prerender static HTML pour chaque route listée -> dist/client/<path>/index.html
// Utilise le worker bundle (dist/server/index.mjs) chargé dans Node.
import { mkdirSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const clientDir = resolve(root, "dist/client");
const serverEntry = resolve(root, "dist/server/index.mjs");

if (!existsSync(serverEntry)) {
  console.error(`❌ ${serverEntry} introuvable. Lance 'vite build' d'abord.`);
  process.exit(1);
}

const propreteSlugs = [
  "bureaux-tertiaire","syndics-copropriete","professionnels-sante",
  "professionnels-batiment","surface-vente-erp","education-collectivites",
];
const softFacilitySlugs = [
  "pilotage-multiservices","gestion-dechets","espaces-exterieurs",
  "logistique-sur-site","maintenance-legere","services-occupants",
];
const secteurSlugs = ["tertiaire","syndics-gestionnaires","pharmaceutique","surfaces-de-vente"];
const blogSlugs = [
  "accessibilite-erp-entretien","aerer-bureaux-qualite-air","agent-nettoyage-ne-vient-pas-que-faire",
  "aspirateur-professionnel-criteres","bionettoyage-hospitalier-protocole","certification-qualipropre",
  "chariot-de-menage-organisation","choisir-autolaveuse-bureaux","code-couleur-microfibres",
  "combien-coute-nettoyage-bureaux-m2","conformite-ars-officine-pharmacie","decapage-cristallisation-marbre",
  "degraissant-cuisine-professionnelle","demander-nettoyage-ecologique-prestataire","demarche-qualite-officine-dqo",
  "desinfection-poignees-portes","detartrant-sanitaires-choisir","dilution-produits-detergents",
  "eau-pure-osmosee-nettoyage-vitres","ecolabel-europeen-explication","eliminer-odeurs-climatisation-bureau",
  "entretien-espace-coworking","entretien-machine-cafe-bureau","entretien-moquette-bureaux",
  "entretien-parties-communes-copropriete","etude-cas-siege-tertiaire-paris","evaluation-risques-document-unique-nettoyage",
  "frequence-nettoyage-bureaux-recommandee","garder-cuisine-bureau-propre","gestion-dechets-bureaux-tri",
  "materiel-nettoyage-electrique-vs-thermique","microfibre-vs-lavette-jetable","monobrosse-utilisation-types",
  "nettoyage-boulangerie-patisserie","nettoyage-cabinet-medical-protocole","nettoyage-cage-escalier-immeuble",
  "nettoyage-college-lycee","nettoyage-creche-protocole","nettoyage-ecole-maternelle-primaire",
  "nettoyage-ete-locaux-professionnels","nettoyage-fin-chantier-livraison","nettoyage-frigo-bureau-protocole",
  "nettoyage-hotel-chambre-protocole","nettoyage-jour-vs-soir-avantages","nettoyage-laboratoire-analyses",
  "nettoyage-musee-galerie","nettoyage-parking-souterrain","nettoyage-restaurant-fin-service",
  "nettoyage-salle-spectacle","nettoyage-salle-sport-entreprise","nettoyage-showroom-flagship",
  "nettoyage-vapeur-sans-produit","nettoyage-vitres-grande-hauteur","nettoyage-zero-plastique-bureau",
  "nettoyer-ecran-clavier-bureau","norme-en-14476-virucide","norme-iso-14644-salles-blanches",
  "normes-haccp-restauration","ph-produit-nettoyage-quel-choisir","produits-ecologiques-nettoyage",
  "protocole-nettoyage-bureaux-quotidien","reduction-cov-air-interieur","registre-securite-erp",
  "reglementation-dasri-officine","reglementation-produits-biocides","remise-en-etat-locaux-vacants",
  "sanitaires-bureau-rester-impeccable","taches-cafe-moquette-traiter","tapis-barrieres-hiver-sols",
  "vitres-bureau-sans-traces",
];

const routes = [
  "/",
  "/proprete","/proprete/pharmaceutique","/proprete/professionnels-sante",
  "/proprete/surface-vente-erp","/proprete/syndics-copropriete",
  "/soft-facility","/amo","/contact","/mentions-legales",
  ["/blog?cat=Toutes&q=&page=1", "/blog"],
  "/sitemap.xml",
  ...propreteSlugs.map((s) => `/proprete/${s}`),
  ...softFacilitySlugs.map((s) => `/soft-facility/${s}`),
  ...secteurSlugs.map((s) => `/secteur/${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
];

console.log(`🚀 Prerender ${routes.length} routes...`);
const { default: handler } = await import(serverEntry);
const ctx = {
  waitUntil: () => {},
  passThroughOnException: () => {},
  context: { waitUntil: () => {} },
};

let ok = 0;
let fail = 0;
for (const route of routes) {
  try {
    const [requestPath, outputPath] = Array.isArray(route) ? route : [route, route];
    const res = await handler.fetch(new Request("http://localhost" + requestPath), {}, ctx);
    if (res.status !== 200) {
      console.warn(`  ⚠️  ${requestPath} -> ${res.status}`);
      fail++;
      continue;
    }
    const body = await res.text();
    const ct = res.headers.get("content-type") ?? "";
    let outPath;
    if (outputPath === "/sitemap.xml") {
      outPath = join(clientDir, "sitemap.xml");
    } else if (outputPath === "/") {
      outPath = join(clientDir, "index.html");
    } else if (ct.includes("xml")) {
      outPath = join(clientDir, outputPath.replace(/^\//, ""));
    } else {
      outPath = join(clientDir, outputPath, "index.html");
    }
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, body);
    ok++;
  } catch (e) {
    const requestPath = Array.isArray(route) ? route[0] : route;
    console.error(`  ❌ ${requestPath}:`, e.message);
    fail++;
  }
}

// Copie .htaccess depuis public/ (Nitro static n'embarque pas les dotfiles
// systématiquement avec cloudflare-module — on s'assure qu'il est bien là).
const htaccessSrc = resolve(root, "public/.htaccess");
const htaccessDst = join(clientDir, ".htaccess");
if (existsSync(htaccessSrc)) {
  copyFileSync(htaccessSrc, htaccessDst);
  console.log(`  📄 .htaccess copié`);
}

console.log(`\n✅ Prerender terminé : ${ok} OK, ${fail} échec.`);
process.exit(fail > 0 ? 0 : 0);