'use client';
import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white text-center">
      <div>
        <h1 className="text-5xl font-bold">Hi, I'm Maroof</h1>
        <p className="text-lg mt-4">AI Engineer | LLMs | Vision | MLOps</p>
        <p className="text-sm mt-2 text-gray-600 max-w-xl mx-auto">
          I build intelligent systems with LLMs and Computer Vision—bringing AI into real-world production.
        </p>
        <a href="#projects" className="mt-6 inline-block text-blue-600 font-semibold underline">View Projects ↓</a>
      </div>
    </section>
  );
};

export default Hero;
