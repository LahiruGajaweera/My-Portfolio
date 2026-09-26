import { SectionHeading } from '../ui/SectionHeading'
import { SkillCategory } from './SkillCategory'

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Java', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'React', 'Node.js'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'NetBeans'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A focused set of programming languages, web technologies, databases, and development tools."
        />

        <div className="mt-10 grid w-full min-w-0 grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}
