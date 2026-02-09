import React from 'react'
import type { Project } from '../../data/projects'
import { Icon } from '../ui/Icon'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded-lg p-6 bg-white/60 dark:bg-slate-900/60">
      <header className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <div className="flex items-center gap-2">
          <a href={project.github} aria-label="GitHub" className="text-slate-500 hover:text-slate-700">
            <Icon name="Github" />
          </a>
          {project.demo && (
            <a href={project.demo} className="text-slate-500 hover:text-slate-700">
              Live
            </a>
          )}
        </div>
      </header>
      <p className="mt-3 text-slate-600">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>
        ))}
      </div>
    </article>
  )
}
