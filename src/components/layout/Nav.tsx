import { NAV_ITEMS } from '../../lib/constants'
import useSmoothScroll from '../../hooks/useSmoothScroll'

interface NavProps {
  activeSection: string
  onLinkClick?: () => void
  variant?: 'desktop' | 'mobile'
}

export default function Nav({
  activeSection,
  onLinkClick,
  variant = 'desktop',
}: NavProps) {
  const scrollTo = useSmoothScroll()

  const handleClick = (sectionId: string) => {
    scrollTo(sectionId)
    onLinkClick?.()
  }

  if (variant === 'mobile') {
    return (
      <nav className="flex flex-col items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.sectionId}
            onClick={() => handleClick(item.sectionId)}
            className={`font-display text-4xl uppercase tracking-wider text-white transition-opacity duration-100 hover:opacity-60 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3 ${
              activeSection === item.sectionId ? 'opacity-60' : 'opacity-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    )
  }

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.sectionId}
          onClick={() => handleClick(item.sectionId)}
          className={`font-mono text-xs uppercase tracking-widest transition-all duration-100 hover:border-b-2 hover:border-black focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3 ${
            activeSection === item.sectionId
              ? 'border-b-2 border-black'
              : 'border-b-2 border-transparent'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
