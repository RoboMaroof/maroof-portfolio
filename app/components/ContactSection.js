'use client'
import Section from './Section'

export default function ContactSection() {
  return (
    <div id="contact">
      <Section title="📫 Contact" bg="bg-white">
        <p className="text-sm">📧 maroofkanakkayil@gmail.com</p>
        <p className="text-sm">📱 +49 177 2186330</p>
        <p className="text-sm">
          🔗{' '}
          <a href="https://linkedin.com/in/maroofmohammed1" className="text-blue-600 hover:underline">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href="https://github.com/RoboMaroof" className="text-blue-600 hover:underline">
            GitHub
          </a>
        </p>
      </Section>
    </div>
  )
}
