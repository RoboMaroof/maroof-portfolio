import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Project One',
      image: '/images/project1.jpg',
      link: 'https://example.com',
    },
    {
      title: 'Project Two',
      image: '/images/project2.jpg',
      link: 'https://example.com',
    },
  ]

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  )
}
