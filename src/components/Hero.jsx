import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { site } from '../data/site';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <div className="pointer-events-none absolute inset-0 dots opacity-40" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 px-5 pb-16 md:grid-cols-2 md:px-8 lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {site.availability}
          </div>

          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {site.firstName}
            <br />
            {site.lastName}
          </h1>

          <p className="mt-6 text-lg text-slate-300 sm:text-xl">
            Je m&apos;intéresse à{' '}
            <Typewriter words={site.roles} className="font-semibold text-accent" />
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            Étudiant en informatique, je construis du backend et j&apos;apprends à le sécuriser. Curieux, orienté
            pratique, prêt pour un stage en 2026.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
            >
              Voir mes projets
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30"
            >
              <Mail size={16} />
              Me contacter
            </a>
            {site.cv ? (
              <a href={site.cv} className="inline-flex items-center gap-2 px-2 text-sm text-slate-400 hover:text-white">
                <Download size={16} />
                Télécharger mon CV
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent-2/25 blur-3xl" />

          <div className="glass lift relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#142033] via-[#0c1524] to-[#071018]">
              {site.portrait ? (
                <img src={site.portrait} alt={site.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center">
                  <span className="font-display text-7xl font-extrabold text-white/90">{site.short}</span>
                  <span className="mt-3 text-sm tracking-[0.25em] text-slate-400 uppercase">Portfolio</span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
            <div className="absolute left-6 top-8 rounded-full border border-white/10 bg-[#070a12]/80 px-3 py-1.5 text-xs text-white backdrop-blur">
              Backend · Cybersécurité
            </div>
            <div className="absolute bottom-8 right-6 rounded-full border border-white/10 bg-[#070a12]/80 px-3 py-1.5 text-xs text-white backdrop-blur">
              Stage 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
