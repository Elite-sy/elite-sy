// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
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
