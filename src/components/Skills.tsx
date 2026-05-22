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
              className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${g.gradient} opacity-20 group-hover:opacity-40 blur-2xl transition`}
            />
            <div className="flex items-center gap-3">
              <span className={`grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br ${g.gradient} text-xl shadow-glow`}>
                {g.icon}
              </span>
              <h3 className="font-display font-semibold text-lg">{g.category}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className={`chip border-white/10 bg-white/[0.06] hover:bg-white/10 hover:border-white/20 transition`}
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
