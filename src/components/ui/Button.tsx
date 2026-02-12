interface ButtonProps {
  variant?: 'filled' | 'outline'
  inverted?: boolean
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'filled',
  inverted = false,
  href,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-8 py-4 font-mono text-sm uppercase tracking-widest font-medium transition-colors duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3'

  const variants = {
    filled: inverted
      ? 'bg-white text-black border-2 border-white hover:bg-transparent hover:text-white focus-visible:outline-white'
      : 'bg-black text-white border-2 border-black hover:bg-white hover:text-black focus-visible:outline-black',
    outline: inverted
      ? 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black focus-visible:outline-white'
      : 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white focus-visible:outline-black',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
