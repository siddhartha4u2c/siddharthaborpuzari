import Section from './Section'
import { profile } from '../data'
import { FaDatabase, FaBrain, FaChartLine } from 'react-icons/fa'

const highlights = [
  {
    icon: <FaDatabase className="text-fuchsia-600" />,
    title: 'Data Engineering',
    desc: 'ETL pipelines on Azure (ADF, Databricks, SQL, ADLS Gen 2) for Oil & Gas, Banking, Healthcare & Retail clients.',
    color: 'from-fuchsia-50 to-violet-50 border-fuchsia-200',
    iconBg: 'bg-fuchsia-100',
  },
  {
    icon: <FaBrain className="text-cyan-600" />,
    title: 'AI / GenAI',
    desc: 'LLM apps with LangChain, LangGraph, AutoGen & OpenAI — chatbots, RAG systems and AI assistants.',
    color: 'from-cyan-50 to-emerald-50 border-cyan-200',
    iconBg: 'bg-cyan-100',
  },
  {
    icon: <FaChartLine className="text-amber-600" />,
    title: 'Business Analysis',
    desc: 'CPG market research, AML investigations and operations analytics — turning data into strategic decisions.',
    color: 'from-amber-50 to-rose-50 border-amber-200',
    iconBg: 'bg-amber-100',
  },
]

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A blend of engineering, data & business">
      <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8">
        <div className="glass p-6 sm:p-8">
          <p className="text-slate-700 leading-relaxed">{profile.summary}</p>
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
              className={`rounded-2xl border p-5 bg-gradient-to-br ${h.color} transition hover:-translate-y-1 hover:shadow-[0_18px_50px_-12px_rgba(99,102,241,0.25)]`}
            >
              <div className="flex items-center gap-3">
                <div className={`grid place-items-center h-10 w-10 rounded-xl ${h.iconBg} text-xl`}>
                  {h.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-900">{h.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-700">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
