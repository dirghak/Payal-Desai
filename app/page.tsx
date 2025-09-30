import Link from 'next/link'
import HeroCard from '../components/HeroCard'
import MetricsBeforeAfter from '../components/MetricsBeforeAfter'
import Image from 'next/image'

<MetricsBeforeAfter />

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="card text-center">
  {/* Avatar */}
  <div className="flex justify-center">
    <div
      style={{ width: 180, height: 180 }}
      className="rounded-full overflow-hidden ring-4 ring-white shadow-[0_12px_28px_rgba(2,6,23,.12)]"
    >
      <img
        src="/photo.jpeg"            // keep your filename here
        alt="Payal Desai"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 42%",  // nudge up a bit
          transform: "scale(1.08)",   // subtle zoom
          transformOrigin: "50% 45%"
        }}
        loading="eager"
      />
    </div>
  </div>

  {/* Name + Title */}
  <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight">Payal Desai</h1>
  <p className="mt-2 text-xl text-slate-600">Senior Scrum Master · Agile Delivery &amp; Metrics</p>

  {/* One-paragraph value prop (your Option B) */}
  <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
    Predictable delivery, every two weeks: <strong>95% goals met</strong>, <strong>+30% velocity</strong>, <strong>−40% spillover</strong>—powered by practical coaching, DoR/DoD guardrails, and dashboards that drive action.
  </p>

  {/* Chips */}
  <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
    <span className="chip">+30% Velocity (10 sprints)</span>
    <span className="chip">95% Sprint Goals Met</span>
    <span className="chip">Spillover −40%</span>
    <span className="chip">ADO/Jira Dashboards</span>
  </div>

  {/* Buttons */}
  <div className="mt-5 flex flex-wrap justify-center gap-3">
    <a href="/case-studies" className="btn btn-primary">Explore My Work →</a>
    <a href="/resumes/Payal Desai_CV.pdf" target="_blank" className="btn btn-ghost">Download Resume</a>
    <a href="/contact" className="btn btn-success">Connect With Me</a>
  </div>

  {/* KPIs */}
  <div className="grid md:grid-cols-3 gap-4 mt-6 max-w-3xl mx-auto text-left md:text-center">
    <div className="kpi">
      <div className="value">+30%</div>
      <div className="label">Velocity (10 sprints)</div>
    </div>
    <div className="kpi">
      <div className="value">95%</div>
      <div className="label">Sprint goals met</div>
    </div>
    <div className="kpi">
      <div className="value">−40%</div>
      <div className="label">Spillover after guardrails</div>
    </div>
  </div>
</section>
    </div>
  )
}
