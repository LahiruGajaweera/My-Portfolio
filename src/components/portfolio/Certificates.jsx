import { certificates } from '../../data/certificates'
import { SectionHeading } from '../ui/SectionHeading'
import { CertificateCard } from './CertificateCard'

export function Certificates() {
  return (
    <section id="certificates" className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications & Learning"
          description="A space for verified learning credentials. The entries below are clearly marked sample data until verified certificates are added."
        />

        <div className="mt-10 grid w-full min-w-0 auto-rows-fr grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 min-[960px]:grid-cols-3 lg:gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  )
}
