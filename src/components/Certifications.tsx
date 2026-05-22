import { motion } from 'framer-motion'
import Section from './Section'
import { certifications } from '../data'
import { FaCertificate } from 'react-icons/fa'

const colors = [
  'from-fuchsia-500 to-violet-500',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-rose-500',
  'from-cyan-500 to-blue-500',
]

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Continuous Learning"
      title="Certifications"
      subtitle="Hand-picked programs that complement my data & AI craft."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="glass glass-hover p-5 flex items-start gap-4"
          >
            <span className={`grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${colors[idx % colors.length]} text-white shadow-glow flex-none`}>
              <FaCertificate />
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-slate-100 leading-snug">{c.title}</h3>
              <p className="text-sm text-slate-400 mt-1">
                {c.issuer} <span className="text-slate-500">·</span> {c.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
