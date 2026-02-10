'use client'
import { motion } from 'framer-motion'
import { getSiteMetadata } from '../data/site'
import { getEducation } from '../data/experience'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function About() {
  const site = getSiteMetadata()
  const education = getEducation()

  return (
    <section id="about" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray mb-16 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          {site.description}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-skyBlue mb-8 text-center">Education</h3>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-navy p-6 rounded-lg border border-slate hover:border-skyBlue transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-skyBlue/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-skyBlue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                    <p className="text-skyBlue font-semibold mb-3">{item.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {item.startDate} - {item.endDate}
                      </div>
                    </div>

                    {item.bullets && (
                      <ul className="list-disc list-inside text-gray space-y-1">
                        {item.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision & Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-navy p-8 rounded-lg border border-slate"
        >
          <h3 className="text-2xl font-bold text-skyBlue mb-4">Career Vision</h3>
          <p className="text-gray leading-relaxed">
            As a pre-final year B.Tech student specializing in Electronics and Communication Engineering, 
            I'm passionate about leveraging AI and ML to solve real-world problems. My goal is to contribute 
            to impactful projects in machine learning and data science, continuously learning and growing 
            as a developer. I'm particularly interested in areas where AI meets practical applications — 
            from computer vision to predictive analytics.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
