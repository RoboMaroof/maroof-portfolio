'use client'
import Section from './Section'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <div id="projects">
      <Section title="🧠 NLP / LLM Projects" bg="bg-gray-50">
        <ProjectCard
          title="Internship: ChatGPT-Enhanced TTS @ Audi"
          description="Integrated ChatGPT in online voice assistant, built multilingual test datasets, evaluated vector similarity and automated CI/CD analysis."
          tech="Python, FastAPI, Azure, CI/CD, HuggingFace"
        />
        <ProjectCard
          title="Master Thesis: Small LLM Optimization for Embedded NLP"
          description="Explored fine-tuning and quantization techniques for small LLMs in edge voice assistants using PEFT, LoRA, and PTQ."
          tech="PEFT, Transformers, ONNX, PyTorch, Quantization"
        />
        <ProjectCard
          title="LangChain RAG Agent Suite"
          description="Built a modular framework to experiment with Retrieval-Augmented Generation workflows using LangChain and LlamaIndex."
          tech="LangChain, LlamaIndex, Python"
          link="https://github.com/RoboMaroof/LangChain-RAG-Agent-Suite"
        />
        <ProjectCard
          title="LangGraph Agent Deployment (WIP)"
          description="Ongoing project deploying LangGraph-based RAG agent with Dockerized microservices on AWS with CI/CD."
          tech="LangGraph, Docker, AWS EC2, CI/CD"
          link="https://github.com/RoboMaroof/LangGraph-Agent-LLMOps-Deployment"
        />
      </Section>

      <Section title="🖼️ Computer Vision Projects" bg="bg-white">
        <ProjectCard
          title="Renal Cancer Detection (IEEE ICIP 2024)"
          description="Developed deep learning pipeline for classification and grading of renal carcinoma in high-resolution WSIs. First-author IEEE publication."
          tech="PyTorch, OpenSlide, EfficientNet, Whole Slide Imaging"
          link="https://github.com/RoboMaroof/Cancer-Detection-on-WSIs---LFB"
        />
        <ProjectCard
          title="Driver Drowsiness Detection"
          description="Used CNNs and facial landmark detection for real-time driver fatigue classification. Featured in TechLabs Aachen."
          tech="OpenCV, TensorFlow, Dlib"
          link="https://github.com/RoboMaroof/TechLabs_DriverDrowsinessDetection"
        />
      </Section>
    </div>
  )
}
