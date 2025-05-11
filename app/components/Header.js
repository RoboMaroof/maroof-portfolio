'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Maroof Abdul Aziz</h1>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#publications" className="hover:underline">Publications</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
