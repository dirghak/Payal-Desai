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
    I turn team chaos into steady cadence—using evidence-based coaching, light guardrails, and living dashboards—to keep delivery predictable with <strong>95% sprint goals hit</strong>, <strong>+30% velocity</strong>, and <strong>−40% spillover</strong>.
  </p>

  {/* Buttons */}
  <div className="mt-5 flex flex-wrap justify-center gap-3">
    <a href="/case-studies" className="btn btn-primary">Explore My Work →</a>
    <a href="/resumes/Payal_Desai.pdf" target="_blank" className="btn btn-ghost">Download Resume</a>
    <a href="/contact" className="btn btn-success">Connect With Me</a>
  </div>
</section>
    </div>
  )
}
