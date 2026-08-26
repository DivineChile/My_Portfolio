import React, { useState } from 'react'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '../data/projects'

const CATEGORIES = ['All', 'Full Stack', 'Frontend']

export default function ProjectGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const list =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)
  const lead = list[0]
  const rest = list.slice(1)

  return (
    <section id="work" className="scroll-mt-24 border-t border-rule">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {/* Head */}
        <div className="flex flex-col gap-6 border-b-2 border-ink pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3vw+0.5rem,2.9rem)] font-semibold leading-none tracking-[-0.01em] text-ink">
              Selected Work
            </h2>
            <p className="mt-3 max-w-md font-body text-base leading-relaxed text-muted">
              Five projects shipped between 2024 and 2025 — streaming, corporate web, and internal
              tooling.
            </p>
          </div>
          <div className="flex items-center gap-5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[11px] uppercase tracking-[0.14em] underline-offset-[6px] transition-colors ${
                  activeCategory === cat
                    ? 'text-accent underline decoration-2'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Index */}
        <ol>
          {lead && (
            <li className="group border-b border-rule py-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl tabular-nums text-accent">01</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                      {lead.category} — {lead.year}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    {lead.title}
                  </h3>
                  <p className="mt-4 max-w-md font-body text-lg leading-relaxed text-ink-2">
                    {lead.overview}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    {lead.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                    <button
                      type="button"
                      onClick={() => onSelectProject(lead)}
                      className="font-mono text-xs uppercase tracking-[0.12em] text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                    >
                      Read case
                    </button>
                    {lead.demoUrl && lead.demoUrl !== '#' && (
                      <a
                        href={lead.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-accent"
                      >
                        Live <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {lead.githubUrl && lead.githubUrl !== '#' && (
                      <a
                        href={lead.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-ink"
                      >
                        <FaGithub className="h-3.5 w-3.5" /> Source
                      </a>
                    )}
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <button
                    type="button"
                    onClick={() => onSelectProject(lead)}
                    aria-label={`Open case study — ${lead.title}`}
                    className="block w-full overflow-hidden border border-rule bg-paper-3 text-left"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={lead.image}
                        alt={`${lead.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </li>
          )}

          {rest.map((p, i) => (
            <li key={p.id} className="group border-b border-rule">
              <button
                type="button"
                onClick={() => onSelectProject(p)}
                aria-label={`Open case study — ${p.title}`}
                className="grid w-full grid-cols-1 items-baseline gap-3 py-7 text-left transition-colors hover:bg-paper-2/50 sm:grid-cols-12 sm:gap-6"
              >
                <span className="font-display text-xl tabular-nums text-muted group-hover:text-accent sm:col-span-1">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div className="sm:col-span-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink group-hover:text-accent sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 max-w-lg font-body text-base leading-snug text-muted">
                    {p.tagline}
                  </p>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted sm:col-span-3">
                  {p.tags.slice(0, 3).join(' · ')}
                </div>
                <div className="flex items-center justify-between sm:col-span-2 sm:justify-end sm:gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    {p.year}
                  </span>
                  <HiOutlineArrowUpRight className="h-4 w-4 text-rule-2 transition-colors group-hover:text-accent" />
                </div>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
