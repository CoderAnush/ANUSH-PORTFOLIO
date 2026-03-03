'use client'
import { motion } from 'framer-motion'
import { Award, Trophy, BookOpen, Target } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'AICTE-Microsoft AI/ML Internship',
    organization: 'Edunet Foundation',
    date: 'May - Jun 2025',
    description: 'Completed 4-week intensive AI/ML internship program focused on machine learning and data science applications.',
  },
  {
    icon: BookOpen,
    title: 'B.Tech in Electronics & Communication',
    organization: 'Amrita Vishwa Vidyapeetham',
    date: '2023 - Present',
    description: 'Pre-final year student specializing in AI/ML applications with strong academic performance.',
  },
  {
    icon: Target,
    title: 'AI/ML Project Portfolio',
    organization: 'Self-Learning',
    date: '2024 - Present',
    description: 'Built multiple production-ready AI/ML projects including recommendation systems, computer vision, and predictive analytics.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-navy">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-charcoal p-6 rounded-lg border border-slate hover:border-skyBlue transition-all group"
              >
                <div className="bg-skyBlue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-skyBlue/20 transition-colors">
                  <Icon className="w-7 h-7 text-skyBlue" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-skyBlue font-semibold mb-2">{achievement.organization}</p>
                <p className="text-gray text-sm mb-3">{achievement.date}</p>
                <p className="text-gray leading-relaxed">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
