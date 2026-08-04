import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { BlogSignature } from "@/components/BlogSignature";
import { BookButton } from "@/components/BookButton";
import { posts, getPost, type BlogBlock } from "@/lib/blog-posts";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-900">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-7 text-xl font-semibold text-slate-900">{block.text}</h3>;
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2.5 text-slate-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 rounded-2xl border-l-4 border-secondary bg-slate-50 px-6 py-5 text-lg font-medium italic text-slate-700">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="mt-4 leading-relaxed text-slate-600">{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = posts.filter((p) => post.relatedSlugs.includes(p.slug));

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.date,
    dateModified: post.updated,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: url,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-secondary">Blog</Link>
          </nav>

          <Link href="/blog" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
            <ArrowLeft size={15} /> Back to Insights
          </Link>

          <span className="mt-6 block w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>Sarika Arthamwar</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">{post.excerpt}</p>

          <div className="mt-2">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {post.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
              <div className="mt-5 space-y-4">
                {post.faqs.map((f, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-900">{f.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <BlogSignature />

          <div className="mt-8 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-8 text-center text-white">
            <h3 className="text-xl font-bold">See how Syncrio applies this in practice</h3>
            <p className="mt-2 text-white/85">Book a free 30-minute AI strategy consultation with our team.</p>
            <BookButton className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-lg transition-transform hover:scale-[1.03]">
              Book Consultation <ArrowRight size={16} className="ml-1 inline" />
            </BookButton>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related reading</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
