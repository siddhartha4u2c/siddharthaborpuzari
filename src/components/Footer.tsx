import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 text-white font-display font-bold shadow-glow">
            SB
          </span>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {profile.name}. Crafted with{' '}
            <FaHeart className="inline -mt-1 text-rose-400" /> using React, Tailwind & Framer Motion.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { href: profile.socials.linkedin, icon: <FaLinkedin />, label: 'LinkedIn' },
            { href: profile.socials.github, icon: <FaGithub />, label: 'GitHub' },
            { href: profile.socials.leetcode, icon: <SiLeetcode />, label: 'LeetCode' },
            { href: profile.socials.hackerrank, icon: <SiHackerrank />, label: 'HackerRank' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-slate-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
