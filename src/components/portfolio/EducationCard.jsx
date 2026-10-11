export function EducationCard({ education }) {
  const hasPeriod = education.startDate || education.endDate

  return (
    <article className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">Academic entry</p>
      <h3 className="mt-2 break-words text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{education.qualification}</h3>

      <dl className="mt-5 grid gap-4 text-sm leading-6 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Institution</dt>
          <dd className="mt-1 break-words font-medium text-slate-700 dark:text-slate-300">{education.institution}</dd>
        </div>
        {education.location && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Location</dt>
            <dd className="mt-1 break-words font-medium text-slate-700 dark:text-slate-300">{education.location}</dd>
          </div>
        )}
        {hasPeriod && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Period</dt>
            <dd className="mt-1 break-words font-medium text-slate-700 dark:text-slate-300">
              {[education.startDate, education.endDate].filter(Boolean).join(' — ')}
            </dd>
          </div>
        )}
      </dl>

      {education.description && (
        <p className="mt-5 break-words text-sm leading-6 text-slate-600 dark:text-slate-400">{education.description}</p>
      )}

      {education.coursework.length > 0 && (
        <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
          <h4 className="text-sm font-semibold text-slate-950 dark:text-white">Relevant coursework</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <li key={course} className="max-w-full break-words rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}

      {education.achievements.length > 0 && (
        <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
          <h4 className="text-sm font-semibold text-slate-950 dark:text-white">Academic achievements</h4>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {education.achievements.map((achievement) => (
              <li key={achievement} className="break-words">{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
