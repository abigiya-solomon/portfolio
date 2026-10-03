import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { skillGroups } from '../data/skills'
import type { SkillLevel } from '../types'

const marker: Record<SkillLevel, string> = { core: 'bg-accent', working: 'bg-accent/50', exploring: 'border border-warm bg-transparent' }
const legend: [SkillLevel, string][] = [['core', 'Use regularly'], ['working', 'Comfortable'], ['exploring', 'Learning']]

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Grouped by area, with an honest note on where I am with each." tone="surface">
      <ul className="mb-8 flex flex-wrap gap-5 text-sm text-muted" aria-label="Legend">
        {legend.map(([l, t]) => <li key={l} className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${marker[l]}`} aria-hidden />{t}</li>)}
      </ul>
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 0.06}>
            <h3 className="mb-3 border-b border-line pb-2 font-display text-lg font-semibold">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s.name} className="flex items-center gap-2 rounded-md border border-line bg-bg px-3 py-1.5 text-sm">
                  <span className={`h-2 w-2 rounded-full ${marker[s.level]}`} aria-hidden />{s.name}<span className="sr-only"> ({s.level})</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
