'use client'
import Section from './Section'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <>
      <Section title="🧠 NLP / LLM Projects" bg="bg-gray-50">
        <ProjectCard
          title="Internship: ChatGPT-Enhanced TTS @ Audi"
          description="Integrated ChatGPT in online voice assistant..."
          tech="Python, FastAPI, Azure, CI/CD, HuggingFace"
        />
        {/* Other NLP projects */}
      </Section>

      <Section title="🖼️ Computer Vision Projects" bg="bg-white">
        <ProjectCard
          title="Renal Cancer Detection (IEEE ICIP 2024)"
          description="Developed deep learning pipeline for classification and grading..."
          tech="PyTorch, OpenSlide, EfficientNet"
          link="https://github.com/RoboMaroof/Cancer-Detection-on-WSIs---LFB"
        />
        {/* Other vision projects */}
      </Section>
    </>
  )
}
