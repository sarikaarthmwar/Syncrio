"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BookButton } from "./BookButton";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "#about", label: "About" },
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_8px_30px_rgba(15,23,42,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5 font-semibold text-lg tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-white font-bold shadow-lg shadow-secondary/20">
            S
          </span>
          Syncrio
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookButton className="rounded-full bg-gradient-to-r from-secondary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]">
            Book Free Consultation
          </BookButton>
        </div>

        <button
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-slate-200/60 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <BookButton className="mt-2 rounded-full bg-gradient-to-r from-secondary to-accent px-5 py-2.5 text-center font-semibold text-white">
              Book Free Consultation
            </BookButton>
          </nav>
        </div>
      )}
    </header>
  );
}
