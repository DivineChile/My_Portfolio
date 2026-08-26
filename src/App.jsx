import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import ProjectModal from './components/ProjectModal'
import InteractiveShowcase from './components/InteractiveShowcase'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import BackToTop from './components/BackToTop'

// The no-flash script in index.html has already stamped data-theme before paint;
// read it back so React's state matches the painted theme.
function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'dark' || attr === 'broadsheet') return attr
  }
  return 'broadsheet'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* storage unavailable — theme still applies for the session */
    }
  }, [theme])

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCommandPaletteOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'broadsheet' : 'dark'))

  return (
    <div className="min-h-screen bg-paper text-ink-2">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      <main>
        <Hero />
        <ProjectGrid onSelectProject={setSelectedProject} />
        <InteractiveShowcase />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
        onSelectProject={setSelectedProject}
      />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <BackToTop />
    </div>
  )
}
