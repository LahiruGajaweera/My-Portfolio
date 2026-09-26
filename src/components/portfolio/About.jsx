import { SectionHeading } from '../ui/SectionHeading'

const studyHighlights = [
  ['Programme', 'BSc (Hons) Industrial Information Technology'],
  ['University', 'Uva Wellassa University of Sri Lanka'],
  ['Perspective', 'IT + Management'],
]

export function About() {
  return (
    <section id="about" className="w-full border-y border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">
        <SectionHeading
          eyebrow="About me"
          title="Technology with a practical perspective"
          description="An Industrial Information Technology undergraduate focused on connecting technical work with real business and operational needs."
        />

        <div className="mt-10 grid w-full min-w-0 grid-cols-1 gap-8 md:mt-12 md:grid-cols-[minmax(0,1.05fr)_minmax(16rem,0.95fr)] md:gap-10 lg:gap-16">
          <div className="w-full min-w-0">
            <p className="max-w-2xl break-words text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 dark:text-slate-300">
              I am pursuing a BSc (Hons) in Industrial Information Technology at Uva Wellassa University of Sri Lanka. My interests span software development, industrial IT, data analytics, automation, and technology-driven business solutions.
            </p>
            <p className="mt-5 max-w-2xl break-words text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
              With an IT and Management focus, I am passionate about using technology to understand real-world problems and build useful, thoughtful solutions.
            </p>
            <a
              href="#projects"
              className="mt-8 inline-flex w-full max-w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 min-[480px]:w-auto dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:focus-visible:ring-offset-slate-950"
            >
              View My Projects
            </a>
          </div>

          <aside className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Academic focus</p>
            <dl className="mt-5 divide-y divide-slate-200 dark:divide-slate-800">
              {studyHighlights.map(([label, value]) => (
                <div key={label} className="py-4 first:pt-0 last:pb-0">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</dt>
                  <dd className="mt-1.5 break-words text-sm font-medium leading-6 text-slate-800 dark:text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
