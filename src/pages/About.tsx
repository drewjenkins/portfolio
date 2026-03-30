import { motion } from 'framer-motion'
import { Rocket, MessageSquare, Wrench } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import TechBadge from '../components/ui/TechBadge'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Fastify', 'Express', 'PostgreSQL', 'Prisma'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Vercel', 'Railway', 'Figma', 'VS Code'],
  },
]

const approach = [
  {
    icon: Rocket,
    title: 'Ship Fast',
    description:
      'I believe in launching early and iterating. A working v1 in your users\' hands is more valuable than a perfect v2 that never ships. I scope work tightly, cut scope when needed, and keep momentum.',
  },
  {
    icon: MessageSquare,
    title: 'Communicate Clearly',
    description:
      'No jargon, no disappearing acts. You\'ll get regular updates in plain English, an honest assessment of tradeoffs, and quick responses to your questions throughout the project.',
  },
  {
    icon: Wrench,
    title: 'Build It Right',
    description:
      'Clean code that your next developer (or future-you) will thank you for. Typed, tested where it matters, and documented so the knowledge doesn\'t leave when I do.',
  },
]

const timeline = [
  { year: '2019', event: 'Started freelancing alongside a full-time role at a Denver SaaS startup, building internal tooling and dashboards.' },
  { year: '2021', event: 'Went full-time freelance after growing a client base through Upwork and referrals. Specializing in React + Node.js applications.' },
  { year: '2022', event: 'Expanded into e-commerce and full-stack SaaS work. Added Prisma + PostgreSQL to the stack.' },
  { year: '2024', event: 'Delivered 20+ projects across industries including finance, home services, and food & beverage.' },
]

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Hero / Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-emerald-500 text-sm font-mono font-medium tracking-wider uppercase">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mt-2 mb-6">
                Developer, Belgrade, MT.
              </h1>
              <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
                <p>
                  I'm a full-stack developer based in Belgrade, Montana with 5+ years of experience building web applications for startups, small businesses, and independent clients. I got my start in computer science, spent a few years at a Denver SaaS company building internal tooling, then went freelance to work directly with the businesses behind the products.
                </p>
                <p>
                  These days I specialize in React front-ends and Node.js backends, primarily apps that need to be fast, maintainable, and designed with the end user in mind. I enjoy the full picture: from database schema to UI animation.
                </p>
                <p>
                  When I'm not writing code, I'm probably out exploring Montana or tinkering with a side project. I work primarily with clients in the US and operate on Mountain Time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Andrew Jenkins"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Accent border decoration */}
                <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl border border-emerald-500/20 pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-24"
          >
            <SectionHeading label="Skills" title="What I Work With" />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {skills.map(({ category, items }) => (
                <div key={category} className="p-6 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
                  <h3 className="text-sm font-semibold text-zinc-300 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <TechBadge key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-24"
          >
            <SectionHeading label="Philosophy" title="My Approach" />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {approach.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="p-8 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700/80 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 mb-3">{title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionHeading label="Experience" title="Timeline" />
            <div className="mt-10 space-y-0 relative">
              {/* Vertical line */}
              <div className="absolute left-16 top-0 bottom-0 w-px bg-zinc-800 hidden sm:block" />
              {timeline.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="flex gap-8 items-start py-6 border-b border-zinc-800/40 last:border-0"
                >
                  <div className="text-emerald-500 font-bold text-sm shrink-0 w-12 pt-0.5 text-right relative">
                    {year}
                    {/* Dot */}
                    <div className="absolute -right-[2.15rem] top-1 w-2 h-2 rounded-full bg-emerald-500 hidden sm:block" />
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed sm:pl-6">{event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  )
}
