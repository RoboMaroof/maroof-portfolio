'use client'

import { motion } from 'framer-motion'

const getIcon = (title) => {
  if (title.toLowerCase().includes('thesis')) return '⚙️'
  if (title.toLowerCase().includes('intern')) return '🏎️'
  if (title.toLowerCase().includes('research')) return '🔬'
  return '🛠️'
}

const TimelineItem = ({ title, company, date, points, projectId, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`w-full md:w-1/2 px-4 mb-12 relative ${isLeft ? 'md:pr-10 text-right' : 'md:pl-10 text-left'}`}
  >
    <div className={`absolute top-2 w-10 h-10 bg-blue-100 text-blue-700 rounded-full text-xl flex items-center justify-center shadow-md z-10 ${isLeft ? 'right-0' : 'left-0'}`}>
      {getIcon(title)}
    </div>
    <div className={`bg-white rounded-xl shadow p-5 mt-5 md:mt-0 ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-green-600">{company}</p>
      <p className="text-xs text-gray-400 mb-2">{date}</p>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        {points.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>
      {projectId && (
        <button
          onClick={() => {
            const el = document.getElementById(projectId)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-blue-600 text-sm mt-2 inline-block hover:underline"
        >
          View Project ↘
        </button>
      )}
    </div>
  </motion.div>
)

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Master Thesis – LLM Optimization",
      company: "Audi AG",
      date: "Oct 2024 – Present",
      points: [
        'Researched and fine-tuned small language models.',
        'Applied PEFT, LoRA, PTQ, ONNX acceleration.'
      ],
      projectId: 'llm-optimization'
    },
    {
      title: "Machine Learning Intern",
      company: "Audi AG",
      date: "Apr 2024 – Sep 2024",
      points: [
        'Integrated ChatGPT into speech processing.',
        'Automated evaluation and CI/CD integration.'
      ],
      projectId: 'chatgpt-tts'
    },
    {
      title: "Research Assistant – Medical Imaging",
      company: "RWTH Aachen University",
      date: "Aug 2023 – Mar 2024",
      points: [
        'Developed DL models for tumor detection.',
        'Published in IEEE ICIP 2024.'
      ],
      projectId: 'renal-cancer'
    },
    {
      title: "Senior Product Design Engineer",
      company: "Mercedes-Benz R&D India",
      date: "Dec 2015 – Jul 2022",
      points: [
        'Developed Python tools for automation.',
        'Led automotive exterior design projects.'
      ]
    }
  ]

  return (
    <section id="experience" className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-14 tracking-widest text-gray-700">🚀 Experience Timeline</h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        {/* Experience Cards */}
        <div className="flex flex-col md:flex-wrap">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} {...exp} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
