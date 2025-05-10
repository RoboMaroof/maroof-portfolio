import React from "react";
import photo from "../assets/maroof-photo.jpg"; // Your photo

const Profile = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6">
        <img src={photo} alt="Maroof Abdul Aziz" className="w-32 h-32 rounded-full shadow-sm" />
        <div>
          <h1 className="text-3xl font-bold">Maroof Abdul Aziz</h1>
          <p className="text-md mt-2">
            AI/Robotics Engineer | LLM Researcher | Master’s Student @ RWTH Aachen
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Passionate about deploying LLMs and AI systems into real-world applications—especially in embedded NLP and automotive voice systems.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">🚀 Projects</h2>
        <div>
          <h3 className="font-semibold">🔊 ChatGPT-Enhanced TTS for Audi</h3>
          <p className="text-sm">Integrated GPT-based generation for multilingual speech improvement in automotive voice assistants.</p>
        </div>
        <div>
          <h3 className="font-semibold">🧠 Driver Drowsiness Detection</h3>
          <p className="text-sm">Used CNNs and facial landmarks to detect fatigue in real-time video feeds.</p>
        </div>
        <div>
          <h3 className="font-semibold">⚙️ Thesis: Optimizing Small LLMs</h3>
          <p className="text-sm">Research and fine-tuning of compact LLMs for edge devices in automotive speech systems.</p>
        </div>

        <h2 className="text-xl font-semibold mt-6">📄 Publications</h2>
        <p className="text-sm italic">Deep Learning Approach for Renal Cell Carcinoma Detection, IEEE ICIP 2024</p>

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
