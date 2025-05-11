'use client'
import Section from './Section'

export default function IntroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 pt-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Maroof Abdul Aziz
        </h1>
        <p className="text-md md:text-lg text-gray-700">
          M.Sc. Robotic Systems Engineering @ RWTH Aachen<br />
          AI/LLM Developer | Thesis @ Audi | Ex-Mercedes-Benz
        </p>
        <p className="text-sm text-gray-500 mt-4">
          I specialize in deploying optimized LLMs & CV models. Skilled in LangChain, LangGraph, HuggingFace, and scalable full-stack AI systems.
        </p>
      </div>
    </section>
  )
}
