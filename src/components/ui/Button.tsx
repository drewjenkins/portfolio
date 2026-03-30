import { Link } from 'react-router-dom'
import { type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  to?: string
  external?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold',
  secondary: 'border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 bg-transparent',
  ghost: 'text-emerald-400 hover:text-emerald-300 bg-transparent',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  external,
  className = '',
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = `inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={base}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={base} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
