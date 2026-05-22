import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import { otherCertificates } from '../certificates.generated'
import { FaAward, FaTimes, FaFilePdf, FaExpand, FaExternalLinkAlt } from 'react-icons/fa'

const colors = [
  'from-fuchsia-500 to-violet-500',
  'from-cyan-500 to-blue-500',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-rose-500',
  'from-rose-500 to-pink-500',
  'from-indigo-500 to-sky-500',
]

export default function OtherCertifications() {
  const [preview, setPreview] = useState<{ src: string; title: string; type: 'image' | 'pdf' } | null>(null)

  if (otherCertificates.length === 0) return null

  return (
    <Section
      id="other-certifications"
      eyebrow="More Achievements"
      title="Other Certificates"
      subtitle="Additional certificates from courses, bootcamps and workshops."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherCertificates.map((c, idx) => {
          const gradient = colors[idx % colors.length]
          return (
            <motion.div
              key={c.file}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass glass-hover overflow-hidden group flex flex-col"
            >
              <div className={`h-1 bg-gradient-to-r ${gradient}`} />

              <button
                type="button"
                onClick={() => setPreview({ src: c.file, title: c.title, type: c.type })}
                className="relative block w-full aspect-[4/3] overflow-hidden bg-slate-100"
                aria-label={`View ${c.title}`}
              >
                {c.type === 'image' ? (
                  <img
                    src={c.file}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${gradient}`}>
                    <FaFilePdf className="text-white text-6xl drop-shadow-lg" />
                  </div>
                )}
                <span className="absolute top-3 right-3 chip border-slate-300 bg-white/90 backdrop-blur text-slate-700">
                  <FaExpand className="text-xs" /> View
                </span>
              </button>

              <div className="p-4 flex items-start gap-3">
                <span className={`grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)] flex-none`}>
                  <FaAward />
                </span>
                <h3 className="font-semibold text-slate-900 leading-snug">{c.title}</h3>
              </div>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md grid place-items-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl cursor-default"
            >
              <button
                type="button"
                onClick={() => setPreview(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 grid place-items-center h-10 w-10 rounded-full bg-white/90 hover:bg-white text-slate-900 border border-white shadow-md transition"
              >
                <FaTimes />
              </button>

              <div className="rounded-2xl overflow-hidden border border-white/30 shadow-2xl bg-white">
                {preview.type === 'image' ? (
                  <img src={preview.src} alt={preview.title} className="block w-full h-auto" />
                ) : (
                  <iframe
                    src={preview.src}
                    title={preview.title}
                    className="block w-full h-[80vh] bg-white"
                  />
                )}
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 text-sm text-white/90">
                <span>{preview.title}</span>
                <a
                  href={preview.src}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-fuchsia-300 hover:text-fuchsia-200"
                >
                  Open in new tab <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
