import { useEffect, useRef, useState } from 'react'
import { projects } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectDetails } from './ProjectDetails'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const detailsRef = useRef(null)

  useEffect(() => {
    if (selectedProject && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedProject])

  return (
    <section id="projects" className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A selection of systems and applications focused on practical technology solutions."
        />

        <div className="mt-10 grid w-full min-w-0 auto-rows-fr grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 min-[960px]:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={setSelectedProject} />
          ))}
        </div>

        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          sectionRef={detailsRef}
        />
      </div>
    </section>
  )
}
