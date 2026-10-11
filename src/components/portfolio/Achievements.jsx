import { achievements } from '../../data/achievements'
import { SectionHeading } from '../ui/SectionHeading'
import { AchievementCard } from './AchievementCard'

export function Achievements() {
  return (
    <section id="achievements" className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition and milestones"
          description="This section is prepared for verified academic, technical, and professional recognition. The entries below are clearly marked sample data."
        />

        <div className="mt-10 grid w-full min-w-0 auto-rows-fr grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 min-[960px]:grid-cols-3 lg:gap-6">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}
