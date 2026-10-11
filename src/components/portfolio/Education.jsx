import { educationEntries } from '../../data/education'
import { SectionHeading } from '../ui/SectionHeading'
import { EducationCard } from './EducationCard'

export function Education() {
  return (
    <section id="education" className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="Academic background and ongoing learning in Industrial Information Technology."
        />

        <div className="mt-10 grid w-full max-w-4xl min-w-0 grid-cols-1 gap-6 sm:mt-12">
          {educationEntries.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  )
}
