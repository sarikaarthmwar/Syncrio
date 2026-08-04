"use client";

import { Reveal } from "./Reveal";

const stats = [
  { value: "20+", label: "Years Enterprise Experience" },
  { value: "SaaS", label: "Enterprise SaaS Expertise" },
  { value: "AI-First", label: "AI-Driven Delivery Transformation" },
  { value: "Global", label: "Global Program Leadership" },
  { value: "Auto", label: "Enterprise Automation Solutions" },
  { value: "100%", label: "Customer Success Focus" },
];

export function WhySyncrio() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-2 to-primary py-24 text-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Syncrio</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Enterprise depth. AI-native execution.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Two decades of enterprise SaaS and program leadership, now paired with AI-driven delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-gradient-to-r from-secondary to-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
            >
              About Syncrio
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:border-white/40"
            >
              See our services
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="glass-dark h-full rounded-2xl p-6">
                <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
