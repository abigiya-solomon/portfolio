import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { interests } from '../data/profile'

export function About() {
  return (
    <Section id="about" title="A software engineer, getting closer to data" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="max-w-prose space-y-5 leading-relaxed text-muted">
          <p>I graduated in Software Engineering from Arba Minch University, and I have spent most of my time building frontend applications and the systems behind them.</p>
          <p>My interest in AI didn&apos;t start from a course list. It grew through practical exposure and project work, and seeing what happens when software can learn from data.</p>
          <p>I learn best by building real systems, and that is what I plan to keep doing, with deeper expertise in AI and Data Science as the next step.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="mb-4 font-display text-lg font-semibold">What I&apos;m interested in</h3>
          <ul className="divide-y divide-line border-y border-line">
            {interests.map((i) => <li key={i.title} className="py-4"><p className="font-medium">{i.title}</p><p className="text-sm text-muted">{i.note}</p></li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
