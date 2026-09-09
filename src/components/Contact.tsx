export default function Contact() {
  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>
      <p>Vamos conversar sobre um projeto?</p>
      <div className="contact-links">
        <a
          className="contact-button"
          href="https://github.com/Pachecw"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {/* Troque pelo link real do seu perfil do LinkedIn */}
        <a
          className="contact-button"
          href="https://www.linkedin.com/in/gustavo-pacheco-bb04bb322"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
