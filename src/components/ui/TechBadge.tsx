interface TechBadgeProps {
  label: string
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800 text-emerald-400 border border-zinc-700/50">
      {label}
    </span>
  )
}
