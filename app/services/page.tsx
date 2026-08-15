import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, ClipboardList, Workflow, Building2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BookButton } from "@/components/BookButton";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enterprise AI, Automation & Transformation Services",
  description: "Explore Syncrio's enterprise AI, AI agents, intelligent automation, program management, and digital transformation services.",
  alternates: { canonical: `${SITE_URL}/services` },
};

const categoryIcons = {
  "AI Transformation": BrainCircuit,
  "Project & Program Management": ClipboardList,
  "Intelligent Automation": Workflow,
  "Enterprise Consulting": Building2,
} as const;

export default function ServicesPage() {
  const categories = Object.keys(categoryIcons) as Array<keyof typeof categoryIcons>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Syncrio Services</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              AI, Automation & <span className="gradient-text">Enterprise Transformation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              From AI strategy and AI agents to intelligent automation, program leadership, and digital transformation, Syncrio helps enterprises turn complex delivery challenges into measurable outcomes.
            </p>
            <div className="mt-9 flex justify-center">
              <BookButton className="inline-flex rounded-full bg-gradient-to-r from-secondary to-accent px-7 py-3.5 font-semibold text-white shadow-xl shadow-secondary/20">
                Get a Free AI Consultation
              </BookButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const categoryServices = services.filter((service) => service.category === category);
              return (
                <div key={category}>
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-secondary/15 to-accent/15 text-secondary">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{category}</h2>
                      <p className="mt-1 text-sm text-slate-500">Explore Syncrio's capabilities in {category.toLowerCase()}.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/10"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-secondary">{service.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.shortDescription}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                          Explore service <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
