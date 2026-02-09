'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { Header, Footer } from './index'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
