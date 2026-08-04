"use client";

import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";
import { BookButton } from "./BookButton";

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent px-8 py-20 text-center text-white shadow-2xl">
          <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <h2 className="relative text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to transform enterprise delivery?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
            Book a free 30-minute AI strategy consultation with our leadership team.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <BookButton className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-primary shadow-lg transition-transform hover:scale-[1.03]">
              Book Consultation
              <ArrowRight size={18} className="ml-2 inline transition-transform group-hover:translate-x-1" />
            </BookButton>
            <a
              href="#solutions"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:border-white/50"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
