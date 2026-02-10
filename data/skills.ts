export type Skill = {
  id: string
  name: string
  level: number // 0-100
  category: string
}

const SKILLS: Skill[] = [
  // Languages
  { id: 's1', name: 'C/C++', level: 85, category: 'Languages' },
  { id: 's2', name: 'Python', level: 90, category: 'Languages' },
  { id: 's3', name: 'JavaScript', level: 80, category: 'Languages' },
  { id: 's4', name: 'HTML', level: 85, category: 'Languages' },
  { id: 's5', name: 'CSS', level: 85, category: 'Languages' },
  { id: 's6', name: 'SQL', level: 75, category: 'Languages' },
  
  // AI/ML & Data Science
  { id: 's7', name: 'TensorFlow', level: 85, category: 'AI/ML' },
  { id: 's8', name: 'Keras', level: 85, category: 'AI/ML' },
  { id: 's9', name: 'scikit-learn', level: 90, category: 'AI/ML' },
  { id: 's10', name: 'NumPy', level: 90, category: 'AI/ML' },
  { id: 's11', name: 'Pandas', level: 90, category: 'AI/ML' },
  { id: 's12', name: 'Matplotlib', level: 85, category: 'AI/ML' },
  { id: 's13', name: 'OpenCV', level: 80, category: 'AI/ML' },
  
  // Tools & Platforms
  { id: 's14', name: 'Git', level: 85, category: 'Tools' },
  { id: 's15', name: 'GitHub', level: 85, category: 'Tools' },
  { id: 's16', name: 'VS Code', level: 90, category: 'Tools' },
  { id: 's17', name: 'Jupyter Notebook', level: 90, category: 'Tools' },
  { id: 's18', name: 'Canva', level: 75, category: 'Tools' },
  { id: 's19', name: 'Figma', level: 70, category: 'Tools' },
  { id: 's20', name: 'FastAPI', level: 75, category: 'Tools' },
]

export function getSkills() {
  return SKILLS
}

export function getSkillsByCategory() {
  const categories: Record<string, Skill[]> = {}
  SKILLS.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = []
    }
    categories[skill.category].push(skill)
  })
  return categories
}

export default SKILLS
