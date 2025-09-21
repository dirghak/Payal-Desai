

export default function HowIWorkPage() {
    return (
      <div className="space-y-8">
        <h1 className="text-2xl font-bold tracking-tight">How I Work</h1>
  
        <section className="card space-y-2">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Discover:</strong> Baseline flow metrics (velocity, predictability, spillover, lead time).</li>
            <li><strong>Align:</strong> DoR/DoD + capacity & risk guardrails, agreed with PO & leads.</li>
            <li><strong>Instrument:</strong> Sprint Health + dependency/risk boards (ADO/Jira queries).</li>
            <li><strong>Coach:</strong> Ritual redesign (planning, refinement, demos, retros) with playbooks.</li>
            <li><strong>Stabilize:</strong> Weekly metrics review; remove systemic blockers early.</li>
            <li><strong>Evolve:</strong> Quarterly health check; refresh dashboards and agreements.</li>
          </ol>
        </section>
  
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Operational Artifacts I Deliver</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Definition of Ready / Definition of Done matrix</li>
            <li>Sprint Health dashboard (velocity, predictability, aging WIP)</li>
            <li>Dependency & risk board with owners</li>
            <li>Retro action tracker (owners, due dates)</li>
            <li>Release burn-up / forecast view</li>
            <li>Demo script & scoring rubric</li>
          </ul>
        </section>
      </div>
    )
  }
  