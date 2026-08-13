"use client";

import { Reveal } from "../Reveal";
import { Cpu, Briefcase, Landmark, Settings, Lightbulb, Palette, TrendingUp } from "lucide-react";

const disciplines = [
  { code: "01", icon: Cpu, title: "Technology & AI", fields: "Engineering · AI/ML · Data · Cloud", outcome: "Builds the technology" },
  { code: "02", icon: Briefcase, title: "Business & Management", fields: "Strategy · Operations · Business Dev", outcome: "Shapes the business" },
  { code: "03", icon: Landmark, title: "Finance & Economics", fields: "Finance · Accounting · FP&A", outcome: "Builds the financial engine" },
  { code: "04", icon: Settings, title: "Business Operations", fields: "Sales · Marketing · HR · Legal", outcome: "Keeps the business running" },
  { code: "05", icon: Lightbulb, title: "Consulting", fields: "Business Analysis · Transformation", outcome: "Solves customer problems" },
  { code: "06", icon: Palette, title: "Product & Design", fields: "Product Management · UX/UI", outcome: "Turns problems into products" },
  { code: "07", icon: TrendingUp, title: "Growth & Market", fields: "Marketing · Sales · GTM", outcome: "Takes it to the world" },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            The Syncrio Talent Ecosystem
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Every discipline has a role to play
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Syncrio isn&apos;t just an engineering team — every business function here has real
            problems worth solving with technology and AI.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 divide-y divide-rule border-y border-rule sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.04}>
              <div className="group h-full p-6 transition-colors hover:bg-white">
                <div className="flex items-center justify-between">
                  <d.icon size={18} className="text-slate-400 transition-colors group-hover:text-accent" />
                  <span className="font-display text-xs text-slate-300">{d.code}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{d.fields}</p>
                <p className="mt-4 text-xs font-semibold text-accent">→ {d.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
