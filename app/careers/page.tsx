import { careers } from '@/lib/data';

export default function CareersPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <p className="badge">Careers</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Work on projects that matter.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Join cross-functional teams delivering resilient infrastructure with a focus on safety, sustainability, and innovation.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {careers.map((role) => (
              <div key={role.title} className="card">
                <h2 className="text-lg font-semibold text-slate-900">{role.title}</h2>
                <p className="mt-1 text-xs text-slate-500">{role.location} · {role.type}</p>
                <p className="mt-3 text-sm text-slate-600">{role.description}</p>
                <button className="mt-4 inline-flex rounded-full border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-700">
                  Apply now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
