export default function CredentialsPage(){
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold section-title">Credentials & Recognition</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <section className="card">
          <h2 className="font-semibold mb-2">Education</h2>
          <ul className="list-disc pl-5 text-muted space-y-1">
            <li>Master’s coursework / certifications relevant to Agile (if any)</li>
            <li>Any notable short programs or workshops</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="font-semibold mb-2">Awards</h2>
          <ul className="list-disc pl-5 text-muted space-y-1">
            <li>Team Excellence / Delivery Recognition (add specifics if available)</li>
            <li>Customer/PO kudos for predictability and demo quality</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="font-semibold mb-2">Certifications</h2>
          <ul className="list-disc pl-5 text-muted space-y-1">
            <li>SAFe® 6.0 Certified Agilist — Scaled Agile</li>
            <li>CSM — Scrum Alliance</li>
            <li>CSPO — Scrum Alliance</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
