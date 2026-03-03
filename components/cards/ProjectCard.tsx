import type { Project } from '../../data/projects'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-charcoal border border-slate hover:border-skyBlue rounded-lg p-6 transition-all group h-full flex flex-col">
      <header className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-skyBlue transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="text-gray hover:text-skyBlue transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="text-gray hover:text-skyBlue transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <span className="inline-block px-3 py-1 bg-skyBlue/10 text-skyBlue text-sm font-semibold rounded-full">
          {project.category}
        </span>
      </header>

      <p className="text-gray mb-4 leading-relaxed flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-navy text-gray border border-slate rounded-full"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-xs px-3 py-1 text-gray">+{project.tags.length - 4} more</span>
        )}
      </div>
    </article>
  )
}
