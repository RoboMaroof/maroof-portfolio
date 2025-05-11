import React from "react";
import photo from "../assets/maroof-photo.jpg";

const Profile = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6">
        <img src={photo} alt="Maroof Abdul Aziz" className="w-32 h-32 rounded-full shadow-sm" />
        <div>
          <h1 className="text-3xl font-bold">Maroof Abdul Aziz</h1>
          <p className="text-md mt-2">
            M.Sc. Robotic Systems Engineering at RWTH Aachen | LLM + Vision Developer | Ex-Mercedes-Benz | Master Thesis @ Audi
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Hands-on experience in developing, optimizing, and deploying AI/ML models for LLMs and Computer Vision. Proven track record of delivering real-world AI solutions across academia and industry (Audi, Mercedes-Benz). First-author IEEE publication. Focused on LLM efficiency, multimodal intelligence, and AI-driven automation.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-6 space-y-6">
        <h2 className="text-xl font-semibold">NLP / LLM Projects</h2>

        <div>
          <h3 className="font-semibold">Internship: ChatGPT-Enhanced TTS @ Audi AG</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Integrated ChatGPT into online speech processing.</li>
            <li>Improved TTS functionality via automated evaluation and tuning.</li>
            <li>Created multilingual test datasets for semantic evaluation.</li>
            <li>Benchmarked vector search with multilingual models.</li>
            <li>Automated backend performance tests and integrated results into CI/CD pipelines.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Master Thesis: Optimizing Small LLMs for Embedded NLP</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Focused on fine-tuning and compressing small LLMs for low-resource devices.</li>
            <li>Used PEFT, LoRA, PTQ, and hardware acceleration.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Personal Project: LangChain RAG Agent Suite</h3>
          <p className="text-sm">
            A modular framework for experimenting with Retrieval-Augmented Generation using LangChain and LlamaIndex.  
            GitHub: <a href="https://github.com/RoboMaroof/LangChain-RAG-Agent-Suite" className="text-blue-600">LangChain-RAG-Agent-Suite</a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Personal Project: LangGraph Agent Deployment (WIP)</h3>
          <p className="text-sm">
            A personal project focused on deploying LangGraph-based RAG agents in a production-like setup using Docker, AWS EC2, and CI/CD.  
            GitHub: <a href="https://github.com/RoboMaroof/LangGraph-Agent-LLMOps-Deployment" className="text-blue-600">LangGraph-Agent-LLMOps-Deployment</a>
          </p>
        </div>

        {/* CV Section */}
        <h2 className="text-xl font-semibold mt-6">Computer Vision Projects</h2>

        <div>
          <h3 className="font-semibold">🧬 Deep Learning for Renal Cancer Detection</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Developed models for tumor detection, subtyping, and grading in high-res images.</li>
            <li>First-author IEEE ICIP 2024 publication: <a href="https://ieeexplore.ieee.org/document/10647236" className="text-blue-600">IEEE Link</a></li>
            <li>GitHub: <a href="https://github.com/RoboMaroof/Cancer-Detection-on-WSIs---LFB" className="text-blue-600">Cancer Detection Repo</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Driver Drowsiness Detection</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Used facial landmarks and CNNs for real-time fatigue detection.</li>
            <li>Blog: <a href="https://techlabs-aachen.medium.com/driver-drowsiness-recognition-1c2c0f2039a9" className="text-blue-600">Medium Article</a></li>
            <li>GitHub: <a href="https://github.com/RoboMaroof/TechLabs_DriverDrowsinessDetection" className="text-blue-600">Drowsiness Repo</a></li>
          </ul>
        </div>

        {/* Publications */}
        <h2 className="text-xl font-semibold mt-6">Publications</h2>
        <p className="text-sm italic">
          "Deep Learning Approach for Renal Cell Carcinoma Detection", IEEE ICIP 2024.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-6">📫 Contact</h2>
        <p className="text-sm">📧 maroofkanakkayil@gmail.com</p>
        <p className="text-sm">
          🔗 <a href="https://linkedin.com/in/maroofmohammed1" className="text-blue-600">LinkedIn</a> | <a href="https://github.com/RoboMaroof" className="text-blue-600">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Profile;