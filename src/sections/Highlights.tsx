import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { highlights } from '../data/profile'

export function Highlights() {
  return (
    <Section id="highlights" title="Highlights">
      <ul className="grid gap-4 sm:grid-cols-2">
        {highlights.map((h, i) => (
          <li key={h}><Reveal delay={(i % 2) * 0.05} className="flex h-full gap-3 rounded-lg border border-line p-5 text-muted"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" aria-hidden />{h}</Reveal></li>
        ))}
      </ul>
    </Section>
  )
}
