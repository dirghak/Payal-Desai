

const items = [
  {
    title:'Agile Coaching & Ceremonies',
    bullets:['Scrum/SAFe rituals','Outcome-based demos','Retro action follow-through']
  },
  {
    title:'Program Delivery & Dependencies',
    bullets:['Risk/Dependency board','Capacity + dependency breakouts','Cross-team unblock']
  },
  {
    title:'Metrics & Dashboards',
    bullets:['ADO/Jira queries','Sprint health, blocker aging','Release burn-up']
  },
  {
    title:'Backlog & Readiness',
    bullets:['DoR checklist + SLAs','Story mapping & value slicing','AC workshops']
  },
  {
    title:'QA/Dev Collaboration',
    bullets:['Definition of Done','Test readiness','UAT tracking & gates']
  },
  {
    title:'Training & Leadership',
    bullets:['Playbooks & templates','New-team onboarding','Stakeholder workshops']
  },
]

export default function ExpertisePage(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold section-title">Expertise</h1>
      <p className="text-muted">10+ years of turning teams’ intent into reliable delivery.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it)=>(
          <article key={it.title} className="card">
            <div className="icon-circle mb-3">✅</div>
            <h2 className="font-semibold text-lg mb-1">{it.title}</h2>
            <ul className="list-disc pl-5 text-muted space-y-1">
              {it.bullets.map(b=><li key={b}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
  
