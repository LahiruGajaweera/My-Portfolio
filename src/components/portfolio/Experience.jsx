import { experienceEntries } from '../../data/experience'
import { SectionHeading } from '../ui/SectionHeading'
import { ExperienceEntry } from './ExperienceEntry'

export function Experience() {
  return (
    <section id="experience" className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Experience & Practical Learning"
          description="This timeline is prepared for verified work, internship, and practical learning experience. The entries below are clearly marked sample data."
        />

        <div className="relative mt-10 w-full max-w-4xl min-w-0 sm:mt-12">
          <span className="absolute bottom-6 left-3 top-6 w-px bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
          <ol className="grid w-full min-w-0 gap-6" aria-label="Experience timeline">
            {experienceEntries.map((entry) => (
              <ExperienceEntry key={entry.id} entry={entry} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
