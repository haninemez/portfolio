import SectionHeading from '../ui/SectionHeading'
import SectionDivider from '../layout/SectionDivider'
import Tag from '../ui/Tag'
import ImageCarousel from '../projects/ImageCarousel'
import { personalByYear } from '../../data/projects'

export default function PersonalSection() {
  if (!personalByYear.length) return null

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

        {personalByYear.map(({ year, projects }, groupIndex) => (
          <div key={year}>
            {groupIndex > 0 && <SectionDivider weight="heavy" />}
            <h3 className="font-display text-5xl font-black text-gray-200 md:text-7xl lg:text-8xl mb-8 select-none">
              {year}
            </h3>
            <div className="space-y-24">
              {projects.map((project) => (
                <div key={project.id}>
                  {/* Project header */}
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                        {project.date}
                      </span>
                      <h4 className={`mt-2 text-3xl font-bold uppercase tracking-wide md:text-5xl ${project.titleFont ?? 'font-display'}`}>
                        {project.title}
                      </h4>
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
                        <h5 className="font-mono text-xs uppercase tracking-widest text-black">
                          Details
                        </h5>
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
