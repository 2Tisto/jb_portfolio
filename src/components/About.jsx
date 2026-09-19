import { about, facts } from '../data/site';
import { Section } from './Section';

export default function About() {
  return (
    <Section
      id="apropos"
      kicker="À propos"
      title="Un profil backend, un œil sécurité."
      intro={about.lead}
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-base leading-relaxed text-slate-400 md:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {facts.map((fact) => (
            <div key={fact.label} className="glass rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{fact.label}</p>
              <p className="mt-2 font-display text-lg font-semibold text-white">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
