import type { Project } from '../types'
import { projects } from '../data/projects'

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
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
    </>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>
      <div className="project-grid">
        {projects.map((project) => {
          const className = project.placeholder
            ? 'project-card is-placeholder'
            : 'project-card'

          // Só vira link clicável quando o projeto já tem um repositório
          // de verdade. O placeholder continua como um bloco comum.
          if (project.repoUrl) {
            return (
              <a
                key={project.id}
                className={`${className} project-card-link`}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver repositório do projeto ${project.title} no GitHub`}
              >
                <ProjectCardContent project={project} />
              </a>
            )
          }

          return (
            <article key={project.id} className={className}>
              <ProjectCardContent project={project} />
          </article>
          )
        })}
      </div>
    </section>
  )
}
