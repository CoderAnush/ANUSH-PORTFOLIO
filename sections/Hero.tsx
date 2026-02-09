'use client'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-primary to-violet-600 opacity-40 -z-10" />
      <div className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center py-20">
          <motion.h1
            className="text-5xl font-extrabold text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hi, I’m Anush. I build accessible, high-performance interfaces.
          </motion.h1>
          <motion.p className="mt-4 text-white/90" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            I’m a frontend engineer who focuses on performance, UX, and clean architecture.
          </motion.p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button as="a" href="#projects">View Work</Button>
            <Button variant="ghost">Contact</Button>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce text-white/80">↓</div>
          </div>
        </div>
      </div>
    </section>
  )
}
