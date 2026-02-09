export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Portfolio Boilerplate',
    description: 'A scalable, production-ready portfolio scaffold built with Next.js, TypeScript and Tailwind.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/CoderAnush/ANUSH-PORTFOLIO',
    demo: '#'
  }
]

export function getProjects() {
  return PROJECTS
}

export default PROJECTS
