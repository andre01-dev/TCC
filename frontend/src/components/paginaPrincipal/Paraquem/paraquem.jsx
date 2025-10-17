import "./paraquem.scss";

export default function Parte2() {
  return (
    <section className="parte2">
      <div className="onda-topo">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
<path fill="#f6e9e8" d="M0,90 C360,300 500,-100 1440,120 L1440,0 L0,0 Z" />
        </svg>
        
      </div>

      <div className="conteudo">
        <h2>Para quem é o Conectando Gerações?</h2>

        <div className="text">
          <img
            className="imga"
            src="/src/assets/images/download (4).jpeg"
            alt="Idosos aprendendo tecnologia"
          />

          <div className="texto">
            <h3>60+</h3>
            <p>
              O Conectando Gerações é um site criado para ajudar idosos a usar a
              internet com mais segurança e confiança. Nossa missão é orientar,
              ensinar e proteger, oferecendo dicas práticas para navegar online,
              evitar golpes e se adaptar às facilidades do mundo digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
