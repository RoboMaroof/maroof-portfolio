'use client'
import Section from './Section'

export default function IntroSection() {
  return (
    <Section bg="bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Maroof Abdul Aziz</h1>
        <p className="text-lg mt-2">
          M.Sc. Robotic Systems Engineering @ RWTH Aachen | AI/LLM Developer | Thesis @ Audi | Ex-Mercedes-Benz
        </p>
        <p className="mt-2 text-sm text-gray-600 max-w-3xl mx-auto">
          AI engineer focused on deploying and optimizing LLMs and computer vision models...
        </p>
      </div>
    </Section>
  )
}
