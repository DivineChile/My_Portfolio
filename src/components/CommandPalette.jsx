import React, { useState, useEffect, useRef } from 'react'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineArrowRight,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineEnvelope,
  HiOutlineBriefcase,
  HiOutlineFilm,
  HiOutlineDocumentText,
} from 'react-icons/hi2'
import { projects, personalInfo } from '../data/projects'
import { useDialog } from '../lib/useDialog'

export default function CommandPalette({ isOpen, onClose, theme, toggleTheme, onSelectProject }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dialogRef = useDialog(isOpen, onClose)
  const listRef = useRef(null)

  // Reset transient state each time the palette opens.
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  const staticActions = [
    {
      id: 'theme',
      title: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
      category: 'Preferences',
      icon: theme === 'dark' ? HiOutlineSun : HiOutlineMoon,
      action: () => {
        toggleTheme()
        onClose()
      },
    },
    {
      id: 'resume',
      title: 'Open résumé (Google Drive)',
      category: 'Documents',
      icon: HiOutlineDocumentText,
      action: () => {
        window.open(personalInfo.resumeViewUrl, '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
    {
      id: 'work',
      title: 'Go to Selected Work',
      category: 'Navigation',
      icon: HiOutlineBriefcase,
      action: () => {
        window.location.hash = '#work'
        onClose()
      },
    },
    {
      id: 'anipulse',
      title: 'Go to AniPulse feature',
      category: 'Navigation',
      icon: HiOutlineFilm,
      action: () => {
        window.location.hash = '#anipulse'
        onClose()
      },
    },
    {
      id: 'contact',
      title: `Copy email — ${personalInfo.email}`,
      category: 'Actions',
      icon: HiOutlineEnvelope,
      action: () => {
        navigator.clipboard?.writeText?.(personalInfo.email)
        onClose()
      },
    },
  ]

  const projectActions = projects.map((p) => ({
    id: `project-${p.id}`,
    title: `View ${p.title}`,
    category: p.category,
    icon: HiOutlineArrowRight,
    action: () => {
      onSelectProject(p)
      onClose()
    },
  }))

  const allItems = [...staticActions, ...projectActions]

  const q = query.trim().toLowerCase()
  const filteredItems =
    q === ''
      ? allItems
      : allItems.filter(
          (item) =>
            item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
        )

  // Keep the highlighted row within view as the selection moves.
  useEffect(() => {
    const node = listRef.current?.querySelector(`#cp-opt-${selectedIndex}`)
    node?.scrollIntoView({ block: 'nearest' })
  }, [selectedIndex])

  // Arrow / Enter navigation. Escape + focus trap are handled by useDialog.
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(
        (prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length)
      )
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filteredItems[selectedIndex]?.action()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 sm:pt-28">
      <div className="fixed inset-0 bg-scrim/60 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-card border border-rule-2 bg-paper shadow-2xl"
      >
        {/* Search bar */}
        <div className="flex items-center gap-3 border-b border-rule px-4 py-3">
          <HiOutlineMagnifyingGlass className="h-4 w-4 shrink-0 text-muted" />
          <input
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="cp-listbox"
            aria-activedescendant={filteredItems.length ? `cp-opt-${selectedIndex}` : undefined}
            aria-label="Search commands and projects"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            placeholder="Search projects, actions, résumé…"
            className="flex-1 bg-transparent font-mono text-sm text-ink placeholder:text-muted"
          />
          <kbd className="rounded border border-rule bg-paper-2 px-1.5 py-0.5 font-mono text-[10px] text-muted">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <ul id="cp-listbox" role="listbox" ref={listRef} className="max-h-72 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <li className="py-6 text-center font-mono text-xs text-muted">
              No commands matching &ldquo;{query}&rdquo;
            </li>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon
              const isSelected = idx === selectedIndex
              return (
                <li
                  key={item.id}
                  id={`cp-opt-${idx}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex cursor-pointer items-center justify-between rounded-ctl px-3 py-2 ${
                    isSelected ? 'bg-accent text-accent-ink' : 'text-ink-2'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-xs">{item.title}</span>
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                      isSelected ? 'text-accent-ink/80' : 'text-muted'
                    }`}
                  >
                    {item.category}
                  </span>
                </li>
              )
            })
          )}
        </ul>

        {/* Hints */}
        <div className="flex items-center justify-between border-t border-rule bg-paper-2 px-4 py-2 font-mono text-[10px] text-muted">
          <span className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </span>
          <span>⌘K Palette</span>
        </div>
      </div>
    </div>
  )
}
