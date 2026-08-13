"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Reveal } from "../Reveal";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdgriR1cS99oLIv-yCy7bQcC_Rsdsz9pyMInWhXmjWqfTOkBw/formResponse";

const flowItems = ["Education & discipline", "Skills & interests", "What you want to build", "Portfolio or LinkedIn", "Availability"];

const inputClass =
  "mt-1 w-full rounded-lg border border-rule px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink";
const labelClass = "text-xs font-semibold text-slate-500";

export function JoinSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const iframeLoadedOnce = useRef(false);

  const handleIframeLoad = () => {
    if (!iframeLoadedOnce.current) {
      iframeLoadedOnce.current = true;
      return;
    }
    setSending(false);
    setSubmitted(true);
  };

  const handleSubmit = () => {
    setSending(true);
    setTimeout(() => setSubmitted((prev) => prev || true), 4000);
  };

  return (
    <section id="join" className="border-t border-rule bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl border-l-2 border-ink pl-6">
          <p className="font-display text-2xl italic leading-snug text-ink">
            &ldquo;We aren&apos;t looking for a particular degree. We&apos;re looking for people
            who want to build.&rdquo;
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Join the Talent Pool
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Tell us what you want to build
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              This isn&apos;t a resume drop for one posting. It&apos;s how you get into the
              Syncrio talent network — matched to real problems as they come up.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              {flowItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-rule bg-white p-6 sm:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink/5 text-ink">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink">You&apos;re in the talent pool</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Thanks for sharing what you want to build. Syncrio will reach out when there&apos;s
                    a fit.
                  </p>
                </div>
              ) : (
                <form
                  action={GOOGLE_FORM_ACTION}
                  method="POST"
                  target="talent_form_iframe"
                  onSubmit={handleSubmit}
                  className="space-y-3.5"
                >
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="tf-name" className={labelClass}>Full name *</label>
                      <input id="tf-name" name="entry.1436428064" required placeholder="Ananya Sharma" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="tf-email" className={labelClass}>Email *</label>
                      <input id="tf-email" type="email" name="entry.1911630275" required placeholder="name@email.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="tf-education" className={labelClass}>Education *</label>
                      <input id="tf-education" name="entry.646555379" required placeholder="B.Tech CS, final year" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="tf-discipline" className={labelClass}>Discipline *</label>
                      <select id="tf-discipline" name="entry.2045259203" required defaultValue="" className={inputClass}>
                        <option value="" disabled>Select one</option>
                        <option>Technology &amp; AI</option>
                        <option>Business &amp; Management</option>
                        <option>Finance &amp; Economics</option>
                        <option>Business Operations</option>
                        <option>Consulting &amp; Problem Solving</option>
                        <option>Product &amp; Design</option>
                        <option>Growth &amp; Market</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="tf-skills" className={labelClass}>Skills</label>
                      <input id="tf-skills" name="entry.825382884" placeholder="Python, Figma, modeling..." className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="tf-interests" className={labelClass}>Interests</label>
                      <input id="tf-interests" name="entry.586597144" placeholder="AI agents, consulting..." className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tf-build" className={labelClass}>What do you want to build?</label>
                    <textarea
                      id="tf-build"
                      name="entry.74562410"
                      rows={2}
                      placeholder="A short note on the kind of problem you'd want to work on."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="tf-portfolio" className={labelClass}>Portfolio / GitHub / LinkedIn</label>
                      <input id="tf-portfolio" name="entry.888434272" placeholder="https://..." className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="tf-availability" className={labelClass}>Availability</label>
                      <select id="tf-availability" name="entry.1217894933" defaultValue="" className={inputClass}>
                        <option value="" disabled>Select one</option>
                        <option>Internship</option>
                        <option>Part-time</option>
                        <option>Full-time</option>
                        <option>Open to any</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-70"
                  >
                    {sending ? "Sending..." : "Submit to the Talent Pool"} <Send size={16} />
                  </button>
                </form>
              )}

              <iframe
                name="talent_form_iframe"
                title="Talent pool form submission"
                className="hidden"
                onLoad={handleIframeLoad}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
