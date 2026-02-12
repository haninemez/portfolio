import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'
import { TOOLS } from '../../lib/constants'
import hanineImage from '../../images/Hanine image.png'

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#918cc5] px-6 py-16 text-white md:px-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading inverted>About</SectionHeading>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="flex items-start justify-center">
            <img
              src={hanineImage}
              alt="Hanine Mezghiche"
              className="max-h-95 w-auto object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-body text-lg leading-relaxed text-gray-300">
              Hanine Mezghiche is a freelance 3D sculptor based in Paris,
              specializing in doll accessories and articulated dolls for the toy
              industry. With deep expertise in{' '}
              <strong className="text-white">ZBrush</strong> for digital
              sculpting and <strong className="text-white">Blender</strong> for
              rendering and modeling, she translates 2D concepts into
              production-ready 3D models with meticulous attention to miniature
              detail.
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-gray-300">
              Her professional collaborations include work with major licensed
              brands such as <strong className="text-white">Bratz</strong> and{' '}
              <strong className="text-white">Gentle Monster</strong>, delivering
              accessories, articulated bodies, and sculptural props that balance
              artistic vision with manufacturing constraints. She also
              experiments with 3D printing for personal and collaborative
              projects.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <Tag key={tool} inverted>{tool}</Tag>
          ))}
        </div>
      </div>
    </section>
  )
}
