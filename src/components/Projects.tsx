import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import { projects } from '../data'
import { FaRocket, FaExternalLinkAlt, FaTimes, FaExpand } from 'react-icons/fa'

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects"
      subtitle="A selection of AI / data projects built end-to-end — from idea to deployment."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="glass glass-hover overflow-hidden group flex flex-col"
          >
            <div className={`h-1 bg-gradient-to-r ${p.color}`} />

            {p.image && (
              <button
                type="button"
                onClick={() => setLightbox({ src: p.image!, title: p.title })}
                className="relative block w-full aspect-[16/10] overflow-hidden bg-slate-100"
                aria-label={`View ${p.title} screenshot`}
              >
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement
                    t.style.display = 'none'
                  }}
                />
                <span className="absolute top-3 right-3 chip border-slate-300 bg-white/90 backdrop-blur text-slate-700">
                  <FaExpand className="text-xs" /> Click to enlarge
                </span>
                {p.liveUrl && (
                  <span className="absolute bottom-3 left-3 chip border-emerald-300 bg-emerald-50/95 text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live demo
                  </span>
                )}
              </button>
            )}

            <div className="p-6 relative flex-1 flex flex-col">
              <div className={`absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.color} opacity-20 group-hover:opacity-35 blur-2xl transition pointer-events-none`} />

              <div className="flex items-start gap-3 relative">
                <span className={`grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br ${p.color} text-white shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)] flex-none`}>
                  <FaRocket />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-lg leading-tight text-slate-900">{p.title}</h3>
                  {p.period && <p className="text-xs text-slate-500 mt-0.5">{p.period}</p>}
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-700 leading-relaxed relative">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              {p.liveUrl && (
                <div className="mt-5 relative">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${p.color} shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)] hover:-translate-y-0.5 transition`}
                  >
                    Visit live app <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md grid place-items-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full cursor-default"
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 grid place-items-center h-10 w-10 rounded-full bg-white/90 hover:bg-white text-slate-900 border border-white shadow-md transition"
              >
                <FaTimes />
              </button>
              <div className="rounded-2xl overflow-hidden border border-white/30 shadow-2xl bg-white">
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="block w-full h-auto"
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/90">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
