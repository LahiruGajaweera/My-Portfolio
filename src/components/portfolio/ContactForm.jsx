import { useState } from 'react'
import { submitContactMessage } from '../../services/contactSubmission'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please enter a subject.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  }

  return errors
}

function FieldError({ id, message }) {
  if (!message) {
    return null
  }

  return <p id={id} className="mt-1.5 text-sm text-red-600 dark:text-red-400">{message}</p>
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus({ type: 'error', message: 'Please correct the highlighted fields and try again.' })
      return
    }

    setStatus({ type: 'loading', message: 'Preparing your message…' })

    try {
      await submitContactMessage(values)
      setStatus({ type: 'success', message: 'Your message has been sent successfully.' })
      setValues(initialValues)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  const isLoading = status.type === 'loading'

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <fieldset disabled={isLoading} className="grid min-w-0 gap-5">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-slate-800 dark:text-slate-100">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:border-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
          <FieldError id="contact-name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-slate-800 dark:text-slate-100">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:border-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
          <FieldError id="contact-email-error" message={errors.email} />
        </div>

        <div>
          <label htmlFor="contact-subject" className="text-sm font-semibold text-slate-800 dark:text-slate-100">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:border-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
          <FieldError id="contact-subject-error" message={errors.subject} />
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold text-slate-800 dark:text-slate-100">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="6"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:border-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
          <FieldError id="contact-message-error" message={errors.message} />
        </div>
      </fieldset>

      {status.type !== 'idle' && (
        <p
          role={status.type === 'success' ? 'status' : 'alert'}
          className={`mt-5 rounded-lg border px-3 py-2.5 text-sm leading-6 ${
            status.type === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300'
              : status.type === 'loading'
                ? 'border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-300'
                : 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300'
          }`}
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        aria-busy={isLoading}
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:focus-visible:ring-offset-slate-900 sm:w-auto"
      >
        {isLoading ? 'Sending Message…' : 'Send Message'}
      </button>
    </form>
  )
}
