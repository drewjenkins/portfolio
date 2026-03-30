import { motion } from 'framer-motion'

const techs = [
  { name: 'React', color: 'text-cyan-400' },
  { name: 'TypeScript', color: 'text-blue-400' },
  { name: 'Node.js', color: 'text-green-400' },
  { name: 'Tailwind CSS', color: 'text-sky-400' },
  { name: 'PostgreSQL', color: 'text-indigo-400' },
  { name: 'Prisma', color: 'text-slate-300' },
  { name: 'Next.js', color: 'text-zinc-300' },
  { name: 'Fastify', color: 'text-orange-400' },
  { name: 'Vercel', color: 'text-zinc-100' },
  { name: 'Git', color: 'text-red-400' },
  { name: 'Framer Motion', color: 'text-purple-400' },
  { name: 'Zustand', color: 'text-amber-400' },
]

export default function TechStack() {
  return (
    <section className="py-16 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-zinc-600 text-xs font-mono uppercase tracking-widest mb-10">
          Technologies I work with
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors"
            >
              <span className={`font-mono text-sm font-medium ${tech.color}`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
