export function SkillCategory({ title, skills }) {
  return (
    <article className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div className="flex min-w-0 items-center justify-between gap-3">
        <h3 className="min-w-0 break-words text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {skills.length}
        </span>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} skills`}>
        {skills.map((skill) => (
          <li key={skill} className="max-w-full break-words rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
