"use client";

import { Reveal } from "../Reveal";
import { Cpu, Briefcase, Landmark, Settings, Lightbulb, Palette, TrendingUp } from "lucide-react";

const disciplines = [
  {
    code: "TEC",
    icon: Cpu,
    title: "Technology & AI",
    fields: "Engineering · AI/ML · Data · Automation · Cloud · Cybersecurity",
    outcome: "Builds the technology",
  },
  {
    code: "BIZ",
    icon: Briefcase,
    title: "Business & Management",
    fields: "MBA · Strategy · Operations · Entrepreneurship · Business Development",
    outcome: "Shapes the business",
  },
  {
    code: "FIN",
    icon: Landmark,
    title: "Finance & Economics",
    fields: "Finance · Accounting · FP&A · Investment · Business Analytics",
    outcome: "Builds the financial engine",
  },
  {
    code: "OPS",
    icon: Settings,
    title: "Business Operations",
    fields: "Sales · Marketing · HR · Customer Success · Finance Ops · Legal · Supply Chain",
    outcome: "Keeps the business running",
  },
  {
    code: "CNS",
    icon: Lightbulb,
    title: "Consulting & Problem Solving",
    fields: "Business Analysis · Management Consulting · Process Transformation · Research",
    outcome: "Solves customer problems",
  },
  {
    code: "PRD",
    icon: Palette,
    title: "Product & Design",
    fields: "Product Management · UX/UI · Design · User Research",
    outcome: "Turns problems into products",
  },
  {
    code: "GRO",
    icon: TrendingUp,
    title: "Growth & Market",
    fields: "Marketing · Content · Sales · Partnerships · GTM · Community",
    outcome: "Takes it to the world",
  },
];

// Coordinates for a 7-node hub-and-spoke layout, matching the original diagram's geometry.
const nodePositions = [
  { x: 310, y: 80 },
  { x: 489.7, y: 166.5 },
  { x: 534.25, y: 361.2 },
  { x: 409.8, y: 517.2 },
  { x: 210.2, y: 517.2 },
  { x: 85.75, y: 361.2 },
  { x: 130.3, y: 166.5 },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
          The Syncrio Talent Ecosystem
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Every business function has a role to play
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Syncrio isn&apos;t an AI engineering startup. It&apos;s a business, technology and
          consulting ecosystem — and every discipline in it has a stake in the outcome.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-6 max-w-2xl">
        <p className="border-l-2 border-accent pl-4 text-base text-slate-700">
          Every business function has problems that can be understood, redesigned and improved
          with technology and AI.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-14 flex justify-center">
        <svg viewBox="0 0 620 620" className="w-full max-w-lg" role="img" aria-label="Diagram showing seven disciplines connected to a central AI hub.">
          {nodePositions.map((n, i) => (
            <line key={i} x1="310" y1="310" x2={n.x} y2={n.y} stroke="#e2e8f0" strokeWidth="1.5" />
          ))}
          {nodePositions.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="38" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
              <text x={n.x} y={n.y - 4} textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
                {disciplines[i].code}
              </text>
              <text x={n.x} y={n.y + 12} textAnchor="middle" fontSize="9.5" fill="#64748b">
                {disciplines[i].title.split(" ")[0]}
              </text>
            </g>
          ))}
          <circle cx="310" cy="310" r="56" fill="url(#hubGradient)" />
          <text x="310" y="317" textAnchor="middle" fontSize="17" fontWeight="700" fill="white">
            AI
          </text>
          <defs>
            <linearGradient id="hubGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {disciplines.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.05}>
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/10">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-secondary/15 to-accent/15 text-secondary transition-colors group-hover:from-secondary group-hover:to-accent group-hover:text-white">
                <d.icon size={22} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">{d.code}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{d.fields}</p>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold text-accent">
                → {d.outcome}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
