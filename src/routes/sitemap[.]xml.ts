import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { publishedPosts } from "@/data/blog";
import { sectors } from "./soft-facility";
import { services as softFacilityServices } from "./soft-facility_.$slug";

const BASE_URL = "https://elite-sy.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; priority: string; changefreq?: string }[] = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/proprete", priority: "0.9", changefreq: "monthly" },
          { path: "/proprete/pharmaceutique", priority: "0.8", changefreq: "monthly" },
          { path: "/proprete/professionnels-sante", priority: "0.8", changefreq: "monthly" },
          { path: "/proprete/surface-vente-erp", priority: "0.8", changefreq: "monthly" },
          { path: "/proprete/syndics-copropriete", priority: "0.8", changefreq: "monthly" },
          { path: "/soft-facility", priority: "0.9", changefreq: "monthly" },
          { path: "/amo", priority: "0.9", changefreq: "monthly" },
          { path: "/blog", priority: "0.8", changefreq: "weekly" },
          { path: "/contact", priority: "0.7", changefreq: "yearly" },
          { path: "/mentions-legales", priority: "0.3", changefreq: "yearly" },
          ...sectors.map((s) => ({
            path: `/secteur/${s.slug}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
          ...Object.keys(softFacilityServices).map((slug) => ({
            path: `/soft-facility/${slug}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
          ...publishedPosts.map((p) => ({
            path: `/blog/${p.slug}`,
            priority: "0.6",
            changefreq: "monthly",
          })),
        ];
        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          entries
            .map(
              (e) =>
                `  <url><loc>${BASE_URL}${e.path}</loc>${e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : ""}<priority>${e.priority}</priority></url>`,
            )
            .join("\n") +
          `\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});