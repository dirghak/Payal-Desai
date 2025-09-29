import Link from 'next/link'
import HeroCard from '../components/HeroCard'
import MetricsBeforeAfter from '../components/MetricsBeforeAfter'
import Image from 'next/image'

<MetricsBeforeAfter />

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left copy */}
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Payal Desai
            </h1>
            <p className="mt-2 text-xl text-muted">
              Senior Scrum Master · Agile Delivery & Metrics
            </p>
            <p className="mt-4 text-muted">
              I help SaaS, telecom, and financial teams hit <strong>95% sprint goal success</strong> and ship faster.
              Evidence-based coaching, lightweight guardrails, and living dashboards—so delivery stays predictable.
            </p>

            {/* <div className="chips mt-4">
              <span className="chip"><i>📍</i> Based in Calgary</span>
              <span className="chip"><i>🧭</i> Open to new opportunities</span>
              <span className="chip"><i>📊</i> ADO / Jira</span>
            </div> */}

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/case-studies" className="btn btn-primary">Explore My Work →</a>
              <a href="/resumes/Payal_Desai.pdf" target="_blank" className="btn btn-ghost">Download Resume</a>
              <a href="/contact" className="btn btn-success">Connect With Me</a>
            </div>
          </div>

          {/* Optional profile circle (replace src) */}
          {/* <div className="shrink-0">
            <div style={{width:160,height:160}} className="rounded-full overflow-hidden ring-4 ring-white shadow-[0_12px_28px_rgba(2,6,23,.12)] bg-[radial-gradient(circle_at_50%_40%,#DDE3FF,#F7F8FF)] flex items-center justify-center">
              <span className="text-4xl">🙋‍♀️</span>
            </div>
          </div> */}
          <div className="shrink-0">
  <div
    style={{ width: 160, height: 160, borderRadius: "9999px", overflow: "hidden" }}
  >
    <img
      src="/photo2.jpeg"
      alt="Payal Desai"
      width={160}            // draw exactly at 160px to avoid browser resampling
      height={160}
      style={{ display: "block" }}
      loading="eager"
    />
  </div>
</div>
        </div>

        {/* KPIs row */}
        {/* <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="kpi"><div className="value">+30%</div><div className="label">Velocity (10 sprints)</div></div>
          <div className="kpi"><div className="value">95%</div><div className="label">Sprint goals met</div></div>
          <div className="kpi"><div className="value">−40%</div><div className="label">Spillover after guardrails</div></div>
        </div> */}
      </section>
    </div>
  )
}
