import '../styles/globals.css'
import type { Metadata } from 'next'
import Providers from '../components/layout/Providers'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ScrollManager from '../components/ui/ScrollManager'

export const metadata: Metadata = {
  title: 'ANUSH RAMESH — AI/ML Engineer & Data Scientist',
  description: 'Pre-final year B.Tech student specializing in AI/ML and Data Science. Portfolio showcasing machine learning projects, internships, and technical skills.',
  keywords: ['AI', 'Machine Learning', 'Data Science', 'Python', 'TensorFlow', 'Portfolio'],
  authors: [{ name: 'Anush Ramesh' }],
  openGraph: {
    title: 'ANUSH RAMESH — AI/ML Engineer',
    description: 'Portfolio of an AI/ML engineer and data scientist',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-navy">
        <Providers>
          <ScrollManager />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
