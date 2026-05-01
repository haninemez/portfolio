import { useState, Fragment } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import SectionDivider from '../layout/SectionDivider'
import ProjectCard from '../projects/ProjectCard'
import ProjectDetail from '../projects/ProjectDetail'
import { professionalByYear } from '../../data/projects'

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="projects" className="px-6 py-24 md:px-12 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading subtitle="Professional collaborations with major toy brands">
          Professional Work
        </SectionHeading>

        {professionalByYear.map(({ year, projects }, groupIndex) => (
          <div key={year}>
            {groupIndex > 0 && <div className="mt-16" />}
            <h3 className="font-display text-5xl font-black text-[#918cc5] md:text-7xl lg:text-8xl mb-8 select-none">
              {year}
            </h3>
            {projects.map((project, index) => (
              <Fragment key={project.id}>
                {index > 0 && <SectionDivider weight="standard" />}
                <ProjectCard
                  project={project}
                  isExpanded={expandedId === project.id}
                  onToggle={() =>
                    setExpandedId(
                      expandedId === project.id ? null : project.id
                    )
                  }
                />
                <AnimatePresence>
                  {expandedId === project.id && (
                    <ProjectDetail project={project} />
                  )}
                </AnimatePresence>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
