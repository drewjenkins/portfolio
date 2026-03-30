import { motion } from 'framer-motion'
import { Code2, MessageSquare, Clock } from 'lucide-react'

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'Well-structured, readable, and maintainable code. No hacks, no shortcuts. Just solid engineering that scales with your business.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'Regular updates, plain-language explanations, and no jargon. You\'ll always know where your project stands.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'Realistic timelines set upfront, consistent progress, and delivery when promised. Your launch date matters to me.',
  },
]

export default function ValueProps() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-500 text-sm font-mono font-medium tracking-wider uppercase">
            What to Expect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mt-2">
            Working With Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-8 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700/80 hover:bg-zinc-900/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/15 transition-colors">
                <Icon size={22} className="text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-3">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
