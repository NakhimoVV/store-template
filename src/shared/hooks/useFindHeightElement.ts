'use client'

import { useEffect, useRef } from 'react'

export const useFindHeightElement = (elementName: string) => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const createHeightCssConstant = () => {
      const height = element.getBoundingClientRect().height
      document.documentElement.style.setProperty(
        `--${elementName}-height`,
        `${height.toFixed(2)}px`,
      )
    }
    createHeightCssConstant()

    const observer = new ResizeObserver(() => {
      createHeightCssConstant()
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return elementRef
}
