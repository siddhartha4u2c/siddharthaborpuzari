import { motion } from 'framer-motion'
import Section from './Section'
import { profile } from '../data'
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className={`absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} opacity-20 group-hover:opacity-40 blur-2xl transition`} />
            <div className="flex items-center justify-between">
              <span className={`grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${p.gradient} text-white text-xl shadow-glow`}>
                {p.icon}
              </span>
              <FaExternalLinkAlt className="text-slate-400 group-hover:text-white transition" />
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-slate-300/90 mt-1">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
