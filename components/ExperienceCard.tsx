type Props = { title: string; org: string; time: string; bullets: string[] }
export default function ExperienceCard({ title, org, time, bullets }: Props) {
  return (
    <div className="card space-y-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h3 className="text-lg font-semibold">{title} — <span className="font-normal">{org}</span></h3>
        <span className="text-sm text-slate-500">{time}</span>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}