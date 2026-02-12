import { ArrowRight, Instagram } from 'lucide-react'
import { CONTACT } from '../../lib/constants'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[60vh] flex-col items-center justify-center bg-black px-6 py-24 text-white md:px-12 md:py-32"
    >
      {/* Texture overlay */}
      <div className="texture-lines-inverted pointer-events-none absolute inset-0" />

      <div className="relative text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-wider md:text-6xl lg:text-7xl">
          Let&rsquo;s Work
          <br />
          Together
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-white" />

        <a
          href={`mailto:${CONTACT.email}`}
          className="group mt-12 inline-flex items-center gap-3 font-mono text-lg tracking-wide text-white transition-opacity duration-100 hover:opacity-60 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3 md:text-2xl"
        >
          {CONTACT.email}
          <ArrowRight
            size={18}
            strokeWidth={1.5}
            className="transition-transform duration-100 group-hover:translate-x-1"
          />
        </a>

        <a
          href={`https://instagram.com/${CONTACT.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @capdollz"
          className="mx-auto mt-8 flex w-fit items-center justify-center text-gray-400 transition-opacity duration-100 hover:opacity-60"
        >
          <Instagram size={24} strokeWidth={1.5} />
        </a>

        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-gray-500">
          {CONTACT.location}
        </p>
      </div>
    </section>
  )
}
