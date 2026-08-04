"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BookButton } from "./BookButton";

const badges = ["Enterprise AI", "Program Excellence", "Automation", "Digital Transformation", "Innovation"];

const nodes = [
  { top: "12%", left: "8%", delay: 0 },
  { top: "28%", left: "72%", delay: 0.6 },
  { top: "62%", left: "18%", delay: 1.1 },
  { top: "78%", left: "58%", delay: 0.3 },
  { top: "45%", left: "88%", delay: 1.6 },
  { top: "8%", left: "48%", delay: 0.9 },
];

const bars = [42, 58, 50, 68, 78, 60, 88, 96];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white pt-16 pb-20 lg:pt-24"
    >
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-float-slower" />

      {/* floating AI nodes */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {nodes.map((n, i) => (
          <span
            key={i}
            className="absolute h-2.5 w-2.5 animate-node-pulse rounded-full bg-gradient-to-br from-secondary to-accent"
            style={{ top: n.top, left: n.left, animationDelay: `${n.delay}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-semibold text-secondary">
            <Sparkles size={15} /> AI-Powered Enterprise Transformation
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.2rem]">
            Transforming <span className="gradient-text">Enterprise Delivery</span> with AI
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Helping organizations accelerate digital transformation through Artificial
            Intelligence, Intelligent Automation, and Program Excellence.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <BookButton className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_100%] px-7 py-3.5 font-semibold text-white shadow-xl shadow-secondary/20 transition-all hover:bg-[100%_0]">
              Book Free Consultation
              <ArrowRight size={18} className="ml-2 inline transition-transform group-hover:translate-x-1" />
            </BookButton>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-300"
            >
              Explore Solutions
            </a>
          </div>

          <div className="mt-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Trusted Expertise
            </p>
            <div className="flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-secondary/30 to-accent/30 blur-2xl" />
          <div className="glass-dark relative rounded-[1.75rem] bg-gradient-to-br from-primary to-primary-2 p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between text-xs font-medium text-slate-300">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.2)]" />
                syncrio.ai / delivery-command-center
              </span>
              <span>⌕</span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Programs on track", value: "94%", delta: "+12%" },
                { label: "Delivery velocity", value: "1.8x", delta: "+42%" },
                { label: "AI actions taken", value: "12.4k", delta: "this week" },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl bg-white/8 p-4 border border-white/10">
                  <p className="text-[0.65rem] text-slate-300">{m.label}</p>
                  <p className="mt-2 text-xl font-bold">{m.value}</p>
                  <p className="mt-1 text-[0.7rem] font-semibold text-emerald-300">{m.delta}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex h-56 items-end gap-3 rounded-2xl bg-black/25 p-5">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: "6%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.9, delay: 0.4 + i * 0.06, ease: "easeOut" }}
                  className="flex-1 rounded-t-full bg-gradient-to-t from-secondary to-accent"
                />
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-300">Portfolio health · Q4 → Q1</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
