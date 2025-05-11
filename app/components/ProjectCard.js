'use client'
import React from 'react'

const ProjectCard = ({ title, description, tech, link }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
    <p className="text-sm mt-1">
      <span className="font-medium">Tech Stack:</span> {tech}
    </p>
    {link && (
      <a
        href={link}
        className="text-blue-600 text-sm"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    )}
  </div>
)

export default ProjectCard
