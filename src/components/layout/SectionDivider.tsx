interface SectionDividerProps {
  weight?: 'heavy' | 'standard'
}

export default function SectionDivider({
  weight = 'heavy',
}: SectionDividerProps) {
  return (
    <hr
      className={`w-full border-0 bg-black ${
        weight === 'heavy' ? 'h-2' : 'h-1'
      }`}
    />
  )
}
