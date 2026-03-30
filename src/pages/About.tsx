import { motion } from 'framer-motion'
import { Rocket, MessageSquare, Wrench } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import TechBadge from '../components/ui/TechBadge'
import GithubIcon from '../components/ui/GithubIcon'
import LinkedInIcon from '../components/ui/LinkedInIcon'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs', 'MERN Stack'],
  },
  {
    category: 'Integrations',
    items: ['Salesforce', 'HubSpot', 'Zendesk', 'Webhooks', 'OAuth'],
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
      "I believe in launching early and iterating. A working v1 in your users' hands is more valuable than a perfect v2 that never ships. I scope work tightly, cut scope when needed, and keep momentum.",
  },
  {
    icon: MessageSquare,
    title: 'Communicate Clearly',
    description:
      "No jargon, no disappearing acts. You'll get regular updates in plain English, an honest assessment of tradeoffs, and quick responses to your questions throughout the project.",
  },
  {
    icon: Wrench,
    title: 'Build It Right',
    description:
      "Clean code that your next developer (or future-you) will thank you for. Typed, tested where it matters, and documented so the knowledge doesn't leave when I do.",
  },
]

const timeline = [
  { year: '2014', event: 'Graduated from Montana State University with a BS in Computer Science.' },
  { year: '2015', event: 'Joined Oracle as a software developer, working on enterprise-scale applications and data integrations.' },
  { year: '2019', event: 'Moved to HubSpot as a software developer, building CRM tooling and platform integrations used by thousands of customers.' },
  { year: '2024', event: 'Available for freelance work, bringing 11 years of professional experience to smaller teams and focused projects.' },
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
                  I'm a senior software engineer with 11 years of professional experience, based in Belgrade, Montana. I hold a BS in Computer Science from Montana State University and have spent my career at companies like Oracle and HubSpot, where I worked on large-scale applications and platform integrations.
                </p>
                <p>
                  My strongest areas are TypeScript, React, Node.js, and the MERN stack. I've also spent a lot of time on integration work, connecting tools like Salesforce, HubSpot, and Zendesk to client applications. If your project involves stitching systems together, I'm comfortable in that territory.
                </p>
                <p>
                  Outside of work, I live in Belgrade with my wife and our twin boys, Owen and Henry. When I'm not at the keyboard, I'm probably somewhere outside in Montana.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://github.com/drewjenkins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 text-sm transition-colors"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/andrewjamesjenkins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 text-sm transition-colors"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                </a>
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
                    src="/andrew.jpeg"
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <SectionHeading label="Experience" title="Background" />
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
