"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const disciplines = [
  "Engineering",
  "Business",
  "Finance",
  "Operations",
  "Consulting",
  "Product",
  "Design",
  "Growth",
];

export function CareersHero() {
  return (
    <section
      id="careers-home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white pt-16 pb-16 lg:pt-24"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-float-slower" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-semibold text-secondary">
            <Sparkles size={15} /> Careers at Syncrio
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
            Build what <span className="gradient-text">matters</span>.
          </h1>

          <p className="mt-5 text-xl font-medium text-slate-500">
            Different disciplines. One ecosystem.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-1 gap-y-2 text-sm text-slate-500">
            {disciplines.map((d, i) => (
              <span key={d} className="flex items-center">
                {d}
                {i < disciplines.length - 1 && <span className="mx-2 text-slate-300">·</span>}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-xl text-lg text-slate-700">
            One thing connects them all:{" "}
            <span className="font-semibold text-accent">the desire to build.</span>
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#join"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_100%] px-7 py-3.5 font-semibold text-white shadow-xl shadow-secondary/20 transition-all hover:bg-[100%_0]"
            >
              Join the Talent Pool
              <ArrowRight size={18} className="ml-1 inline transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-300"
            >
              See the Ecosystem
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
