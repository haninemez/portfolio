interface SectionHeadingProps {
  children: React.ReactNode
  subtitle?: string
  inverted?: boolean
}

export default function SectionHeading({
  children,
  subtitle,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <h2
        className={`font-display text-4xl font-bold uppercase tracking-wider md:text-5xl ${
          inverted ? 'text-white' : 'text-black'
        }`}
      >
        {children}
      </h2>
      <div
        className={`mt-4 h-1 w-16 ${inverted ? 'bg-white' : 'bg-black'}`}
      />
      {subtitle && (
        <p
          className={`mt-6 font-body text-lg italic ${
            inverted ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
