'use client'
import { motion } from 'framer-motion'
import { getSkillsByCategory } from '../data/skills'
import { Code2, Brain, Wrench } from 'lucide-react'

const categoryIcons: Record<string, any> = {
  'Languages': Code2,
  'AI/ML': Brain,
  'Tools': Wrench,
}

export default function Skills() {
  const skillsByCategory = getSkillsByCategory()

  return (
    <section id="skills" className="py-24 bg-navy">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Skills & Tech Stack
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, skills], catIndex) => {
            const Icon = categoryIcons[category] || Code2
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-charcoal p-8 rounded-lg border border-slate"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-skyBlue/10 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-skyBlue" />
                  </div>
                  <h3 className="text-2xl font-bold text-skyBlue">{category}</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-skyBlue text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (catIndex * 0.1) + (index * 0.05), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-skyBlue to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
