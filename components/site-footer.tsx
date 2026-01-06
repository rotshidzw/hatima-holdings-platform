import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-brand-700">Hatima Holdings</p>
          <p className="mt-3 text-sm text-slate-600">
            Infrastructure, energy, and industrial delivery with transparency and measurable impact.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Capabilities</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Energy & Power</li>
            <li>Industrial Construction</li>
            <li>Water Systems</li>
            <li>Digital Infrastructure</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Headquarters</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>King Abdullah Financial District</li>
            <li>Riyadh, Saudi Arabia</li>
            <li>+966 11 123 4567</li>
            <li>hello@hatima.sa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6">
        <div className="container flex flex-col items-start justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <span>© 2024 Hatima Holdings. All rights reserved.</span>
          <span>Built for resilient, sustainable infrastructure.</span>
        </div>
      </div>
    </footer>
  );
}
