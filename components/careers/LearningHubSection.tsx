"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { posts } from "@/lib/blog-posts";

export function LearningHubSection() {
  return (
    <section className="border-t border-rule bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Before You Apply
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get a feel for how we think
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real writing from our team on AI, delivery, and what actually moves projects forward.
            No fluff — this is the same thinking you&apos;d be working with.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-rule bg-white p-5 transition-colors hover:border-ink/30"
              >
                <span className="w-fit rounded-full bg-ink/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-500">
                  {post.category}
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-ink">{post.title}</h3>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-slate-400">
                  <span>{post.readTime}</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent">
            Read everything <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
