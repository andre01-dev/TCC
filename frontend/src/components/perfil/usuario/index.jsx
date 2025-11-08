import { use, useEffect, useState } from "react"
import "./index.scss";
import api from "../../../api";
import axios from "axios";
import { toast } from "react-toastify";


export default function Perfil() {
    const [dados, setDados] = useState({});
    const [loading, setLoading] = useState(true);
    const [editar, setEditar] = useState(false);

    const id_usuario = localStorage.getItem("ID_USUARIO");

    useEffect(() => {
 
        async function puxarInfos() {
  
            if (!id_usuario) {
                setLoading(false);
                return;
            }

            try {
  
                const response = await api.get(`/perfil/informacoes/${id_usuario}`);
                setDados(response.data);
            } catch (error) {
                console.error("Erro ao buscar informações do perfil:", error);

            } finally {
                setLoading(false); 
            }
        }


        puxarInfos();

    }, []); 

    if (loading) {
        return <div className="loading-message">Carregando perfil...</div>;
    }

async function salvarEdicao() {
  await axios.put(`http://localhost:5010/perfil/editar/${id_usuario}`, {
    nome_usuario: dados.nome_usuario,
    email: dados.email,
    telefone: dados.telefone
  });
  setEditar(false);
}

    return (
        <div>
            <div className='container-tudo'>
                <div className='user'>
                    <img src="/src/assets/images/perfil.png" alt="" />
                </div>
                <div className="dados-container">
                    <div className='dados'>
                    <div className="container-editar">
                        <h2>Perfil</h2>
 <button className="bt-editar" onClick={() => {
    if(!id_usuario){
        toast.error("Você precisa estar logado para editar o perfil")
        return;
    }
   setEditar(true);
}
 }> Editar</button>
                    </div>
                        <div className="info">
                            <h3>nome</h3>
                            <h3>{dados.nome_usuario}</h3>
                        </div>
                        <div className="info">
                            <h3>Email</h3>
                            <h3>{dados.email}</h3>
                        </div>
                        <div className="info">
                            <h3>Telefone</h3>
                            <h3>{dados.telefone}</h3>
                        </div>
                    </div>

                   {editar && (
  <div className="popup-overlay">
    <div className="popup-modal">
      <h2>Editar Perfil</h2>

      <label>Nome:</label>
      <input
        value={dados.nome_usuario}
        onChange={(e) => setDados({ ...dados, nome_usuario: e.target.value })}
      />

      <label>Email:</label>
      <input
        value={dados.email}
        onChange={(e) => setDados({ ...dados, email: e.target.value })}
      />

      <label>Telefone:</label>
      <input
        value={dados.telefone}
        onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
      />

      <div className="popup-buttons">
        <button className="popup-save" onClick={salvarEdicao}>Salvar</button>
        <button className="popup-cancel" onClick={() => setEditar(false)}>Cancelar</button>
      </div>
    </div>
  </div>
)}

                    {/* <div className="progresso">
                        <div className="info">
                            <h3>Meu progresso</h3>
                            <div className="barra1"></div>
                        </div>
                        <div className="info">
                            <h3>Tempo de Uso</h3>
                            <div className="barra2"></div>
                            <h3>2 horas</h3>

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}