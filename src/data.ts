export type Experience = {
  role: string
  company: string
  period: string
  color: string
  bullets: string[]
}

export type Project = {
  title: string
  period?: string
  description: string
  tags: string[]
  color: string
  image?: string
  liveUrl?: string
}

export type Certification = {
  title: string
  issuer: string
  year: string
}

export type SkillGroup = {
  category: string
  icon: string
  items: string[]
  gradient: string
}

export const profile = {
  name: 'Siddhartha Borpuzari',
  title: 'IT Specialist · Data Engineer · AI/ML Enthusiast',
  email: 'siddhartha_borpuzari@rediffmail.com',
  phone: '+91 88119 49310',
  location: 'India',
  summary:
    'A highly dedicated IT Specialist with extensive experience in data engineering and business analysis across diverse sectors including oil & gas, banking, healthcare and retail. Proficient in leveraging advanced tools like Microsoft Azure and PySpark to design and optimize robust ETL pipelines. Strong educational background in Mechanical Engineering, complemented by a PGDM — a unique blend of technical and analytical skills that drives efficient data solutions and strategic business insights.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/siddhartha-borpuzari-b649bb4a/',
    github: 'https://github.com/siddhartha4u2c',
    leetcode: 'https://leetcode.com/siddhartha_borpuzari/',
    hackerrank: 'https://www.hackerrank.com/siddhartha_borp1',
    youtube: 'https://www.youtube.com/@siddharthaborpuzari9000/videos',
  },
}

