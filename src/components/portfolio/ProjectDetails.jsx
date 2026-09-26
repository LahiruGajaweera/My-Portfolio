function DetailBlock({ title, children }) {
  return (
    <div className="min-w-0">
      <h4 className="text-sm font-semibold text-slate-950 dark:text-white">{title}</h4>
      <div className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{children}</div>
    </div>
  )
}

export function ProjectDetails({ project, onClose, sectionRef }) {
  if (!project) {
    return null
  }

  return (
    <section ref={sectionRef} id="project-details" className="mt-8 scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:mt-10 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex min-w-0 items-start justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-wide text-sky-700 dark:text-sky-300">Project details</p>
          <h3 className="mt-2 break-words text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          Close
        </button>
      </div>

      <div className="mt-6 grid min-w-0 gap-6 md:grid-cols-2">
        <DetailBlock title="Overview">
          <p className="break-words">{project.overview}</p>
        </DetailBlock>
        {project.developmentApproach && (
          <DetailBlock title="Development approach">
            <p className="break-words">{project.developmentApproach}</p>
          </DetailBlock>
        )}
        {project.features.length > 0 && (
          <DetailBlock title="Features">
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="break-words">{feature}</li>
              ))}
            </ul>
          </DetailBlock>
        )}
        {project.technologies.length > 0 && (
          <DetailBlock title="Technologies">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology} className="max-w-full break-words rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {technology}
                </li>
              ))}
            </ul>
          </DetailBlock>
        )}
        {project.problem && (
          <DetailBlock title="Problem">
            <p className="break-words">{project.problem}</p>
          </DetailBlock>
        )}
        {project.solution && (
          <DetailBlock title="Solution">
            <p className="break-words">{project.solution}</p>
          </DetailBlock>
        )}
        {project.myRole && (
          <DetailBlock title="My Role">
            <p className="break-words">{project.myRole}</p>
          </DetailBlock>
        )}
        {(project.githubUrl || project.liveDemoUrl) && (
          <DetailBlock title="Links">
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && <a href={project.githubUrl}>GitHub</a>}
              {project.liveDemoUrl && <a href={project.liveDemoUrl}>Live Demo</a>}
            </div>
          </DetailBlock>
        )}
      </div>
    </section>
  )
}
