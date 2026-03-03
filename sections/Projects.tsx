'use client'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '../data/projects'
import ProjectCard from '../components/cards/ProjectCard'
import { ArrowRight, Layers } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = getFeaturedProjects()

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050e1d] to-transparent pointer-events-none" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050e1d] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-skyBlue text-sm font-semibold tracking-widest uppercase mb-3"
            >
              <Layers className="w-4 h-4" />
              What I&apos;ve Built
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-2 neon-underline"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray text-lg mt-4"
            >
              AI/ML projects with real-world impact
            </motion.p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-skyBlue hover:text-accent transition-colors font-semibold mt-6 md:mt-0 border border-skyBlue/30 hover:border-skyBlue/60 px-5 py-2.5 rounded-full hover:bg-skyBlue/5 transition-all"
          >
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

