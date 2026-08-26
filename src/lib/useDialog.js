import { useEffect, useRef } from 'react'
import { lockScroll, unlockScroll } from './scrollLock'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Accessible dialog behaviour for a modal overlay:
 *  - Escape closes
 *  - focus moves into the dialog on open, is trapped while open (Tab cycles),
 *    and returns to the invoking element on close
 *  - body scroll is locked (ref-counted, so nested/stacked overlays are safe)
 *
 * `onClose` is read through a ref so an inline arrow from the parent doesn't
 * re-run the effect on every render.
 *
 * @returns a ref to attach to the dialog container element.
 */
export function useDialog(isOpen, onClose) {
  const ref = useRef(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!isOpen) return

    const node = ref.current
    const previouslyFocused = document.activeElement

    lockScroll()

    const getFocusable = () =>
      node ? Array.from(node.querySelectorAll(FOCUSABLE)) : []

    const initial = getFocusable()[0]
    ;(initial || node)?.focus?.()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current?.()
        return
      }
      if (e.key !== 'Tab') return

      const items = getFocusable()
      if (items.length === 0) {
        e.preventDefault()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      unlockScroll()
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus()
      }
    }
  }, [isOpen])

  return ref
}
