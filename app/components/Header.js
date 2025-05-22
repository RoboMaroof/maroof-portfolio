'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-tight">Portfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#publications" className="hover:underline">Publications</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium text-gray-700 bg-white border-t">
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:underline">About</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="block hover:underline">Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block hover:underline">Projects</a>
          <a href="#publications" onClick={() => setIsOpen(false)} className="block hover:underline">Publications</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:underline">Contact</a>
        </div>
      )}
    </header>
  )
}
