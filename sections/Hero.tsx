'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { getSiteMetadata } from '../data/site'

const HeroScene = dynamic(() => import('../components/3d/HeroScene'), { ssr: false })

export default function Hero() {
  const site = getSiteMetadata()

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050e1d]">
      {/* Radial glow behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.12),transparent)]" />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2338bdf8\' fill-opacity=\'0.04\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E')]" />

      <HeroScene />

      <div className="z-10 text-center px-4 max-w-5xl">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-skyBlue/30 bg-skyBlue/5 text-skyBlue text-sm font-medium tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-skyBlue animate-pulse" />
          Available for Opportunities
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent glow-text"
        >
          {site.name}
        </motion.h1>

        {/* Title with cyan gradient */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-2xl md:text-3xl mb-6 font-semibold bg-gradient-to-r from-skyBlue to-accent bg-clip-text text-transparent"
        >
          {site.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg text-gray mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {site.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-skyBlue to-accent text-navy font-bold hover:shadow-[0_0_24px_rgba(56,189,248,0.5)] hover:scale-105 transition-all duration-300"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl border-2 border-skyBlue/50 text-skyBlue hover:border-skyBlue hover:bg-skyBlue/10 hover:shadow-[0_0_16px_rgba(56,189,248,0.3)] font-semibold transition-all duration-300"
          >
            Get In Touch
          </Link>
          <Link
            href="/resume"
            className="px-8 py-3.5 rounded-xl border border-gray/40 text-gray hover:border-gray hover:bg-white/5 transition-all duration-300"
          >
            Resume
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ArrowDown className="w-7 h-7 text-skyBlue/60" />
      </motion.div>
    </section>
  )
}

