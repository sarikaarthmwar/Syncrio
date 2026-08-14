"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "../Reveal";

const stages = [
  { title: "Explore", text: "Discover disciplines and real problems worth solving." },
  { title: "Learn", text: "Pick up what you need alongside people who've done it." },
  { title: "Build", text: "Own a real piece of a real project, not a simulation." },
  { title: "Deliver", text: "Ship work that a real business actually uses." },
  { title: "Get Recognized", text: "Mentor review and proof of work, not just a grade." },
  { title: "Grow", text: "Talent pool, consultant track, or future leadership." },
];

export function JourneySection() {
  return (
    <section id="pathway" className="border-t border-rule bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Not an internship. An ecosystem.
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Your journey, one real step at a time
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No perfect-fit degree required — just a problem you want to solve.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-rule lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-5 hidden h-px bg-accent lg:block"
          />

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((s, i) => (
              <div key={s.title} className="relative">
                <motion.div
                  initial={{ backgroundColor: "#ffffff", color: "#0f172a", borderColor: "#e5e5e0" }}
                  whileInView={{ backgroundColor: "#7c3aed", color: "#ffffff", borderColor: "#7c3aed" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="relative z-10 grid h-10 w-10 place-items-center rounded-full border font-display text-sm font-semibold"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.35 }}
                  className="absolute -right-1 -top-1 z-20 grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white"
                >
                  <Check size={12} strokeWidth={3} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.1 }}
                >
                  <h3 className="mt-4 text-sm font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
