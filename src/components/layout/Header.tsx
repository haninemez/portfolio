import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Nav from './Nav'
import useScrollSpy from '../../hooks/useScrollSpy'
import useSmoothScroll from '../../hooks/useSmoothScroll'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy()
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-black bg-white px-6 transition-all duration-100 md:px-12 ${
          scrolled
            ? 'h-16 opacity-100 translate-y-0'
            : 'h-16 opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-sm font-bold uppercase tracking-widest focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
        >
          Hanine Mezghiche
        </button>

        <Nav activeSection={activeSection} />

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
          aria-label="Open menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <Nav
            activeSection={activeSection}
            onLinkClick={() => setMenuOpen(false)}
            variant="mobile"
          />
        </div>
      )}
    </>
  )
}
