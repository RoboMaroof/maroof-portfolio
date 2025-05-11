export default function ProjectCard({ title, image, link }) {
    return (
      <a href={link} target="_blank" className="group">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src={image} alt={title} className="group-hover:scale-105 transition-transform duration-300" />
        </div>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      </a>
    )
  }
  