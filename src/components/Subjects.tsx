import { subjects } from '../data/subjects'

export default function Subjects() {
  return (
    <section id="formacao" className="subjects">
      <h2>Formação</h2>
      <p className="subjects-intro">
        Engenharia da Computação na Universidade Tecnológica Federal do Paraná
        (UTFPR), em curso desde 2022.
      </p>
      <ul className="subject-list">
        {subjects.map((subject) => (
          <li key={subject}>{subject}</li>
        ))}
      </ul>
    </section>
  )
}
