'use client'
import type { Experience } from '../../data/experience'
import { MapPin, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative group"
    >
      {/* Glow layer */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-skyBlue/30 to-accent/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

      <div className="relative flex gap-5 bg-[#0d1b2e] border border-[#1e3a5f] group-hover:border-skyBlue/50 rounded-xl p-6 transition-all duration-300">
        {/* Left accent stripe */}
        <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-skyBlue to-accent opacity-70 group-hover:opacity-100 transition-opacity" />

        <div className="flex-1 min-w-0">
          <header className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-skyBlue transition-colors">
              {experience.position}
            </h3>
            <p className="text-skyBlue font-semibold text-base mb-3">{experience.company}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-skyBlue/70" />
                {experience.location}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-skyBlue/70" />
                {experience.startDate} – {experience.endDate}
              </div>
            </div>
          </header>

          <div className="h-px bg-gradient-to-r from-[#1e3a5f] to-transparent mb-4" />

          <ul className="space-y-2">
            {experience.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-gray text-sm leading-relaxed">
                <span className="text-skyBlue mt-1 shrink-0">▸</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}

