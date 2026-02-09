import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/60 dark:bg-slate-900/60 mt-16">
      <div className="max-w-6xl mx-auto p-6 text-sm text-slate-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Anush</div>
        <div className="space-x-4">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
