export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold section-title">Let’s Work Together</h1>
      <p className="text-slate-600">
        Open to Sr. Scrum Master / Scrum Master II • Hybrid/Remote • Calgary / Canada-wide.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: contact channels */}
        <section className="card space-y-3">
          <div className="flex items-center gap-3 border rounded-2xl p-3 bg-white">
            <span className="icon-circle">
              <img src="/icon-email.svg" alt="" width={24} height={24} />
            </span>
            <div>
              <div className="font-semibold">Email</div>
              <a className="underline" href="mailto:payalukani92@gmail.com">payalukani92@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-3 border rounded-2xl p-3 bg-white">
            <span className="icon-circle">
              <img src="/icon-linkedin.svg" alt="" width={24} height={24} />
            </span>
            <div>
              <div className="font-semibold">LinkedIn</div>
              <a className="underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/payal-desai-safe/">
                linkedin.com/in/payal-desai-safe
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 border rounded-2xl p-3 bg-white">
            <span className="icon-circle">
              <img src="/icon-phone.svg" alt="" width={24} height={24} />
            </span>
            <div>
              <div className="font-semibold">Phone</div>
              <a className="underline" href="tel:+16473273249">+1 (647) 327-3249</a>
            </div>
          </div>
        </section>

        {/* Right: quick info + CTAs */}
        <section className="card">
          <p><strong>Typical response:</strong> within 24 hours (Mon–Fri)</p>
          <p><strong>Time zone:</strong> America/Edmonton (MT)</p>
          <p className="text-slate-600 mt-2">Prefer calendar scheduling? I can add a booking link here later.</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="mailto:payalukani92@gmail.com">Email Me</a>
            <a className="btn btn-ghost" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/payal-desai-safe/">
              Message on LinkedIn
            </a>
            <a className="btn btn-ghost" href="tel:+16473273249">Call / WhatsApp</a>
          </div>
        </section>
      </div>
    </div>
  )
}

