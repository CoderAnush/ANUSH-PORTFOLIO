import type { Metadata } from 'next'
import ContactForm from '../../components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Anush',
  description: 'Get in touch with Anush — frontend engineer focusing on performance and accessible UIs.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-slate-600 mb-6">Have a project or opportunity? Send a message and I’ll get back to you.</p>
        <ContactForm />
      </section>
    </main>
  )
}
