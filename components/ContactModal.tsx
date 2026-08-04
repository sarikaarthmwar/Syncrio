"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useContactModal } from "./ContactModalProvider";

const CONTACT_EMAIL = "info@syncrio.tech";

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setSent(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Consultation Request from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={closeModal}
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={18} />
        </button>

        {sent ? (
          <div className="py-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary/10 text-secondary">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">Almost done!</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Your email app should have opened with your message pre-filled to{" "}
              <span className="font-medium text-slate-800">{CONTACT_EMAIL}</span>. Just hit send
              from there. If nothing opened, email us directly at that address.
            </p>
            <button
              onClick={closeModal}
              className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Book a Consultation
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Let&apos;s talk delivery
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Tell us a bit about your organization and we&apos;ll follow up to schedule your
              free 30-minute AI strategy consultation.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="cm-name" className="text-xs font-semibold text-slate-500">
                  Name *
                </label>
                <input
                  id="cm-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="cm-email" className="text-xs font-semibold text-slate-500">
                  Work Email *
                </label>
                <input
                  id="cm-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="cm-company" className="text-xs font-semibold text-slate-500">
                  Company
                </label>
                <input
                  id="cm-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label htmlFor="cm-message" className="text-xs font-semibold text-slate-500">
                  What are you looking to solve? *
                </label>
                <textarea
                  id="cm-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  placeholder="A few sentences about your delivery challenges..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.02]"
              >
                Send Request <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
