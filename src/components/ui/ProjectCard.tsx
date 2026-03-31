import { ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'
import TechBadge from './TechBadge'
import Button from './Button'

export interface Project {
  name: string
  description: string
  tech: string[]
  imageUrl: string
  liveUrl?: string
  sourceUrl: string
  archived?: boolean
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <div className={`group rounded-xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden hover:border-zinc-700/80 transition-all duration-300 ${featured ? '' : ''}`}>
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/10 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold font-mono text-zinc-100 mb-2">{project.name}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          {project.archived ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 border border-zinc-700/60 rounded-lg px-4 py-2">
              Archived
            </span>
          ) : project.liveUrl ? (
            <Button href={project.liveUrl} external variant="primary" className="text-xs px-4 py-2">
              <ExternalLink size={13} />
              View Live
            </Button>
          ) : null}
          <Button href={project.sourceUrl} external variant="secondary" className="text-xs px-4 py-2">
            <GithubIcon size={13} />
            Source
          </Button>
        </div>
      </div>
    </div>
  )
}
