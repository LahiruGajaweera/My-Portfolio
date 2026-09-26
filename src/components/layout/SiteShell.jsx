export function SiteShell({ children }) {
  return (
    <div className="min-h-screen w-full min-w-0 bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {children}
    </div>
  )
}
