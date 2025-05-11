'use client'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="min-h-screen bg-white px-6 pt-24 flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="rounded-lg overflow-hidden w-64 h-64">
        <Image
          src="/images/profile.jpg"
          alt="Maroof"
          width={256}
          height={256}
          className="rounded-lg object-cover h-full w-full"
        />
      </div>
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold">Maroof Abdul Aziz</h1>
        <p className="text-lg mt-2">
          M.Sc. Robotic Systems Engineering @ RWTH Aachen<br />
          AI/LLM Developer | Thesis @ Audi | Ex-Mercedes-Benz
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Hands-on experience in developing, optimizing, and deploying AI/ML models for LLMs and Computer Vision. Proven track record of delivering real-world AI solutions across academia and industry (Audi, Mercedes-Benz). First-author IEEE publication. 
        </p>
      </div>
    </section>
  )
}
