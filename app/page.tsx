import Link from 'next/link'
import HeroCard from '../components/HeroCard'
import MetricsBeforeAfter from '../components/MetricsBeforeAfter'

<MetricsBeforeAfter />

export default function Page() {
  return (
    <div className="space-y-8">
      <HeroCard>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Scrum Master helping SaaS, telecom, and financial teams ship faster.
            </h1>
            <p className="mt-3 text-slate-700 max-w-2xl">
              I use evidence-based coaching, lightweight guardrails, and living dashboards to raise predictability,
              reduce spillover, and unblock cross-team delivery. 95% sprint goal success, consistently.
            </p>

            <div className="flex gap-3">
              <a href="/case-studies" className="btn btn-primary">See case studies</a>
              <a href="/resumes/Payal Desai_CV.pdf" target="_blank" className="btn btn-outline">Resume (PDF)</a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="chip">+30% Velocity (10 sprints)</span>
              <span className="chip">95% Sprint Goals Met</span>
              <span className="chip">Spillover −40%</span>
              <span className="chip">ADO/Jira Dashboards</span>
            </div>
             {/* <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full px-3 py-1 bg-indigo-50">+30% Velocity (10 sprints)</span>
              <span className="rounded-full px-3 py-1 bg-indigo-50">95% Sprint Goals Met</span>
              <span className="rounded-full px-3 py-1 bg-indigo-50">Spillover −40%</span>
              <span className="rounded-full px-3 py-1 bg-indigo-50">ADO/Jira Dashboards</span>
            </div> */}
          </div>

          {/* <div className="flex gap-3">
            <Link href="/case-studies" className="rounded-2xl px-4 py-2 bg-indigo-600 text-white shadow-soft hover:bg-indigo-700">
              See case studies
            </Link>
            <Link href="/resumes/Payal_Desai.pdf" target="_blank" className="rounded-2xl px-4 py-2 border border-slate-300 bg-white">
              Resume (PDF)
            </Link>
          </div>  */}
        </div>
      </HeroCard>

      {/* Optional: Before/After metrics on home */}
      <section className="card">
        <h2 className="text-xl font-semibold mb-4">Before → After (selected teams)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border p-4">
            <div className="text-sm text-slate-500 mb-1">Velocity</div>
            <div className="text-2xl font-semibold">+30%</div>
            <div className="text-sm text-slate-600">Measured across 10 sprints</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="text-sm text-slate-500 mb-1">Spillover</div>
            <div className="text-2xl font-semibold">−40%</div>
            <div className="text-sm text-slate-600">DoR + WIP guardrails</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="text-sm text-slate-500 mb-1">Sprint Goal Success</div>
            <div className="text-2xl font-semibold">95%</div>
            <div className="text-sm text-slate-600">Stabilized predictability</div>
          </div>
        </div>
      </section>
    </div>
  )
}
