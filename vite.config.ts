// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

// Slugs des pages dynamiques listés explicitement — vite.config.ts ne peut pas
// importer depuis @/... (alias non résolu par Node au chargement de la config).
// À garder en phase avec src/data/blog/index.ts et les routes $slug.
const propreteSlugs = [
  "bureaux-tertiaire",
  "syndics-copropriete",
  "professionnels-sante",
  "professionnels-batiment",
  "surface-vente-erp",
  "education-collectivites",
];

const softFacilitySlugs = [
  "pilotage-multiservices",
  "gestion-dechets",
  "espaces-exterieurs",
  "logistique-sur-site",
  "maintenance-legere",
  "services-occupants",
];

const secteurSlugs = [
  "tertiaire",
  "syndics-gestionnaires",
  "pharmaceutique",
  "surfaces-de-vente",
];

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

const staticRoutes = [
  "/",
  "/proprete",
  "/proprete/pharmaceutique",
  "/proprete/professionnels-sante",
  "/proprete/surface-vente-erp",
  "/proprete/syndics-copropriete",
  "/soft-facility",
  "/amo",
  "/blog",
  "/contact",
  "/mentions-legales",
  "/sitemap.xml",
  ...propreteSlugs.map((s) => `/proprete/${s}`),
  ...softFacilitySlugs.map((s) => `/soft-facility/${s}`),
  ...secteurSlugs.map((s) => `/secteur/${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
];

export default defineConfig({
  // Export 100% statique pour hébergement mutualisé (O2switch).
  // Toutes les routes ci-dessus sont pré-rendues en HTML dans `.output/public/`.
  nitro: {
    preset: "static",
    // @ts-expect-error — prerender est transmis tel quel à nitro (non typé par le wrapper Lovable).
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: staticRoutes,
    },
  },
  plugins: [
    // Auto-convert imported images to WebP (smaller files, near-universal browser support).
    // Single-format directive → import still returns a URL string, so existing
    // `import img from "@/assets/x.jpg"` keeps working unchanged.
    // Opt out per-import with `?skip-opt`. Use `?as=picture&format=avif;webp;jpg&w=640;1024;1600`
    // for explicit responsive <picture> sources.
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("skip-opt") || url.searchParams.has("as")) {
          return new URLSearchParams();
        }
        const ext = url.pathname.split(".").pop()?.toLowerCase();
        if (!ext || !["jpg", "jpeg", "png"].includes(ext)) {
          return new URLSearchParams();
        }
        return new URLSearchParams("format=webp&quality=78");
      },
    }),
  ],
});
