'use client'
import Section from './Section'

export default function IntroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 pt-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold">Maroof Abdul Aziz</h1>
        <p className="text-lg mt-2">
          M.Sc. Robotic Systems Engineering @ RWTH Aachen | AI/LLM Developer | Thesis @ Audi | Ex-Mercedes-Benz
        </p>
        <p className="mt-2 text-sm text-gray-600">
          AI engineer focused on deploying and optimizing LLMs and computer vision models. Skilled in full-stack AI systems, model compression, MLOps, and cutting-edge frameworks like LangGraph, LangChain, and HuggingFace.
        </p>
      </div>
    </section>
  )
}
