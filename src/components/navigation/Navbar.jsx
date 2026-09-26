import { useState } from 'react'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function ThemeIcon({ isDarkMode }) {
  if (isDarkMode) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4 sm:size-5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4 sm:size-5">
      <path d="M20.4 14.8A8.5 8.5 0 0 1 9.2 3.6 8.5 8.5 0 1 0 20.4 14.8Z" />
    </svg>
  )
}

function MenuIcon({ isOpen }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
      {isOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

export function Navbar({ isDarkMode, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav className="mx-auto grid h-14 w-full max-w-6xl min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-16 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex min-w-0 items-center gap-2.5 rounded-lg font-semibold text-slate-950 outline-none transition-colors hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white dark:hover:text-sky-300"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-slate-900 text-sm font-bold tracking-tight text-white transition-transform duration-200 group-hover:-translate-y-0.5 dark:bg-sky-400 dark:text-slate-950">
            LG
          </span>
          <span className="hidden truncate text-sm sm:inline">My Portfolio</span>
        </a>

        <div className="hidden min-w-0 items-center justify-end gap-0.5 xl:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-300 dark:hover:text-sky-300"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
        </div>

        <div className="flex shrink-0 items-center gap-1 xl:hidden">
          <ThemeToggle isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="grid size-9 shrink-0 place-items-center rounded-lg text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-200 dark:hover:bg-slate-800 sm:size-10"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="w-full max-h-[calc(100svh-3.5rem)] overflow-y-auto border-t border-slate-200 bg-slate-50 px-4 py-2.5 shadow-lg shadow-slate-900/5 xl:hidden dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20 sm:max-h-[calc(100svh-4rem)] sm:px-6">
          <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="w-full min-w-0 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function ThemeToggle({ isDarkMode, onThemeToggle }) {
  return (
    <button
      type="button"
      onClick={onThemeToggle}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid size-9 shrink-0 place-items-center rounded-lg text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-200 dark:hover:bg-slate-800 sm:size-10"
    >
      <ThemeIcon isDarkMode={isDarkMode} />
    </button>
  )
}
