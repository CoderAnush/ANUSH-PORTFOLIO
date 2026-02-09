'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import React from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <header className="w-full px-6 py-4 border-b bg-white/60 dark:bg-slate-900/60 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="font-bold">Anush</div>
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <button
            aria-label="Toggle theme"
            className="p-2 rounded"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
