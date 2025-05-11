import React from "react";
import photo from "../assets/maroof-photo.jpg";


const Section = ({ title, children, bg }) => (
  <section className={`${bg} py-10 px-6`}>
    <div className="max-w-6xl mx-auto">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  </section>
);


const Profile = () => {
  return (
    <div>
      {/* Intro */}
      <Section bg="bg-white">
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-x-6">
          <img src={photo} alt="Maroof Abdul Aziz" className="w-32 h-32 rounded-full shadow-md" />
          <div>
            <h1 className="text-4xl font-bold">Maroof Abdul Aziz</h1>
            <p className="text-lg mt-2 text-gray-700">
              M.Sc. Robotic Systems Engineering @ RWTH Aachen | LLM + Vision Developer | Master Thesis @ Audi | Ex-Mercedes-Benz
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Hands-on experience in developing, optimizing, and deploying AI/ML models for LLMs and Computer Vision. Proven track record of delivering real-world AI solutions across academia and industry (Audi, Mercedes-Benz). First-author IEEE publication. Focused on LLM efficiency, multimodal intelligence, and AI-driven automation.
            </p>
          </div>
        </div>
      </Section>


      {/* NLP / LLM */}
      <Section title="🧠 NLP / LLM Projects" bg="bg-gray-50">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">🔊 Internship: ChatGPT-Enhanced TTS @ Audi AG</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Integrated ChatGPT into online speech processing.</li>
              <li>Improved TTS functionality via automated evaluation and tuning.</li>
              <li>Created multilingual test datasets for semantic evaluation.</li>
              <li>Benchmarked vector search with multilingual models.</li>
              <li>Automated backend performance tests and integrated results into CI/CD pipelines.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">⚙️ Master Thesis: Optimizing Small LLMs for Embedded NLP</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Focused on fine-tuning and compressing small LLMs for low-resource devices.</li>
              <li>Used PEFT, LoRA, PTQ, and hardware acceleration.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Personal Project: LangChain RAG Agent Suite</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>A modular framework for experimenting with Retrieval-Augmented Generation using LangChain and LlamaIndex.</li>
              <li>GitHub: <a href="https://github.com/RoboMaroof/LangChain-RAG-Agent-Suite" className="text-blue-600">LangChain-RAG-Agent-Suite</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Personal Project: LangChain RAG Agent Suite</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>A personal project focused on deploying LangGraph-based RAG agents in a production-like setup using Docker, AWS EC2, and CI/CD.</li>
              <li>GitHub: <a href="https://github.com/RoboMaroof/LangGraph-Agent-LLMOps-Deployment" className="text-blue-600">LangGraph-Agent-LLMOps-Deployment</a></li>
            </ul>
          </div>

        </div>
      </Section>


      {/* Computer Vision */}
      <Section title="🖼️ Computer Vision Projects" bg="bg-white">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">🧬 Renal Cancer Detection (IEEE ICIP 2024)</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Developed models for tumor detection, subtyping, and grading in high-res images.</li>
              <li>First-author IEEE ICIP 2024 publication: <a href="https://ieeexplore.ieee.org/document/10647236" className="text-blue-600">IEEE Link</a></li>
              <li>GitHub: <a href="https://github.com/RoboMaroof/Cancer-Detection-on-WSIs---LFB" className="text-blue-600">Cancer Detection Repo</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">😴 Driver Drowsiness Detection</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Used facial landmarks and CNNs for real-time fatigue detection.</li>
              <li>Blog: <a href="https://techlabs-aachen.medium.com/driver-drowsiness-recognition-1c2c0f2039a9" className="text-blue-600">Medium Article</a></li>
              <li>GitHub: <a href="https://github.com/RoboMaroof/TechLabs_DriverDrowsinessDetection" className="text-blue-600">Drowsiness Repo</a></li>
            </ul>
          </div>

        </div>
      </Section>


      {/* Publications */}
      <Section title="📄 Publications" bg="bg-gray-50">
        <p className="text-sm italic">
          "Deep Learning Approach for Renal Cell Carcinoma Detection", IEEE ICIP 2024.
        </p>
      </Section>


      {/* Contact */}
      <Section title="📫 Contact" bg="bg-white">
        <p className="text-sm">📧 maroofkanakkayil@gmail.com</p>
        <p className="text-sm">📱 +49 177 2186330</p>
        <p className="text-sm">
          🔗 <a href="https://linkedin.com/in/maroofmohammed1" className="text-blue-600">LinkedIn</a> |{" "}
          <a href="https://github.com/RoboMaroof" className="text-blue-600">GitHub</a>
        </p>
      </Section>
    </div>
  );
};

export default Profile;