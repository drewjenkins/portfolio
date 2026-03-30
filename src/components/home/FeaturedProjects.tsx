import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard, { type Project } from '../ui/ProjectCard'

const featured: Project[] = [
  {
    name: 'BudgetFlow',
    description:
      'A full-stack personal finance app for tracking expenses, categorizing transactions, and managing budgets across multiple accounts. Clean, responsive dashboard with real-time spending insights.',
    tech: ['React', 'TypeScript', 'Fastify', 'Prisma', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    liveUrl: 'https://budgetflow-app-nine.vercel.app',
    sourceUrl: 'https://github.com/drewjenkins/budgetflow',
  },
  {
    name: 'Peak Ridge Contracting',
    description:
      'A professional marketing website for a Colorado home contracting company. Built for trust, lead generation, and fast load times on any device.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    liveUrl: 'https://peakridge.vercel.app',
    sourceUrl: 'https://github.com/drewjenkins/peakridge',
  },
  {
    name: 'Copperline Coffee Roasters',
    description:
      'An e-commerce storefront with product filtering, a persistent cart, and a multi-step checkout flow. Smooth Framer Motion animations throughout.',
    tech: ['React', 'TypeScript', 'Zustand', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    liveUrl: 'https://copperline.vercel.app',
    sourceUrl: 'https://github.com/drewjenkins/copperline',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            label="Selected Work"
            title="Featured Projects"
            subtitle="A sample of recent projects."
          />
          <Link
            to="/projects"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors shrink-0"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
