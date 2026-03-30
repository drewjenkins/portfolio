import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono font-semibold text-zinc-100 hover:text-emerald-400 transition-colors"
        >
          <span className="text-emerald-500">{'>'}</span> andrew.dev
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                to={href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === href
                    ? 'text-emerald-400'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Hire Me
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800/50 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              className={`text-sm font-medium py-1 transition-colors ${
                location.pathname === href
                  ? 'text-emerald-400'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-sm font-semibold px-4 py-2 rounded-lg transition-colors mt-2"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  )
}
