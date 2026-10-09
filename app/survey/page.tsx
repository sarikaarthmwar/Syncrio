"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, MapPin, Sparkles, Target, Users } from "lucide-react";

const capabilityOptions = [
  "AI / GenAI / Agentic AI",
  "Data & Analytics",
  "Software / Product Engineering",
  "Cybersecurity",
  "Cloud / DevOps",
  "Finance",
  "Procurement / Supply Chain",
  "HR",
  "Sales / Marketing Operations",
  "ERP / Enterprise Applications",
  "R&D / Innovation",
  "Program / Project Management",
];

const confidenceOptions = [
  "Industry certification",
  "Practical project experience",
  "Assessment by industry experts",
  "Internship / apprenticeship",
  "Problem-solving assessment",
  "Communication assessment",
  "AI / technology proficiency",
  "Previous work experience",
];

const locationBarrierOptions = [
  "Quality / skill confidence",
  "Assessment difficulty",
  "Communication",
  "Management / onboarding challenges",
  "Infrastructure / connectivity",
  "Lack of local talent visibility",
  "Nothing significant",
];

const initialForm = {
  name: "",
  email: "",
  role: "",
  gccSize: "",
  capabilities: [] as string[],
  hiringChallenge: "",
  emergingLocations: "",
  locationBarriers: [] as string[],
  trainingHiring: "",
  talentType: "",
  internationalHiring: "",
  internationalCapabilities: [] as string[],
  talentExchange: "",
  readinessSignals: [] as string[],
  underprepared: "",
  comments: "",
};

