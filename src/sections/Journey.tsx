import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { progression, timeline } from '../data/journey'

export function Journey() {
  return (
    <Section id="journey" title="Journey">
      <Reveal>
        <ol className="mb-12 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-3" aria-label="Progression">
          {progression.map((p, i) => (
            <li key={p} className="flex items-center gap-3">
              <span className={`rounded-full border px-4 py-1.5 ${i === progression.length - 1 ? 'border-warm text-ink' : 'border-line text-muted'}`}>{p}</span>
              {i < progression.length - 1 && <span aria-hidden className="hidden h-px w-8 bg-accent-dark sm:block" />}
            </li>
          ))}
        </ol>
      </Reveal>
      <ol className="ml-2 space-y-10 border-l border-line pl-8">
        {timeline.map((t, i) => (
          <li key={t.title} className="relative">
            <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" aria-hidden />
            <Reveal delay={i * 0.05}>
              <h3 className="font-display text-xl font-semibold">{t.title}</h3>
              <p className="text-sm text-accent-soft">{t.org}</p>
              <p className="mt-2 max-w-xl text-muted">{t.description}</p>
              {t.tags && <ul className="mt-3 flex gap-2">{t.tags.map((x) => <li key={x} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted">{x}</li>)}</ul>}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
