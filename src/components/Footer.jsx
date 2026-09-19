import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 text-sm text-slate-500 md:flex-row md:items-center md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-slate-600">Backend · Cybersécurité · Stage 2026</p>
      </div>
    </footer>
  );
}
