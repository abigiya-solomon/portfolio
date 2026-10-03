import type { ProjectKind } from '../types'

const dots = Array.from({ length: 28 }, (_, i) => ({ x: 30 + (i % 7) * 42 + ((i * 13) % 11), y: 36 + Math.floor(i / 7) * 34 + ((i * 7) % 13), flag: i === 5 || i === 17 || i === 22 }))
const nodes = [[60, 85], [160, 35], [160, 135], [260, 85]]
export function ProjectVisual({ kind }: { kind: ProjectKind }) {
  return (
    <svg viewBox="0 0 320 170" className="h-full w-full" role="img" aria-label={`Abstract ${kind} illustration`} fill="none" stroke="currentColor">
      {kind === 'platform' && <g strokeWidth="1.5">
        {nodes.map(([x, y]) => <line key={`l${x}${y}`} x1="160" y1="85" x2={x} y2={y} className="text-accent-dark" />)}
        <circle cx="160" cy="85" r="18" className="text-accent-soft" fill="#0B0F14" />
        {nodes.map(([x, y]) => <circle key={`c${x}${y}`} cx={x} cy={y} r="10" fill="#0B0F14" />)}</g>}
      {kind === 'inventory' && <g strokeWidth="1.5">
        {[0, 1, 2, 3].map((i) => <g key={i}><rect x="30" y={28 + i * 32} width="260" height="22" rx="4" stroke="rgba(255,255,255,.12)" />
          <rect x="30" y={28 + i * 32} width={[190, 130, 220, 90][i]} height="22" rx="4" fill="rgba(58,134,184,.28)" /></g>)}
        <circle cx="270" cy="39" r="4" fill="#F4B942" stroke="none" /></g>}
      {kind === 'data' && <g>
        <path d="M30 140 H290 M30 140 V25" stroke="rgba(255,255,255,.2)" />
        {dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={d.flag ? 5 : 3} fill={d.flag ? '#F4B942' : '#3A86B8'} stroke="none" opacity={d.flag ? 1 : 0.7} />)}</g>}
      {kind === 'camp' && <g strokeWidth="1.5" className="text-accent-dark">
        {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M30 ${40 + i * 24} C110 ${20 + i * 24}, 210 ${70 + i * 18}, 290 ${40 + i * 20}`} />)}
        {[60, 130, 200, 260].map((x, i) => <circle key={x} cx={x} cy={55 + i * 12} r="5" fill="#3A86B8" stroke="none" />)}</g>}
    </svg>
  )
}
