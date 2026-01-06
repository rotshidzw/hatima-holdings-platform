export default function SustainabilityPage() {
  const pillars = [
    {
      title: 'Net-zero construction planning',
      description: 'Lifecycle carbon assessments and mitigation plans embedded from design.'
    },
    {
      title: 'Circular resource strategy',
      description: 'Material reuse, waste minimization, and water recycling across sites.'
    },
    {
      title: 'Community impact',
      description: 'Local workforce development programs and transparent stakeholder reporting.'
    }
  ];

  return (
    <div>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="badge">Sustainability</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">Sustainability is our delivery standard.</h1>
            <p className="mt-4 text-lg text-slate-600">
              Hatima Holdings integrates ESG performance into every project lifecycle, from feasibility to operations.
            </p>
          </div>
          <div className="card space-y-4">
            <p className="text-sm font-semibold text-slate-900">Impact commitments</p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• 18% average emissions reduction in 2023 programs.</li>
              <li>• 25% increase in sustainable material sourcing.</li>
              <li>• 96% compliance with regional ESG standards.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card">
              <h2 className="text-lg font-semibold text-slate-900">{pillar.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
