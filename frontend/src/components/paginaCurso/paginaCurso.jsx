import "./paginaCurso.scss";

export default function CardCurso({imagem,titulo,texto,modulo1,modulo2,modulo3}) {
return(
    <div className="container-paginaCurso">
      <div className="paginaCurso">
        <div className="titulo">
        <h1>CURSOS</h1>
        </div>
        <img className="imagem" src={imagem}/>
        <div className="subtitulo">
          <h2>{titulo}</h2>
        </div>
        <div className="texto">
        <p>{texto}</p>
        </div>
        <div className="titulomodulo">
          <h2>MÓDULOS</h2>
        </div>
        <div>
          <ul>
            <li>{modulo1}</li>
            <li>{modulo2}</li>
            <li>{modulo3}</li>
          </ul>
        </div>
        </div>
      </div>
  );
}
