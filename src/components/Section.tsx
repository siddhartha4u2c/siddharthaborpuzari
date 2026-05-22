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
          <span className="chip mb-4 border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700">
            {eyebrow}
          </span>
        )}
        <h2 className="section-title">
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-slate-600">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </section>
  )
}
