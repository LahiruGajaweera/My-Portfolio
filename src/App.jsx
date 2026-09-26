import { useEffect, useState } from 'react'
import { About } from './components/portfolio/About'
import { Hero } from './components/portfolio/Hero'
import { Projects } from './components/portfolio/Projects'
import { Skills } from './components/portfolio/Skills'
import { Navbar } from './components/navigation/Navbar'
import { SiteShell } from './components/layout/SiteShell'

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    return savedTheme === 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <SiteShell>
      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode((currentTheme) => !currentTheme)}
      />
      <main className="w-full min-w-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </SiteShell>
  )
}

export default App
