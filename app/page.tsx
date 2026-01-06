import Link from 'next/link';
import { careers, insights, metrics, projects, services, testimonials } from '@/lib/data';

export default function HomePage() {
  return (
    <div>
      <section className="section bg-gradient-to-br from-slate-50 via-white to-brand-50">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <span className="badge">Trusted infrastructure partner</span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Building critical infrastructure that powers national growth.
            </h1>
            <p className="text-lg text-slate-600">
              Hatima Holdings delivers energy, industrial, and digital infrastructure with transparent governance, measurable sustainability, and a proven delivery engine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Explore services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-600 hover:text-brand-700"
              >
                Start an RFQ
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="card flex flex-col justify-between">
                <p className="text-sm text-slate-500">{metric.label}</p>
                <p className="mt-4 text-3xl font-semibold text-brand-700">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="badge">Capabilities</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Full-spectrum infrastructure delivery.</h2>
            </div>
            <p className="max-w-lg text-slate-600">
              From pre-construction feasibility to operations, our teams align stakeholders, de-risk delivery, and execute with precision.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="card space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                </div>
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

      <section className="section bg-slate-900 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="badge bg-white/10 text-white">Proof of delivery</p>
            <h2 className="text-3xl font-semibold">Programs built to scale.</h2>
            <p className="text-slate-300">
              We partner with public and private leaders to deliver infrastructure programs with best-in-class governance, safety, and digital reporting.
            </p>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
              View projects →
            </Link>
          </div>
          <div className="grid gap-4">
            {projects.map((project) => (
              <div key={project.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <span className="text-xs uppercase text-brand-200">{project.status}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="badge">Client trust</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Partners choose Hatima for transparency.</h2>
            <p className="mt-3 text-slate-600">
              Our governance model keeps stakeholders aligned with milestone dashboards, proactive risk management, and integrated ESG reporting.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.name} className="card">
                  <p className="text-sm text-slate-600">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card space-y-6">
            <div>
              <p className="badge">Live insights</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Infrastructure intelligence.</h3>
              <p className="mt-2 text-sm text-slate-600">
                Receive reports, playbooks, and market updates curated for infrastructure leaders.
              </p>
            </div>
            <div className="space-y-4">
              {insights.map((insight) => (
                <div key={insight.title} className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold uppercase text-brand-600">{insight.category}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{insight.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{insight.summary}</p>
                </div>
              ))}
            </div>
            <button className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
              Subscribe for updates
            </button>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-4">
            <p className="badge">Careers</p>
            <h2 className="text-3xl font-semibold text-slate-900">Join a mission-critical team.</h2>
            <p className="text-slate-600">
              Engineers, project leaders, analysts, and operators who thrive in complex, high-impact environments are welcome.
            </p>
            <Link href="/careers" className="text-sm font-semibold text-brand-600">
              View open roles →
            </Link>
          </div>
          <div className="grid gap-4">
            {careers.map((role) => (
              <div key={role.title} className="card">
                <p className="text-sm font-semibold text-slate-900">{role.title}</p>
                <p className="mt-1 text-xs text-slate-500">{role.location} · {role.type}</p>
                <p className="mt-2 text-sm text-slate-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
