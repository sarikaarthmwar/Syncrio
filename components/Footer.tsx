import { Link2, Mail } from "lucide-react";

const socialLinks = [
  { Icon: Link2, href: "https://www.linkedin.com/company/syncrio", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:info@syncrio.tech", label: "Email" },
];

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Products", href: "#products" },
      { label: "Solutions", href: "#solutions" },
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Syncrio Consulting", href: "#" },
      { label: "Syncrio Labs", href: "#" },
      { label: "Syncrio Academy", href: "#" },
      { label: "Syncrio Community", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-8 bg-primary text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-2">
          <a href="#home" className="flex items-center gap-2.5 text-lg font-semibold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-secondary to-accent font-bold text-white">
              S
            </span>
            Syncrio
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            AI-Powered Enterprise Transformation. We help organizations deliver faster, smarter,
            and more predictably.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">{col.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Newsletter</h4>
          <p className="mt-4 text-sm text-slate-400">Enterprise AI perspectives, monthly.</p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-secondary focus:outline-none"
            />
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Syncrio. All rights reserved.</p>
          <p>Built for the enterprises shaping what comes next.</p>
        </div>
      </div>
    </footer>
  );
}
