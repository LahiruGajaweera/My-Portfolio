export function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900">
      <div
        role="img"
        aria-label={`${project.title} visual placeholder`}
        className="relative grid aspect-video w-full place-items-center overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
      >
        <div className="absolute -right-10 -top-10 size-28 rounded-full border border-sky-200 dark:border-sky-400/20" />
        <div className="absolute -bottom-12 -left-12 size-32 rounded-full border border-slate-200 dark:border-slate-700" />
        <span className="relative grid size-16 place-items-center rounded-xl bg-slate-900 text-lg font-bold tracking-tight text-white shadow-md dark:bg-sky-400 dark:text-slate-950">
          {project.visualAbbreviation}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <h3 className="break-words text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 break-words text-sm leading-6 text-slate-600 dark:text-slate-400">{project.description}</p>

        {project.technologies.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology} className="max-w-full break-words rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {technology}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:focus-visible:ring-offset-slate-900"
          >
            View Details
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300 dark:focus-visible:ring-offset-slate-900"
            >
              GitHub
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300 dark:focus-visible:ring-offset-slate-900"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
