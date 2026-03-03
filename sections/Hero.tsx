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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy">
      <HeroScene />

      <div className="z-10 text-center px-4 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 text-white"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-skyBlue mb-6 font-semibold"
        >
          {site.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg text-gray mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            href="#projects"
            className="px-8 py-3 rounded-lg bg-skyBlue text-navy font-bold hover:bg-accent hover:shadow-glow transition-all"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg border-2 border-skyBlue text-skyBlue hover:bg-skyBlue hover:text-navy font-semibold transition-all"
          >
            Get In Touch
          </Link>
          <Link
            href="/resume"
            className="px-8 py-3 rounded-lg border border-gray text-gray hover:bg-slate hover:border-white transition-all"
          >
            Resume
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ArrowDown className="w-8 h-8 text-skyBlue" />
      </motion.div>
    </section>
  )
}
