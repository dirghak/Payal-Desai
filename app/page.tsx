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

      {/* <section className="card">
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
            <div style={{ width: 160, height: 160, borderRadius: "9999px", overflow: "hidden" }}>
            <img
              src="/photo.jpeg"
              alt="Payal Desai"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",        // fill the circle
                objectPosition: "50% 42%", // nudge the crop slightly up (42% = a bit above center)
                transform: "scale(1.08)",  // gentle zoom
                transformOrigin: "50% 45%" // pivot slightly above center so bottom isn’t clipped
              }}
              loading="eager"/>
            </div>
          </div>
        </div>

        {/* KPIs row */}
        {/* <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="kpi"><div className="value">+30%</div><div className="label">Velocity (10 sprints)</div></div>
          <div className="kpi"><div className="value">95%</div><div className="label">Sprint goals met</div></div>
          <div className="kpi"><div className="value">−40%</div><div className="label">Spillover after guardrails</div></div>
        </div> */}
      </section> */}
    </div>
  )
}
