'use client'

import { motion } from 'framer-motion'

// Icon picker (you can customize per role)
const getIcon = (title) => {
  if (title.toLowerCase().includes('thesis')) return '⚙️'
  if (title.toLowerCase().includes('intern')) return '🏎️'
  if (title.toLowerCase().includes('research')) return '🔬'
  return '🛠️'
}

const TimelineItem = ({ title, company, date, points, projectLink }) => (
  <motion.div
    className="relative pl-14 mb-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Icon Circle */}
    <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-700 rounded-full text-xl shadow-md">
      {getIcon(title)}
    </div>

    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-green-600">{company}</p>
    <p className="text-xs text-gray-400 mb-2">{date}</p>
    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
      {points.map((pt, i) => (
        <li key={i}>{pt}</li>
      ))}
    </ul>
    {projectLink && (
      <a
        href={projectLink}
        className="text-blue-600 text-sm mt-1 inline-block hover:underline"
        target="_blank"
      >
        View Project ↗
      </a>
    )}
  </motion.div>
)

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-14 tracking-widest text-gray-700">🚀 Experience Timeline</h2>
      <div className="relative max-w-2xl mx-auto before:absolute before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-300">
        <TimelineItem
          title="Master Thesis – LLM Optimization"
          company="Audi AG"
          date="Oct 2024 – Present"
          points={[
            'Researched and fine-tuned small language models.',
            'Applied PEFT, LoRA, PTQ, ONNX acceleration.'
          ]}
          projectLink="#projects"
        />
        <TimelineItem
          title="Machine Learning Intern"
          company="Audi AG"
          date="Apr 2024 – Sep 2024"
          points={[
            'Integrated ChatGPT into speech processing.',
            'Automated evaluation and CI/CD integration.'
          ]}
          projectLink="#projects"
        />
        <TimelineItem
          title="Research Assistant – Medical Imaging"
          company="RWTH Aachen University"
          date="Aug 2023 – Mar 2024"
          points={[
            'Developed DL models for tumor detection.',
            'Published in IEEE ICIP 2024.'
          ]}
          projectLink="https://github.com/RoboMaroof/Cancer-Detection-on-WSIs---LFB"
        />
        <TimelineItem
          title="Senior Product Design Engineer"
          company="Mercedes-Benz R&D India"
          date="Dec 2015 – Jul 2022"
          points={[
            'Developed Python tools for automation.',
            'Led automotive exterior design projects.'
          ]}
        />
      </div>
    </section>
  )
}
