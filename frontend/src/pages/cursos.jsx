import api from '../api.js'
import './cursos.scss'
import CardCurso from '../components/CardCurso/cardCurso.jsx'
import Cabecalho from '../components/cabecalho/cabecalho.jsx'
import Rodape from '../components/rodape/rodape.jsx'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import CabecalhoLogado from '../components/cabecalhoLogado/cabecalho.jsx'

export default function Cursos() {

    const [nomeUsuario, setNomeUsuario] = useState("");
    const [logado, setLogado] = useState(false)
    const nome_usuario = localStorage.getItem("NOME_USUARIO");
    const [cursos, setCursos] = useState([]);

    async function listarCursos() {
        const response = await api.get("/puxar/cursos")
        setCursos(response.data);
    }

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

        listarCursos()
    }, []);



    return (
        <div className='Container-Curso'>

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

            <div className='voltar-cursos'>
                <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                    <button className='voltar'>
                        <img src="/src/assets/images/setaEsquerda.png" height={25} />
                    </button>
                    <p>Voltar para a página Inicial</p>
                </Link>
            </div>

            <div className='titulo-cursos'>
                <h1>Cursos</h1>
            </div>



            <div className='cursos'>
                {cursos.map(curso =>
                    <Link to={curso.url} onClick={() => window.scrollTo(0, 0)}>
                        <div className='container-cardCurso'>
                            <div className='cardCurso'>
                                <img className='imagem' src={curso.caminho_img} alt="" />
                                <div className='titulo-carga'>
                                    <h2 className='titulo'>{curso.nome_curso}</h2>
                                    <div className='tempo'>
                                        <img src="https://img.icons8.com/ios7/200/clock--v3.png" height={20} />
                                        <h2>{curso.duracao}</h2>
                                    </div>
                                </div>
                                <p>{curso.descricao}</p>
                                <div className='nivel-button'>
                                    <h2>Nível: Básico</h2>
                                    <button>Gratuito</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}

            </div>

            <button
                className="botao-topo"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ⬆
            </button>

            <Rodape />

        </div>
    )
}