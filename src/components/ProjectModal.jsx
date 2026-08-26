import React from 'react'
import { HiOutlineXMark, HiOutlineArrowUpRight } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa6'
import { useDialog } from '../lib/useDialog'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useDialog(Boolean(project), onClose)

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-scrim/60 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pm-title"
        tabIndex={-1}
        className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-rule-2 bg-paper shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-rule bg-paper/95 px-6 py-4 backdrop-blur-sm">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              {project.category} — {project.year}
            </div>
            <h2
              id="pm-title"
              className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 border border-rule p-1.5 text-muted transition-colors hover:text-ink"
          >
            <HiOutlineXMark className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-8 px-6 py-6">
          {project.image && (
            <div className="overflow-hidden border border-rule bg-paper-3">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="max-h-72 w-full object-cover object-top"
              />
            </div>
          )}

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Overview
            </h3>
            <p className="mt-3 font-body text-base leading-relaxed text-ink-2">
              {project.overview}
            </p>
          </div>

          {project.architecture && (
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                What I built
              </h3>
              <ul className="mt-3 space-y-3">
                {project.architecture.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 font-body text-base leading-snug text-ink-2"
                  >
                    <span className="mt-0.5 font-mono text-[11px] tabular-nums text-accent">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-rule px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-end gap-5 border-t border-rule bg-paper/95 px-6 py-4 backdrop-blur-sm">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-ink"
            >
              <FaGithub className="h-4 w-4" /> Source
            </a>
          )}
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-ctl bg-accent px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-ink hover:opacity-90"
            >
              Live <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
