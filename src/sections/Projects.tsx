import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Section } from '../components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { projects } from '../data/projects'
import type { Project } from '../types'

const n = projects.length
const arrow = 'inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-accent'

// Shortest circular distance from the focused card: -1 = left, 0 = focus, 1 = right.
const offsetOf = (i: number, index: number) => {
  const raw = (i - index + n) % n
  return raw > n / 2 ? raw - n : raw
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const touchX = useRef<number | null>(null)
  const prevOffsets = useRef<number[] | null>(null)

  const go = (step: number) => setIndex((i) => (i + step + n) % n)
  const offsets = projects.map((_, i) => offsetOf(i, index))
  useEffect(() => { prevOffsets.current = offsets })

  return (
    <Section id="projects" title="Featured projects" intro="Systems I've built and experiences that shaped my direction. Open any of them for the full story.">
      <div
        role="region" aria-roledescription="carousel" aria-label="Featured projects"
        className="[--card-w:min(76vw,532px)] [--gap:1rem] md:[--gap:1.5rem]"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        <div className="grid overflow-hidden py-2">
          {projects.map((p, i) => {
            const off = offsets[i]
            const active = off === 0
            const hidden = Math.abs(off) > 1
            // A card that wraps around the loop jumps to its new spot without flying across the screen.
            const jumped = prevOffsets.current !== null && Math.abs(off - prevOffsets.current[i]) > 1
            const transition = reduceMotion ? 'none'
              : jumped ? (hidden ? 'none' : 'opacity .5s')
              : 'transform .5s ease, opacity .5s, filter .5s'
            return (
              <div
                key={p.id}
                aria-hidden={!active}
                inert={!active}
                className="relative col-start-1 row-start-1 w-[var(--card-w)] justify-self-center"
                style={{
                  transform: `translateX(calc(${off} * (var(--card-w) + var(--gap)))) scale(${active ? 1 : 0.94})`,
                  opacity: active ? 1 : hidden ? 0 : 0.5,
                  filter: active ? 'none' : 'blur(3px)',
                  transition,
                  pointerEvents: hidden ? 'none' : undefined,
                  zIndex: active ? 2 : 1,
                }}
              >
                <ProjectCard project={p} onOpen={setSelected} />
                {!active && !hidden && (
                  <button onClick={() => setIndex(i)} aria-label={`Show project: ${p.title}`}
                    className="absolute inset-0 z-10 cursor-pointer rounded-xl" />
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button className={arrow} onClick={() => go(-1)} aria-label="Previous project"><ChevronLeft size={20} /></button>
          <p aria-live="polite" className="min-w-16 text-center text-sm text-muted">{index + 1} of {n}</p>
          <button className={arrow} onClick={() => go(1)} aria-label="Next project"><ChevronRight size={20} /></button>
        </div>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </Section>
  )
}