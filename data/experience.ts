export type Experience = {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | null
  isOngoing: boolean
  description: string
  bullets: string[]
}

export type Education = {
  id: string
  institution: string
  degree: string
  location: string
  startDate: string
  endDate: string | null
  isOngoing: boolean
  bullets?: string[]
}

const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    company: 'Edunet Foundation',
    position: 'AI/ML intern',
    location: 'Remote',
    startDate: 'May 2025',
    endDate: 'Jun 2025',
    isOngoing: false,
    description: 'Internship focused on AI and ML technologies',
    bullets: [
      'Completed a 4-week AICTE–Microsoft internship focused on AI, ML, and Azure Cloud',
      'Built a supervised ML model in Python for cricket match outcome prediction, including data preprocessing, feature selection, and model evaluation',
      'Processed user ratings and preferences to handle ambiguity and improve recommendation relevance'
    ]
  }
]

const EDUCATION: Education[] = [
  {
    id: 'edu-1',
    institution: 'Amrita Vishwa Vidyapeetham',
    degree: 'B.tech, Electrical and Computer Engineering',
    location: 'Coimbatore',
    startDate: 'Jul 2023',
    endDate: null,
    isOngoing: true,
    bullets: [
      'Pre-final year B.Tech student in Electrical and Computer Engineering with a strong focus on core electrical concepts, machine learning, data analysis, programming, and applied problem-solving through coursework and hands-on projects'
    ]
  },
  {
    id: 'edu-2',
    institution: 'Delhi Public School, Ruby Park',
    degree: 'Senior Secondary Schooling',
    location: 'Kolkata',
    startDate: 'Feb 2009',
    endDate: 'Mar 2023',
    isOngoing: false,
    bullets: [
      'Completed senior secondary education with a strong foundation in mathematics, science, and computer science',
      'Actively participated in academic and extracurricular activities, developing discipline, problem-solving skills, and a consistent learning mindset'
    ]
  }
]

export function getExperience() {
  return EXPERIENCE
}

export function getEducation() {
  return EDUCATION
}

export default { experience: EXPERIENCE, education: EDUCATION }
