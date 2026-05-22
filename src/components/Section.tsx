import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
}>

export default function Section({ id, eyebrow, title, subtitle, children }: Props) {
  return (
    <section id={id} className="py-20 sm:py-28 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-10 sm:mb-14"
      >
        {eyebrow && (
          <span className="chip mb-4 border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200">
            {eyebrow}
          </span>
        )}
        <h2 className="section-title">
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-slate-300/90">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </section>
  )
}
