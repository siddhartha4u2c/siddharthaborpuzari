import { motion } from 'framer-motion'
import Section from './Section'
import { skillGroups } from '../data'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title="Skills & Tools"
      subtitle="From cloud data platforms to GenAI frameworks — a versatile toolkit honed across enterprise projects."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, idx) => (
          <motion.div
            key={g.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="glass glass-hover p-6 relative overflow-hidden group"
          >
            <div
              className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${g.gradient} opacity-25 group-hover:opacity-50 blur-2xl transition`}
            />
            <div className="flex items-center gap-3 relative">
              <span className={`grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br ${g.gradient} text-xl shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)]`}>
                {g.icon}
              </span>
              <h3 className="font-display font-semibold text-lg text-slate-900">{g.category}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 relative">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="chip hover:bg-white hover:border-slate-300 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
