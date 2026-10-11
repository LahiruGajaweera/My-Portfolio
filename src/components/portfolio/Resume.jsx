import { resumeConfiguration } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'

export function Resume() {
  const hasResumeFile = Boolean(resumeConfiguration.filePath)

  return (
    <section id="cv" className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Resume"
          title="My Resume"
          description="A downloadable CV will be available here once the verified PDF is published."
        />

        <div className="mt-10 grid w-full min-w-0 gap-6 sm:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Downloadable CV</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              This section is ready for a verified PDF resume. The file path is configured separately so it can later be managed through an administrative workflow.
            </p>
          </div>

          <aside className="flex min-w-0 flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
            {hasResumeFile ? (
              <a
                href={resumeConfiguration.filePath}
                download={resumeConfiguration.downloadFileName}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:focus-visible:ring-offset-slate-900"
              >
                Download CV
              </a>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  aria-describedby="resume-unavailable-message"
                  className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-lg bg-slate-300 px-5 py-3 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  Download CV
                </button>
                <p id="resume-unavailable-message" className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  A CV file has not been published yet. Add a verified PDF path in the resume configuration to enable this download.
                </p>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
