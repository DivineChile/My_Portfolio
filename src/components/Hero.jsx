import React from 'react'
import { HiOutlineArrowDown } from 'react-icons/hi2'
import { personalInfo } from '../data/projects'

const STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'PHP / MySQL']

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Statement */}
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Selected work — 2024 – 2025
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw+0.5rem,4.75rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-ink">
            I build fast, honest interfaces for the web.
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-2 sm:text-xl">
            {personalInfo.bio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-ctl bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-accent-ink transition-opacity hover:opacity-90"
            >
              View selected work
              <HiOutlineArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-xs uppercase tracking-[0.12em] text-ink underline decoration-rule-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Email me
            </a>
            <a
              href={personalInfo.resumeViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.12em] text-ink underline decoration-rule-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Résumé ↗
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-rule pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            <span className="text-ink-2">Currently working with</span>
            {STACK.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                {i > 0 && <span className="text-rule-2">/</span>}
                <span>{s}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Portrait plate */}
        <div className="lg:col-span-5">
          <figure className="mx-auto max-w-sm lg:mr-0">
            <div className="border border-rule-2 bg-paper-2 p-2">
              <div className="aspect-[4/5] w-full overflow-hidden bg-paper-3">
                <img
                  src="/images/heroImg.jpeg"
                  alt="Portrait of Divine Chigere Chile"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between border-t border-rule pt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span className="text-ink-2">{personalInfo.fullName}</span>
              <span>Bonny Island, NG</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
