"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#what-we-build", label: "Solutions" },
  { href: "#how-we-build", label: "How We Build" },
  { href: "/ai-assessment", label: "AI Blueprint" },
  { href: "/blog", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl" : "bg-white"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-slate-950">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20">S</span>
          <span className="text-lg">Syncrio</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-slate-950">{link.label}</a>)}
        </nav>
        <a href="/ai-assessment" className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 lg:inline-flex">Build My AI Solution</a>
        <button aria-label={open ? "Close menu" : "Open menu"} className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 lg:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden"><nav className="flex flex-col gap-5 text-sm font-medium text-slate-700">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="/ai-assessment" onClick={() => setOpen(false)} className="mt-1 rounded-full bg-slate-950 px-5 py-3 text-center font-semibold text-white">Build My AI Solution</a>
      </nav></div>}
    </header>
  );
}
