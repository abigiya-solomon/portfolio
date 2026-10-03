import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props { id: string; title: string; intro?: string; children: ReactNode; tone?: 'base' | 'surface' }
export function Section({ id, title, intro, children, tone = 'base' }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${tone === 'surface' ? 'bg-surface' : ''}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <h2 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
