import { motion } from 'framer-motion'
import Section from './Section'
import { education } from '../data'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <div className="grid md:grid-cols-2 gap-5">
        {education.map((e, idx) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass glass-hover p-6 relative overflow-hidden"
          >
            <div className={`absolute -top-16 -left-16 h-40 w-40 rounded-full bg-gradient-to-br ${e.color} opacity-20 blur-2xl`} />
            <div className="flex items-start gap-4 relative">
              <span className={`grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br ${e.color} text-white text-xl shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)] flex-none`}>
                <FaGraduationCap />
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg text-slate-900">{e.degree}</h3>
                <p className="text-slate-700 mt-1">{e.institute}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="chip">{e.stream}</span>
                  <span className="chip">{e.period}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
