import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl ${
        featured ? "sm:p-9" : ""
      }`}
    >
      <span className="w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
        {post.category}
      </span>
      <h3 className={`mt-4 font-bold text-slate-900 ${featured ? "text-2xl" : "text-lg"}`}>{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
        <span>{post.readTime}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-secondary group-hover:gap-2 transition-all">
          Read article <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
