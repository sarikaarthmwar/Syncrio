"use client";

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
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="relative">
                  <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-rule bg-white font-display text-sm font-semibold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
