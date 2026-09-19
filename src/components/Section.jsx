export function Section({ id, kicker, title, intro, children }) {
  return (
    <section id={id} className="relative scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{kicker}</p>
        ) : null}
        {title ? (
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h2>
        ) : null}
        {intro ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{intro}</p> : null}
        <div className={title || intro ? 'mt-10 md:mt-14' : ''}>{children}</div>
      </div>
    </section>
  );
}

export function Pill({ children, className = '' }) {
  return (
    <span className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 ${className}`}>
      {children}
    </span>
  );
}
