'use client'

const ExperienceCard = ({ company, title, date }) => (
  <div className="bg-white rounded-xl shadow p-6 w-full md:w-[48%] lg:w-[30%]">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-green-600 font-medium">{company}</p>
    <p className="text-xs text-gray-400">{date}</p>
  </div>
)

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 tracking-widest text-gray-700">EXPERIENCE</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <ExperienceCard
          title="Master Thesis – LLM Optimization"
          company="Audi AG"
          date="Oct 2024 – Present"
        />
        <ExperienceCard
          title="Machine Learning Intern"
          company="Audi AG"
          date="Apr 2024 – Sep 2024"
        />
        <ExperienceCard
          title="Research Assistant – Deep Learning for Medical Imaging"
          company="RWTH Aachen University"
          date="Aug 2023 – Mar 2024"
        />
        <ExperienceCard
          title="Senior Product Design Engineer"
          company="Mercedes-Benz R&D India"
          date="Dec 2015 – Jul 2022"
        />
      </div>
    </section>
  )
}
