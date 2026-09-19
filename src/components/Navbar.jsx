import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, site } from '../data/site';

export default function Navbar({ activeId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <a
        href="#accueil"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Aller au contenu
      </a>

      <nav
        aria-label="Navigation principale"
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 pl-5 shadow-lg shadow-black/20 transition ${
          scrolled || open ? 'border-white/10 bg-[#070a12]/80 backdrop-blur-xl' : 'border-white/10 bg-white/[0.04] backdrop-blur-md'
        }`}
      >
        <a href="#accueil" className="font-display text-sm font-bold tracking-tight text-white">
          {site.brand.split('.')[0]}
          <span className="text-accent">.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const current = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                  current ? 'bg-white text-ink' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Me contacter
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-[#070a12]/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
