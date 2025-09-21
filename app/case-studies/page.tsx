export default function CaseStudiesPage() {
    return (
      <div className="space-y-8">
        <h1 className="text-2xl font-bold tracking-tight">Selected Case Studies</h1>
  
        {/* Case Study A */}
        <article className="card space-y-3">
          <h2 className="text-lg font-semibold">Mortgage Servicing (LERETA via Lorven) — 3 teams (20+), Azure DevOps</h2>
          <p className="text-slate-700">
            <strong>Context:</strong> Mortgage servicing & escrow workflows. 3 cross-functional teams, 2-week sprints, Azure DevOps.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Constraints:</strong> High spillover and hidden cross-team dependencies; DoR inconsistencies; unfocused demos.</li>
            <li><strong>Actions:</strong> Introduced WIP limits & weekly metrics review; rebuilt ADO boards/dependency views; concise DoR checklist; standardized demo scripts; aligned QA/BA acceptance criteria; light “risk & blocker” cadence.</li>
            <li><strong>Impact:</strong> Velocity <strong>+30%</strong> across 10 sprints; sprint-goal success <strong>95%</strong>; spillover <strong>−40%</strong>; demo defects <strong>−35%</strong>; dependency visibility <strong>+50%</strong>.</li>
            <li><strong>Artifacts:</strong> ADO dependency board, Sprint Health dashboard, DoR/DoD matrix, demo script template.</li>
          </ul>
        </article>
  
        {/* Case Study B */}
        <article className="card space-y-3">
          <h2 className="text-lg font-semibold">Telco/OTT Integration (Amdocs) — 3 teams (18–22), Jira</h2>
          <p className="text-slate-700">
            <strong>Context:</strong> Integrations for subscription, content, and billing. 3 squads across time zones, 2-week sprints, Jira/Confluence.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Constraints:</strong> Unclear prioritization; unpredictable story readiness; long test handoffs.</li>
            <li><strong>Actions:</strong> “Readiness gate” (DoR checklist + 24-hour SLAs for answers); Jira queries/dashboards for aging WIP & blocker time; split planning into capacity + dependency breakouts; AC workshops.</li>
            <li><strong>Impact:</strong> Story readiness <strong>+35%</strong>; predictability stabilized at <strong>90–95%</strong> goals hit; blocker time <strong>−30%</strong>; release slippage <strong>−20%</strong> over two quarters.</li>
            <li><strong>Artifacts:</strong> Jira readiness dashboard, blocker aging report, dependency breakout template, AC workshop notes.</li>
          </ul>
        </article>
  
        {/* Case Study C */}
        <article className="card space-y-3">
          <h2 className="text-lg font-semibold">Collaboration SaaS (Asite) — ~25 people, Jira</h2>
          <p className="text-slate-700">
            <strong>Context:</strong> Global product teams (IN/UK) on a construction collaboration platform.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Constraints:</strong> Long feedback loops; inconsistent retro actions; opaque release scope.</li>
            <li><strong>Actions:</strong> Release burn-up; “retro action tracker” with owners/due dates; value slicing; outcome-based demos; tuned WIP by class of service.</li>
            <li><strong>Impact:</strong> Predictability <strong>+20%</strong>; escaped defects <strong>−25%</strong>; improved stakeholder satisfaction with fewer surprise scope shifts.</li>
            <li><strong>Artifacts:</strong> Release burn-up, retro tracker, value-slice map, demo scoring rubric.</li>
          </ul>
        </article>
      </div>
    )
  }
  