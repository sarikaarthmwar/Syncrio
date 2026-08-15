import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Sparkles, Target, Workflow, BrainCircuit } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookButton } from "@/components/BookButton";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const TITLE = "Free Enterprise AI Opportunity Assessment | Syncrio";
const DESCRIPTION =
  "Discover where AI agents, generative AI, and intelligent automation can create measurable value across your enterprise. Book a free AI opportunity assessment with Syncrio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/ai-assessment` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/ai-assessment`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AIAssessmentPage() {
  const assessmentLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise AI Opportunity Assessment",
    description: DESCRIPTION,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    url: `${SITE_URL}/ai-assessment`,
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(assessmentLd) }} />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-semibold text-secondary">
              <Sparkles size={15} /> Free AI Opportunity Assessment
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Find where <span className="gradient-text">AI can create real business value</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Not every process needs an AI agent. Not every automation problem needs GenAI. Syncrio helps you identify the opportunities where AI, automation, and better delivery practices can make the biggest measurable difference.
            </p>
            <div className="mt-9 flex justify-center">
              <BookButton className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-7 py-3.5 font-semibold text-white shadow-xl shadow-secondary/20">
                Book Your Free Assessment <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </BookButton>
            </div>
            <p className="mt-4 text-sm text-slate-500">30-minute conversation · No obligation · Enterprise-focused</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Identify", text: "Find high-value opportunities across business processes, delivery, knowledge work, and enterprise operations." },
              { icon: BrainCircuit, title: "Prioritize", text: "Separate practical AI opportunities from ideas that are expensive, low-value, or not ready for AI." },
              { icon: Workflow, title: "Roadmap", text: "Turn the strongest opportunities into a practical roadmap with clear next steps and measurable outcomes." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-secondary/15 to-accent/15 text-secondary"><Icon size={22} /></div>
                <h2 className="mt-5 text-xl font-bold text-slate-900">{title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">What we assess</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A business-first view of AI readiness</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">We look beyond technology to understand where AI can actually improve how your organization works.</p>
            </div>
            <div className="grid gap-3">
              {[
                "Repetitive and manual workflows",
                "Decision-heavy enterprise processes",
                "Knowledge and document-intensive work",
                "SaaS implementation and delivery activities",
                "Testing and quality engineering opportunities",
                "Meeting, governance, and program-management activities",
                "Existing automation and AI investments",
                "Data, integration, governance, and adoption considerations",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-accent" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Syncrio</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">AI advice grounded in enterprise delivery experience</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Syncrio combines enterprise SaaS and transformation experience with AI agents, intelligent automation, program leadership, and AI-native products. The goal is not to add AI everywhere — it is to apply AI where it improves outcomes.
          </p>
          <div className="mt-9 flex justify-center">
            <BookButton className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 font-semibold text-white shadow-lg">
              Start the Conversation <ArrowRight size={17} />
            </BookButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
