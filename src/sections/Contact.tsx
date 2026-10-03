import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { profile } from '../data/profile'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SocialLinks } from '../components/SocialLinks'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'
const messages: Record<Status, string> = {
  idle: '', sending: 'Sending…', sent: 'Message sent. Thank you!', error: 'The message could not be sent. Please try again later.',
  unconfigured: 'This form is not connected yet. Set formEndpoint or email in src/data/profile.ts.',
}
const field = 'mt-1.5 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-ink placeholder:text-muted/60 focus:border-accent'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    if (profile.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(profile.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        if (!res.ok) throw new Error(String(res.status))
        form.reset(); setStatus('sent')
      } catch { setStatus('error') }
    } else if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Message from ${data.name}`)}&body=${encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`)}`
    } else setStatus('unconfigured')
  }
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 id="contact-title" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s build something meaningful.</h2>
          <p className="mt-5 max-w-md text-muted">I&apos;m open to opportunities, collaborations, and conversations around software engineering, AI, and data.</p>
          {profile.email && <p className="mt-6"><a href={`mailto:${profile.email}`} className="text-lg text-accent-soft underline-offset-4 hover:underline">{profile.email}</a></p>}
          <SocialLinks className="mt-6" />
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-5">
            <label className="block text-sm">Name<input name="name" required autoComplete="name" className={field} /></label>
            <label className="block text-sm">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
            <label className="block text-sm">Message<textarea name="message" required rows={5} className={field} /></label>
            <Button type="submit" disabled={status === 'sending'}><Send size={16} aria-hidden />Send Message</Button>
            <p role="status" aria-live="polite" className="min-h-5 text-sm text-muted">{messages[status]}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
