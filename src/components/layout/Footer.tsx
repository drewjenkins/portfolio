import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import GithubIcon from '../ui/GithubIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono font-semibold text-zinc-100 mb-3">
              <span className="text-emerald-500">{'>'}</span> andrew.dev
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Full-stack web developer building fast, polished applications that help businesses grow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-300 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link to={href} className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-300 mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:andrew.jenkins88@gmail.com"
                  className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                >
                  <Mail size={14} />
                  andrew.jenkins88@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/drewjenkins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                >
                  <GithubIcon size={14} />
                  github.com/drewjenkins
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-zinc-500 text-sm">
                  <MapPin size={14} />
                  Colorado, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            &copy; {year} Andrew Jenkins. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs font-mono">
            Built with React + TypeScript + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
