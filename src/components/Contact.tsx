export default function Contact() {
  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>
      <p>Vamos conversar sobre uma oportunidade de estágio?</p>
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
          href="https://www.linkedin.com/in/SEU-USUARIO-AQUI"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="contact-button"
          href="/CV-Gt.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Currículo (PDF)
        </a>
      </div>
    </section>
  )
}
