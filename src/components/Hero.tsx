export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <h1>Gustavo Oliveira Pacheco Rocha</h1>
        <p className="hero-role">Estudante de Engenharia da Computação na UTFPR</p>
        <p className="hero-lede">
          Construo sistemas web do banco de dados até a interface, e gosto de testar
          cada parte antes de considerar pronto. Em busca de uma oportunidade de
          estágio em TI.
        </p>
      </div>

      <div className="spec-block">
        <svg className="spec-frame" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="0.5" y="0.5" width="99" height="99" />
        </svg>
        <dl className="spec-rows">
          <div className="spec-row">
            <dt>Nome</dt>
            <dd>Gustavo O. P. Rocha</dd>
          </div>
          <div className="spec-row">
            <dt>Curso</dt>
            <dd>Eng. da Computação</dd>
          </div>
          <div className="spec-row">
            <dt>Status</dt>
            <dd className="status-value">Aberto a estágio</dd>
          </div>
          <div className="spec-row">
            <dt>GitHub</dt>
            <dd>@Pachecw</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
