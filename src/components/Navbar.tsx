import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-xl bg-[#0b0b1f]/70 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 text-white font-display font-bold shadow-glow">
            SB
          </span>
          <span className="hidden sm:block font-display font-semibold text-slate-100">
            Siddhartha<span className="gradient-text">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-full text-sm text-slate-300 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">
            Let’s Talk
          </a>
          <a
            href="#top"
            aria-label="Siddhartha Borpuzari"
            className="relative grid place-items-center h-10 w-10 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-500 p-[2px] shadow-glow hover:scale-105 transition"
          >
            <span className="block h-full w-full rounded-full overflow-hidden bg-[#0b0b1f]">
              <img
                src="/siddhartha.jpg"
                alt="Siddhartha"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement
                  if (!t.dataset.fallbackTried) {
                    t.dataset.fallbackTried = '1'
                    t.src = '/siddhartha.png'
                    return
                  }
                  t.style.display = 'none'
                }}
              />
            </span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-px bg-white relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-px before:bg-white after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-5 after:h-px after:bg-white" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b1f]/95 backdrop-blur-xl">
          <ul className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                Let’s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  )
}
