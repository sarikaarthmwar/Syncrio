"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { BrainCircuit, ClipboardList, Workflow, Building2, Check } from "lucide-react";

const disciplines = [
  {
    icon: BrainCircuit,
    title: "AI Transformation",
    items: [
      ["AI Strategy", "ai-strategy"],
      ["AI Governance", "ai-governance"],
      ["Enterprise AI", "enterprise-ai"],
      ["AI Agents", "ai-agents"],
      ["GenAI Adoption", "genai-adoption"],
      ["Copilots", "ai-copilots"],
    ],
  },
  {
    icon: ClipboardList,
    title: "Project & Program Management",
    items: [
      ["PMO", "pmo"],
      ["Delivery Excellence", "delivery-excellence"],
      ["Portfolio Governance", "portfolio-governance"],
      ["Agile Transformation", "agile-transformation"],
      ["Risk Management", "risk-management"],
      ["Program Leadership", "program-leadership"],
    ],
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    items: [
      ["Workflow Automation", "workflow-automation"],
      ["Testing Automation", "testing-automation"],
      ["Business Automation", "business-automation"],
      ["Document Intelligence", "document-intelligence"],
      ["AI Agents", "ai-agents"],
      ["Process Automation", "process-automation"],
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Consulting",
    items: [
      ["Digital Transformation", "digital-transformation"],
      ["Operating Model", "operating-model"],
      ["Technology Strategy", "technology-strategy"],
      ["Process Excellence", "process-excellence"],
      ["Organizational Change", "organizational-change"],
    ],
  },
] as const;

export function WhatWeDo() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary">What We Do</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Four disciplines. One outcome.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          We combine AI, program management, automation, and enterprise consulting to move
          delivery from unpredictable to inevitable.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.08}>
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/10">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-secondary/15 to-accent/15 text-secondary transition-colors group-hover:from-secondary group-hover:to-accent group-hover:text-white">
                <d.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{d.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {d.items.map(([label, slug]) => (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-secondary">
                      <Check size={14} className="shrink-0 text-accent" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
