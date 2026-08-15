"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdks3zgi6dTDLOQkMWOp9AEZ-BiOfV4jJ1vnAVEnrUJ_ztWAQ/formResponse";

const services = [
  "Business Website",
  "Startup / Landing Page",
  "Website Redesign",
  "Website + AI / Automation",
];

export function WebsiteEnquiryForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const iframeLoadedOnce = useRef(false);

  function handleIframeLoad() {
    if (!iframeLoadedOnce.current) {
      iframeLoadedOnce.current = true;
      return;
    }

    setSending(false);
    setSent(true);
  }

  function handleSubmit() {
    setSending(true);
    // Google Forms loads the response into the hidden iframe. The second
    // iframe load indicates that the submission completed.
    setTimeout(() => setSending(false), 10000);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-10">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary/10 text-secondary">
          <CheckCircle2 size={28} />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-slate-900">Thanks — we received your enquiry</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          We&apos;ll review your requirement and get back to you soon.
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
    <>
      <form
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target="website_enquiry_iframe"
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name *" name="entry.248999309" placeholder="Your name" required />
          <Field label="Email *" name="entry.1372155479" type="email" placeholder="you@company.com" required />
          <Field label="Company" name="entry.274475598" placeholder="Company name" />
          <Field label="Phone / WhatsApp" name="entry.1269877672" placeholder="+91 ..." />
        </div>

        <div className="mt-5">
          <label htmlFor="service" className="text-xs font-semibold text-slate-500">What do you need?</label>
          <select
            id="service"
            name="entry.400869099"
            defaultValue={services[0]}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
          >
            {services.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="text-xs font-semibold text-slate-500">Tell us about your requirement *</label>
          <textarea
            id="message"
            name="entry.1527269174"
            required
            rows={5}
            placeholder="What are you looking to build? Do you already have a website, content or design?"
            className="mt-1 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? "Sending..." : "Send Website Enquiry"}
          <Send size={17} className="transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="mt-3 text-center text-xs text-slate-400">No obligation. We&apos;ll review your requirement and get back to you.</p>
      </form>

      <iframe
        name="website_enquiry_iframe"
        title="Website enquiry form submission"
        className="hidden"
        onLoad={handleIframeLoad}
      />
    </>
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
