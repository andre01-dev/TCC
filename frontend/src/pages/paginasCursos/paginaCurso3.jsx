import "./paginaCurso3.scss";
import PaginaCurso from "../../components/paginaCurso/paginaCurso.jsx";
import Rodape from "../../components/rodape/rodape.jsx";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import curso3 from "../../assets/images/curso3.png";
import CabecalhoLogado from "../../components/cabecalhoLogado/cabecalho.jsx";
import { useEffect, useState } from "react";

export default function Curso3() {

    const [nomeUsuario, setNomeUsuario] = useState("");
        const [logado, setLogado] = useState(false)
        const nome_usuario = localStorage.getItem("NOME_USUARIO")
    
        useEffect(() => {
            const token = localStorage.getItem("TOKEN");
    
            if (token != undefined && token != null) {
                setNomeUsuario(nome_usuario)
                setLogado(!!token)
            }
            else{
                setLogado(false)
                setNomeUsuario("")
            }
        })

 return(
    <div className="container-pagonaCurso">
        {logado ? (
                        <>
                            <CabecalhoLogado
                                nome_usuario = {nomeUsuario}
                            />
                        </>
                    ) : (
                      <>
                        <Cabecalho />
                      </>  
                    )}
        <div className="paginas">
            
        <PaginaCurso
        imagem={curso3}
        titulo="Fake News"
        texto= "chdsvv"
        modulo1= "Introdução"
        modulo2="introdução"
        modulo3="introdução"
        />
        </div>
        <Rodape />
    </div>
)
}
