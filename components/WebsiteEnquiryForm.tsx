"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";

const CONTACT_EMAIL = "info@syncrio.tech";

const services = [
  "Business Website",
  "Startup / Landing Page",
  "Website Redesign",
  "Website + AI / Automation",
];

export function WebsiteEnquiryForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(services[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    const subject = `Website Enquiry — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company}`,
      `Service: ${service}`,
      "",
      "Requirement:",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-10">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary/10 text-secondary">
          <CheckCircle2 size={28} />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-slate-900">Your enquiry is ready</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Your email app should have opened with the enquiry pre-filled. Just hit send and we&apos;ll get back to you.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name *" name="name" placeholder="Your name" required />
        <Field label="Email *" name="email" type="email" placeholder="you@company.com" required />
        <Field label="Company" name="company" placeholder="Company name" />
        <Field label="Phone / WhatsApp" name="phone" placeholder="+91 ..." />
      </div>

      <div className="mt-5">
        <label htmlFor="service" className="text-xs font-semibold text-slate-500">What do you need?</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
        >
          {services.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-xs font-semibold text-slate-500">Tell us about your requirement *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you looking to build? Do you already have a website, content or design?"
          className="mt-1 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
        />
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.01]"
      >
        Send Website Enquiry
        <Send size={17} className="transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">No obligation. We&apos;ll review your requirement and get back to you.</p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold text-slate-500">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
      />
    </div>
  );
}
