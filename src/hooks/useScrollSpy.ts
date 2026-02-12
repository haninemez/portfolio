import { useEffect, useState } from 'react'
import { SECTION_IDS } from '../lib/constants'

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS.hero)

  useEffect(() => {
    const sectionIds = Object.values(SECTION_IDS)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return activeSection
}
