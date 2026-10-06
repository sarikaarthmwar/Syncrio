import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Database, FileText, GitBranch, Layers3, PlugZap, Sparkles, Workflow } from "lucide-react";

const capabilities = [
  { icon: Bot, title: "AI Agents", text: "Agents that reason, use tools, follow business rules and take action." },
  { icon: BrainCircuit, title: "AI Copilots", text: "Context-aware assistants grounded in your processes and enterprise knowledge." },
  { icon: FileText, title: "Document Intelligence", text: "Turn contracts, SOPs, requirements and unstructured content into usable intelligence." },
  { icon: Workflow, title: "Intelligent Workflows", text: "Connect AI decisions to the workflows your teams already use." },
  { icon: Database, title: "Knowledge Systems", text: "Create secure, searchable knowledge layers for business-specific AI." },
  { icon: PlugZap, title: "System Integration", text: "Connect AI to ERP, CRM, project tools and custom applications." },
];

const examples = [
  { eyebrow: "Implementation", title: "From requirements to test engineering", text: "Turn requirements and process documents into traceability, test scenarios and execution-ready assets.", tags: ["Requirements", "AI", "Testing"] },
  { eyebrow: "Operations", title: "From meetings to action", text: "Capture decisions, risks and actions from meetings and push the right information into business workflows.", tags: ["Meetings", "Agents", "Automation"] },
  { eyebrow: "Knowledge", title: "From documents to answers", text: "Give teams a trusted AI layer over SOPs, policies, project artifacts and institutional knowledge.", tags: ["RAG", "Knowledge", "Copilot"] },
];

const steps = [
  ["01", "Discover", "Understand the problem, process, data and systems."],
  ["02", "Design", "Create the AI solution architecture and blueprint."],
  ["03", "Build", "Engineer the agents, application and workflows."],
  ["04", "Integrate", "Connect the solution to the systems your business already runs."],
  ["05", "Validate", "Test accuracy, reliability, security and business outcomes."],
  ["06", "Deploy", "Move from prototype to a production-ready solution."],
];

export function MarketingHomepage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate bg-[#07111f] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,.22),transparent_30%),radial-gradient(circle_at_90%_75%,rgba(124,58,237,.18),transparent_32%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-sm font-medium text-blue-100"><Sparkles size={15} /> Custom AI solution engineering</div>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[5.25rem]">Custom AI.<span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">Built for your business.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Syncrio designs and builds AI applications, agents and intelligent workflows around your processes, data and systems — not around a generic product.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/ai-assessment" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100">Build my AI solution<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></a>
              <a href="#what-we-build" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">See what we build</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">{["Business-process first", "Enterprise-ready", "Built to integrate"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-cyan-300" />{item}</span>)}</div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><div><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Syncrio AI Studio</p><p className="mt-1 text-sm font-medium text-white">Solution blueprint</p></div><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">Ready to build</span></div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-[#0b1728] p-5"><p className="text-xs text-slate-500">BUSINESS PROBLEM</p><p className="mt-2 text-sm leading-6 text-slate-200">“Our implementation team spends too much time converting requirements into test assets.”</p></div>
              <div className="my-4 flex justify-center"><div className="grid h-9 w-9 place-items-center rounded-full border border-blue-300/20 bg-blue-400/10 text-blue-200"><ArrowRight size={16} className="rotate-90" /></div></div>
              <div className="rounded-2xl border border-blue-300/15 bg-gradient-to-br from-blue-400/10 to-violet-400/10 p-5"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-400/15 text-blue-200"><Bot size={20} /></div><div><p className="text-sm font-semibold text-white">AI Test Engineering Agent</p><p className="text-xs text-slate-400">Knowledge + reasoning + workflow</p></div></div><div className="mt-5 grid grid-cols-3 gap-2 text-[11px]">{["Requirements", "Knowledge", "Jira"].map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-slate-300">{item}</div>)}</div></div>
              <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="text-xs text-slate-500">BUILD PATH</p><p className="mt-1 text-sm text-slate-200">Blueprint → Build → Validate</p></div><div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="text-xs text-slate-500">DESIGNED FOR</p><p className="mt-1 text-sm text-slate-200">Your process & systems</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-6 py-7 lg:px-8"><p className="text-center text-sm font-medium text-slate-500">AI that works inside the way your business already works.</p><div className="mt-5 flex flex-wrap justify-center gap-3">{["Procurement", "Finance", "Operations", "HR", "IT", "Customer Service", "SaaS Delivery"].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">{item}</span>)}</div></div></section>

      <section className="bg-slate-50 py-24 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Why custom AI</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Your business doesn't need another generic AI tool.</h2><p className="mt-5 text-lg leading-8 text-slate-600">It needs AI that understands your process, your data, your systems, your people and your rules.</p></div><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{[["01", "Your process", "AI designed around the way work actually happens."], ["02", "Your data", "Ground responses and decisions in business-specific knowledge."], ["03", "Your systems", "Connect intelligence to the applications already in use."], ["04", "Your outcomes", "Measure the value in time, quality, speed and decisions."]].map(([number, title, text]) => <div key={number} className="rounded-2xl border border-slate-200 bg-white p-6"><span className="text-sm font-semibold text-blue-600">{number}</span><h3 className="mt-7 text-xl font-semibold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section id="what-we-build" className="bg-white py-24 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">What we build</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">From business problem to working AI solution.</h2></div><a href="/ai-assessment" className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-600">Start with your problem <ArrowRight size={17} /></a></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }) => <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"><div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-white transition group-hover:bg-blue-600"><Icon size={20} /></div><h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="bg-[#07111f] py-24 text-white lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Built around your business</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">We engineer the system around the AI.</h2><p className="mt-5 text-lg leading-8 text-slate-300">The model is only one part of the solution. Syncrio connects knowledge, business rules, workflows, integrations and human oversight into a production-ready system.</p></div><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{[[Layers3, "AI application"], [Bot, "Agents"], [Database, "Knowledge"], [Workflow, "Business workflow"], [PlugZap, "Enterprise systems"]].map(([Icon, label], index) => <div key={label as string} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6"><span className="absolute right-4 top-4 text-xs text-slate-600">0{index + 1}</span><div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-cyan-200">{<Icon size={19} />}</div><p className="mt-8 font-medium text-slate-200">{label as string}</p></div>)}</div></div></section>

      <section className="bg-white py-24 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">What this can look like</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Real business problems. Practical AI solutions.</h2></div><div className="mt-14 grid gap-6 lg:grid-cols-3">{examples.map((example) => <article key={example.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{example.eyebrow}</p><h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{example.title}</h3><p className="mt-4 leading-7 text-slate-600">{example.text}</p><div className="mt-7 flex flex-wrap gap-2">{example.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">{tag}</span>)}</div></article>)}</div></div></section>

      <section id="how-we-build" className="border-t border-slate-200 bg-slate-50 py-24 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">How we build</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Discover. Design. Build. Deploy.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A practical path from an idea or manual process to an AI solution your team can actually use.</p></div><div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">{steps.map(([number, title, text]) => <div key={number} className="bg-white p-7"><span className="text-sm font-semibold text-blue-600">{number}</span><h3 className="mt-8 text-xl font-semibold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32"><div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" /><div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8"><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white"><GitBranch size={21} /></div><h2 className="mt-7 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Have an AI idea? Start with the problem.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Tell us what is slowing your business down. We’ll help translate the problem into an AI solution, architecture and build path.</p><a href="/ai-assessment" className="mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-blue-600">Create my AI blueprint <ArrowRight size={18} /></a></div></section>
    </main>
  );
}
