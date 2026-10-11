export function ExperienceEntry({ entry }) {
  return (
    <li className="relative w-full min-w-0 pl-10 sm:pl-12">
      <span className="absolute left-0 top-6 grid size-6 place-items-center rounded-full border-4 border-slate-50 bg-sky-600 dark:border-slate-950 dark:bg-sky-400" aria-hidden="true" />
      <article className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">Sample entry</p>
            <h3 className="mt-2 break-words text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{entry.title}</h3>
          </div>
          <span className="w-fit max-w-full break-words rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {entry.employmentType}
          </span>
        </div>

        <dl className="mt-5 grid gap-3 text-sm leading-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Organization</dt>
            <dd className="mt-1 break-words font-medium text-slate-700 dark:text-slate-300">{entry.organization}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Period</dt>
            <dd className="mt-1 break-words font-medium text-slate-700 dark:text-slate-300">{entry.startDate} — {entry.endDate}</dd>
          </div>
        </dl>

        <p className="mt-5 break-words text-sm leading-6 text-slate-600 dark:text-slate-400">{entry.description}</p>

        {entry.responsibilities.length > 0 && (
          <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
            <h4 className="text-sm font-semibold text-slate-950 dark:text-white">Responsibilities</h4>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {entry.responsibilities.map((responsibility) => (
                <li key={responsibility} className="break-words">{responsibility}</li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </li>
  )
}
