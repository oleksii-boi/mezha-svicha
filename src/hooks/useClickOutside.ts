import { useEffect, type RefObject, type MutableRefObject } from 'react'

export interface UseClickOutsideOptions {
  enabled?: boolean // allow turning off dynamically
  exclude?: Array<RefObject<Element | null> | Element | null>
  events?: string[] // DOM events to listen to
  detectEscape?: boolean // close on Escape key
}

/**
 * useClickOutside
 * Calls handler if a pointer/touch event happens outside the referenced element (and optional exclude list).
 * Also optionally listens for Escape key.
 */
export function useClickOutside(
  ref: RefObject<Element | null> | MutableRefObject<Element | null>,
  handler: (ev: MouseEvent | TouchEvent | KeyboardEvent) => void,
  {
    enabled = true,
    exclude = [],
    events = ['mousedown', 'touchstart'],
    detectEscape = true,
  }: UseClickOutsideOptions = {}
) {
  useEffect(() => {
    if (!enabled) return

    const isInExclude = (target: EventTarget | null) => {
      return exclude.some(ex => {
        const el = (ex && typeof ex === 'object' && 'current' in ex) ? ex.current : ex
        return !!el && (el as Element).contains(target as Node)
      })
    }

    const listener = (event: Event) => {
      const el = ref.current as HTMLElement | null
      if (!el) return
      const target = event.target as Node | null
      if (target && (el.contains(target) || isInExclude(target))) {
        return
      }
      handler(event as MouseEvent | TouchEvent)
    }

    const escapeListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler(event)
      }
    }

    events.forEach(evt => document.addEventListener(evt, listener))
    if (detectEscape) document.addEventListener('keydown', escapeListener)

    return () => {
      events.forEach(evt => document.removeEventListener(evt, listener))
      if (detectEscape) document.removeEventListener('keydown', escapeListener)
    }
  }, [ref, handler, enabled, exclude, events, detectEscape])
}
