export type ProjectKind = 'platform' | 'inventory' | 'data' | 'camp'
export interface Screenshot { src: string; alt: string; caption?: string }
export interface Project {
  id: string; title: string; kind: ProjectKind; badge: string; summary: string; tech: string[]
  github?: string; live?: string
  overview: string; problem: string; solution: string; features: string[]; contribution: string; challenges: string[]
  screenshots?: Screenshot[]
}
export type SkillLevel = 'core' | 'working' | 'exploring'
export interface Skill { name: string; level: SkillLevel }
export interface SkillGroup { title: string; items: Skill[] }
export interface TimelineItem { title: string; org: string; description: string; tags?: string[] }
