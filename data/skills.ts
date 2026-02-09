export type Skill = {
  id: string
  name: string
  level: number // 0-100
  category: string
}

const SKILLS: Skill[] = [
  { id: 's1', name: 'TypeScript', level: 90, category: 'Languages' },
  { id: 's2', name: 'React', level: 90, category: 'Frameworks' },
  { id: 's3', name: 'Next.js', level: 85, category: 'Frameworks' }
]

export function getSkills() {
  return SKILLS
}

export default SKILLS
