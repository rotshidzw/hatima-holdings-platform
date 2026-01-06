export default function ProposalPage() {
  const phases = [
    {
      title: 'Phase 1: Marketing + RFQ + Admin',
      description: 'Launch the public site, RFQ portal, and internal operations dashboard with analytics and reporting.'
    },
    {
      title: 'Phase 2: Client portal + CRM integration',
      description: 'Enable secure client access to RFQs, proposals, and integrate with enterprise CRM workflows.'
    },
    {
      title: 'Phase 3: Asset management + field operations',
      description: 'Deploy mobile field operations, asset tracking, and BI dashboards for portfolio intelligence.'
    }
  ];

  const tiers = [
    { name: 'Foundation', price: '$120k', details: 'Marketing site, RFQ portal, core admin, basic analytics.' },
    { name: 'Growth', price: '$210k', details: 'Adds client portal, CRM sync, automation, and reporting.' },
    { name: 'Enterprise', price: 'Custom', details: 'Full asset management, field ops, BI dashboards, dedicated support.' }
  ];

  return (
    <div>
      <section className="section">
        <div className="container">
          <p className="badge">Proposal</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Hatima Holdings Platform Roadmap</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            This proposal outlines a phased delivery of the Hatima Holdings enterprise platform, enabling the marketing site, RFQ portal, and a scalable operations backbone.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {phases.map((phase) => (
              <div key={phase.title} className="card">
                <h2 className="text-lg font-semibold text-slate-900">{phase.title}</h2>
                <p className="mt-3 text-sm text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold text-slate-900">Pricing tiers</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="card">
                <p className="text-sm font-semibold text-slate-900">{tier.name}</p>
                <p className="mt-2 text-3xl font-semibold text-brand-700">{tier.price}</p>
                <p className="mt-3 text-sm text-slate-600">{tier.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
