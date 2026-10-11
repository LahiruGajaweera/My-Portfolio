function CertificateMedia({ certificate }) {
  if (certificate.imageUrl) {
    return <img src={certificate.imageUrl} alt={`${certificate.title} certificate`} className="aspect-video w-full object-cover" />
  }

  if (certificate.certificatePdfUrl) {
    return (
      <iframe
        title={`${certificate.title} certificate PDF`}
        src={certificate.certificatePdfUrl}
        className="aspect-video w-full border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
      />
    )
  }

  return (
    <div className="relative grid aspect-video w-full place-items-center overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800" aria-hidden="true">
      <div className="absolute -right-10 -top-10 size-28 rounded-full border border-sky-200 dark:border-sky-400/20" />
      <div className="absolute -bottom-12 -left-12 size-32 rounded-full border border-slate-200 dark:border-slate-700" />
      <span className="relative rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
        Sample data
      </span>
    </div>
  )
}

export function CertificateCard({ certificate }) {
  return (
    <article className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900">
      <CertificateMedia certificate={certificate} />

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">Sample entry</p>
        <h3 className="mt-2 break-words text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{certificate.title}</h3>
        <dl className="mt-4 space-y-2 text-sm leading-6">
          <div>
            <dt className="sr-only">Issuing organization</dt>
            <dd className="break-words font-medium text-slate-700 dark:text-slate-300">{certificate.issuer}</dd>
          </div>
          <div>
            <dt className="sr-only">Issue date</dt>
            <dd className="text-slate-500 dark:text-slate-400">{certificate.issueDate}</dd>
          </div>
          {certificate.credentialId && (
            <div>
              <dt className="sr-only">Credential ID</dt>
              <dd className="break-words text-slate-500 dark:text-slate-400">Credential ID: {certificate.credentialId}</dd>
            </div>
          )}
        </dl>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:focus-visible:ring-offset-slate-900"
            >
              View Credential
            </a>
          )}
          {certificate.certificatePdfUrl && (
            <a
              href={certificate.certificatePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300 dark:focus-visible:ring-offset-slate-900"
            >
              Open Certificate PDF
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
