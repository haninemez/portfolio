import { useCallback } from 'react'

export default function useSmoothScroll() {
  const scrollTo = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      history.replaceState(null, '', `#${sectionId}`)
    }
  }, [])

  return scrollTo
}
