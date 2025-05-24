'use client'
import { FaLinkedin, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="snap-start min-h-[100dvh] md:min-h-screen bg-gray-50 px-4 sm:px-6 pt-[72px] md:pt-24 pb-12 flex flex-col justify-center items-center"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 tracking-[0.35em] text-gray-700">
        CONTACT
      </h2>

      <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-10 px-2">
        I’m always open to discussing new projects or opportunities. Let's connect!
      </p>

      <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gray-800 w-full max-w-md">
        <p className="flex items-center gap-3 justify-center">
          <MdEmail className="text-xl sm:text-2xl text-gray-700" />
          <a href="mailto:maroofkanakkayil@gmail.com" className="hover:underline text-gray-700 break-all">
            maroofkanakkayil@gmail.com
          </a>
        </p>

        <p className="flex items-center gap-3 justify-center">
          <FaLinkedin className="text-xl sm:text-2xl text-gray-700" />
          <a href="https://linkedin.com/in/maroofmohammed1" className="hover:underline text-gray-700">
            LinkedIn
          </a>
        </p>

        <p className="flex items-center gap-3 justify-center">
          <FaGithub className="text-xl sm:text-2xl text-gray-700" />
          <a href="https://github.com/RoboMaroof" className="hover:underline text-gray-700">
            GitHub
          </a>
        </p>

        <p className="flex items-center gap-3 justify-center">
          <FaMapMarkerAlt className="text-xl sm:text-2xl text-gray-700" />
          Germany
        </p>
      </div>
    </section>
  )
}
