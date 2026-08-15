import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BookButton } from "@/components/BookButton";
import { services, servicesBySlug } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) return {};
  return {
    title: `${service.title} Services | ${service.category}`,
    description: `${service.shortDescription} Syncrio provides practical ${service.title.toLowerCase()} services for SaaS and enterprise organizations.`,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title: `${service.title} Services | Syncrio`,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) notFound();

  const related = services
    .filter((item) => item.category === service.category && item.slug !== service.slug)
    .slice(0, 3);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Syncrio",
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${service.slug}`,
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary">
              <ArrowLeft size={15} /> All services
            </Link>
            <div className="mt-10 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">{service.category}</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">{service.title}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">{service.shortDescription}</p>
              <div className="mt-8">
                <BookButton className="inline-flex rounded-full bg-gradient-to-r from-secondary to-accent px-7 py-3.5 font-semibold text-white shadow-xl shadow-secondary/20">
                  Discuss Your Requirement
                </BookButton>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">How Syncrio Helps</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">From business challenge to practical transformation</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{service.description}</p>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-slate-900">Typical outcomes</h3>
              <div className="mt-5 grid gap-3">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={19} />
                    <span className="font-medium text-slate-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Common use cases</p>
            <ul className="mt-5 space-y-4">
              {service.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-secondary to-accent" />
                  {useCase}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-slate-200 pt-7">
              <p className="text-sm leading-relaxed text-slate-600">Not sure where to start? Talk to Syncrio about your business challenge and we can identify the right transformation path.</p>
              <BookButton className="mt-5 w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Book Free Consultation</BookButton>
            </div>
          </aside>
        </section>

        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Explore More</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Related Syncrio services</h2>
              </div>
              <Link href="/services" className="hidden items-center gap-2 text-sm font-semibold text-secondary sm:inline-flex">View all services <ArrowRight size={15} /></Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-secondary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
