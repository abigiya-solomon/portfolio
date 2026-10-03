import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { profile } from '../data/profile'
import { Button } from '../components/Button'
import { SocialLinks } from '../components/SocialLinks'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-warm" aria-hidden />Open to opportunities and collaborations
          </p>
          <p className="mt-8 text-muted">{profile.name}</p>
          <h1 id="hero-title" className="mt-2 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">{profile.role}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="ghost">Let&apos;s Connect</Button>
            {profile.resume && <Button href={profile.resume} variant="ghost" external><Download size={16} aria-hidden />CV</Button>}
          </div>
          <SocialLinks className="mt-8" />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
            {profile.photo
              ? <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
              : <div className="flex h-full flex-col items-center justify-center gap-2 text-muted"><span className="font-display text-6xl font-semibold text-accent-dark">AS</span><span className="px-6 text-center font-mono text-xs">Add your photo in src/data/profile.ts</span></div>}
          </div>
          <pre aria-hidden className="absolute -bottom-6 -left-4 rounded-lg border border-line bg-bg/95 p-4 font-mono text-xs leading-relaxed text-muted sm:-left-8">
{`const me = {
  role: `}<span className="text-accent-soft">&quot;Software Engineer&quot;</span>{`,
  frontend: `}<span className="text-accent-soft">&quot;React, TypeScript&quot;</span>{`,
  exploring: [`}<span className="text-warm">&quot;AI&quot;</span>, <span className="text-warm">&quot;Data Science&quot;</span>{`],
}`}</pre>
        </motion.div>
      </div>
    </section>
  )
}
