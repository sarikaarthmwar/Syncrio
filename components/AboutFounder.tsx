"use client";

import { Reveal } from "./Reveal";
import { Link2, Target, Telescope } from "lucide-react";

export function AboutFounder() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-secondary to-accent p-7 text-white shadow-2xl">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <span className="w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
              Founder &amp; CEO
            </span>
            <div className="glass-dark mt-auto rounded-2xl p-5">
              <p className="text-lg font-bold">Syncrio Leadership</p>
              <p className="mt-1 text-sm text-slate-200">Enterprise Transformation Leader</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">About the Founder</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Meet the Founder
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            An Enterprise Transformation Leader passionate about combining Artificial Intelligence
            with Program Management to help organizations achieve faster, smarter, and more
            predictable delivery outcomes.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Target size={18} className="text-secondary" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Mission</p>
              <p className="mt-1 text-slate-700">Make AI-driven enterprise delivery the new standard.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Telescope size={18} className="text-accent" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Vision</p>
              <p className="mt-1 text-slate-700">
                A world where every enterprise program is intelligent, transparent, and predictable.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
            >
              <Link2 size={17} /> Connect on LinkedIn
            </a>
            <a
              href="#insights"
              className="rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-800 transition-colors hover:border-slate-300"
            >
              Read our story
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
