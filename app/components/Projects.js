'use client';
import React from "react";

const projects = [
  {
    title: "ChatGPT-Enhanced TTS @ Audi",
    description: "Improved TTS systems using LLMs and multilingual vector embeddings.",
    tech: "Python, FastAPI, Azure, CI/CD",
    link: "https://github.com/RoboMaroof"
  },
  {
    title: "LangChain RAG Agent Suite",
    description: "RAG experimentation framework using LangChain and LlamaIndex.",
    tech: "LangChain, LlamaIndex",
    link: "https://github.com/RoboMaroof/LangChain-RAG-Agent-Suite"
  },
  {
    title: "Cancer Detection (IEEE 2024)",
    description: "WSI classification and grading using EfficientNet.",
    tech: "PyTorch, OpenSlide",
    link: "https://github.com/RoboMaroof/Cancer-Detection-on-WSIs---LFB"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{proj.title}</h3>
              <p className="text-sm mt-2">{proj.description}</p>
              <p className="text-xs text-gray-600 mt-1">Tech: {proj.tech}</p>
              <a href={proj.link} className="text-blue-600 text-sm mt-2 inline-block" target="_blank">GitHub →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
