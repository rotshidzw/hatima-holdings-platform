import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <p className="badge">Projects</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Signature programs across critical sectors.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Each program is delivered with integrated governance, safety leadership, and transparent reporting for stakeholders.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.name} className="card">
                <p className="text-xs uppercase text-brand-600">{project.sector}</p>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">{project.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
                <p className="mt-4 text-xs text-slate-500">Status: {project.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
