interface TagProps {
  children: React.ReactNode
  inverted?: boolean
}

export default function Tag({ children, inverted = false }: TagProps) {
  return (
    <span
      className={`inline-block border px-3 py-1.5 font-mono text-xs uppercase tracking-widest ${
        inverted
          ? 'border-white text-white'
          : 'border-black text-black'
      }`}
    >
      {children}
    </span>
  )
}
