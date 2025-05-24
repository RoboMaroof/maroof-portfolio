'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const ExperienceCard = ({ title, company, date, points, projectId, logo }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="w-full max-w-md max-h-[80vh] md:max-h-none mx-auto bg-white rounded-xl shadow p-4 flex flex-col flex-shrink-0 
               overflow-y-auto transform transition-all duration-300 scale-95 opacity-60 
               hover:scale-105 hover:opacity-100 hover:z-20 hover:shadow-lg hover:shadow-gray-400 hover:bg-gray-50"
  >
    <div className="flex items-center gap-3 mb-2">
      <img
        src={`/images/${logo}`}
        alt={company}
        className="w-10 h-10 object-contain rounded-full border"
      />
      <div>
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
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
)

const TimelineItem = ({ title, company, date, points, projectId, logo, isLeft }) => (
  <div className="relative w-full grid grid-cols-9 items-start gap-2 mb-4 transition-all z-10 group">
    <div className={`col-span-4 ${isLeft ? '' : 'hidden md:block'}`}>
      {isLeft && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-4 w-full ml-auto max-w-[95%] 
                    transform transition-all duration-300 scale-95 opacity-60 
                    group-hover:scale-105 group-hover:opacity-100 group-hover:z-20 
                    group-hover:shadow-lg group-hover:shadow-gray-400 group-hover:bg-gray-50"
        >
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-black-600">{company}</p>
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

    <div className="col-span-1 flex flex-col items-center relative z-10">
      <div className="w-16 h-16 rounded-full border-4 border-white shadow bg-white 
                      flex items-center justify-center transform scale-95 
                      transition-all duration-300 
                      group-hover:scale-110 group-hover:shadow-md group-hover:shadow-gray-400"
      >
        <img
          src={`/images/${logo}`}
          alt={company}
          className="w-10 h-10 object-contain"
        />
      </div>
    </div>

    <div className={`col-span-4 ${isLeft ? 'hidden md:block' : ''}`}>
      {!isLeft && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-4 w-full mr-auto max-w-[95%] 
                    transform transition-all duration-300 scale-95 opacity-60 
                    group-hover:scale-105 group-hover:opacity-100 group-hover:z-20 
                    group-hover:shadow-lg group-hover:shadow-gray-400 group-hover:bg-gray-50"
        >
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-black-600">{company}</p>
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

  const [index, setIndex] = useState(0)

  return (
    <section
      id="experience"
      className="snap-start min-h-screen-svh md:min-h-screen bg-gray-200 px-4 sm:px-6 pt-[72px] md:pt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-8 tracking-[0.35em] text-gray-700">
        EXPERIENCE
      </h2>

      {/* Desktop Timeline */}
      <div className="relative max-w-6xl mx-auto hidden md:flex flex-col gap-2">
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 z-0" />
        {experiences.map((exp, i) => (
          <TimelineItem key={i} {...exp} isLeft={i % 2 === 0} />
        ))}
      </div>

      {/* Mobile Horizontal Swipe Scroll */}
      <div className="md:hidden relative w-full h-screen-svh overflow-hidden">
        {index > 0 && (
          <button
            onClick={() => setIndex(index - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
            aria-label="Previous"
          >
            <ArrowLeft size={32} className="text-gray-700" />
          </button>
        )}
        {index < experiences.length - 1 && (
          <button
            onClick={() => setIndex(index + 1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20"
            aria-label="Next"
          >
            <ArrowRight size={32} className="text-gray-700" />
          </button>
        )}

        <div
          className="flex transition-transform duration-500 w-full h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="min-w-full h-full snap-center px-4 flex items-center justify-center"
            >
              <div className="w-full max-w-md max-h-full flex items-center justify-center">
                <ExperienceCard {...exp} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
