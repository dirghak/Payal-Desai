export default function SkillsPage() {
    return (
      <div className="space-y-8">
        <h1 className="text-2xl font-bold tracking-tight">Tooling & Skills</h1>
  
        <section className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h2 className="font-semibold mb-2">Practices</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Scrum, SAFe ceremonies, WSJF</li>
              <li>Evidence-Based Management, value slicing</li>
              <li>Story mapping, trunk-based basics</li>
            </ul>
          </div>
  
          <div className="card">
            <h2 className="font-semibold mb-2">Metrics</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Velocity, predictability, sprint goal success</li>
              <li>Lead/flow time, WIP limits</li>
              <li>Blocker/queue aging, escaped defects</li>
            </ul>
          </div>
  
          <div className="card">
            <h2 className="font-semibold mb-2">Tools</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Azure DevOps (boards, queries, dashboards)</li>
              <li>Jira / Confluence</li>
              <li>Miro, Power BI / ADO queries</li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
  