const roles = [
  {
    title:'Senior Scrum Master',
    org:'Lorven (Client: LERETA)',
    time:'Jul 2023 – Mar 2025',
    points:[
      'WIP limits + weekly metrics review → velocity +30%, spillover −40%.',
      'ADO dependency view + risk cadence → visibility +50%, fewer last-minute surprises.',
      'Standardized demo scripts; demo defects −35%.'
    ]
  },
  {
    title:'Senior Scrum Master',
    org:'Amdocs (Telco/OTT Integration)',
    time:'Dec 2021 – Jan 2023',
    points:[
      'DoR “readiness gate” + 24h SLA for answers; story readiness +35%.',
      'Predictability stabilized at 90–95% goals hit; blocker time −30%.',
      'Release slippage −20% over two quarters.'
    ]
  },
  {
    title:'Scrum Master → Sr. Scrum Master',
    org:'Asite (Collaboration SaaS)',
    time:'Sep 2015 – Jul 2020',
    points:[
      'Release burn-up + retro action tracker; predictability +20%.',
      'Value slicing + outcome-based demos; escaped defects −25%.'
    ]
  }
]

export default function ExperiencePage(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold section-title">Professional Experience</h1>
      <div className="space-y-4">
        {roles.map(r=>(
          <article key={r.title} className="card space-y-2">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h2 className="text-lg font-semibold">{r.title} — <span className="font-normal">{r.org}</span></h2>
              <span className="text-muted text-sm">{r.time}</span>
            </div>
            <ul className="list-disc pl-5 text-muted space-y-1">{r.points.map(p=><li key={p}>{p}</li>)}</ul>
          </article>
        ))}
      </div>
    </div>
  )
}
