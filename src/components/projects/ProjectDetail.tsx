import { motion } from 'framer-motion'
import type { Project } from '../../types/project'
import ImageCarousel from './ImageCarousel'
import Tag from '../ui/Tag'

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.15 }}
      className="overflow-hidden"
    >
      <div className="border-t border-gray-200 bg-gray-100 px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Description */}
          <p className="max-w-3xl font-body text-lg leading-relaxed text-gray-600">
            {project.description}
          </p>

          {/* Details */}
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-black">
                Items Created
              </h4>
              <ul className="mt-4 space-y-2">
                {project.details.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-base text-gray-600"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              {project.exhibitions && project.exhibitions.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-black">
                    Exhibitions
                  </h4>
                  <ul className="mt-4 space-y-2">
                    {project.exhibitions.map((location) => (
                      <li
                        key={location}
                        className="font-body text-base text-gray-600"
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.collaboration && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-black">
                    Collaboration
                  </h4>
                  <p className="mt-4 font-body text-base text-gray-600">
                    {project.collaboration}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-black">
                  Tools
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image carousel */}
          <ImageCarousel images={project.images} />
        </div>
      </div>
    </motion.div>
  )
}
