import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-6">
            Open to new projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-zinc-100 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
            Whether you need a web app built from scratch, a business site revamped, or an existing codebase cleaned up — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-medium px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
            >
              See My Work First
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
