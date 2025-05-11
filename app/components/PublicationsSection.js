'use client'
import Section from './Section'

export default function PublicationsSection() {
  return (
    <Section title="📄 Publications" bg="bg-gray-50">
      <p className="text-sm italic">
        "Deep Learning Approach for Renal Cell Carcinoma Detection", IEEE ICIP 2024.{' '}
        <a
          href="https://ieeexplore.ieee.org/document/10647236"
          className="text-blue-600"
          target="_blank"
          rel="noreferrer"
        >
          Read Paper
        </a>
      </p>
    </Section>
  )
}
