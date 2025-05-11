'use client'
import Section from './Section'

const ProjectTile = ({ title, points, link }) => (
  <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition w-full md:w-[48%] lg:w-[30%]">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <ul className="text-sm list-disc pl-5 text-gray-700 space-y-1">
      {points.map((pt, i) => (
        <li key={i}>{pt}</li>
      ))}
    </ul>
    {link && (
      <a
        href={link}
        className="text-blue-600 text-sm mt-2 inline-block hover:underline"
        target="_blank"
      >
        GitHub ↗
      </a>
    )}
  </div>
)

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">🧠 NLP / LLM Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <ProjectTile
          title="🔊 ChatGPT-Enhanced TTS @ Audi"
          points={[
            'Integrated ChatGPT into online speech processing.',
            'Improved TTS functionality via automated tuning.',
            'Created multilingual evaluation datasets.',
            'Benchmarked vector similarity for speech.',
            'Automated tests into CI/CD pipeline.',
          ]}
        />
        <ProjectTile
          title="⚙️ Master Thesis: Optimizing Small LLMs"
          points={[
            'Fine-tuning and compressing LLMs for low-resource devices.',
            'Used PEFT, LoRA, PTQ and ONNX acceleration.',
          ]}
        />
        <ProjectTile
          title="🧪 LangChain RAG Agent Suite"
          points={[
            'Modular RAG framework using LangChain + LlamaIndex.',
          ]}
          link="https://github.com/RoboMaroof/LangChain-RAG-Agent-Suite"
        />
        <ProjectTile
          title="🧠 LangGraph Agent Deployment"
          points={[
            'Production-ready RAG using LangGraph, Docker, AWS EC2, CI/CD.',
          ]}
          link="https://github.com/RoboMaroof/LangGraph-Agent-LLMOps-Deployment"
        />
      </div>

      <h2 className="text-3xl font-bold text-center mt-20 mb-10">🖼️ Computer Vision Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <ProjectTile
          title="🔬 Renal Cancer Detection (IEEE ICIP 2024)"
          points={[
            'Developed pipeline for classification and grading of renal carcinoma.',
            'Used EfficientNet on high-res whole slide images.',
            'Published as first author in IEEE ICIP 2024.',
          ]}
          link="https://github.com/RoboMaroof/Cancer-Detection-on-WSIs---LFB"
        />
        <ProjectTile
          title="😴 Driver Drowsiness Detection"
          points={[
            'Real-time driver fatigue detection using facial landmarks.',
            'Utilized OpenCV, Dlib, and CNNs for classification.',
            'Featured in TechLabs Aachen project showcase.',
          ]}
          link="https://github.com/RoboMaroof/TechLabs_DriverDrowsinessDetection"
        />
      </div>
    </section>
  )
}
