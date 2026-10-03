import { GraduationCap } from 'lucide-react'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { education } from '../data/journey'

export function Education() {
  return (
    <Section id="education" title="Education" tone="surface">
      <Reveal className="flex max-w-xl items-start gap-4 rounded-xl border border-line bg-bg p-6">
        <GraduationCap className="mt-1 text-accent" aria-hidden />
        <div><h3 className="font-display text-xl font-semibold">{education.school}</h3><p className="text-muted">{education.degree}</p></div>
      </Reveal>
    </Section>
  )
}
