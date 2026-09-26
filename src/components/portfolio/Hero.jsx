export function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-6xl min-w-0 px-4 py-10 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">
      <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(15rem,0.9fr)] md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-16">
        <div className="w-full min-w-0 max-w-2xl">
          <p className="max-w-full break-words text-sm font-semibold tracking-wide text-sky-700 dark:text-sky-300">
            Hello, I&apos;m
          </p>
          <h1 className="mt-3 max-w-full break-words text-[clamp(2rem,9vw,2.5rem)] font-bold leading-[1.08] tracking-tight text-slate-950 sm:mt-4 sm:text-5xl md:text-4xl lg:text-6xl dark:text-white">
            Lahiru Gajaweera
          </h1>
          <p className="mt-4 max-w-full break-words text-lg font-medium leading-7 text-slate-700 sm:mt-5 sm:text-xl sm:leading-8 dark:text-slate-200">
            Industrial Information Technology Undergraduate
          </p>
          <p className="mt-4 max-w-full break-words text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg dark:text-slate-400">
            Building technology-driven solutions through software development, data, and business-focused technology.
          </p>
          <div className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:mt-8 min-[480px]:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full max-w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 min-[480px]:w-auto dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:focus-visible:ring-offset-slate-950"
            >
              View My Projects
            </a>
            <a
              href="#cv"
              className="inline-flex w-full max-w-full items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-600 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 min-[480px]:w-auto dark:border-slate-700 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300 dark:focus-visible:ring-offset-slate-950"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-sm md:max-w-none md:justify-self-end">
          <div
            role="img"
            aria-label="Profile image placeholder for Lahiru Gajaweera"
            className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:rounded-3xl sm:p-6"
          >
            <div className="absolute -right-12 -top-12 size-32 rounded-full border border-sky-200/70 dark:border-sky-400/20 sm:size-40" />
            <div className="absolute -bottom-16 -left-16 size-36 rounded-full border border-slate-200 dark:border-slate-700 sm:size-44" />
            <div className="relative grid w-full aspect-[4/3] place-items-center rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 sm:rounded-2xl md:aspect-square">
              <div className="grid size-24 place-items-center rounded-full border-6 border-white bg-slate-900 text-3xl font-bold tracking-tight text-white shadow-md dark:border-slate-900 dark:bg-sky-400 dark:text-slate-950 sm:size-32 sm:border-8 sm:text-4xl lg:size-40 lg:text-5xl">
                LG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
