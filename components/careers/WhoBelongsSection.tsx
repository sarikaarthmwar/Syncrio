"use client";

import { Reveal } from "../Reveal";

const roles = [
  "understands the customer.",
  "understands the numbers.",
  "understands operations.",
  "designs the experience.",
  "builds the technology.",
  "takes the solution to market.",
];

export function WhoBelongsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Who Belongs Here</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            You don&apos;t need to be an engineer to build the future with Syncrio
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-xl font-semibold text-slate-900">
            Businesses are built by many different kinds of people.
          </p>
          <div className="mt-7 space-y-1 border-l-2 border-slate-200 pl-6">
            {roles.map((r) => (
              <p key={r} className="py-1.5 text-lg text-slate-600">
                <span className="font-semibold text-slate-900">Someone</span> {r}
              </p>
            ))}
          </div>
          <p className="mt-7 text-lg text-slate-800">
            Syncrio brings these minds together with{" "}
            <span className="font-semibold text-secondary">AI and technology</span> to solve
            real business problems.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
