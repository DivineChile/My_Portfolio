import React from 'react'
import { experience, skillsList } from '../data/projects'

export default function Experience() {
  return (
    <section id="practice" className="scroll-mt-24 border-t border-rule">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="border-b border-rule pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Practice</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Practice log */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(1.8rem,3vw+0.4rem,2.6rem)] font-semibold leading-tight tracking-[-0.01em] text-ink">
              How I work
            </h2>
            <p className="mt-3 max-w-lg font-body text-base leading-relaxed text-muted">
              Three disciplines I keep sharp — the front-end, the systems behind it, and the tooling
              that ties them together.
            </p>

            <dl className="mt-10">
              {experience.map((item, i) => (
                <div key={item.title} className="border-t border-rule py-8 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] tabular-nums text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <dt className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {item.title}
                    </dt>
                  </div>
                  <dd className="mt-3 pl-8">
                    <p className="max-w-xl font-body text-base leading-relaxed text-ink-2">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                      {item.skills.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Toolstack colophon */}
          <div className="lg:col-span-5">
            <aside className="lg:sticky lg:top-28 border border-rule bg-paper-2 p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Toolstack
              </h3>
              <div className="mt-5 space-y-6">
                {skillsList.map((group) => (
                  <div key={group.category} className="border-t border-rule pt-4 first:border-t-0 first:pt-0">
                    <h4 className="font-display text-base font-semibold text-ink">
                      {group.category}
                    </h4>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink-2">
                      {group.items.join(', ')}.
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
