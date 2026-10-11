import { contactDetails } from '../../data/contact'
import { ContactForm } from './ContactForm'
import { SectionHeading } from '../ui/SectionHeading'

const contactLinks = [
  contactDetails.email && { label: 'Email', href: `mailto:${contactDetails.email}` },
  contactDetails.githubUrl && { label: 'GitHub', href: contactDetails.githubUrl },
  contactDetails.linkedInUrl && { label: 'LinkedIn', href: contactDetails.linkedInUrl },
].filter(Boolean)

export function Contact() {
  return (
    <section id="contact" className="w-full border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Connect"
          description="Have a question or would like to discuss a technology-focused opportunity? Use the form below to get in touch."
        />

        <div className="mt-10 grid w-full min-w-0 gap-8 sm:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-12">
          <ContactForm />

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Contact details</h3>
            {contactLinks.length > 0 ? (
              <ul className="mt-5 grid gap-3">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex rounded-lg text-sm font-semibold text-sky-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Verified direct contact details will appear here when available.
              </p>
            )}
            <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Message delivery</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Form delivery is not configured yet. A secure backend or Supabase Edge Function can be connected later without exposing secrets in this website.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
