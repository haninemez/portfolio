import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../../types/project'
import ImagePlaceholder from './ImagePlaceholder'
import Lightbox from '../ui/Lightbox'

interface ProjectCardProps {
  project: Project
  isExpanded: boolean
  onToggle: () => void
}

export default function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  const [showLightbox, setShowLightbox] = useState(false)

  return (
    <>
    <button
      onClick={onToggle}
      className="group w-full text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-black focus-visible:outline-offset-3"
    >
      <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[2fr_3fr] md:gap-12">
        {/* Image placeholder */}
        <div
          className="cursor-zoom-in overflow-hidden border border-gray-200 transition-all duration-100 group-hover:border-black"
          onClick={(e) => { e.stopPropagation(); setShowLightbox(true) }}
        >
          <ImagePlaceholder
            src={project.images[0]?.src ?? ''}
            label={project.images[0]?.label ?? project.title}
            aspectRatio="4:3"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
            {project.date}
          </span>
          <h3 className={`mt-2 text-3xl font-bold uppercase tracking-wide md:text-4xl ${project.titleFont ?? 'font-display'}`}>
            {project.title}
          </h3>
          <p className="mt-1 font-body text-base italic text-gray-600">
            {project.subtitle}
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-gray-500">
            {project.role}
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-all duration-100 group-hover:gap-3">
            <span>{isExpanded ? 'Close' : 'View Project'}</span>
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className={`transition-transform duration-100 ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </button>

    {showLightbox && project.images[0] && (
      <Lightbox
        src={project.images[0].src}
        alt={project.images[0].label}
        onClose={() => setShowLightbox(false)}
      />
    )}
    </>
  )
}
