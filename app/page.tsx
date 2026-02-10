import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Achievements from '../sections/Achievements'
import AIChatbot from '../components/chatbot/AIChatbot'

export default function Home() {
  return (
    <>
      <main className="bg-navy">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
      </main>
      <AIChatbot />
    </>
  )
}
