import { type ReactNode } from 'react'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: ReactNode
  centered?: boolean
}

export default function SectionHeading({ label, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <span className="text-emerald-500 text-sm font-mono font-medium tracking-wider uppercase">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold text-zinc-100 mt-2 mb-4 ${label ? 'mt-2' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
