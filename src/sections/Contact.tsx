import { useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SocialLinks } from '../components/SocialLinks'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'

function getEndpoint(): string | null {
  const ep = profile.formEndpoint?.trim()
  if (ep) {
    if (ep.startsWith('http://') || ep.startsWith('https://')) return ep
    if (ep.includes('@')) return `https://formsubmit.co/ajax/${ep}`
    return ep
  }
  if (profile.email?.trim()) {
    return `https://formsubmit.co/ajax/${profile.email.trim()}`
  }
  return null
}

const field = 'mt-1.5 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-ink placeholder:text-muted/60 focus:border-accent'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [lastSubmission, setLastSubmission] = useState<{ name: string; email: string; message: string } | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') as string || '').trim()
    const email = (formData.get('email') as string || '').trim()
    const message = (formData.get('message') as string || '').trim()

    if (!name || !email || !message) return

    setLastSubmission({ name, email, message })
    const endpoint = getEndpoint()

    if (endpoint) {
      setStatus('sending')
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `New portfolio message from ${name}`,
            _captcha: 'false',
            _template: 'table',
          }),
        })

        const data = await res.json().catch(() => null)
        if (!res.ok || (data && data.success === 'false')) {
          throw new Error((data && data.message) || `Error ${res.status}`)
        }

        form.reset()
        setStatus('sent')
      } catch (err) {
        console.error('Contact form submission error:', err)
        setStatus('error')
      }
    } else if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(`${message}\n\n${name} (${email})`)}`
    } else {
      setStatus('unconfigured')
    }
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
            <label className="block text-sm">
              <span>Name</span>
              <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
            </label>
            <label className="block text-sm">
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" placeholder="your.email@example.com" className={field} />
            </label>
            <label className="block text-sm">
              <span>Message</span>
              <textarea name="message" required rows={5} placeholder="What would you like to discuss?" className={field} />
            </label>
            <Button type="submit" disabled={status === 'sending'}>
              <Send size={16} aria-hidden />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>

            {status === 'sent' && (
              <div role="status" aria-live="polite" className="flex items-start gap-3 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm text-ink">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-soft" />
                <div>
                  <p className="font-medium text-ink">Message sent successfully!</p>
                  <p className="mt-0.5 text-xs text-muted">Thank you for reaching out. I will get back to you as soon as possible.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div role="alert" className="flex items-start gap-3 rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-ink">
                <AlertCircle size={18} className="mt-0.5 shrink-0 text-rose-400" />
                <div className="space-y-1">
                  <p className="font-medium text-rose-400">The message could not be sent automatically.</p>
                  {profile.email && lastSubmission && (
                    <p className="text-xs text-muted">
                      You can send it directly via email:{' '}
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(`Message from ${lastSubmission.name}`)}&body=${encodeURIComponent(`${lastSubmission.message}\n\nFrom: ${lastSubmission.name} (${lastSubmission.email})`)}`}
                        className="font-medium text-accent-soft underline hover:text-ink"
                      >
                        Click here to open your email client
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}

            {status === 'unconfigured' && (
              <p role="status" aria-live="polite" className="text-sm text-muted">
                This form is not connected yet. Set formEndpoint or email in src/data/profile.ts.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
