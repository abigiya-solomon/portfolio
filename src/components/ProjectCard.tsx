import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import type { Project } from '../types'
import { GithubIcon } from './BrandIcons'
import { ProjectVisual } from './ProjectVisual'

const link = 'relative z-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink'
export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const cover = project.screenshots?.[0]
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent/60">
      <div className="h-44 overflow-hidden border-b border-line bg-bg/60">
        {cover ? (
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full p-4 text-accent"><ProjectVisual kind={project.kind} /></div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs text-accent-soft">{project.badge}</p>
        <h3 className="font-display text-xl font-semibold leading-snug">
          <button onClick={() => onOpen(project)} className="text-left after:absolute after:inset-0 after:content-['']">{project.title}</button>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted">{t}</li>)}
        </ul>
        <div className="mt-auto flex items-center gap-4 pt-6">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-soft">View details <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
          {project.github && <a className={`${link} ml-auto`} href={project.github} target="_blank" rel="noreferrer"><GithubIcon />Code</a>}
          {project.live && <a className={link} href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden />Live demo</a>}
        </div>
      </div>
    </motion.article>
  )
}
