import "./CardCurso2.scss";

export default function CardCurso2() {
  return (
    <section className="cursos">
        <div className="cards">
          <div className="card">
            <img src="/src/assets/images/curso1.png" alt="Curso 1" />
            <p>Guia básico de navegação pela internet, como realizar <br />
                 buscas de informações e filtrar os <br />
                 resultados encontrados.</p>
          </div>
          <div className="card">
            <img src="/src/assets/images/curso2.png" alt="Curso 2" />
            <p>Guia básico de navegação pela internet, como realizar <br />
                       buscas de informações e filtrar <br /> 
                             os resultados encontrados.</p>
          </div>
          <div className="card">
            <img src="/src/assets/images/curso3.png" alt="Curso 3" />
            <p>Guia básico de navegação pela internet, como realizar <br />
                buscas de informações e filtrar <br />
                os resultados encontrados.</p>
          </div>
        </div>
    </section>
  );
}
