"use client";

import { Reveal } from "../Reveal";

export function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-2 to-primary py-28 text-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <blockquote className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          &ldquo;We aren&apos;t looking for a particular{" "}
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            degree
          </span>
          . We&apos;re looking for people who want to build.&rdquo;
        </blockquote>
      </Reveal>
    </section>
  );
}
