"use client";

import { Reveal } from "../Reveal";

const stages = [
  { title: "Student", text: "Curious, cross-disciplinary, ready to learn by building." },
  { title: "Intern", text: "Working on real problems inside the ecosystem." },
  { title: "Builder", text: "Owning a piece of the product, practice, or process." },
  { title: "Consultant", text: "Solving problems directly for Syncrio's customers." },
  { title: "Product Contributor", text: "Shaping what Syncrio builds next." },
  { title: "Syncrio Talent", text: "Core team, partner network, or future leadership." },
];

export function PathwaySection() {
  return (
    <section id="pathway" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            The Syncrio Builder Journey
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Not an internship. An ecosystem.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            This isn&apos;t a one-summer program. It&apos;s a path — some join Syncrio full-time,
            some join the consulting ecosystem, some become founders, partners, or future leaders.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-secondary/0 via-secondary/40 to-accent/0 lg:block" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                      i === stages.length - 1
                        ? "bg-gradient-to-br from-secondary to-accent text-white"
                        : "border border-slate-200 text-slate-500"
                    }`}
                  >
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
