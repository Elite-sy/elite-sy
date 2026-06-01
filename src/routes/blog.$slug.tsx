import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { getPostBySlug, publishedPosts } from "@/data/blog";
import type { Block } from "@/data/blog/types";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article — Expertise ELITESY" }] };
    const { post } = loaderData;
    const url = `https://elite-sy.lovable.app/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} — Expertise ELITESY` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:image", content: post.hero },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:image", content: post.hero ?? "" },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: post.hero,
            datePublished: post.date,
            articleSection: post.category,
            author: { "@type": "Organization", name: "ELITESY" },
            publisher: {
              "@type": "Organization",
              name: "ELITESY",
              url: "https://elite-sy.lovable.app",
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Article introuvable
        </h1>
        <p className="mt-3 text-muted-foreground">
          Cet article n'existe pas ou a été déplacé.
        </p>
        <Link
          to="/blog"
          className="inline-block mt-6 text-sm text-primary hover:underline"
        >
          ← Retour à l'expertise
        </Link>
      </div>
    </Layout>
  ),
  component: BlogPost,
});

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4"
        >
          {b.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="font-display text-xl font-semibold text-foreground mt-8 mb-3"
        >
          {b.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-foreground/85 leading-relaxed mb-5">
          {b.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="list-disc pl-6 mb-6 space-y-2 text-foreground/85">
          {b.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="list-decimal pl-6 mb-6 space-y-2 text-foreground/85">
          {b.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside
          key={i}
          className="my-8 border-l-4 border-primary bg-primary/5 px-5 py-4 text-foreground/90"
        >
          {b.text}
        </aside>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 border-l-4 border-border pl-5 italic text-muted-foreground"
        >
          {b.text}
        </blockquote>
      );
  }
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = publishedPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout>
      <article>
        {/* Hero */}
        <header className="bg-gradient-to-b from-muted/40 to-background border-b border-border/50">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 md:py-24">
            <Link
              to="/blog"
              search={{ cat: post.category, q: "" }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary hover:underline"
            >
              <ArrowLeft className="size-3" /> {post.category}
            </Link>
            <h1 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              {post.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <time>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime} min de lecture</span>
            </div>
          </div>
        </header>

        {post.hero && (
          <div className="mx-auto max-w-5xl px-6 lg:px-10 -mt-6">
            <img
              src={post.hero}
              alt={post.heroAlt}
              className="w-full aspect-[16/9] object-cover rounded-sm shadow-lg"
            />
          </div>
        )}

        {/* Body */}
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-12 md:py-16">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light mb-10">
            {post.intro}
          </p>
          {post.content.map(renderBlock)}

          {/* CTA in-article */}
          <div className="mt-16 border border-border rounded-sm p-8 bg-muted/30">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Besoin d'un accompagnement ELITESY ?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Nos équipes interviennent partout en Île-de-France. Audit gratuit
              et devis sous 24 h.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33609165099"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition"
              >
                06 09 16 50 99
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-border/50 bg-muted/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                Dans la même catégorie
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group block bg-card border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-colors"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={p.hero}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-primary font-semibold tracking-wider uppercase">
                        {p.category}
                      </p>
                      <h3 className="mt-2 font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}