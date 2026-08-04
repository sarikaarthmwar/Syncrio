import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/lib/blog-posts";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const TITLE = "Enterprise AI Solutions & AI for Enterprise Insights | Syncrio Blog";
const DESCRIPTION =
  "Practical guidance on enterprise AI solutions, AI for enterprise adoption, governance, and program delivery — written for CIOs, CTOs, and PMO leaders.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function BlogIndex() {
  const [featured, ...rest] = posts;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    hasPart: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.updated,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Insights</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Enterprise AI Solutions &amp; AI for Enterprise Insights
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Practical, no-hype guidance on enterprise AI solutions, adoption, and governance —
            written for CIOs, CTOs, PMO leaders, and digital transformation teams evaluating{" "}
            <strong>AI for enterprise</strong> programs.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <BlogCard post={featured} featured />
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
