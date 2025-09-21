export default function WorkModesPage() {
    return (
      <div className="space-y-8">
        <h1 className="text-2xl font-bold tracking-tight">Work Modes</h1>
  
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="font-semibold mb-2">Engagements</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Team Scrum Master (1–2 squads)</li>
              <li>Program Scrum Master / RTE support (dependency & risk facilitation)</li>
              <li>Metrics & Dashboards (ADO/Jira queries, health & predictability)</li>
              <li>Agile Readiness Assessment (DoR/DoD, cadence, ceremonies)</li>
              <li>Stakeholder Workshops (prioritization, demo focus, planning breakouts)</li>
            </ul>
          </div>
  
          <div className="card">
            <h2 className="font-semibold mb-2">Availability</h2>
            <p className="text-slate-700">
              Open to Sr. Scrum Master / Scrum Master II roles • Hybrid/Remote • Calgary / Canada-wide.
            </p>
          </div>
        </div>
      </div>
    )
  }
  