const toggle = (items: string[], value: string) =>
  items.includes(value) ? items.filter((item) => item !== value) : [...items, value];

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const questionStart = document.querySelector("[data-survey-question-start]");
      if (questionStart instanceof HTMLElement) {
        const top = questionStart.getBoundingClientRect().top + window.scrollY - 16;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [step]);

  const update = (key: keyof typeof initialForm, value: string | string[]) =>
    setForm((current) => ({ ...current, [key]: value }));

  const canContinue =
    step === 1
      ? Boolean(form.name && form.role && form.gccSize)
      : step === 2
        ? form.capabilities.length > 0 && Boolean(form.hiringChallenge)
        : step === 3
          ? Boolean(form.emergingLocations && form.trainingHiring && form.talentType)
          : step === 4
            ? Boolean(form.internationalHiring && form.talentExchange)
            : true;

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.error || "Unable to submit your response.");
      window.location.href = "/survey/thanks";
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your response. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const stepCopy = [
    { title: "Start with you", icon: Users, color: "from-orange-500 to-amber-400" },
    { title: "Spot the demand", icon: Target, color: "from-emerald-500 to-teal-400" },
    { title: "Think beyond hubs", icon: MapPin, color: "from-sky-500 to-blue-500" },
    { title: "Think globally", icon: Users, color: "from-cyan-500 to-blue-500" },
    { title: "Define GCC-ready", icon: Sparkles, color: "from-violet-500 to-fuchsia-500" },
  ][step - 1];

  const StepIcon = stepCopy.icon;

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf3] text-[#20251f]">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-70">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-[#e9dfcf] bg-[#fffaf3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#174c3c] text-xs font-black text-white shadow-lg shadow-emerald-900/10">GTD</span>
            <span className="block text-lg font-black tracking-tight text-[#174c3c] sm:text-xl">GCC Talent Demand Study</span>
          </a>
          <span className="hidden rounded-full border border-[#e7d9c5] bg-white px-4 py-2 text-xs font-bold text-[#657067] sm:block">
            GCC Talent Demand Study 2027
          </span>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-8 pt-10 sm:px-8 sm:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-[#b65d29]">
              <Sparkles size={15} />
              A 5-minute talent challenge
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-[#174c3c] sm:text-5xl lg:text-6xl">
              What will your GCC need before the talent is ready?
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#59645c] sm:text-lg">
              We are mapping the real skills GCCs will need next — and asking whether talent from emerging cities can become part of that future.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#c46b32]">
              Your answers will help shape a practical GCC talent model.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#174c3c] p-7 text-white shadow-2xl shadow-emerald-950/15">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-400/20" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">The study</p>
              <p className="mt-3 text-2xl font-bold leading-tight">
                Demand first.<br />Talent next.
              </p>
              <p className="mt-4 text-sm leading-6 text-emerald-50/80">
                No generic training catalogue. We want to understand the jobs, skills and evidence GCCs will actually trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-5 pb-16 sm:px-8">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${stepCopy.color} text-white shadow-lg`}>
              <StepIcon size={19} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a948c]">Round {step} of 5</p>
              <p className="font-bold text-[#174c3c]">{stepCopy.title}</p>
            </div>
          </div>
          <span className="text-sm font-bold text-[#c46b32]">{step * 20}% complete</span>
        </div>

        <div className="mb-7 h-2 overflow-hidden rounded-full bg-[#eadfce]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#c46b32] via-[#e99a45] to-[#174c3c] transition-all duration-500"
            style={{ width: `${step * 20}%` }}
          />
        </div>

        <form onSubmit={submit} className="overflow-hidden rounded-[2rem] border border-[#e8dece] bg-white shadow-[0_24px_70px_rgba(73,58,37,.10)]">
          <div data-survey-question-start className="p-6 sm:p-10 lg:p-12">
            {step === 1 && (
              <StepPanel
                eyebrow="ROUND 01"
                title="Let's meet the person behind the perspective."
                description="A little context helps us understand whose GCC talent signals we are hearing."
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your name" required>
                    <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="gg-input" placeholder="Your name" />
                  </Field>
                  <Field label="Work email" hint="Optional">
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="gg-input" placeholder="you@company.com" />
                  </Field>
                  <Field label="Your role" required>
                    <select required value={form.role} onChange={(e) => update("role", e.target.value)} className="gg-input">
                      <option value="">Choose your closest fit</option>
                      {["GCC Leadership","HR / Talent Acquisition","Business / Functional Leadership","Technology / Digital / AI","Learning & Development","Consulting / Service Provider","Academia","Other"].map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </Field>
                  <Field label="Approximate GCC size" required>
                    <select required value={form.gccSize} onChange={(e) => update("gccSize", e.target.value)} className="gg-input">
                      <option value="">Choose one</option>
                      {["<500","500–2,000","2,000–5,000","5,000–10,000","10,000+"].map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </Field>
                </div>
              </StepPanel>
            )}

            {step === 2 && (
              <StepPanel
                eyebrow="ROUND 02"
                title="Fast forward to 2027. Where will demand explode?"
                description="Pick the capabilities you expect to matter more. There are no right answers — we want the signal."
              >
                <Question label="Which capabilities do you expect to increase hiring for over the next 2–3 years?" required>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {capabilityOptions.map((x) => (
                      <Choice key={x} label={x} checked={form.capabilities.includes(x)} onChange={() => update("capabilities", toggle(form.capabilities, x))} />
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-[#8a948c]">Choose as many as you believe will grow.</p>
                </Question>
                <Question label="What is your biggest challenge in hiring these capabilities?" required>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Availability of skilled talent","Lack of practical experience","Qualifications but not job-ready skills","Communication / collaboration","Location constraints","Compensation expectations","High competition for talent","Other"].map((x) => (
                      <Choice key={x} radio label={x} checked={form.hiringChallenge === x} onChange={() => update("hiringChallenge", x)} />
                    ))}
                  </div>
                </Question>
              </StepPanel>
            )}

            {step === 3 && (
              <StepPanel
                eyebrow="ROUND 03"
                title="Now break the geography rule."
                description="Imagine the right talent is not sitting in Bengaluru, Hyderabad, Pune or Chennai. What would make you look elsewhere?"
              >
                <Question label="How important will talent from Tier-2 / Tier-3 cities be to your GCC talent strategy?" required>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Critical","Important","Somewhat important","Not currently a priority"].map((x) => (
                      <Choice key={x} radio label={x} checked={form.emergingLocations === x} onChange={() => update("emergingLocations", x)} />
                    ))}
                  </div>
                </Question>
                <Question label="What currently prevents your organization from hiring more talent from emerging locations?">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {locationBarrierOptions.map((x) => (
                      <Choice key={x} label={x} checked={form.locationBarriers.includes(x)} onChange={() => update("locationBarriers", toggle(form.locationBarriers, x))} />
                    ))}
                  </div>
                </Question>
                <Question label="Would you consider candidates who completed a role-specific, industry-designed training program?" required>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Definitely","Potentially, if independently assessed","Only for entry-level roles","Unlikely"].map((x) => (
                      <Choice key={x} radio label={x} checked={form.trainingHiring === x} onChange={() => update("trainingHiring", x)} />
                    ))}
                  </div>
                </Question>
                <Question label="What type of talent would interest you most?" required>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Entry-level talent","Experienced professionals","AI-ready talent","Functional specialists","Project-based talent","Interns / apprentices","Return-to-work talent","Other"].map((x) => (
                      <Choice key={x} radio label={x} checked={form.talentType === x} onChange={() => update("talentType", x)} />
                    ))}
                  </div>
                </Question>
              </StepPanel>
            )}

            {step === 4 && (
              <StepPanel
                eyebrow="ROUND 04"
                title="Could India become a destination for global talent?"
                description="We want to understand whether GCCs would bring international expertise to India—and whether a talent-exchange model could grow local capability at the same time."
              >
                <Question label="Would your GCC consider hiring experienced US citizens or other international specialists to work in India?" required>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Definitely","Potentially, for niche skills or leadership roles","Only for short-term / project-based assignments","Unlikely","Not sure"].map((x) => (
                      <Choice key={x} radio label={x} checked={form.internationalHiring === x} onChange={() => update("internationalHiring", x)} />
                    ))}
                  </div>
                </Question>
                <Question label="Which capabilities could justify bringing international specialists to India? Select all that apply.">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["AI / GenAI strategy and leadership","Product strategy / engineering","Cybersecurity","Deep domain expertise (e.g., procurement, finance, enterprise systems)","Global market / customer expertise","R&D / innovation","Executive or people leadership","Mentoring and knowledge transfer"].map((x) => (
                      <Choice key={x} label={x} checked={form.internationalCapabilities.includes(x)} onChange={() => update("internationalCapabilities", toggle(form.internationalCapabilities, x))} />
                    ))}
                  </div>
                </Question>
                <Question label="Would your organization consider a structured talent-exchange model that brings international specialists to India while developing Indian talent through mentoring and knowledge transfer?" required>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Yes, interested in exploring it","Potentially, if outcomes are measurable","Open to a small pilot","Unlikely","Need more information"].map((x) => (
                      <Choice key={x} radio label={x} checked={form.talentExchange === x} onChange={() => update("talentExchange", x)} />
                    ))}
                  </div>
                </Question>
              </StepPanel>
            )}

            {step === 5 && (
              <StepPanel
                eyebrow="FINAL ROUND"
                title="One last thing: what does GCC-ready actually mean?"
                description="This answer is especially important. It can influence what future GCC talent programs should build for — and what evidence they should ask candidates to prove."
              >
                <Question label="What would give you confidence that a candidate is GCC-ready? Pick up to 3.">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {confidenceOptions.map((x) => (
                      <Choice
                        key={x}
                        label={x}
                        checked={form.readinessSignals.includes(x)}
                        onChange={() => {
                          if (form.readinessSignals.includes(x) || form.readinessSignals.length < 3) {
                            update("readinessSignals", toggle(form.readinessSignals, x));
                          }
                        }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-[#8a948c]">{form.readinessSignals.length}/3 selected</p>
                </Question>

                <Field label="Which talent capability are GCCs currently under-preparing for?">
                  <textarea value={form.underprepared} onChange={(e) => update("underprepared", e.target.value)} className="gg-input min-h-28 resize-y" placeholder="A role, capability or skill that needs more attention..." />
                </Field>

                <Field label="Anything else you want us to know?">
                  <textarea value={form.comments} onChange={(e) => update("comments", e.target.value)} className="gg-input min-h-28 resize-y" placeholder="Your perspective, challenge or idea..." />
                </Field>

                <div className="rounded-2xl bg-[#f5f1e9] p-5 text-sm leading-6 text-[#5c665e]">
                  <span className="font-bold text-[#174c3c]">You made it.</span> If you left your email, we may invite you to see the findings and continue the conversation around GCC talent demand and readiness.
                </div>
              </StepPanel>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[#eee6da] bg-[#fcfaf6] px-6 py-5 sm:px-10">
            <button type="button" disabled={step === 1} onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-[#687269] transition hover:bg-white disabled:invisible">
              <ChevronLeft size={17} /> Back
            </button>

            {step < 5 ? (
              <button type="button" disabled={!canContinue} onClick={() => setStep((s) => s + 1)} className="inline-flex items-center gap-2 rounded-full bg-[#174c3c] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/10 transition hover:-translate-y-0.5 hover:bg-[#0f3d2f] disabled:cursor-not-allowed disabled:opacity-35">
                I'm ready <ChevronRight size={17} />
              </button>
            ) : (
              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full bg-[#c46b32] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/15 transition hover:-translate-y-0.5 hover:bg-[#ad5925] disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? "Saving your perspective…" : "Submit my perspective"} <ArrowRight size={17} />
              </button>
            )}
          </div>
        </form>

        {submitError && <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">{submitError}</p>}

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-[#899189]">
          Please do not include confidential employer information. Your response is being collected for the GCC Talent Demand Study.
        </p>
      </section>
    </main>
  );
}

function StepPanel({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-black tracking-[0.2em] text-[#c46b32]">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] text-[#174c3c] sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6a746c] sm:text-base">{description}</p>
      <div className="mt-9 space-y-9">{children}</div>
    </div>
  );
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-sm font-bold text-[#28332b]">
        {label}
        {required && <span className="text-[#c46b32]">*</span>}
        {hint && <span className="font-normal text-[#9aa19b]">({hint})</span>}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

function Question({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="max-w-3xl text-base font-bold leading-6 text-[#28332b]">
        {label} {required && <span className="text-[#c46b32]">*</span>}
      </legend>
      <div className="mt-4">{children}</div>
    </fieldset>
  );
}

function Choice({ label, checked, onChange, radio = false }: { label: string; checked: boolean; onChange: () => void; radio?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      onClick={onChange}
      className={`group flex min-h-14 w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-[#c8b99f] hover:shadow-sm ${
        checked ? "border-[#174c3c] bg-[#edf6f1] shadow-sm" : "border-[#e7dfd2] bg-white"
      }`}
    >
      <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-${radio ? "full" : "md"} border-2 ${
        checked ? "border-[#174c3c] bg-[#174c3c] text-white" : "border-[#cbd2cc] bg-white"
      }`}>
        {checked && <Check size={13} strokeWidth={3} />}
      </span>
      <span className={`text-sm font-medium ${checked ? "text-[#174c3c]" : "text-[#4e5a51]"}`}>{label}</span>
    </button>
  );
}
