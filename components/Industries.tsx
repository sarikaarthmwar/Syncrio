"use client";

import { Reveal } from "./Reveal";
import {
  ShoppingCart,
  Factory,
  HeartPulse,
  Store,
  Landmark,
  Cpu,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  { name: "Procurement", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Retail", icon: Store },
  { name: "Financial Services", icon: Landmark },
  { name: "Technology", icon: Cpu },
  { name: "Energy", icon: Zap },
];

export function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Industries</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Delivering across regulated, complex, high-stakes sectors
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 0.05}>
            <a
              href="#contact"
              className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
            >
              <ind.icon size={20} className="text-accent" />
              <span className="text-sm font-semibold text-slate-800">{ind.name}</span>
              <ArrowUpRight
                size={14}
                className="mt-auto text-slate-300 transition-colors group-hover:text-secondary"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
