export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-wide text-sky-700 dark:text-sky-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{description}</p>
    </div>
  )
}
