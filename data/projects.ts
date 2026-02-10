export type Project = {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  github?: string
  demo?: string
  category: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Movie Recommendation System',
    description: 'A hybrid recommendation system combining fuzzy logic-based decision rules with an Artificial Neural Network for personalized movie suggestions',
    longDescription: 'Developed a hybrid recommendation system combining fuzzy logic-based decision rules with an Artificial Neural Network for personalized movie suggestions. Processed user ratings and preferences to handle ambiguity and improve recommendation relevance.',
    tags: ['Python', 'TensorFlow', 'Fuzzy Logic', 'ANN', 'Machine Learning'],
    github: 'https://github.com/CoderAnush',
    category: 'AI/ML',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Live Sign Language Transcription System',
    description: 'A real-time ASL transcription system using a hybrid RNN-LSTM model trained on a large gesture dataset',
    longDescription: 'Implemented a real-time ASL transcription system leveraging deep learning techniques. Used hybrid RNN-LSTM model trained on a large gesture dataset.',
    tags: ['Python', 'LSTM', 'RNN', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/CoderAnush',
    category: 'AI/ML',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Cricket Match Winner Predictor',
    description: 'Predictive model for cricket match outcomes using historical ball-by-ball data and feature engineering',
    longDescription: 'Designed a supervised machine learning model for cricket match outcome prediction using historical ball-by-ball data, including feature engineering and model evaluation.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Machine Learning'],
    github: 'https://github.com/CoderAnush',
    category: 'AI/ML',
    featured: true
  },
  {
    id: 'project-4',
    title: 'ANUSH-PORTFOLIO',
    description: 'A scalable, production-ready portfolio scaffold built with Next.js, TypeScript and Tailwind with dark theme and 3D visuals',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Three.js', 'Framer Motion'],
    github: 'https://github.com/CoderAnush/ANUSH-PORTFOLIO',
    demo: '#',
    category: 'Frontend',
    featured: false
  }
]

export function getProjects() {
  return PROJECTS
}

export function getFeaturedProjects() {
  return PROJECTS.filter(p => p.featured)
}

export function getProjectsByCategory(category: string) {
  return PROJECTS.filter(p => p.category === category)
}

export default PROJECTS
