import { useEffect, useState } from "react"
import "./index.scss"
import api from "../../../api"


export default function Perfil() {
    const [dados, setDados] = useState({});
    const [loading, setLoading] = useState(true);


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



    return (
        <div>
            <div className='container-tudo'>
                <div className='user'>
                    <h2></h2>
                    <img src="/src/assets/images/perfil.png" alt="" />
                </div>
                <div className="dados-container">

                    <div className='dados'>
                        <h2>Perfil</h2>
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

                    <div className="progresso">
                        <div className="info">
                            <h3>Meu progresso</h3>
                            <div className="barra1"></div>
                        </div>
                        <div className="info">
                            <h3>Tempo de Uso</h3>
                            <div className="barra2"></div>
                            <h3>2 horas</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}