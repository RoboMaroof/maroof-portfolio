'use client'
import React from 'react'

const Section = ({ title, children, bg }) => (
  <section className={`${bg} py-10 px-6`}>
    <div className="max-w-6xl mx-auto">
      {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
      {children}
    </div>
  </section>
)

export default Section
