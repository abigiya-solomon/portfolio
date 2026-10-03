import { useEffect, useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import type { Project } from '../types'
import { Button } from './Button'
import { GithubIcon } from './BrandIcons'
import { ScreenshotGallery } from './ScreenshotGallery'

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-8"><h3 className="mb-2 font-display text-lg font-semibold">{title}</h3><div className="text-sm leading-relaxed text-muted">{children}</div></section>
)
const List = ({ items }: { items: string[] }) => <ul className="list-disc space-y-1 pl-5 marker:text-accent">{items.map((i) => <li key={i}>{i}</li>)}</ul>

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); prev?.focus() }
  }, [onClose])

  return (
    <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.25 }}
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-surface p-6 sm:rounded-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs text-accent-soft">{project.badge}</p><h2 id="modal-title" className="mt-1 font-display text-2xl font-semibold leading-tight">{project.title}</h2></div>
          <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="rounded-md border border-line p-2 text-muted hover:text-ink"><X size={18} /></button>
        </div>
        <Block title="Overview">{project.overview}</Block>
        {project.screenshots?.length ? (
          <Block title="Screenshots"><ScreenshotGallery shots={project.screenshots} /></Block>
        ) : null}
        <Block title="Problem">{project.problem}</Block>
        <Block title="Solution">{project.solution}</Block>
        <Block title="Key features"><List items={project.features} /></Block>
        <Block title="Technology stack"><ul className="flex flex-wrap gap-2">{project.tech.map((t) => <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-xs">{t}</li>)}</ul></Block>
        <Block title="My contribution">{project.contribution}</Block>
        <Block title="Challenges"><List items={project.challenges} /></Block>
        {(project.github || project.live) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && <Button href={project.github} external variant="ghost"><GithubIcon />View code</Button>}
            {project.live && <Button href={project.live} external><ExternalLink size={16} aria-hidden />Live demo</Button>}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
