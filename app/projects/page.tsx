import { getProjects } from '../../data/projects'
import ProjectCard from '../../components/cards/ProjectCard'

export default function ProjectsPage() {
  const projects = getProjects()
  return (
    <main className="min-h-screen p-8">
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
