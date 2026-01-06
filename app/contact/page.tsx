export default function ContactPage() {
  return (
    <div>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="badge">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">Start a conversation with Hatima.</h1>
            <p className="mt-4 text-lg text-slate-600">
              Share your project needs, timelines, or RFQ requirements. Our team will respond within one business day.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>Business inquiries: hello@hatima.sa</p>
              <p>RFQ support: rfq@hatima.sa</p>
              <p>Phone: +966 11 123 4567</p>
            </div>
          </div>
          <div className="card">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">Full name</label>
                <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Work email</label>
                <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="you@company.com" type="email" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Company</label>
                <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Organization" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Project summary</label>
                <textarea className="mt-2 h-28 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm" placeholder="Tell us about the project" />
              </div>
              <button className="w-full rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white">
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