export const experiences: Experience[] = [
  {
    role: 'IT Specialist',
    company: 'Volkswagen Group Technology Solutions India',
    period: 'Feb 2025 – Present',
    color: 'from-fuchsia-500 to-violet-500',
    bullets: [
      'Functioning as an Azure Data Engineer within the PowerCo division, contributing to automotive manufacturing data initiatives.',
      'Designing, building and operating cloud-native data pipelines to support battery & manufacturing analytics use-cases.',
    ],
  },
  {
    role: 'Systems Engineer / Data Engineer',
    company: 'TATA Consultancy Services',
    period: 'Feb 2017 – Feb 2025',
    color: 'from-cyan-500 to-emerald-500',
    bullets: [
      'Engineered and maintained data solutions as an Azure Data Engineer for a French Oil & Gas sector client, ensuring robust data flow and integrity.',
      'Optimized data processing speed by 30% through an efficient ETL pipeline using Azure Data Factory and parameterized multiple ETL pipelines with Azure SQL Database.',
      'Developed Python code for transformation and storage of streaming data, and managed migration activities to ADLS Gen 2.',
      'Provided critical production support for banking and healthcare sector clients, resolving issues and ensuring continuous operations.',
      'Served as a Business Analyst for a retail / market-research client on CPG data — report preparation and issue-based analysis.',
      'Performed anti-money-laundering investigations for a French banking client — tracing account flows to detect suspicious activity.',
    ],
  },
  {
    role: 'Assistant Manager – Business Development',
    company: 'Premium Transmission Ltd',
    period: 'Apr 2015 – Feb 2017',
    color: 'from-amber-500 to-rose-500',
    bullets: [
      'Spearheaded business development across Southern India, driving sales and market penetration for engineering products.',
      'Built and maintained key OEM and channel-partner relationships.',
    ],
  },
  {
    role: 'Design Engineer',
    company: 'TATA Consulting Engineers Ltd',
    period: 'Aug 2008 – Jun 2012',
    color: 'from-indigo-500 to-sky-500',
    bullets: [
      'Contributed as a design engineer in the material-handling division for large power projects.',
      'Specialised in engineering design, vendor coordination and project execution.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Data Engineering',
    icon: '🗄️',
    gradient: 'from-fuchsia-500 to-violet-500',
    items: ['PySpark', 'Azure Data Factory', 'Azure SQL', 'Databricks', 'ADLS Gen 2', 'ETL Pipelines'],
  },
  {
    category: 'Cloud',
    icon: '☁️',
    gradient: 'from-cyan-500 to-blue-500',
    items: ['Microsoft Azure', 'AWS'],
  },
  {
    category: 'AI / GenAI',
    icon: '🤖',
    gradient: 'from-emerald-500 to-teal-500',
    items: ['LangChain', 'LangGraph', 'AutoGen', 'OpenAI API', 'RAG', 'LLM Apps'],
  },
  {
    category: 'Languages & Scripting',
    icon: '💻',
    gradient: 'from-amber-500 to-rose-500',
    items: ['Python', 'SQL', 'Microsoft Excel (Advanced)'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    gradient: 'from-pink-500 to-fuchsia-500',
    items: ['Cursor', 'VS Code', 'GitHub', 'JIRA', 'ServiceNow', 'Slack'],
  },
  {
    category: 'Spoken Languages',
    icon: '🌐',
    gradient: 'from-indigo-500 to-violet-500',
    items: ['English', 'Hindi', 'French (B2)', 'German (B2)', 'Spanish (Basic)'],
  },
]

export const projects: Project[] = [
  {
    title: 'AskSiddhartha — Multilingual Indian Language Assistant',
    description:
      'A multilingual chatbot built on the OpenAI API with real-time web search, capable of answering queries in major Indian languages (Hindi, Bengali, Tamil, Telugu, etc.). Supports voice input and document/image uploads.',
    tags: ['OpenAI', 'LangChain', 'Web Search', 'Python', 'Voice'],
    color: 'from-fuchsia-500 to-violet-500',
    image: '/projects/asksiddhartha.png',
    liveUrl: 'https://raga-owrf.onrender.com',
  },
  {
    title: 'SID Fitness Assistant',
    description:
      'An AI-based fitness assistant app powered by LLMs — generates personalised workout & nutrition guidance.',
    tags: ['LLM', 'Python', 'Streamlit'],
    color: 'from-emerald-500 to-cyan-500',
    image: '/projects/fitnessassistant.png',
    liveUrl: 'https://siddfitnessassistant-kamh.streamlit.app',
  },
  {
    title: 'MedAssist AI',
    description:
      'A unified, professional telemedicine workspace for patients and clinicians — structured symptom journeys, report interpretation, vitals & medication tracking, appointments, care plans, billing, and an AI assistant chat for patient education.',
    tags: ['GenAI', 'LangGraph', 'Telemedicine', 'Healthcare'],
    color: 'from-rose-500 to-pink-500',
    image: '/projects/medassist.png',
    liveUrl: 'https://medassist-1-m096.onrender.com',
  },
  {
    title: 'RAG-based Patient Information Assistant',
    description:
      'Retrieval-Augmented-Generation application that lets patients query their own medical details with grounded, source-cited answers.',
    tags: ['RAG', 'Vector DB', 'LLM'],
    color: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Ensemble technique demonstration',
    description:
      'The use of bagging,boosting and other ensemble techniques used in machine learning.',
    tags: ['Data Science', 'ML'],
    color: 'from-amber-500 to-rose-500',
    image: '/projects/ensembletechniques.png',
    liveUrl: 'https://ensemble-techniques.streamlit.app',
  },
  {
    title: 'Azure ETL Optimisation (Enterprise)',
    period: '2022 – Present',
    description:
      'Built and parameterised multiple ADF + Azure SQL pipelines for a global Oil & Gas client — improved processing speed by 30% and migrated workloads to ADLS Gen 2.',
    tags: ['Azure Data Factory', 'Azure SQL', 'PySpark', 'ADLS Gen 2'],
    color: 'from-indigo-500 to-sky-500',
  },
]

export const certifications: Certification[] = [
  {
    title: 'Microsoft Azure Data Engineer Associate (DP-203)',
    issuer: 'Microsoft',
    year: 'Jul 2024',
  },
  {
    title: 'GenAI Certification Bootcamp',
    issuer: 'Euron',
    year: 'Dec 2025',
  },
  {
    title: 'Post-Graduate Program in Artificial Intelligence & Machine Learning',
    issuer: 'Great Learning × University of Texas, Austin',
    year: '2020',
  },
  {
    title: 'Certificate Course in Advanced MS-Excel',
    issuer: 'Manipal Global Education Services',
    year: 'Nov 2014',
  },
]

export const education = [
  {
    degree: 'Post Graduate Diploma in Management (PGDM)',
    institute: 'Lal Bahadur Shastri Institute of Management, New Delhi',
    stream: 'Operations / Marketing',
    period: '2013 – 2015',
    color: 'from-fuchsia-500 to-violet-500',
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institute: 'National Institute of Technology, Silchar',
    stream: 'Mechanical Engineering',
    period: '2004 – 2008',
    color: 'from-cyan-500 to-emerald-500',
  },
]

export const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Industries Served', value: '5' },
  { label: 'Languages Spoken', value: '5' },
  { label: 'Certifications', value: '4' },
]
