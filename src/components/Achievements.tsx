import { motion } from 'framer-motion'
import Section from './Section'
import { profile } from '../data'
import { FaLinkedin, FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const platforms = [
  {
    name: 'LinkedIn',
    desc: 'Professional profile, recommendations & network',
    href: profile.socials.linkedin,
    icon: <FaLinkedin />,
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    name: 'GitHub',
    desc: 'Open source code, AI/data projects & experiments',
    href: profile.socials.github,
    icon: <FaGithub />,
    gradient: 'from-slate-500 to-slate-700',
  },
  {
    name: 'YouTube',
    desc: 'Walk-throughs, demos & technical content',
    href: profile.socials.youtube,
    icon: <FaYoutube />,
    gradient: 'from-red-500 to-rose-600',
  },
  {
    name: 'LeetCode',
    desc: 'Data structures & algorithms practice profile',
    href: profile.socials.leetcode,
    icon: <SiLeetcode />,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'HackerRank',
    desc: 'Problem-solving badges & domain certifications',
    href: profile.socials.hackerrank,
    icon: <SiHackerrank />,
    gradient: 'from-emerald-500 to-green-600',
  },
]

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Profiles & Achievements"
      title="Where I build & compete"
      subtitle="Connect with me or explore my coding profiles."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {platforms.map((p, idx) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="glass glass-hover p-6 relative overflow-hidden group"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.gradient}`} />
            <div className={`absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} opacity-25 group-hover:opacity-45 blur-2xl transition`} />
            <div className="flex items-center justify-between relative">
              <span className={`grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${p.gradient} text-white text-xl shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)]`}>
                {p.icon}
              </span>
              <FaExternalLinkAlt className="text-slate-400 group-hover:text-slate-900 transition" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg text-slate-900 relative">{p.name}</h3>
            <p className="text-sm text-slate-700 mt-1 relative">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
