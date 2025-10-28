import "./paginaCurso6.scss";
import PaginaCurso from "../../components/paginaCurso/paginaCurso.jsx";
import Rodape from "../../components/rodape/rodape.jsx";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import curso6 from "../../assets/images/curso6.png";
import CabecalhoLogado from "../../components/cabecalhoLogado/cabecalho.jsx";
import { useEffect, useState } from "react";
import api from "../../api.js";

export default function Curso6() {

    
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [logado, setLogado] = useState(false)
    const nome_usuario = localStorage.getItem("NOME_USUARIO")
    
    useEffect(() => {
        const token = localStorage.getItem("TOKEN");
        
        if (token != undefined && token != null) {
            setNomeUsuario(nome_usuario)
            setLogado(!!token)
        }
        else {
            setLogado(false)
            setNomeUsuario("")
        }
    })
    
    async function inscreverCurso() {
        const id_usuario = localStorage.getItem("ID_USUARIO");
        const id_curso = 1;

        try{
            const response = await api.put("/inscrever", {
                id_usuario,
                id_curso
            })
            alert("Inscrição realizada com sucesso!");
        }
        catch (e) {
            alert(e.response?.data?.erro || "Erro ao realizar inscrição")
        }
    }

    return (
        <div className="container-pagonaCurso6">
            {logado ? (
                <>
                    <CabecalhoLogado
                        nome_usuario={nomeUsuario}
                    />


                </>
            ) : (
                <>
                    <Cabecalho />
                </>
            )}
            <div className="corpo">
                <div className="paginas">

                    <PaginaCurso
                        imagem={curso6}
                        titulo="Fake News"
                        texto="chdsvv"
                        modulo1="Introdução"
                        modulo2="introdução"
                        modulo3="introdução"
                    />
                </div>

                <div className="menu-lateral">
                    <img className="img-lateral" src="src\assets\images\curso6.png" alt="" />
                    <div className="titulo-duracao">
                        <h2>Introdução a Inteligência Artificial</h2>
                        <h2>27 min</h2>
                    </div>
                    <h1>Inteligência Artificial</h1>
                    <p>Nesse Curso vamos te ensinar a Usar a Inteligencia Artificial com o ChatGPT</p>
                    <div className="nivel-botao">
                        <h2>Nível: Básico</h2>
                        <button className="bt-gratuito">Gratuito</button>
                    </div>

                    <h2 className="inclui-h2">Esse curso inclui:</h2>

                    <div className="incluido">
                        <h3>✔️ Apostila</h3>
                        <h3>✔️ Vídeo</h3>
                        <h3>✔️ Certificado</h3>
                    </div>

                    <div className="avaliacao">
                        <h1>5 de 5</h1>
                        ⭐⭐⭐⭐⭐
                        <h2>Avaliação</h2>
                    </div>

                    <div className="div-inscrever">
                        <button onClick={inscreverCurso} className="bt-inscrever">Inscrever-se</button>
                    </div>
                </div>

            </div>

            <Rodape />
        </div>
    )
}
