export default function MetricsBeforeAfter() {
    const items = [
      { title: 'Velocity', value: '+30%', note: 'Measured across 10 sprints' },
      { title: 'Spillover', value: '−40%', note: 'DoR + WIP guardrails' },
      { title: 'Sprint Goal Success', value: '95%', note: 'Stabilized predictability' },
    ]
    return (
      <section className="card">
        <h2 className="text-xl font-semibold mb-4">Before → After (selected teams)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border p-4">
              <div className="text-sm text-slate-500 mb-1">{it.title}</div>
              <div className="text-2xl font-semibold">{it.value}</div>
              <div className="text-sm text-slate-600">{it.note}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  