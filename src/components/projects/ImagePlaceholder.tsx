interface ImagePlaceholderProps {
  src: string
  label: string
  aspectRatio?: '4:3' | '1:1' | '16:9'
}

const aspectClasses = {
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '16:9': 'aspect-video',
}

export default function ImagePlaceholder({
  src,
  label,
  aspectRatio = '4:3',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`overflow-hidden bg-gray-100 ${aspectClasses[aspectRatio]}`}
    >
      <img
        src={src}
        alt={label}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  )
}
