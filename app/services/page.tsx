import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <p className="badge">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Infrastructure delivery across the full lifecycle.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Hatima Holdings supports complex infrastructure programs with strategic advisory, engineering, construction, and operational continuity.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="card space-y-4">
                <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                <p className="text-sm text-slate-600">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
