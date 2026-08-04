"use client";

import { Reveal } from "./Reveal";
import { Eye, TestTube2, Network } from "lucide-react";

const products = [
  {
    icon: Eye,
    eyebrow: "Meeting Intelligence",
    name: "Syncrio Lens",
    desc: "Capture action items, decisions, risks, and organizational knowledge from every meeting.",
    tags: ["Action Items", "Knowledge Capture", "Risk Detection"],
  },
  {
    icon: TestTube2,
    eyebrow: "Quality Engineering",
    name: "TestPilot AI",
    desc: "AI-driven requirements traceability (RTM), test case generation, and execution planning at enterprise scale.",
    tags: ["Requirements Traceability", "Test Case Generation", "Execution Planning"],
  },
  {
    icon: Network,
    eyebrow: "Enterprise Knowledge Graph",
    name: "Knowledge Hub",
    desc: "Unify SOPs, docs, and delivery artifacts into a searchable, copilot-ready organizational knowledge layer.",
    tags: ["SOP Search", "AI Copilot", "Delivery Copilot"],
  },
];

export function Products() {
  return (
    <section id="products" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Products</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          AI-native software for enterprise delivery
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Built for the way large organizations actually work — governed, integrated, and audit-ready.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-secondary/20">
                <p.icon size={22} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-secondary">{p.eyebrow}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                Coming Soon
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
