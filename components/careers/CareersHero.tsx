"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const disciplines = ["Engineering", "AI", "Business", "Finance", "Operations", "Consulting", "Product", "Design", "Growth"];

// A minimal line-diagram: SYNCRIO at the center, four journey nodes around it.
const journeyNodes = [
  { label: "Explore", x: 90, y: 40 },
  { label: "Build", x: 310, y: 20 },
  { label: "Deliver", x: 460, y: 90 },
  { label: "Grow", x: 340, y: 220 },
];

export function CareersHero() {
  return (
    <section id="careers-home" className="bg-surface pt-14 pb-16 lg:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Careers at Syncrio
          </p>

          <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Build your career by building real things.
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
            Don&apos;t wait for your first job to get your first experience. Syncrio puts you on
            real business problems, alongside experienced practitioners, from day one.
          </p>

          <div className="mt-6 flex flex-wrap items-center text-sm text-slate-500">
            {disciplines.map((d, i) => (
              <span key={d} className="flex items-center">
                {d}
                {i < disciplines.length - 1 && <span className="mx-2 text-slate-300">·</span>}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#join"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Join the Talent Pool
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-ink transition-colors hover:border-slate-400"
            >
              See the Ecosystem
            </a>
          </div>
        </motion.div>

        {/* minimal line-diagram — replaces the gradient dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <svg viewBox="0 0 500 280" className="w-full" role="img" aria-label="Diagram showing the Syncrio journey: Explore, Build, Deliver, and Grow, connected around a central Syncrio node.">
            {journeyNodes.map((n, i) => (
              <line key={i} x1="250" y1="150" x2={n.x} y2={n.y} stroke="#e5e5e0" strokeWidth="1.5" />
            ))}
            <rect x="180" y="118" width="140" height="64" rx="10" fill="#0f172a" />
            <text x="250" y="156" textAnchor="middle" fontSize="15" fontWeight="700" fill="#ffffff" letterSpacing="0.02em">
              SYNCRIO
            </text>
            {journeyNodes.map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="30" fill="#fafaf8" stroke="#e5e5e0" strokeWidth="1.5" />
                <circle cx={n.x} cy={n.y} r="3" fill="#7c3aed" />
                <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="12" fontWeight="600" fill="#0f172a">
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
