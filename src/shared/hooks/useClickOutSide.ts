import { useEffect } from 'react'
import type { RefObject } from 'react'

export const useClickOutSide = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref?.current
      if (!element || element.contains((event?.target as Node) || null)) {
        return
      }
      callback(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}
