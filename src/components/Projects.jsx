import { nextSteps, projects } from '../data/site';
import { Pill, Section } from './Section';

export default function Projects() {
  return (
    <Section
      id="projets"
      kicker="Projets"
      title="Des réalisations concrètes."
      intro="Trois projets pour comprendre le trafic, protéger l’accès, et chercher les failles avant qu’elles ne le soient."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="glass lift flex flex-col rounded-[1.75rem] p-6 md:p-7">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent">{project.id}</span>
            <h3 className="font-display mt-3 text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="glass mt-10 rounded-[1.75rem] p-6 md:p-8">
        <h3 className="font-display text-xl font-bold text-white">Ce que je construis ensuite</h3>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">
          {nextSteps.map((item) => (
            <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-relaxed text-slate-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
