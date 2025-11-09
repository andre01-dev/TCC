import "./AcontecendoAgora.scss";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import api from "../../../api";



export default function Parte2() {
  const [noticias, setNoticias] = useState([]);

  async function carregarNoticias() {
    try {
      const response = await api.get("/noticias");
      const ultimasNoticias = response.data.slice(0, 3);

      setNoticias(ultimasNoticias);
    } catch (error) {
      console.error("Erro ao carregar notícias:", error);
    }
  }

  useEffect(() => {
    carregarNoticias();
  }, []);

  return (
    <section className="tudo">
      <div className="conteudo">
        {noticias.map((noticia) => (
          <Link
            key={noticia.id_noticias}
            to={`/noticia/${noticia.id_noticias}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="item">
              <img
                className="image"
                src={noticia.caminho_img1}
                alt={noticia.titulo}
              />
              <div className="texto">
                <h2>{noticia.titulo}</h2>
                <br />
                <p>
                  {noticia.subtitulo?.slice(0, 200)}...
                  <br />
                </p>
              </div>
            </div>
          </Link>
        ))}

        <Link to={"/tdsntc"} onClick={() => window.scrollTo(0, 0)}>
          <div className="alinhar">
            <button className="verMais">+</button>
            <p>Ver mais</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
