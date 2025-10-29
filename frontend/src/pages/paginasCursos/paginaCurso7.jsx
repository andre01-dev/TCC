import "./paginaCurso1.scss";
import Rodape from "../../components/rodape/rodape.jsx";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import CabecalhoLogado from "../../components/cabecalhoLogado/cabecalho.jsx";
import { useEffect, useState } from "react";

export default function Curso1() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [logado, setLogado] = useState(false);
  const nome_usuario = localStorage.getItem("NOME_USUARIO");

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");

    if (token) {
      setNomeUsuario(nome_usuario);
      setLogado(true);
    } else {
      setLogado(false);
      setNomeUsuario("");
    }
  }, []);

  return (
    <div className="pagina-curso">
      {logado ? (
        <CabecalhoLogado nome_usuario={nomeUsuario} />
      ) : (
        <Cabecalho />
      )}

      <main className="conteudo">
        <div className="lado-esquerdo">
          <h1>Educação Financeira Digital</h1>

          <div className="video-box">
            <iframe
  src="https://www.youtube.com/embed/spzDz_DpOk8?si=SycyncyGPQtexn_4"
  title="Curso Fake News - Internet Segura"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
      
          </div>

          <p className="descricao">
            Aprenda o que são Fake News e como se proteger de informações falsas
            na internet. Descubra ferramentas e práticas seguras de checagem.
          </p>

          <div className="modulos">
            <h2>Módulos</h2>
            <ul>
              <li>Introdução</li>
              <li>Como identificar uma Fake News</li>
              <li>Ferramentas de verificação</li>
            </ul>
          </div>
        </div>

      
        <div className="lado-direito">
          <div className="card-curso">
            <p className="tema">Educação Financeira Digital</p>
            <p className="tempo">6min</p>

            <h2>Educação Financeira Digital</h2>
            <p className="resumo">
              Guia básico de navegação pela internet, como realizar buscas de
              informações e filtrar os resultados encontrados.
            </p>

            <p className="nivel">Nível: Básico</p>

            <div className="gratuito">Gratuito</div>

            <div className="inclui">
              <h3>Esse curso inclui:</h3>
              <ul>
                <li>⭐ Apostila</li>
                <li>⭐ Vídeo</li>
                <li>⭐ Certificado</li>
              </ul>
            </div>

            <div className="avaliacao">
              <h3>5 de 5 ⭐⭐⭐⭐⭐</h3>
              <p>Avaliação</p>
            </div>

            <button className="botao-inscrever">INSCREVA-SE</button>
          </div>
        </div>
      </main> 

      <Rodape />
    </div>
  );
}
