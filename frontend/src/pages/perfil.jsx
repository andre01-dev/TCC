import { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho/cabecalho";
import Conquistas from "../components/perfil/conquistas/conquistas";
import CursoRealizado from "../components/perfil/cursosRealizados/cursoRealizado"
import User from "../components/perfil/usuario/index";
import "./perfil.scss";
import CabecalhoLogado from "../components/cabecalhoLogado/cabecalho";
import Rodape2 from "../components/rodape/rodapePerfil";

export default function Perfil() {

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

    return (
        <div className="teste">
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

            <div>
                <User />
                <h1 className="conquistatxt">Confira suas conquistas</h1>
                <Conquistas />

                <CursoRealizado />
            </div>
            <Rodape2 />
        </div>
    )
}
