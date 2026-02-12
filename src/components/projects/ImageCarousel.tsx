import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ProjectImage } from '../../types/project'
import ImagePlaceholder from './ImagePlaceholder'
import Lightbox from '../ui/Lightbox'

interface ImageCarouselProps {
  images: ProjectImage[]
  perPage?: number
}

export default function ImageCarousel({
  images,
  perPage = 3,
}: ImageCarouselProps) {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const totalPages = Math.ceil(images.length / perPage)
  const start = page * perPage
  const currentImages = images.slice(start, start + perPage)

  function goTo(next: number) {
    setDirection(next > page ? 1 : -1)
    setPage(next)
  }

  function prev() {
    if (page > 0) goTo(page - 1)
  }

  function next() {
    if (page < totalPages - 1) goTo(page + 1)
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  if (images.length === 0) return null

  return (
    <div className="mt-12">
      {/* Carousel viewport */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {currentImages.map((img, i) => (
              <div
                key={img.id}
                onClick={() => setLightboxIndex(start + i)}
                className="cursor-zoom-in"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(start + i) }}
              >
                <ImagePlaceholder
                  src={img.src}
                  label={img.label}
                  aspectRatio={img.aspectRatio}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            disabled={page === 0}
            className="p-2 transition-opacity disabled:opacity-20"
            aria-label="Previous images"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-1.5 transition-all duration-200 ${
                  i === page
                    ? 'w-6 bg-black'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={page === totalPages - 1}
            className="p-2 transition-opacity disabled:opacity-20"
            aria-label="Next images"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          src={images[lightboxIndex].src}
          alt={images[lightboxIndex].label}
          onClose={() => setLightboxIndex(null)}
          onPrev={lightboxIndex > 0 ? () => setLightboxIndex(lightboxIndex - 1) : undefined}
          onNext={lightboxIndex < images.length - 1 ? () => setLightboxIndex(lightboxIndex + 1) : undefined}
        />
      )}
    </div>
  )
}
