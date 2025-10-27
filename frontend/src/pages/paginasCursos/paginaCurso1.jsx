import "./paginaCurso1.scss";
import Rodape from "../../components/rodape/rodape.jsx";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import curso1 from "../../assets/images/curso1.png";
import CabecalhoLogado from "../../components/cabecalhoLogado/cabecalho.jsx";
import { useEffect, useState } from "react";

export default function Curso1() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [logado, setLogado] = useState(false);
  const nome_usuario = localStorage.getItem("NOME_USUARIO");

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");

    if (token != undefined && token != null) {
      setNomeUsuario(nome_usuario);
      setLogado(!!token);
    } else {
      setLogado(false);
      setNomeUsuario("");
    }
  }, []);

  return (
    <div className="container-paginaCurso">
      {logado ? (
        <CabecalhoLogado nome_usuario={nomeUsuario} />
      ) : (
        <Cabecalho />
      )}

      <div className="conteudo-curso">
        <h1>Fake News</h1>

        <img src={curso1} alt="Curso Fake News" className="imagem-curso" />

        <p>
          Aprenda o que são Fake News e como se proteger de informações falsas
          na internet. Descubra ferramentas e práticas seguras de checagem.
        </p>

  <div className="video-container">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/Oss4C_KOZyg"
    title="Curso Fake News - Internet Segura"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


        <div className="modulos">
          <h2>Módulos</h2>
          <ul>
            <li>Introdução</li>
            <li>Como identificar uma Fake News</li>
            <li>Ferramentas de verificação</li>
          </ul>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
