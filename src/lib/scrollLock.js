// Ref-counted body scroll lock. Multiple overlays (modal + ⌘K palette) can be
// open at once without fighting over document.body.style.overflow — the lock
// only releases when the last consumer unlocks.

let locks = 0
let previousOverflow = ''

export function lockScroll() {
  if (typeof document === 'undefined') return
  if (locks === 0) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  locks += 1
}

export function unlockScroll() {
  if (typeof document === 'undefined') return
  locks = Math.max(0, locks - 1)
  if (locks === 0) {
    document.body.style.overflow = previousOverflow
  }
}
