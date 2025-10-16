import "./parte4.scss";

export default function Parte4() {
  return (
    <section className="cursos">
      <h2 className="tx">CONHEÇA NOSSOS CURSOS</h2>

      <div className="carrossel">
        <div className="cards">
          <div className="card">
            <img src="/src/assets/images/curso1.png" alt="Curso 1" />
            <p>Guia básico de navegação pela internet, como realizar <br />
                 buscas de informações e filtrar os resultados encontrados.</p>
          </div>
          <div className="card">
            <img src="/src/assets/images/curso2.png" alt="Curso 2" />
            <p>Guia básico de navegação pela internet, como realizar <br />
                buscas de informações e filtrar os resultados encontrados.</p>
          </div>
          <div className="card">
            <img src="/src/assets/images/curso3.png" alt="Curso 3" />
            <p>Guia básico de navegação pela internet, como realizar <br />
                buscas de informações e filtrar os resultados encontrados.</p>
          </div>
        </div>
      </div>

      <a href="#" className="ver-tudo">+ Ver Tudo</a>
    </section>
  );
}
