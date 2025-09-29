export default function CredentialsPage(){
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold section-title">Credentials & Recognition</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <section className="card">
          <h2 className="font-semibold mb-2">Education</h2>
          <ul className="list-disc pl-5 text-muted space-y-1">
            <li>Gujarat Technological University, India - Bachelor Of Engineering In Information Technology</li>
            <li>Courses: Agile Methodologies, Software Development Life Cycle (SDLC), Project Management, Data Structures, Database Management Systems</li>
            <li>Concentration: Agile Project Management, Software Engineering, Information Systems</li>          
          </ul>
        </section>

        <section className="card">
          <h2 className="font-semibold mb-2">Awards</h2>
          <ul className="list-disc pl-5 text-muted space-y-1">
            <li>Star Performer — Employee of the Month (Mar 2020): Drove process improvements and shipped high-quality, on-time releases across integrated solutions.</li>
            <li>Rising Star of the month	(Jan 2016) - For performing remarkably well within the first year of joining.</li>     
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
