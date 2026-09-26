export function SiteShell({ children }) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl items-center justify-center sm:min-h-[calc(100svh-6rem)]">
        {children}
      </div>
    </main>
  )
}
