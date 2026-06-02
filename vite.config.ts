// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";
import { publishedPosts } from "./src/data/blog";

// Slugs des pages dynamiques — listés ici pour le pré-rendu statique (O2switch).
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
  ...publishedPosts.map((p) => `/blog/${p.slug}`),
];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
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
