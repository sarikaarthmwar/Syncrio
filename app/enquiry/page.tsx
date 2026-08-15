import { ArrowLeft, ArrowRight, Globe2, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { WebsiteEnquiryForm } from "@/components/WebsiteEnquiryForm";

export const metadata = {
  title: "Start Your Website Project",
  description: "Tell Syncrio what you need. We build modern websites and can extend them with AI and automation.",
};

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-primary">
          <ArrowLeft size={16} /> Back to Syncrio
        </Link>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <section className="lg:sticky lg:top-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1.5 text-xs font-semibold text-secondary">
              <Sparkles size={14} /> New website projects
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Let&apos;s build something your business can grow with.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Tell us what you need. Syncrio can help you launch a polished business website today—and add AI and automation as you grow.
            </p>

            <div className="mt-9 space-y-4">
              <Benefit icon={<Globe2 size={19} />} title="Modern, conversion-focused websites" text="Clean, responsive experiences built around your business goals." />
              <Benefit icon={<Zap size={19} />} title="AI-ready from day one" text="Add chat, lead capture, workflows and other automation when it makes sense." />
              <Benefit icon={<ArrowRight size={19} />} title="Simple engagement" text="Start with a focused requirement instead of a long agency process." />
            </div>

            <p className="mt-10 text-sm text-slate-500">
              Not sure exactly what you need? That&apos;s okay. Give us the context and we&apos;ll help shape the right solution.
            </p>
          </section>

          <section>
            <WebsiteEnquiryForm />
          </section>
        </div>
      </div>
    </main>
  );
}

function Benefit({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-secondary shadow-sm ring-1 ring-slate-200">{icon}</div>
      <div>
        <h2 className="font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{text}</p>
      </div>
    </div>
  );
}
