'use client';
import React from "react";

const Section = ({ title, children, bg }) => (
  <section className={`${bg} py-10 px-6`}>
    <div className="max-w-6xl mx-auto">
      {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
      {children}
    </div>
  </section>
);

const ProjectCard = ({ title, description, tech, link }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
    <p className="text-sm mt-1">
      <span className="font-medium">Tech Stack:</span> {tech}
    </p>
    {link && (
      <a href={link} className="text-blue-600 text-sm" target="_blank" rel="noreferrer">
        GitHub
      </a>
    )}
  </div>
);

const Profile = () => {
  return (
    <div>
      {/* Intro */}
      <Section bg="bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Maroof Abdul Aziz</h1>
          <p className="text-lg mt-2">
            M.Sc. Robotic Systems Engineering @ RWTH Aachen | AI/LLM Developer | Thesis @ Audi | Ex-Mercedes-Benz
          </p>
          <p className="mt-2 text-sm text-gray-600 max-w-3xl mx-auto">
            AI engineer focused on deploying and optimizing LLMs and computer vision models. Skilled in full-stack AI systems, model compression, MLOps, and cutting-edge frameworks like LangGraph, LangChain, and HuggingFace.
          </p>
        </div>
      </Section>

      {/* NLP / LLM Projects */}
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

      {/* Computer Vision Projects */}
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

      {/* Publications */}
      <Section title="📄 Publications" bg="bg-gray-50">
        <p className="text-sm italic">
          "Deep Learning Approach for Renal Cell Carcinoma Detection", IEEE ICIP 2024.{" "}
          <a
            href="https://ieeexplore.ieee.org/document/10647236"
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            Read Paper
          </a>
        </p>
      </Section>

      {/* Contact */}
      <Section title="📫 Contact" bg="bg-white">
        <p className="text-sm">📧 maroofkanakkayil@gmail.com</p>
        <p className="text-sm">📱 +49 177 2186330</p>
        <p className="text-sm">
          🔗{" "}
          <a href="https://linkedin.com/in/maroofmohammed1" className="text-blue-600">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/RoboMaroof" className="text-blue-600">
            GitHub
          </a>
        </p>
      </Section>
    </div>
  );
};

export default Profile;
