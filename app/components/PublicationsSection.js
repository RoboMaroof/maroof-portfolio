'use client'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { FaFileAlt } from 'react-icons/fa'

const publications = [
  {
    id: 'paper',
    title: 'Deep Learning Approach for Renal Cell Carcinoma Detection',
    subtitle: 'IEEE ICIP 2024',
    description: 'A deep learning method for detecting renal cell carcinoma using histopathological images.',
    link: 'https://ieeexplore.ieee.org/document/10647236',
    embedType: 'pdf',
    embed: 'https://www.biorxiv.org/content/10.1101/2024.02.12.577550v1.full.pdf'
  },
  {
    id: 'thesis',
    title: 'Optimization of Small Language Models for Embedded Voice Assistance',
    subtitle: "Master's Thesis, 2024",
    description: 'My Master’s thesis focused on usage of SLMs on edge devices.',
    link: '/docs/maroof_thesis.pdf',
    embedType: 'images',
    imageCount: 68, // Change this based on how many images you generated
    imagePrefix: '/docs/thesis_images/page_', // should point to e.g. /public/docs/thesis_images/page_1.png
  }
]

export default function PublicationsSection() {
  const [index, setIndex] = useState(0)
  const total = publications.length
  const pub = publications[index]

  return (
    <section
      id="publications"
      className="snap-start min-h-screen bg-gray-200 px-6 pt-24 relative flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-8 tracking-[0.35em] text-gray-700">
        PUBLICATIONS
      </h2>

      <div className="relative w-full max-w-6xl h-[800px] flex items-center justify-center">
        {/* Arrows */}
        {index > 0 && (
          <button
            onClick={() => setIndex((index - 1 + total) % total)}
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-300 z-20"
            aria-label="Previous Publication"
          >
            <ArrowLeft size={60} strokeWidth={2.5} className="text-gray-500" />
          </button>
        )}
        {index < total - 1 && (
          <button
            onClick={() => setIndex((index + 1) % total)}
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-300 z-20"
            aria-label="Next Publication"
          >
            <ArrowRight size={60} strokeWidth={2.5} className="text-gray-500" />
          </button>
        )}

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 h-[750px] w-full max-w-[90%] flex flex-col justify-between overflow-hidden">
          <div className="flex items-start gap-3 mb-4">
            <FaFileAlt className="text-2xl text-gray-700 mt-1" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">{pub.title}</h3>
              <p className="text-gray-600 text-sm">{pub.subtitle}</p>
              <p className="mt-2 text-gray-700">{pub.description}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm hover:underline mt-2 inline-block"
              >
                View Document ↗
              </a>
            </div>
          </div>

          {/* Embed or Image Viewer */}
          <div className="w-full h-[620px] overflow-y-auto rounded border shadow-inner p-2 bg-gray-100">
            {pub.embedType === 'pdf' ? (
              <iframe
                src={pub.embed}
                title={pub.title}
                width="100%"
                height="100%"
                className="rounded shadow border"
                allow="autoplay"
              ></iframe>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                {Array.from({ length: pub.imageCount }, (_, i) => (
                  <img
                    key={i}
                    src={`${pub.imagePrefix}${i + 1}.png`}
                    alt={`Page ${i + 1}`}
                    className="w-full max-w-full object-contain rounded"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
