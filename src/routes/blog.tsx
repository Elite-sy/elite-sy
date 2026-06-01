import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { getAllPostsForListing } from "@/data/blog";

const searchSchema = z.object({
  cat: fallback(z.string(), "Toutes").default("Toutes"),
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/blog")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Blog ELITESY — Conseils, normes & expertise propreté" },
      {
        name: "description",
        content:
          "Guides pratiques, normes ARS/HACCP, écolabels, techniques et études de cas : tout le savoir-faire ELITESY pour la propreté professionnelle.",
      },
      { property: "og:title", content: "Blog ELITESY — Expertise propreté professionnelle" },
      {
        property: "og:description",
        content:
          "Filtrez par catégorie : vitres, écolabel, HACCP, pharmacie, santé, syndics… 70+ articles pour les décideurs exigeants.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { cat, q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q);

  const posts = getAllPostsForListing();

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category));
    return ["Toutes", ...Array.from(set).sort()];
  }, [posts]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { Toutes: posts.length };
    posts.forEach((p) => {
      c[p.category] = (c[p.category] ?? 0) + 1;
    });
    return c;
  }, [posts]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return posts.filter((p) => {
      const okCat = cat === "Toutes" || p.category === cat;
      const okQ =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term);
      return okCat && okQ;
    });
  }, [posts, cat, q]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted/40 to-background border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">
            Le blog ELITESY
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-3xl">
            L'expertise propreté, sans détour.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Guides pratiques, normes ARS &amp; HACCP, écolabels, techniques de
            terrain et études de cas. {posts.length} articles pour vous aider à
            décider, prescrire et contrôler.
          </p>

          {/* Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ search: (prev) => ({ ...prev, q: query }) });
            }}
            className="mt-10 max-w-xl flex items-center gap-2 bg-background border border-border rounded-sm px-4 py-3 shadow-sm"
          >
            <Search className="size-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher : vitres, HACCP, pharmacie, écolabel…"
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
            {q && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  navigate({ search: (prev) => ({ ...prev, q: "" }) });
                }}
                className="text-xs text-muted-foreground hover:text-primary"
              >
                effacer
              </button>
            )}
          </form>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-20 z-30 bg-background/85 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((c) => {
            const active = c === cat;
            return (
              <Link
                key={c}
                to="/blog"
                search={(prev) => ({ ...prev, cat: c })}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:text-primary hover:border-primary/50"
                }`}
              >
                <span>{c}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    active ? "bg-primary-foreground/20" : "bg-muted"
                  }`}
                >
                  {counts[c] ?? 0}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            {cat === "Toutes" ? "Tous les articles" : cat}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filtered.length} article{filtered.length > 1 ? "s" : ""}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-sm">
            <p className="text-muted-foreground">
              Aucun article ne correspond à votre recherche.
            </p>
            <Link
              to="/blog"
              search={{ cat: "Toutes", q: "" }}
              className="inline-block mt-4 text-sm text-primary hover:underline"
            >
              Réinitialiser les filtres
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col bg-card border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-colors"
              >
                {p.hero ? (
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={p.hero}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-gradient-to-br from-muted to-muted/40 flex items-center justify-center">
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">
                      À paraître
                    </span>
                  </div>
                )}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-3 text-xs">
                    <Link
                      to="/blog"
                      search={(prev) => ({ ...prev, cat: p.category })}
                      className="text-primary font-semibold tracking-wider uppercase hover:underline"
                    >
                      {p.category}
                    </Link>
                    <span className="text-muted-foreground">·</span>
                    <time className="text-muted-foreground">
                      {new Date(p.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground leading-snug">
                    {p.status === "published" ? (
                      <Link
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="hover:text-primary transition-colors"
                      >
                        {p.title}
                      </Link>
                    ) : (
                      <span>{p.title}</span>
                    )}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">
                    {p.description}
                  </p>
                  <div className="mt-5">
                    {p.status === "published" ? (
                      <Link
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="text-xs font-semibold tracking-wider uppercase text-primary hover:underline"
                      >
                        Lire l'article →
                      </Link>
                    ) : (
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                        Bientôt en ligne
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Un projet de propreté professionnelle ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nos experts ELITESY vous rappellent sous 24 h pour un audit gratuit
            de vos besoins.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33609165099"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition"
            >
              06 09 16 50 99
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}