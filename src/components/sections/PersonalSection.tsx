import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'
import ImageCarousel from '../projects/ImageCarousel'
import { personalProjects } from '../../data/projects'

export default function PersonalSection() {
  const project = personalProjects[0]
  if (!project) return null

  return (
    <section
      id="personal"
      className="relative px-6 py-24 md:px-12 md:py-32 lg:py-40"
    >
      {/* Texture overlay */}
      <div className="texture-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading subtitle="Independent explorations and collaborations">
          Personal Work
        </SectionHeading>

        <div className="mt-8">
          {/* Project header */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                {project.date}
              </span>
              <h3 className={`mt-2 text-3xl font-bold uppercase tracking-wide md:text-5xl ${project.titleFont ?? 'font-display'}`}>
                {project.title}
              </h3>
              <p className="mt-2 font-body text-lg italic text-gray-600">
                {project.subtitle}
              </p>
              {project.collaboration && (
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-gray-500">
                  In collaboration with {project.collaboration}
                </p>
              )}
            </div>

            <div>
              <p className="font-body text-lg leading-relaxed text-gray-600">
                {project.description}
              </p>

              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-widest text-black">
                  Details
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

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </div>
          </div>

          {/* Image carousel */}
          <ImageCarousel images={project.images} />
        </div>
      </div>
    </section>
  )
}
