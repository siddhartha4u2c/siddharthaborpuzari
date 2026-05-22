import { motion } from 'framer-motion'
import Section from './Section'
import { experiences } from '../data'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional Journey"
      title="Experience"
      subtitle="15+ years spanning data engineering, business analysis, sales and design across global enterprises."
    >
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-fuchsia-500/60 via-violet-500/40 to-cyan-500/60" />

        <ul className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-14 sm:pl-20"
            >
              <span
                className={`absolute left-0 sm:left-1.5 top-1 h-9 w-9 rounded-full bg-gradient-to-br ${exp.color} grid place-items-center shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)] ring-4 ring-white`}
                aria-hidden
              >
                <FaBriefcase className="text-white text-sm" />
              </span>

              <div className="glass glass-hover p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900">{exp.role}</h3>
                    <p>
                      <span className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold`}>
                        {exp.company}
                      </span>
                    </p>
                  </div>
                  <span className="chip self-start sm:self-auto">{exp.period}</span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-none`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
