'use client'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '../data/projects'
import ProjectCard from '../components/cards/ProjectCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = getFeaturedProjects()

  return (
    <section id="projects" className="py-24 bg-navy">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray text-lg"
            >
              AI/ML projects with real-world impact
            </motion.p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-skyBlue hover:text-accent transition-colors font-semibold mt-4 md:mt-0"
          >
            View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
