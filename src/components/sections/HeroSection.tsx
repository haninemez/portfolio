import { ArrowDown } from 'lucide-react'
import useSmoothScroll from '../../hooks/useSmoothScroll'

export default function HeroSection() {
  const scrollTo = useSmoothScroll()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-12"
    >
      {/* Texture overlay */}
      <div className="texture-lines pointer-events-none absolute inset-0" />

      <div className="relative text-center">
        <h1 className="font-display font-black uppercase leading-none tracking-tighter text-black text-[clamp(3.5rem,12vw,10rem)]">
          Hanine
        </h1>
        <h1 className="font-display font-black uppercase leading-none tracking-tighter text-black text-[clamp(3.5rem,12vw,10rem)]">
          Mezghiche
        </h1>
        <p className="mt-6 font-body text-lg italic text-gray-600 md:mt-8 md:text-2xl">
          3D Sculptor / Toy Sculptor
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-gray-400">
          Paris, France
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-gray-400 transition-colors duration-100 hover:text-black focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
        aria-label="Scroll to content"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown size={16} strokeWidth={1.5} />
      </button>
    </section>
  )
}
