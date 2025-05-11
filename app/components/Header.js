'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-tight">Portfolio</h1>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#publications" className="hover:underline">Publications</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
