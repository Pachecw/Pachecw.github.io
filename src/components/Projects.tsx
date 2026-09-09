import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className={project.placeholder ? 'project-card is-placeholder' : 'project-card'}
          >
            <header className="project-card-header">
              <h3>{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </header>
            <p className="project-description">{project.description}</p>
            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="project-stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
