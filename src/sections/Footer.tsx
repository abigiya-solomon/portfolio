import { profile } from '../data/profile'
import { SocialLinks } from '../components/SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8">
        <div><p className="font-display font-semibold">{profile.handle}</p><p className="text-sm text-muted">{profile.role}</p></div>
        <SocialLinks />
        <p className="text-sm text-muted">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
