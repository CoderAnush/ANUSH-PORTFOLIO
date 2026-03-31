import '../styles/globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'ANUSH RAMESH — AI/ML Engineer & Data Scientist',
  description: 'Pre-final year B.Tech student specializing in AI/ML and Data Science. Portfolio showcasing machine learning projects, internships, and technical skills.',
  keywords: ['AI', 'Machine Learning', 'Data Science', 'Python', 'TensorFlow', 'Portfolio'],
  authors: [{ name: 'Anush Ramesh' }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Anush Portfolio',
  },
  openGraph: {
    title: 'ANUSH RAMESH — AI/ML Engineer',
    description: 'Portfolio of an AI/ML engineer and data scientist',
    type: 'website',
  },
  icons: {
    apple: '/icons/icon-192x192.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#101010',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-darkBg" style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
