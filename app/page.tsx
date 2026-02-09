import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import ContactForm from '../components/ui/ContactForm'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="py-16" id="about">
        <About />
      </section>
      <section className="py-16 bg-slate-50 dark:bg-slate-900" id="skills">
        <Skills />
      </section>
      <section className="py-16" id="contact">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
