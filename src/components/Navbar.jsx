import React, { useState } from 'react'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineBars3,
  HiOutlineXMark,
} from 'react-icons/hi2'
import { personalInfo } from '../data/projects'

const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Zeedara', href: '#zeedara' },
  { name: 'Practice', href: '#practice' },
  { name: 'Contact', href: '#contact' },
]

function todayLabel() {
  try {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (e) {
    return ''
  }
}

export default function Navbar({ theme, toggleTheme, onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [today] = useState(todayLabel)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-rule bg-paper/85 backdrop-blur-md">
      {/* Dateline strip */}
      <div className="hidden border-b border-rule/70 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          <span>{personalInfo.location}</span>
          <span className="flex items-center gap-4">
            <span>{today}</span>
            <span className="text-accent">Available for work</span>
          </span>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="group flex flex-col no-underline">
          <span className="font-display text-xl font-semibold leading-none tracking-tight text-ink sm:text-2xl">
            {personalInfo.fullName}
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {personalInfo.role}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="hidden items-center gap-2 rounded-ctl border border-rule px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-rule-2 hover:text-ink sm:flex"
            title="Open command menu"
          >
            <HiOutlineMagnifyingGlass className="h-3.5 w-3.5" />
            <span>Search</span>
            <kbd className="rounded border border-rule px-1 py-0.5 text-[10px] text-neutral">⌘K</kbd>
          </button>

          <a
            href={personalInfo.resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-ctl bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-paper transition-opacity hover:opacity-90 sm:inline-block"
          >
            Résumé
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-8 w-8 items-center justify-center rounded-ctl border border-rule text-muted transition-colors hover:text-ink"
          >
            {theme === 'dark' ? <HiOutlineSun className="h-4 w-4" /> : <HiOutlineMoon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-center rounded-ctl border border-rule text-muted md:hidden"
          >
            {mobileMenuOpen ? <HiOutlineXMark className="h-5 w-5" /> : <HiOutlineBars3 className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-rule bg-paper px-4 py-3 md:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-rule/60 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-2 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  onOpenCommandPalette()
                  setMobileMenuOpen(false)
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-ctl border border-rule py-2 font-mono text-[11px] text-muted"
              >
                <HiOutlineMagnifyingGlass className="h-3.5 w-3.5" /> Search
              </button>
              <a
                href={personalInfo.resumeViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-ctl bg-ink py-2 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-paper"
              >
                Résumé
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
