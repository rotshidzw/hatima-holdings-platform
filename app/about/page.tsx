import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="badge">Our story</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">Building enduring infrastructure partnerships.</h1>
            <p className="mt-4 text-lg text-slate-600">
              Hatima Holdings is a strategic infrastructure partner delivering complex projects across energy, industrial, and sustainable sectors. We bring a rigorous governance model, world-class safety practices, and transparent reporting to every engagement.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card">
                <p className="text-sm font-semibold text-slate-900">Mission</p>
                <p className="mt-2 text-sm text-slate-600">
                  Enable resilient infrastructure that accelerates regional growth and unlocks sustainable outcomes.
                </p>
              </div>
              <div className="card">
                <p className="text-sm font-semibold text-slate-900">Vision</p>
                <p className="mt-2 text-sm text-slate-600">
                  Be the trusted operator for critical infrastructure programs across the Gulf.
                </p>
              </div>
            </div>
          </div>
          <div className="card space-y-4">
            <p className="text-sm font-semibold text-slate-900">Leadership principles</p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Safety-first execution with zero-compromise standards.</li>
              <li>• Transparent governance and client-aligned reporting.</li>
              <li>• Sustainability embedded across the project lifecycle.</li>
              <li>• Continuous innovation through digital delivery.</li>
            </ul>
            <Link href="/contact" className="text-sm font-semibold text-brand-600">
              Meet the team →
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            { title: 'Program Governance', desc: 'Integrated PMO, schedule risk management, and stakeholder alignment.' },
            { title: 'Safety & Compliance', desc: 'ISO-aligned processes, audit trails, and onsite safety leadership.' },
            { title: 'Digital Delivery', desc: 'Realtime dashboards, BIM coordination, and data-driven decisioning.' }
          ].map((item) => (
            <div key={item.title} className="card">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
