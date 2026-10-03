import type { SkillGroup } from '../types'
// level: 'core' = use regularly · 'working' = comfortable · 'exploring' = actively learning. Adjust honestly.
export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: [
    { name: 'HTML', level: 'core' }, { name: 'CSS', level: 'core' }, { name: 'JavaScript', level: 'core' }, { name: 'TypeScript', level: 'core' },
    { name: 'React', level: 'core' }, { name: 'Vite', level: 'core' }, { name: 'Tailwind CSS', level: 'core' }, { name: 'Ant Design', level: 'working' } ] },
  { title: 'Backend', items: [
    { name: 'Node.js', level: 'working' }, { name: 'Express', level: 'working' }, { name: 'REST APIs', level: 'working' } ] },
  { title: 'AI / Data', items: [
    { name: 'Python', level: 'working' }, { name: 'Pandas', level: 'working' }, { name: 'Scikit-learn', level: 'working' },
    { name: 'Machine Learning', level: 'exploring' }] },
  { title: 'Databases', items: [{ name: 'PostgreSQL', level: 'working' }, { name: 'MySQL', level: 'working' }] },
  { title: 'Tools', items: [{ name: 'Git', level: 'core' }, { name: 'GitHub', level: 'core' }, { name: 'Linux', level: 'working' }] },
]
