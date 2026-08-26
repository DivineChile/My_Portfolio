import React, { useState, useEffect } from 'react'
import { HiOutlineArrowUp } from 'react-icons/hi2'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        setVisible(window.scrollY > 500)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // set initial state on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    let reduce = false
    try {
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch (e) {
      /* matchMedia unavailable — fall through to smooth */
    }
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-6 right-4 z-30 flex items-center gap-1.5 rounded-ctl border border-rule bg-paper/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2 shadow-sm backdrop-blur-md transition-opacity duration-300 ease-out hover:border-rule-2 hover:text-accent sm:right-6 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <HiOutlineArrowUp className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5" />
      <span className="hidden sm:inline">Top</span>
    </button>
  )
}
