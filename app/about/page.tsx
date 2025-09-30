export default function AboutPage(){
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold section-title">Get to Know Me</h1>
      <p className="text-muted">Transforming raw delivery signals into predictable outcomes.</p>

      <section className="grid md:grid-cols-2 gap-6">
        <article className="card">
          <h2 className="text-xl font-semibold mb-2">Decade of Agile Delivery</h2>
          <p className="text-muted">
            I help SaaS, telecom, and financial teams hit <strong>95% sprint goal success</strong> and ship faster.
              Evidence-based coaching, lightweight guardrails, and living dashboards—so delivery stays predictable.
          </p>
          <p className="text-muted mt-3">
            I partner with Product, Engineering, and QA to build DoR/DoD guardrails, unblock cross-team work, and make outcomes visible via Azure DevOps/Jira dashboards.
          </p>
        </article>

        <aside className="grid grid-cols-2 gap-4">
          <div className="kpi">
            <div className="value">10+ yrs</div>
            <div className="label">Agile delivery</div>
          </div>
          <div className="kpi">
            <div className="value">+50%</div>
            <div className="label">Dependency visibility</div>
          </div>
          <div className="kpi">
            <div className="value">−35%</div>
            <div className="label">Demo defects</div>
          </div>
          <div className="kpi">
            <div className="value">90–95%</div>
            <div className="label">Predictability</div>
          </div>
        </aside>
      </section>
    </div>
  )
}
