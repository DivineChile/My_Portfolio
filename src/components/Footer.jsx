import React, { useState, useEffect } from 'react'
import { HiOutlineArrowUp } from 'react-icons/hi2'
import { personalInfo } from '../data/projects'

function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })
        )
      } catch (e) {
        setTime('')
      }
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Footer() {
  const time = useLocalTime()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        {/* Sign-off */}
        <p className="max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
          Thanks for reading.{' '}
          <span className="text-muted">— {personalInfo.fullName}</span>
        </p>

        <a
          href="#top"
          className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink underline decoration-rule-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          <HiOutlineArrowUp className="h-3.5 w-3.5" /> Back to top
        </a>

        {/* Colophon row */}
        <div className="mt-12 flex flex-col gap-3 border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {personalInfo.fullName}
          </span>
          <span>
            {personalInfo.location}
            {time && <span className="text-ink-2"> · {time} WAT</span>}
          </span>
          <span>Built with React &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
