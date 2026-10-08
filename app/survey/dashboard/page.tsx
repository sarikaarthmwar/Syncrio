import { ArrowUpRight, Database, ShieldCheck } from "lucide-react";

const supabaseDashboardUrl =
  "https://supabase.com/dashboard/project/yzvykqocdevjrzubieeq/editor?schema=public&table=survey_responses";

export default function SurveyDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-950">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          ← Back to Syncrio
        </a>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-10">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
            <Database size={24} />
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight">GCC Talent Demand Study Dashboard</h1>
          <p className="mt-3 leading-7 text-slate-600">
            Survey responses are stored in the private <strong>gramingcc_survey</strong> Supabase project.
            Use the secure Supabase dashboard below to review, filter and export responses.
          </p>

          <a
            href={supabaseDashboardUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
          >
            Open response dashboard
            <ArrowUpRight size={17} />
          </a>

          <div className="mt-8 flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
            <ShieldCheck className="mt-0.5 shrink-0" size={18} />
            <span>
              The survey does not expose response data publicly. The public survey can submit responses,
              while response viewing remains inside your authenticated Supabase account.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
