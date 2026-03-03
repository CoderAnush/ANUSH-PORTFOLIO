'use client'
import type { Project } from '../../data/projects'
import { Github, ExternalLink, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }: { project: Project }) {
  const isOngoing = project.status === 'ongoing'

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative group h-full flex flex-col"
    >
      {/* Glow border layer */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-skyBlue/40 via-accent/20 to-skyBlue/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

      {/* Card content */}
      <div className="relative bg-[#0d1b2e] border border-[#1e3a5f] group-hover:border-skyBlue/60 rounded-xl p-6 flex flex-col h-full transition-all duration-300 backdrop-blur-sm">

        {/* Top row: title + status + links */}
        <header className="mb-4">
          <div className="flex items-start justify-between mb-3 gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-skyBlue transition-colors leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              {isOngoing && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-semibold rounded-full">
                  <Zap className="w-3 h-3" />
                  Live
                </span>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  className="text-gray hover:text-skyBlue transition-colors hover:scale-110 transform"
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
                  className="text-gray hover:text-skyBlue transition-colors hover:scale-110 transform"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Category badge */}
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-skyBlue/20 to-accent/10 border border-skyBlue/30 text-skyBlue text-xs font-semibold rounded-full tracking-wide uppercase">
            {project.category}
          </span>
        </header>

        {/* Description */}
        <p className="text-gray mb-4 leading-relaxed flex-grow text-sm">{project.description}</p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent mb-4" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-[#0a192f] text-gray border border-[#1e3a5f] rounded-full hover:border-skyBlue/50 hover:text-skyBlue/80 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs px-2.5 py-1 text-gray/60">+{project.tags.length - 4} more</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

