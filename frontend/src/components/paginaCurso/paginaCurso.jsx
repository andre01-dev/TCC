import "./paginaCurso.scss";

export default function CardCurso({ videoUrl, titulo, texto, modulo1, modulo2, modulo3 }) {
  return (
    <div className="container-paginaCurso">
      <div className="paginaCurso">
        <div className="titulo">
          <h1 className="josefin-sans">Cursos</h1>
        </div>

        <div className="video-container">
          <iframe
            src={videoUrl}
            title="Vídeo do curso"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="subtitulo">
          <h2 className="josefin-sans">{titulo}</h2>
        </div>

        <div className="texto">
          <p className="average-sans">{texto}</p>
        </div>

        <div className="titulomodulo">
          <h2 className="josefin-sans">Módulos</h2>
        </div>

        <ul className="lista-modulos">
          <li className="josefin-sans">{modulo1}</li>
          <li className="josefin-sans">{modulo2}</li>
          <li className="josefin-sans">{modulo3}</li>
        </ul>
      </div>
    </div>
  );
}
