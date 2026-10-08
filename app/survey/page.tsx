"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

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
  readinessSignals: [] as string[],
  underprepared: "",
  talentType: "",
  comments: "",
};

const locationBarrierOptions = [
  "Quality / skill confidence",
  "Assessment difficulty",
  "Communication",
  "Management / onboarding challenges",
  "Infrastructure / connectivity",
  "Lack of local talent visibility",
  "Nothing significant",
];

const toggle = (items: string[], value: string) =>
  items.includes(value) ? items.filter((item) => item !== value) : [...items, value];

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (key: keyof typeof initialForm, value: string | string[]) =>
    setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    setSubmitting(true);\n    setSubmitError("");\n    try {\n      const response = await fetch("/api/survey", {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify(form),\n      });\n      const result = await response.json();\n      if (!response.ok) throw new Error(result?.error || "Unable to submit your response.");\n      window.location.href = "/survey/thanks";\n    } catch (error) {\n      setSubmitError(error instanceof Error ? error.message : "Unable to submit your response. Please try again.");\n    } finally {\n      setSubmitting(false);\n    }\n  };\n\n  const canContinue =
    step === 1
      ? Boolean(form.name && form.role && form.gccSize)
      : step === 2
        ? form.capabilities.length > 0 && Boolean(form.hiringChallenge)
        : step === 3
          ? Boolean(form.emergingLocations && form.trainingHiring && form.talentType)
          : true;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(59,130,246,.24),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(124,58,237,.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 lg:px-8 lg:pb-20 lg:pt-14">
          <a href="/" className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold">S</span>
            Syncrio
          </a>
          <div className="mt-16 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-sm font-medium text-blue-100">
              <Sparkles size={15} /> GCC Talent Demand Study 2027
            </div>
            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Are we creating talent for the jobs GCCs will actually need?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              We are exploring how GCCs can build a stronger talent pipeline beyond traditional hubs — starting with real demand, not generic training.
              Your perspective will help shape the next generation of GCC-ready talent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">5–7 minutes</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">No confidential information</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">For GCC & ecosystem leaders</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Your perspective</p>
            <p className="mt-2 text-sm text-slate-500">Section {step} of 4</p>
          </div>
          <div className="flex gap-1.5">{[1,2,3,4].map((item) => <span key={item} className={`h-1.5 w-10 rounded-full ${item <= step ? "bg-blue-600" : "bg-slate-200"}`} />)}</div>
        </div>

        <form action="https://formsubmit.co/info@syncrio.tech" method="POST" className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <input type="hidden" name="_subject" value="GCC Talent Demand Study — New Response" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://syncrio.tech/survey/thanks" />
          <input type="hidden" name="_url" value="https://syncrio.tech/survey" />
          <input type="hidden" name="_honey" value="" />

          <div className="p-7 sm:p-10">
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-semibold">About you & your GCC</h2>
                <p className="mt-2 text-slate-600">This helps us understand the perspective behind the response.</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <Field label="Name" required><input name="name" required value={form.name} onChange={(e) => update("name", e.target.value)} className="input" placeholder="Your name" /></Field>
                  <Field label="Work email"><input type="email" name="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="you@company.com" /></Field>
                  <Field label="Your role" required><select name="role" required value={form.role} onChange={(e) => update("role", e.target.value)} className="input"><option value="">Select</option>{["GCC Leadership","HR / Talent Acquisition","Business / Functional Leadership","Technology / Digital / AI","Learning & Development","Consulting / Service Provider","Academia","Other"].map((x)=><option key={x}>{x}</option>)}</select></Field>
                  <Field label="Approximate GCC size" required><select name="gcc_size" required value={form.gccSize} onChange={(e) => update("gccSize", e.target.value)} className="input"><option value="">Select</option>{["<500","500–2,000","2,000–5,000","5,000–10,000","10,000+"].map((x)=><option key={x}>{x}</option>)}</select></Field>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold">Where is the demand?</h2>
                <p className="mt-2 text-slate-600">Tell us where you expect your GCC to need more talent.</p>
                <div className="mt-8 space-y-8">
                  <Question label="Which capabilities do you expect to increase hiring for over the next 2–3 years?" required>
                    <div className="grid gap-3 sm:grid-cols-2">{capabilityOptions.map((x)=><Check name="capabilities[]" key={x} label={x} checked={form.capabilities.includes(x)} onChange={()=>update("capabilities",toggle(form.capabilities,x))}/>)}</div>
                  </Question>
                  <Question label="What is your biggest challenge in hiring these capabilities?" required>
                    <div className="grid gap-3 sm:grid-cols-2">{["Availability of skilled talent","Lack of practical experience","Qualifications but not job-ready skills","Communication / collaboration","Location constraints","Compensation expectations","High competition for talent","Other"].map((x)=><Radio name="hiring_challenge" key={x} label={x} checked={form.hiringChallenge===x} onChange={()=>update("hiringChallenge",x)}/>)}</div>
                  </Question>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold">Could emerging locations help?</h2>
                <p className="mt-2 text-slate-600">We want to understand what would make talent outside the traditional GCC hubs viable.</p>
                <div className="mt-8 space-y-8">
                  <Question label="How important will talent from Tier-2 / Tier-3 cities be to your GCC talent strategy?" required>
                    <div className="grid gap-3 sm:grid-cols-2">{["Critical","Important","Somewhat important","Not currently a priority"].map((x)=><Radio name="emerging_locations" key={x} label={x} checked={form.emergingLocations===x} onChange={()=>update("emergingLocations",x)}/>)}</div>
                  </Question>
                  <Question label="What prevents your organization from hiring more talent from emerging locations?">
                    <div className="grid gap-3 sm:grid-cols-2">{locationBarrierOptions.map((x)=><Check name="location_barriers[]" key={x} label={x} checked={form.locationBarriers.includes(x)} onChange={()=>update("locationBarriers",toggle(form.locationBarriers,x))}/>)}</div>
                  </Question>
                  <Question label="Would you consider hiring candidates who completed a role-specific, industry-designed training program?" required>
                    <div className="grid gap-3 sm:grid-cols-2">{["Definitely","Potentially, if independently assessed","Only for entry-level roles","Unlikely"].map((x)=><Radio name="training_hiring" key={x} label={x} checked={form.trainingHiring===x} onChange={()=>update("trainingHiring",x)}/>)}</div>
                  </Question>
                  <Question label="What type of talent would you be most interested in from such a platform?" required>
                    <div className="grid gap-3 sm:grid-cols-2">{["Entry-level talent","Experienced professionals","AI-ready talent","Functional specialists","Project-based talent","Interns / apprentices","Return-to-work talent","Other"].map((x)=><Radio name="talent_type" key={x} label={x} checked={form.talentType===x} onChange={()=>update("talentType",x)}/>)}</div>
                  </Question>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-2xl font-semibold">What does “GCC-ready” mean?</h2>
                <p className="mt-2 text-slate-600">This is the part that will directly influence how GraminGCC thinks about talent creation.</p>
                <div className="mt-8 space-y-8">
                  <Question label="What would give you confidence that a candidate is GCC-ready? Select up to 3.">
                    <div className="grid gap-3 sm:grid-cols-2">{confidenceOptions.map((x)=><Check name="readiness_signals[]" key={x} label={x} checked={form.readinessSignals.includes(x)} onChange={()=>form.readinessSignals.length < 3 || form.readinessSignals.includes(x) ? update("readinessSignals",toggle(form.readinessSignals,x)) : null}/>)}</div>
                  </Question>
                  <Field label="What talent capability do you believe GCCs are currently under-preparing for?"><textarea name="underprepared" value={form.underprepared} onChange={(e)=>update("underprepared",e.target.value)} className="input min-h-28 resize-y" placeholder="One capability, role or skill that comes to mind..." /></Field>
                  <Field label="Anything else you would like to add?"><textarea name="comments" value={form.comments} onChange={(e)=>update("comments",e.target.value)} className="input min-h-28 resize-y" placeholder="Your perspective..." /></Field>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-slate-700">
                    <strong>Want to continue the conversation?</strong> Leave your email above and we may reach out for a short follow-up discussion about the findings.
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-7 py-5 sm:px-10">
            <button type="button" disabled={step === 1} onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-slate-600 disabled:invisible hover:bg-white"><ChevronLeft size={17}/>Back</button>
            {step < 4 ? (
              <button type="button" disabled={!canContinue} onClick={() => setStep((s) => s + 1)} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40">Continue<ChevronRight size={17}/></button>
            ) : (
              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Submitting…" : "Submit my perspective"}<ArrowRight size={17}/></button>
            )}
          </div>
        </form>

        {submitError && <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">{submitError}</p>}\n\n        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          By submitting, you are sharing your professional perspective for the GCC Talent Demand Study. Please do not include confidential employer information.
        </p>
      </section>
    </main>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <label className="block"><span className="text-sm font-semibold text-slate-800">{label}{required && <span className="ml-1 text-blue-600">*</span>}</span><span className="mt-2 block">{children}</span></label>;
}

function Question({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <fieldset><legend className="text-sm font-semibold leading-6 text-slate-800">{label}{required && <span className="ml-1 text-blue-600">*</span>}</legend><div className="mt-3">{children}</div></fieldset>;
}

function Check({ name, label, checked, onChange }: { name: string; label: string; checked: boolean; onChange: () => void }) {
  return <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition ${checked ? "border-blue-300 bg-blue-50" : "border-slate-200 hover:border-slate-300"}`}><input type="checkbox" name={name} value={label} checked={checked} onChange={onChange} className="mt-1 h-4 w-4 accent-blue-600" /><span className="text-sm leading-5 text-slate-700">{label}</span></label>;
}

function Radio({ name, label, checked, onChange }: { name: string; label: string; checked: boolean; onChange: () => void }) {
  return <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition ${checked ? "border-blue-300 bg-blue-50" : "border-slate-200 hover:border-slate-300"}`}><input type="radio" name={name} value={label} checked={checked} onChange={onChange} className="mt-1 h-4 w-4 accent-blue-600" /><span className="text-sm leading-5 text-slate-700">{label}</span></label>;
}
