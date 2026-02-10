import type { Experience } from '../../data/experience'
import { MapPin, Calendar } from 'lucide-react'

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="bg-navy p-6 rounded-lg border border-slate hover:border-skyBlue transition-all">
      <header className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
        <p className="text-skyBlue font-semibold text-lg mb-3">{experience.company}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {experience.location}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {experience.startDate} - {experience.endDate}
          </div>
        </div>
      </header>

      <ul className="list-disc list-inside space-y-2 text-gray">
        {experience.bullets.map((bullet, i) => (
          <li key={i} className="leading-relaxed">{bullet}</li>
        ))}
      </ul>
    </article>
  )
}
