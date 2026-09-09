import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="habilidades" className="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.name}>
            <div className="skill-category-header">
              <h3>{category.name}</h3>
              {category.note && <span className="skill-category-note">{category.note}</span>}
            </div>
            <ul className="pill-list">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
