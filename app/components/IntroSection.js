'use client'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section 
      id="about"
      className="min-h-screen bg-white px-4 sm:px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 tracking-[0.35em] text-gray-700">
        ABOUT
      </h2>

      {/* Layout switches on md */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14">
        {/* Image Section */}
        <div className="flex items-center justify-center w-full md:w-auto">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-[384px] md:h-auto rounded-full md:rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-105">
            <Image
              src="/images/profile.jpg"
              alt="Maroof"
              width={384}
              height={384}
              className="object-cover w-full h-full"
              style={{
                objectPosition: 'top center'
              }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full max-w-3xl text-left md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-center md:text-left">
            Maroof Abdul Aziz
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-semibold leading-snug md:leading-relaxed text-center md:text-left">
            M.Sc. Robotic Systems Engineering @ RWTH Aachen<br />
            AI/LLM Developer | Internship & Thesis @ Audi | Ex-Mercedes-Benz
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-xl text-gray-700 leading-snug md:leading-relaxed md:text-justify text-center md:text-left">
            I’m a Master's student in Robotic Systems Engineering at RWTH Aachen, specializing in AI for language and vision. My work focuses on developing and optimizing large language models (LLMs), speech processing pipelines, and computer vision systems.
          </p>
          <p className="mt-3 text-sm sm:text-base md:text-xl text-gray-700 leading-snug md:leading-relaxed md:text-justify text-center md:text-left">
            With industry experience at Audi and Mercedes-Benz, and a first-author IEEE publication, I bridge academic research and real-world AI deployment—building scalable, efficient, and impactful machine learning systems.
          </p>
        </div>
      </div>
    </section>
  )
}
