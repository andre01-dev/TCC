import './cursos.scss'
import CardCurso from '../components/CardCurso/cardCurso.jsx'
import Cabecalho from '../components/cabecalho/cabecalho.jsx'
import Rodape from '../components/rodape/rodape.jsx'
import { Link } from 'react-router'

import curso1 from "../assets/images/curso1.png";
import curso2 from "../assets/images/curso2.png";
import curso3 from "../assets/images/curso3.png";
import curso4 from "../assets/images/curso4.png";
import curso5 from "../assets/images/curso5.png";
import curso6 from "../assets/images/curso6.png";
import curso7 from "../assets/images/curso7.png";
import curso8 from "../assets/images/curso8.png";
import curso9 from "../assets/images/curso9.png";
import { useEffect, useState } from 'react'
import CabecalhoLogado from '../components/cabecalhoLogado/cabecalho.jsx'

export default function Cursos() {

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
  <Link to={"/tdsntc"}>
    <button className='voltar'>
      <img src="/src/assets/images/setaEsquerda.png" height={25} />
    </button>
    <p>Voltar para a página de Notícias</p>
  </Link>
</div>

  <div className='titulo-cursos'>
                <h1>Cursos</h1>
            </div>



            <div className='cursos'>
                <Link to="/curso1">
                    <CardCurso
                        imagem={curso1}
                        titulo='Internet Segura'
                        duracao=' 1min'
                        tema='Fake News'
                        descricao='Nesse Curso vamos te ensinar como navegar de forma segura'
                        nivel='Nivel: Básico'
                    />
                </Link>

                <Link to='/curso2'>
                    <CardCurso
                        imagem={curso2}
                        titulo='Compras Online de Forma Segura'
                        duracao=' 6min'
                        tema='Fake News'
                        descricao='Nesse Curso vamos te ensinar como evitar fraudes e compras impulsivas'
                        nivel='Nivel: Básico'
                    />
                </Link>

                <Link to='/curso3'>
                    <CardCurso
                        imagem={curso3}
                        titulo='Bancos Digitais'
                        duracao=' 6min'
                        tema='Fake News'
                        descricao='Nesse Curso vamos te ensinar a navegar de modo segura no seu Banco'
                        nivel='Nivel: Básico'
                    />
                </Link>

                <Link to='/curso4'>
                    <CardCurso
                        imagem={curso4}
                        titulo='Organização Digital'
                        duracao=' 6min'
                        tema='Fake News'
                        descricao='Nesse Curso vamos te ensinar a Armazenar documentos e fotos com segurança'
                        nivel='Nivel: Básico'
                    />
                </Link>

                <Link to='/curso5'>
                    <CardCurso
                        imagem={curso5}
                        titulo='Criando e Usando E-mail'
                        duracao=' 12min'
                        tema='Fake News'
                        descricao='Nesse Curso vamos te ensinar a Criar uma conta e usar o E-mail'
                        nivel='Nivel: Básico'
                    />
                </Link>

                <Link to='/curso6'>
                    <CardCurso
                        imagem={curso6}
                        titulo='Introdução a Inteligência Artificial'
                        duracao=' 7min'
                        tema='Inteligência Artificial'
                        descricao='Nesse Curso vamos te ensinar a Usar a Inteligencia Artificial'
                        nivel='Nivel: Básico'
                    />
                </Link>

                <Link to='/curso7'>
                    <CardCurso
                        imagem={curso7}
                        titulo='Educação Financeira Digital '
                        duracao=' 6min'
                        tema='Educação Financeira'
                        descricao='Nesse Curso vamos te dar dicas de como controlar seus gastos e evitar fraudes'
                        nivel='Nivel: Básico'
                    />
                </Link>

                <Link to='/curso8'>
                    <CardCurso
                        imagem={curso8}
                        titulo='Proteção de Senhas'
                        duracao=' 6min'
                        tema='Senhas Seguras'
                        descricao='Nesse Curso vamos te ensinar a Criar uma Senha Forte.'
                        nivel='Nivel: Básico'
                    />
                </Link>

                <Link to='/curso9'>
                    <CardCurso
                        imagem={curso9}
                        titulo='Golpe po E-mail (Phishing)'
                        duracao=' 5min'
                        tema='Golpes (Phishing)'
                        descricao='Nesse Curso vamos te ensinar a como Reconhecer E-mail Falsos e o Que Fazer'
                        nivel='Nivel: Básico'
                    />
                </Link>
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