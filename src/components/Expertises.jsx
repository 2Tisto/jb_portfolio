import { Code2, Lock, Network, Server } from 'lucide-react';
import { skills } from '../data/site';
import { Pill, Section } from './Section';

const icons = [Server, Lock, Network, Code2];

export default function Expertises() {
  return (
    <Section
      id="competences"
      kicker="Compétences"
      title="Ce que je construis au quotidien."
      intro="Un socle backend, des bases réseau, et la sécurité comme réflexe — pas comme décoration."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill, i) => {
          const Icon = icons[i % icons.length];
          return (
            <article key={skill.name} className="glass lift rounded-[1.75rem] p-6 md:p-7">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-accent/15 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-white">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{skill.hint}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
