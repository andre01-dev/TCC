import "./paginaCurso9.scss";
import PaginaCurso from "../../components/paginaCurso/paginaCurso.jsx";
import Rodape from "../../components/rodape/rodape.jsx";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import curso9 from "../../assets/images/curso9.png";
import { useEffect, useState } from "react";
import CabecalhoLogado from "../../components/cabecalhoLogado/cabecalho.jsx";

export default function Curso9() {

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
        imagem={curso9}
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
