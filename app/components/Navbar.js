'use client';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Maroof</h1>
        <div className="space-x-4">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;