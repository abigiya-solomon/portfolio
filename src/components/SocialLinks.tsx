import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const cls = 'inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-ink'

export function SocialLinks({ className = '' }: { className?: string }) {
  const { github, linkedin } = profile.socials
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {github && <a className={cls} href={github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a>}
      {linkedin && <a className={cls} href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /></a>}
      {profile.email && <a className={cls} href={`mailto:${profile.email}`} aria-label="Send an email"><Mail size={20} aria-hidden /></a>}
    </div>
  )
}
