import React, { useState } from 'react'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '../data/projects'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'What I built' },
  { id: 'stack', label: 'Stack' },
]

export default function InteractiveShowcase() {
  const project = projects.find((p) => p.id === 'anipulse')
  const [tab, setTab] = useState('overview')

  if (!project) return null

  return (
    <section id="anipulse" className="scroll-mt-24 border-t border-rule bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Feature</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Flagship — {project.year}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Figure */}
          <figure className="lg:col-span-7">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-rule-2 bg-paper-3"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt="AniPulse streaming interface"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </a>
            <figcaption className="mt-3 flex items-center justify-between border-t border-rule pt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span>AniPulse — streaming platform</span>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-ink-2 hover:text-accent"
              >
                anipulse.pages.dev <HiOutlineArrowUpRight className="h-3 w-3" />
              </a>
            </figcaption>
          </figure>

          {/* Editorial + interactive tabs */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {project.title}
            </h2>
            <p className="mt-3 font-body text-lg leading-relaxed text-muted">{project.tagline}</p>

            <div className="mt-7 flex gap-5 border-b border-rule" role="tablist" aria-label="AniPulse details">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`-mb-px border-b-2 pb-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    tab === t.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted hover:text-ink'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-5 min-h-[9rem]" role="tabpanel">
              {tab === 'overview' && (
                <p className="font-body text-base leading-relaxed text-ink-2">{project.overview}</p>
              )}
              {tab === 'architecture' && (
                <ul className="space-y-3">
                  {project.architecture.map((a, i) => (
                    <li key={i} className="flex gap-3 font-body text-base leading-snug text-ink-2">
                      <span className="mt-1 font-mono text-[11px] tabular-nums text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
              {tab === 'stack' && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-rule px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule pt-5">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-ctl bg-accent px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-ink hover:opacity-90"
              >
                Launch platform <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-ink"
              >
                <FaGithub className="h-3.5 w-3.5" /> Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
