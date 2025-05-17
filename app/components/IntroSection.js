'use client'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section 
      id="about"
      className="h-screen bg-white px-6 py-24 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-center mb-12 tracking-[0.35em] text-gray-700">
        ABOUT
      </h2>

      <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-center gap-14">
        <div className="rounded-2xl shadow-xl transform transition-transform hover:scale-105 overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Maroof"
            width={384}
            height={0} 
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        <div className="w-full max-w-3xl text-center md:text-left">
          <h1 className="text-6xl font-bold mb-6">Maroof Abdul Aziz</h1>
          <p className="text-xl font-semibold leading-relaxed">
            M.Sc. Robotic Systems Engineering @ RWTH Aachen<br />
            AI/LLM Developer | Internship & Thesis @ Audi | Ex-Mercedes-Benz
          </p>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed md:text-justify">
            I’m a Master's student in Robotic Systems Engineering at RWTH Aachen, specializing in AI for language and vision. My work focuses on developing and optimizing large language models (LLMs), speech processing pipelines, and computer vision systems.
          </p>
          <p className="mt-4 text-xl text-gray-700 leading-relaxed md:text-justify">
            With industry experience at Audi and Mercedes-Benz, and a first-author IEEE publication, I bridge academic research and real-world AI deployment—building scalable, efficient, and impactful machine learning systems.
          </p>
        </div>
      </div>
    </section>
  )
}
