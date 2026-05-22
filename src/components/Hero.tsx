import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { profile, stats } from '../data'

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-12">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="chip border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to interesting opportunities
          </span>

          <h1 className="mt-5 font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Hi, I’m{' '}
            <span className="gradient-text">{profile.name.split(' ')[0]}</span>{' '}
            <span className="block text-slate-100">{profile.name.split(' ')[1]}</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-slate-300">{profile.title}</p>

          <p className="mt-6 max-w-2xl text-slate-300/90 leading-relaxed">
            I design and build <span className="text-fuchsia-300 font-medium">cloud-native data platforms</span> on Microsoft Azure,
            create <span className="text-cyan-300 font-medium">GenAI-powered applications</span>, and bring a unique{' '}
            <span className="text-violet-300 font-medium">engineering + business</span> perspective to every problem I solve.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              <FaEnvelope /> Get in touch
            </a>
            <a href="#projects" className="btn-ghost">View Projects</a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-slate-300">
            <SocialLink href={profile.socials.linkedin} icon={<FaLinkedin />} label="LinkedIn" hue="text-sky-400" />
            <SocialLink href={profile.socials.github} icon={<FaGithub />} label="GitHub" hue="text-slate-100" />
            <SocialLink href={profile.socials.leetcode} icon={<SiLeetcode />} label="LeetCode" hue="text-amber-400" />
            <SocialLink href={profile.socials.hackerrank} icon={<SiHackerrank />} label="HackerRank" hue="text-emerald-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto lg:ml-auto"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-500 animate-pulse-slow blur-2xl opacity-60" />
            <div className="relative h-full w-full rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-500 p-[4px] shadow-glow animate-float">
              <div className="relative h-full w-full rounded-full overflow-hidden bg-[#0b0b1f] ring-2 ring-white/10">
                <img
                  src="/siddhartha.png"
                  alt="Siddhartha Borpuzari"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'grid'
                  }}
                />
                <div
                  className="absolute inset-0 hidden place-items-center bg-[#0b0b1f]"
                >
                  <span className="font-display text-7xl font-bold gradient-text select-none">SB</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0b1f]/60 to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Floating chips */}
            <FloatingChip className="-top-2 -left-4 from-fuchsia-500 to-pink-500" label="Azure" />
            <FloatingChip className="-top-2 -right-4 from-cyan-500 to-blue-500" label="PySpark" />
            <FloatingChip className="-bottom-4 -left-6 from-emerald-500 to-teal-500" label="GenAI" />
            <FloatingChip className="-bottom-4 -right-2 from-amber-500 to-rose-500" label="Python" />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="glass p-5 text-center glass-hover">
            <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-slate-300">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

function SocialLink({
  href, icon, label, hue,
}: { href: string; icon: React.ReactNode; label: string; hue: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`group relative grid place-items-center h-11 w-11 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition ${hue}`}
    >
      <span className="text-lg">{icon}</span>
      <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-slate-200 bg-white/10 backdrop-blur px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
        {label}
      </span>
    </a>
  )
}

function FloatingChip({ className, label }: { className: string; label: string }) {
  return (
    <div
      className={`absolute ${className} px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r shadow-glow animate-float`}
      style={{ animationDelay: `${Math.random() * 2}s` }}
    >
      {label}
    </div>
  )
}
