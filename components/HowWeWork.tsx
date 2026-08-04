"use client";

import { Reveal } from "./Reveal";

const steps = [
  { title: "Discover", text: "Understand delivery challenges, portfolio, and operating context." },
  { title: "Assess", text: "Benchmark AI, automation, and program maturity against enterprise leaders." },
  { title: "Design", text: "Architect a transformation roadmap with measurable business outcomes." },
  { title: "Implement", text: "Deliver AI, automation, and PMO capabilities with our specialist teams." },
  { title: "Optimize", text: "Instrument, measure, and improve delivery velocity and quality." },
  { title: "Scale", text: "Extend across portfolios, geographies, and business units." },
];

export function HowWeWork() {
  return (
    <section id="insights" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">How We Work</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            A proven path from strategy to scale
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-secondary/0 via-secondary/40 to-accent/0 lg:block" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-secondary to-accent text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
