'use client'
import { motion } from 'framer-motion'
import { getExperience } from '../data/experience'
import ExperienceCard from '../components/cards/ExperienceCard'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const experiences = getExperience()

  return (
    <section id="experience" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Experience & Internships
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-skyBlue/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-skyBlue rounded-full border-4 border-charcoal hidden md:block" />
                
                <div className="md:ml-20">
                  <ExperienceCard experience={exp} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
