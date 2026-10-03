import { useState } from 'react'
import type { Screenshot } from '../types'

export function ScreenshotGallery({ shots }: { shots: Screenshot[] }) {
  const [index, setIndex] = useState(0)
  const current = shots[index]
  return (
    <figure>
      <a href={current.src} target="_blank" rel="noreferrer"
        aria-label={`Open screenshot full size: ${current.alt}`}
        className="block overflow-hidden rounded-lg border border-line bg-bg">
        <img key={current.src} src={current.src} alt={current.alt} loading="lazy"
          className="aspect-[16/10] w-full object-contain" />
      </a>
      {current.caption && <figcaption className="mt-2 text-xs text-muted">{current.caption}</figcaption>}
      {shots.length > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {shots.map((s, n) => (
            <li key={s.src} className="shrink-0">
              <button onClick={() => setIndex(n)} aria-pressed={n === index}
                aria-label={`Show screenshot ${n + 1} of ${shots.length}`}
                className={`block overflow-hidden rounded-md border transition-opacity ${n === index ? 'border-accent' : 'border-line opacity-70 hover:opacity-100'}`}>
                <img src={s.src} alt="" className="h-14 w-24 object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </figure>
  )
}