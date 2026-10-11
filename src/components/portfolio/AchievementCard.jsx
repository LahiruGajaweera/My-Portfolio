export function AchievementCard({ achievement }) {
  return (
    <article className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900">
      {achievement.image ? (
        <img src={achievement.image} alt="" className="aspect-video w-full object-cover" />
      ) : (
        <div className="relative grid aspect-video w-full place-items-center overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800" aria-hidden="true">
          <div className="absolute -right-10 -top-10 size-28 rounded-full border border-sky-200 dark:border-sky-400/20" />
          <div className="absolute -bottom-12 -left-12 size-32 rounded-full border border-slate-200 dark:border-slate-700" />
          <span className="relative rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            Sample data
          </span>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">Sample entry</p>
        <h3 className="mt-2 break-words text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{achievement.title}</h3>
        <dl className="mt-4 space-y-2 text-sm leading-6">
          <div>
            <dt className="sr-only">Issuer</dt>
            <dd className="break-words font-medium text-slate-700 dark:text-slate-300">{achievement.issuer}</dd>
          </div>
          <div>
            <dt className="sr-only">Date</dt>
            <dd className="text-slate-500 dark:text-slate-400">{achievement.date}</dd>
          </div>
        </dl>
        <p className="mt-4 break-words text-sm leading-6 text-slate-600 dark:text-slate-400">{achievement.description}</p>
      </div>
    </article>
  )
}
