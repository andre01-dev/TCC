import "./cursoRealizado.scss";

export default function Realizado() {
  return (
    <div className="container-tudo">
      <div className="realizados">
        <div className="realizado">
          <img src="/src/assets/images/conquista1.png"  />
          <div className="tt">
            <h1>Internet Segura</h1>
            <h3>Concluído</h3>
          </div>
        </div>

        <div className="realizado">
          <img src="/src/assets/images/conquista2.png"/>
          <div className="tt">
            <h1>Compras Online</h1>
            <h3>Concluído</h3>
          </div>
        </div>

        <div className="realizado">
          <img src="/src/assets/images/conquista3.png" />
          <div className="tt">
            <h1>Pagamentos e banco Digital</h1>
            <h3>Concluído</h3>
          </div>
        </div>

        <div className="realizado">
          <img src="/src/assets/images/conquista4.png" />
          <div className="tt">
            <h1>Criando e usando Email</h1>
            <h3>Concluído</h3>
          </div>
        </div>
      </div>

      {/* Lado direito - Recomendações */}
      <div className="recomenda-tudo">
    
        <div className="recomendacao">
          <div className="texto">
            <h3>Proteja suas Senhas</h3>
            <p>
              Guia básico de navegação pela internet, como realizar buscas de
              informações e filtrar os resultados encontrados.
            </p>
            <button>Ver curso</button>
          </div>
          <img src="/src/assets/images/logoCurso.png" />
        </div>

        <div className="recomendacao">
          <div className="texto">
            <h3>Compras Online</h3>
            <p>
              Guia básico de navegação pela internet, como realizar buscas de
              informações e filtrar os resultados encontrados.
            </p>
            <button>Ver curso</button>
          </div>
          <img src="/src/assets/images/logoCurso.png"  />
        </div>

         <div className="recomendacao">
          <div className="texto">
            <h3>Compras Online</h3>
            <p>
              Guia básico de navegação pela internet, como realizar buscas de
              informações e filtrar os resultados encontrados.
            </p>
            <button>Ver curso</button>
          </div>
          <img src="/src/assets/images/logoCurso.png"  />
        </div>
      </div>
    </div>
  );
}
