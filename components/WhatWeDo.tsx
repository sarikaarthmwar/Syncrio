"use client";

import { Reveal } from "./Reveal";
import { BrainCircuit, ClipboardList, Workflow, Building2, Check } from "lucide-react";

const disciplines = [
  {
    icon: BrainCircuit,
    title: "AI Transformation",
    items: ["AI Strategy", "AI Governance", "Enterprise AI", "AI Agents", "GenAI Adoption", "Copilots"],
  },
  {
    icon: ClipboardList,
    title: "Project & Program Management",
    items: ["PMO", "Delivery Excellence", "Portfolio Governance", "Agile Transformation", "Risk Management", "Program Leadership"],
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    items: ["Workflow Automation", "Testing Automation", "Business Automation", "Document Intelligence", "AI Agents", "Process Automation"],
  },
  {
    icon: Building2,
    title: "Enterprise Consulting",
    items: ["Digital Transformation", "Operating Model", "Technology Strategy", "Process Excellence", "Organizational Change"],
  },
];

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
                {d.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check size={14} className="shrink-0 text-accent" />
                    {it}
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
