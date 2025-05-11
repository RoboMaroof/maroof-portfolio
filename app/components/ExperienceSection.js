'use client'

import { motion } from 'framer-motion'

const TimelineItem = ({ title, company, date, points, projectId, logo, isLeft }) => (
  <div className="relative w-full grid grid-cols-9 items-start gap-2 mb-20">
    {/* Left card */}
    <div className={`col-span-4 ${isLeft ? '' : 'hidden md:block'}`}>
      {isLeft && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-6 w-full ml-auto max-w-[95%]"
        >
          <h3 className="text-lg font-bold">{title}</h3>
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
        </motion.div>
      )}
    </div>

    {/* Center logo & vertical line */}
    <div className="col-span-1 flex flex-col items-center relative">
      {/* Vertical line full height */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 z-0" />
      {/* Logo circle enlarged */}
      <div className="z-10 w-24 h-24 rounded-full border-4 border-white shadow bg-white flex items-center justify-center">
        <img
          src={`/images/${logo}`}
          alt={company}
          className="w-16 h-16 object-contain"
        />
      </div>
    </div>

    {/* Right card */}
    <div className={`col-span-4 ${isLeft ? 'hidden md:block' : ''}`}>
      {!isLeft && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-6 w-full mr-auto max-w-[95%]"
        >
          <h3 className="text-lg font-bold">{title}</h3>
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
        </motion.div>
      )}
    </div>
  </div>
)

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Master Thesis – LLM Optimization',
      company: 'Audi AG',
      date: 'Oct 2024 – Present',
      points: [
        'Researched and fine-tuned small language models.',
        'Applied PEFT, LoRA, PTQ, ONNX acceleration.',
      ],
      projectId: 'llm-optimization',
      logo: 'audi.jpg',
    },
    {
      title: 'Machine Learning Intern',
      company: 'Audi AG',
      date: 'Apr 2024 – Sep 2024',
      points: [
        'Integrated ChatGPT into speech processing.',
        'Automated evaluation and CI/CD integration.',
      ],
      projectId: 'chatgpt-tts',
      logo: 'audi.jpg',
    },
    {
      title: 'Research Assistant – Medical Imaging',
      company: 'RWTH Aachen University',
      date: 'Aug 2023 – Mar 2024',
      points: [
        'Developed DL models for tumor detection.',
        'Published in IEEE ICIP 2024.',
      ],
      projectId: 'renal-cancer',
      logo: 'rwth.png',
    },
    {
      title: 'Senior Product Design Engineer',
      company: 'Mercedes-Benz R&D India',
      date: 'Dec 2015 – Jul 2022',
      points: [
        'Developed Python tools for automation.',
        'Led automotive exterior design projects.',
      ],
      logo: 'mercedes.png',
    },
  ]

  return (
    <section id="experience" className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-14 tracking-widest text-gray-700">
        🚀 Experience Timeline
      </h2>
      <div className="max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} {...exp} isLeft={i % 2 === 0} />
        ))}
      </div>
    </section>
  )
}
