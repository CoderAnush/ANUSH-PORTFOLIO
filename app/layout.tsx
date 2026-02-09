import './globals.css'
import type { Metadata } from 'next'
import Providers from '../components/layout/Providers'

export const metadata: Metadata = {
  title: 'Anush — Frontend Engineer',
  description: 'Production-grade developer portfolio built with Next.js and TypeScript'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
