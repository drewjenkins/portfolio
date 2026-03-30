import { motion } from 'framer-motion'
import { Mail, MapPin, Clock } from 'lucide-react'
import GithubIcon from '../components/ui/GithubIcon'
import PageTransition from '../components/ui/PageTransition'
import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-emerald-500 text-sm font-mono font-medium tracking-wider uppercase">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mt-2 mb-4">
                Let's Work Together
              </h1>
              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                Have a project in mind? Tell me about it. I'm currently taking on new clients and I'd love to hear what you're building.
              </p>

              <div className="space-y-5 mb-12">
                <a
                  href="mailto:andrew.jenkins88@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 group-hover:bg-zinc-800 transition-all">
                    <Mail size={17} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 font-medium uppercase tracking-wide mb-0.5">Email</p>
                    <p className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
                      andrew.jenkins88@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/drewjenkins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 group-hover:bg-zinc-800 transition-all">
                    <GithubIcon size={17} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 font-medium uppercase tracking-wide mb-0.5">GitHub</p>
                    <p className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
                      github.com/drewjenkins
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <MapPin size={17} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 font-medium uppercase tracking-wide mb-0.5">Location</p>
                    <p className="text-sm text-zinc-400">Belgrade, MT (Mountain Time)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Clock size={17} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 font-medium uppercase tracking-wide mb-0.5">Response Time</p>
                    <p className="text-sm text-zinc-400">Typically within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
                <p className="text-zinc-500 text-xs leading-relaxed">
                  <span className="text-zinc-300 font-medium">Not sure if your project is a fit?</span> Send a message anyway. I'm happy to give a quick honest assessment, even if I'm not the right developer for the job.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
