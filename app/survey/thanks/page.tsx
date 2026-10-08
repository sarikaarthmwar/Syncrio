import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function SurveyThanks() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-6">
      <section className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-200/50 sm:p-14">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-blue-600"><CheckCircle2 size={32}/></div>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Thank you</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Your perspective matters.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Your response will help us understand where GCC talent demand is heading and what “GCC-ready” should really mean.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-semibold text-white hover:bg-blue-600">Back to the study <ArrowRight size={17}/></a>
          <a href="/survey" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3.5 font-semibold text-slate-700 hover:bg-slate-50">Follow the study</a>
        </div>
      </section>
    </main>
  );
}
