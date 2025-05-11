'use client'
import Section from './Section'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <div id="projects">
      <Section title="🧠 NLP / LLM Projects" bg="bg-gray-50">
        <ProjectCard
          title="Internship: ChatGPT-Enhanced TTS @ Audi"
          description="Integrated ChatGPT in online voice assistant..."
          tech="Python, FastAPI, Azure, CI/CD, HuggingFace"
        />
        {/* Add more NLP projects here */}
      </Section>

      <Section title="🖼️ Computer Vision Projects" bg="bg-white">
        <ProjectCard
          title="Renal Cancer Detection (IEEE ICIP 2024)"
          description="Deep learning pipeline for renal carcinoma detection in WSIs."
          tech="PyTorch, OpenSlide, EfficientNet"
          link="https://github.com/RoboMaroof/Cancer-Detection-on-WSIs---LFB"
        />
        {/* Add more CV projects here */}
      </Section>
    </div>
  )
}
