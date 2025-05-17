'use client'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: "chatgpt-tts",
    title: "Internship: ChatGPT-Enhanced TTS @ Audi",
    points: [
      'Integrated ChatGPT into online speech processing.',
      'Improved TTS functionality via automated tuning.',
      'Created multilingual evaluation datasets.',
      'Benchmarked vector similarity for speech.',
      'Automated tests into CI/CD pipeline.',
    ],
    image: "/images/internship_flowchart.png",
    tech: ["python.png", "tensorflow.png", "docker.png"]
  },
  {
    id: "llm-optimization",
    title: "Master Thesis: Optimizing Small Language Models",
    points: [
      'Fine-tuning and compressing LLMs for low-resource devices.',
      'Used PEFT, LoRA, PTQ and GGUF acceleration.',
    ],
    image: "/images/thesis_flowchart.png",
    tech: ["python.png", "huggingface.png"]
  },
  {
    id: "rag-suite",
    title: "LangChain RAG Agent Suite",
    points: [
      'Modular RAG framework using LangChain + LlamaIndex.',
    ],
    link: "https://github.com/RoboMaroof/LangChain-RAG-Agent-Suite",
    image: "/images/LangGraph_1.png",
    tech: ["langchain.png", "llamaindex.png", "python.png"]
  },
  {
    id: "langgraph-agent",
    title: "LangGraph Agent Deployment",
    points: [
      'Production-ready RAG using LangGraph, Docker, AWS EC2, CI/CD.',
    ],
    link: "https://github.com/RoboMaroof/LangGraph-Agent-LLMOps-Deployment",
    image: "/images/LangGraph_2.png",
    tech: ["langgraph.png", "aws.png", "docker.png"]
  },
  {
    id: "cancer-detection",
    title: "Cancer Detection on Whole Slide Images",
    points: [
      'Developed a deep learning pipeline for cancer detection.',
      'Utilized PyTorch, OpenCV, and FastAPI.',
      'Implemented data augmentation and transfer learning.',
      'Achieved 95% accuracy on test set.',
    ],
    link: "https://github.com/RoboMaroof/Cancer-Detection-on-WSIs",
    image: "/images/heatmap.png",
    tech: ["pytorch.png", "opencv.png", "fastapi.png"]
  },
  {
    id: "drowsiness-detection",
    title: "Driver Drowsiness Detection",
    points: [
      'Developed a real-time drowsiness detection system.',
      'Utilized OpenCV and TensorFlow.',
      'Implemented face detection and eye tracking.',
      'Achieved 90% accuracy on test set.',
    ],
    link: "https://github.com/RoboMaroof/TechLabs_DriverDrowsinessDetection",
    image: "/images/drowsiness_detection.png",
    tech: ["tensorflow.png", "opencv.png"]
  },
]

export default function ProjectsSection() {
  const [index, setIndex] = useState(0)
  const total = projects.length

  const getProject = (i) => projects[(i + total) % total]

  return (
    <section
      id="projects"
      className="snap-start min-h-screen bg-white px-6 pt-24 relative flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-8 tracking-[0.35em] text-gray-700">
        PROJECTS
      </h2>

      <div className="relative w-full max-w-6xl h-[700px] flex items-center justify-center">
        {[ -1, 0, 1 ].map(offset => {
          const proj = getProject(index + offset)
          const isCurrent = offset === 0

          return (
            <div
              key={proj.id}
              className={`transition-all duration-300 px-2
                ${isCurrent ? 'scale-100 opacity-100 z-10 relative' : 'scale-95 opacity-40 z-0'}
                w-full max-w-[90%] absolute transform
                ${offset === -1 ? '-translate-x-full' : offset === 1 ? 'translate-x-full' : 'translate-x-0'}`}
            >
              {/* Arrows */}
              {isCurrent && (
                <>
                  <button
                    onClick={() => setIndex((index - 1 + total) % total)}
                    className="absolute -left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 z-20"
                    aria-label="Previous Project"
                  >
                    <ArrowLeft size={60} strokeWidth={2.5} className="text-gray-500" />
                  </button>
                  <button
                    onClick={() => setIndex((index + 1) % total)}
                    className="absolute -right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 z-20"
                    aria-label="Next Project"
                  >
                    <ArrowRight size={60} strokeWidth={2.5} className="text-gray-500" />
                  </button>
                </>
              )}

              {/* Project Card */}
              <div className="bg-gray-200 rounded-2xl shadow-xl p-6 h-[600px] flex flex-col">
                <h3 className="text-2xl font-semibold text-center mb-4">{proj.title}</h3>
                <div className="flex flex-col md:flex-row gap-6 flex-1">
                  {/* Left */}
                  <div className="flex-1 flex flex-col justify-between text-left">
                    <div>
                      <ul className="text-base text-gray-700 list-disc pl-6 space-y-2 mb-4">
                        {proj.points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>

                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 text-sm inline-block hover:underline mb-4"
                        >
                          View on GitHub ↗
                        </a>
                      )}
                    </div>

                    {proj.tech && (
                      <div className="flex flex-wrap gap-4 mt-4">
                        {proj.tech.map((icon, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center p-2"
                            title={icon.replace(".png", "")}
                          >
                            <img
                              src={`/tech/${icon}`}
                              alt={icon}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Image */}
                  <div className="flex-1 flex items-center justify-center">
                    {proj.image && (
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="max-h-[500px] w-auto object-contain rounded-lg shadow"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
