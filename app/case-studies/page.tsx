const cases = [
  {
    title:'Mortgage Servicing — 3 teams (ADO)',
    context:'3 cross-functional teams, 2-week sprints.',
    impact:['Velocity +30% (10 sprints)','95% goals hit','Spillover −40%','Demo defects −35%'],
    bullets:[
      'WIP limits + weekly metric reviews',
      'ADO dependency board + risk cadence',
      'DoR checklist + demo script standard'
    ]
  },
  {
    title:'Telco/OTT Integration — 3 teams (Jira)',
    context:'Subscription/content/billing integrations.',
    impact:['Readiness +35%','Predictability 90–95%','Blocker time −30%','Release slippage −20%'],
    bullets:[
      'DoR “readiness gate” + 24h SLA',
      'Jira queries for aging WIP/blocks',
      'Capacity + dependency breakouts'
    ]
  },
  {
    title:'Collaboration SaaS — ~25 ppl (Jira)',
    context:'Global product teams (IN/UK).',
    impact:['Predictability +20%','Escaped defects −25%'],
    bullets:[
      'Release burn-up + forecast',
      'Retro action tracker with owners',
      'Value slicing & outcome demos'
    ]
  }
]

export default function CaseStudies(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold section-title">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map(cs=>(
          <article key={cs.title} className="card">
            <h2 className="font-semibold text-lg mb-1">{cs.title}</h2>
            <p className="text-muted">{cs.context}</p>
            <ul className="list-disc pl-5 text-muted mt-2">
              {cs.bullets.map(b=><li key={b}>{b}</li>)}
            </ul>
            <div className="chips mt-3">
              {cs.impact.map(i=><span key={i} className="chip">{i}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
