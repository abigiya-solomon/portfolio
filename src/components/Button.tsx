import type { ReactNode } from 'react'

interface Props { href?: string; onClick?: () => void; variant?: 'primary' | 'ghost'; external?: boolean; children: ReactNode; className?: string; type?: 'button' | 'submit'; disabled?: boolean }
export function Button({ href, onClick, variant = 'primary', external, children, className = '', type = 'button', disabled }: Props) {
  const style = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-60 ${
    variant === 'primary' ? 'bg-accent text-bg hover:bg-accent-soft' : 'border border-line text-ink hover:border-accent'} ${className}`
  return href
    ? <a href={href} className={style} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}</a>
    : <button type={type} onClick={onClick} disabled={disabled} className={style}>{children}</button>
}
