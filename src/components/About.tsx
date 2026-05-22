import Section from './Section'
import { profile } from '../data'
import { FaDatabase, FaBrain, FaChartLine } from 'react-icons/fa'

const highlights = [
  {
    icon: <FaDatabase className="text-fuchsia-300" />,
    title: 'Data Engineering',
    desc: 'ETL pipelines on Azure (ADF, Databricks, SQL, ADLS Gen 2) for Oil & Gas, Banking, Healthcare & Retail clients.',
    color: 'from-fuchsia-500/15 to-violet-500/10 border-fuchsia-400/20',
  },
  {
    icon: <FaBrain className="text-cyan-300" />,
    title: 'AI / GenAI',
    desc: 'LLM apps with LangChain, LangGraph, AutoGen & OpenAI — chatbots, RAG systems and AI assistants.',
    color: 'from-cyan-500/15 to-emerald-500/10 border-cyan-400/20',
  },
  {
    icon: <FaChartLine className="text-amber-300" />,
    title: 'Business Analysis',
    desc: 'CPG market research, AML investigations and operations analytics — turning data into strategic decisions.',
    color: 'from-amber-500/15 to-rose-500/10 border-amber-400/20',
  },
]

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A blend of engineering, data & business">
      <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8">
        <div className="glass p-6 sm:p-8">
          <p className="text-slate-200/95 leading-relaxed">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Azure', 'PySpark', 'Databricks', 'Python', 'LangChain', 'RAG', 'AML', 'CPG Analytics'].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className={`glass glass-hover p-5 bg-gradient-to-br ${h.color}`}
            >
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 text-xl">
                  {h.icon}
                </div>
                <h3 className="font-display font-semibold text-lg">{h.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-300/90">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
