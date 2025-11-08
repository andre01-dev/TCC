import { useEffect, useState } from "react";
import "./cursoRealizado.scss";
import api from "../../../api.js"

export default function Realizado() {

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function Puxarcursos() {
      try{
        const response = await api.get("/puxar/cursos3");
        setCursos(response.data);
      }
      catch{
        alert("Erro");
      }
    }
    Puxarcursos();
  })

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
        {cursos.map((item, index) => (
          <div key={index}>
            <div className="textos">
              <h3>{item.nome_curso}</h3>
              <p>{item.descricao}</p>
              <button>Ver Curso</button>
            </div>
            <img src={item.caminho_img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
