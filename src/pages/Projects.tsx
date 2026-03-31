import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import { type Project } from '../components/ui/ProjectCard'

const projects: Project[] = [
  {
    name: 'BudgetFlow',
    description:
      'A full-stack personal finance application for tracking expenses, categorizing transactions, and managing budgets across multiple accounts. Built with a Fastify REST API, Prisma ORM, and a PostgreSQL database, deployed to Vercel and Railway. The dashboard gives users a real-time view of spending patterns and budget health.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Fastify', 'Prisma', 'PostgreSQL', 'Vercel'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80',
    liveUrl: 'https://budgetflow-app-nine.vercel.app',
    sourceUrl: 'https://github.com/drewjenkins/budgetflow',
  },
  {
    name: 'Peak Ridge Contracting',
    description:
      'A professional marketing website for a Colorado-based home contracting company. Designed to build credibility, showcase services, and capture leads. Features a contact form powered by Resend email API, fully responsive layout, and fast page loads optimized for local SEO.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Resend'],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    liveUrl: 'https://peakridge.vercel.app',
    sourceUrl: 'https://github.com/drewjenkins/peakridge',
  },
  {
    name: 'Copperline Coffee Roasters',
    description:
      'A fully featured e-commerce storefront for an artisan coffee brand. Includes product catalog with category filtering, a persistent cart powered by Zustand, and a multi-step checkout flow with order confirmation. Polished Framer Motion animations throughout give the site a premium feel that reflects the brand. Built entirely on the frontend with no backend required.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'Vercel'],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80',
    liveUrl: 'https://copperline.vercel.app',
    sourceUrl: 'https://github.com/drewjenkins/copperline',
  },
  {
    name: 'CryptoKeeper',
    description:
      'A Crypto.com portfolio tracker that parses CSV transaction exports to calculate positions, cost basis, gains/losses, and cashback rewards. Pulls live market prices for 4000+ coins via CoinGecko. Built because Crypto.com had no portfolio view and no public API. Features 40+ transaction types, wash sale detection, real-time WebSocket price feeds, two-tier Redis caching, and a PWA shell. Used HubSpot serverless functions as free compute for background workers.',
    tech: ['React', 'TypeScript', 'Material UI', 'Node.js', 'Express', 'Redis', 'ElasticSearch', 'WebSockets', 'Auth0', 'CoinGecko API'],
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=900&q=80',
    sourceUrl: 'https://github.com/drewjenkins/crypto-keeper',
    archived: true,
  },
]

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <SectionHeading
              label="Portfolio"
              title="Selected Work"
              subtitle="A sample of recent projects, each one built to solve a real problem."
              centered
            />
          </div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ProjectCaseStudy project={project} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

import TechBadge from '../components/ui/TechBadge'
import GithubIcon from '../components/ui/GithubIcon'
import { ExternalLink } from 'lucide-react'

function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/30 overflow-hidden hover:border-zinc-700/80 transition-all duration-300">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Image */}
        <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">{project.name}</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {project.archived ? (
              <span className="inline-flex items-center gap-2 border border-zinc-700/60 text-zinc-500 font-medium px-5 py-2.5 rounded-lg text-sm">
                Archived
              </span>
            ) : project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm"
              >
                <ExternalLink size={14} />
                View Live Site
              </a>
            ) : null}
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-medium px-5 py-2.5 rounded-lg transition-all duration-200 text-sm"
            >
              <GithubIcon size={14} />
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
