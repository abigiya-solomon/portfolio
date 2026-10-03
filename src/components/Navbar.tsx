import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { SocialLinks } from './SocialLinks'

const ids = nav.map((n) => n.id)
export function Navbar() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold"><span className="ml-2 hidden font-sans text-sm font-normal text-muted sm:inline">{profile.name}</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${active === n.id ? 'text-ink' : 'text-muted hover:text-ink'}`}>{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <SocialLinks className="hidden md:flex" />
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line md:hidden" aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-bg md:hidden">
            <ul className="px-5 py-3">
              {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-lg text-muted hover:text-ink">{n.label}</a></li>)}
            </ul>
            <SocialLinks className="px-5 pb-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
