'use client'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: "llm-optimization",
    title: "Master Thesis: Optimizing Small Language Models",
    points: [
      'Optimized small language models for CPU-only embedded systems and in-vehicle voice assistants.',
      'Designed and fine-tuned models using QLoRA with special tokens for tool-call accuracy.',
      'Applied structured pruning and quantization (GPTQ, GGUF) for efficient model compression.',
      'Built synthetic datasets simulating realistic vehicle assistant queries and tool usage.',
      'Benchmarked models using real-world metrics: latency, memory, accuracy, and on-device inference speed.'
    ],
    image: "/images/thesis_flowchart.png",
    tech: ["python.png", "pytorch.png", "huggingface.png", "ollama.jpg", "azure.png", "mlflow.png", "mlstudio.png"],
  },
  {
    id: "rag-suite",
    title: "LangChain RAG Agent Suite",
    points: [
      'Modular RAG framework using LangChain + LlamaIndex.',
      'RAG pipelines with multi-source ingestion: web, PDFs, and SQL databases.',
      'Wikipedia, Arxiv, and Tavily tools for agent-based question answering.',
      'Used FAISS for vector storage and LLM-based reranking for response relevance.',
      'FastAPI backend and Streamlit frontend for interactive multi-modal user experience.'
    ],
    link: "https://github.com/RoboMaroof/LangChain-RAG-Agent-Suite",
    image: "/images/LangGraph_1.png",
    tech: ["python.png", "langgraph.png", "llamaindex.png", "chatgpt.png", "groq.png", "cohere.png"]
  },
  {
    id: "langgraph-agent",
    title: "LangGraph Agent Deployment",
    points: [
      'Full-stack RAG application using FastAPI, LangGraph, and Streamlit for tool-using LLM agents.',
      'Document ingestion from websites, PDFs, and SQL into a Qdrant vector store using LlamaIndex.',
      'OpenAI and Groq models with session memory, tool calls, and LLM-based reranking.',
      'CI/CD pipeline with GitHub Actions to automate testing and deploy Docker containers to AWS EC2.',
      'User-friendly chat interface for uploading data, switching models, and visualizing agent reasoning.'
    ],
    link: "https://github.com/RoboMaroof/LangGraph-Agent-LLMOps-Deployment",
    image: "/images/LangGraph_2.png",
    tech: ["python.png", "langgraph.png", "llamaindex.png", "aws.png", "docker.png", "qdrant.png", "chatgpt.png", "groq.png", "cohere.png"]
  },
  {
    id: "cancer-detection",
    title: "Cancer Detection on Whole Slide Images",
    points: [
      'Cancer detection and subtyping using whole-slide histopathology images.',
      'Attention-based heat maps to highlight tumor regions for interpretability and patch selection.',
      'Integrated patch-level annotations and center loss to improve classification accuracy and feature separation.',
      'Improved preprocessing with white-patch filtering and magnification normalization for consistent patch quality.',
      'Enhanced RCC subtype classification, achieving better AUC, bACC, and F1 than baseline models.',
    ],
    link: "https://github.com/RoboMaroof/Cancer-Detection-on-WSIs",
    image: "/images/heatmap.png",
    tech: ["python.png", "pytorch.png", "tensorflow.png", "scikit-learn.png", "numpy.png", "git.png"]
  },
  {
    id: "drowsiness-detection",
    title: "Driver Drowsiness Detection",
    points: [
      'Built drowsiness detection model using CNNs and facial landmarks on 40K+ driver images.',
      'Achieved 90% accuracy with custom CNN and 86% with ResNet50 transfer learning.',
      'Used OpenCV for facial landmark detection to identify drowsy behavior.',
      'Compared traditional CNN, OpenCV, and transfer learning approaches for performance.',
      'Collaborated with TechLabs Aachen team during the Digital Shaper Program.'
    ],
    link: "https://github.com/RoboMaroof/TechLabs_DriverDrowsinessDetection",
    image: "/images/drowsiness_detection.png",
    tech: ["python.png", "tensorflow.png", "opencv.png", "scikit-learn.png", "numpy.png", "git.png"]
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
