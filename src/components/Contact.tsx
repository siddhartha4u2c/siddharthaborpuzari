import Section from './Section'
import { profile } from '../data'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Let’s Connect" title="Get in touch">
      <div className="glass p-8 sm:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Have an idea, a role, or just want to{' '}
              <span className="gradient-text">say hi?</span>
            </h3>
            <p className="mt-3 text-slate-300/95">
              I’m always open to interesting conversations around data platforms, GenAI applications, or solving meaningful business problems with technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary"
              >
                <FaEnvelope /> Email me
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                <FaLinkedin /> Connect on LinkedIn
              </a>
            </div>
          </div>

          <ul className="space-y-3">
            <ContactRow icon={<FaEnvelope />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={<FaPhone />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s+/g, '')}`} />
            <ContactRow icon={<FaLinkedin />} label="LinkedIn" value="linkedin.com/in/siddhartha-borpuzari" href={profile.socials.linkedin} />
            <ContactRow icon={<FaGithub />} label="GitHub" value="github.com/siddhartha4u2c" href={profile.socials.github} />
          </ul>
        </div>
      </div>
    </Section>
  )
}

function ContactRow({
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="flex items-center gap-4 glass glass-hover p-4"
      >
        <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white shadow-glow">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-wider text-slate-400">{label}</div>
          <div className="truncate text-slate-100">{value}</div>
        </div>
      </a>
    </li>
  )
}
