import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { site } from '../data/site';
import { Section } from './Section';

export default function Contact() {
  const [hint, setHint] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = encodeURIComponent(`De : ${name}\n\n${message}`);
    const topic = encodeURIComponent(subject || `Contact portfolio — ${name}`);
    window.location.href = `mailto:${site.email}?subject=${topic}&body=${body}`;
    setHint(true);
  }

  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Parlons d’un stage, d’un projet, d’une idée."
      intro="Une question ou une opportunité ? Le formulaire ouvre votre client mail — rien n’est stocké ici."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          <a
            href={`mailto:${site.email}`}
            className="glass lift flex items-center gap-3 rounded-3xl px-5 py-4"
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent/15 text-accent">
              <Mail size={18} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">Email</span>
              <span className="break-all text-sm text-white">{site.email}</span>
            </span>
          </a>
          {site.github ? (
            <a href={site.github} className="glass lift flex items-center gap-3 rounded-3xl px-5 py-4">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent/15 text-sm font-bold text-accent">
                GH
              </span>
              <span className="text-sm text-white">GitHub</span>
            </a>
          ) : null}
          {site.linkedin ? (
            <a href={site.linkedin} className="glass lift flex items-center gap-3 rounded-3xl px-5 py-4">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent/15 text-sm font-bold text-accent">
                in
              </span>
              <span className="text-sm text-white">LinkedIn</span>
            </a>
          ) : null}
        </div>

        <form onSubmit={onSubmit} className="glass rounded-[1.75rem] p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Nom</span>
              <input
                required
                name="name"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-accent/50"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Sujet</span>
              <input
                required
                name="subject"
                defaultValue="Stage backend / cybersécurité"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-accent/50"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full resize-y rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-accent/50"
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Envoyer le message
            <Send size={15} />
          </button>
          {hint ? (
            <p className="mt-3 text-xs text-slate-500">Si rien ne s&apos;ouvre, écrivez directement à {site.email}.</p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
