import './cursos.scss'
import CardCurso from '../components/CardCurso/cardCurso.jsx'
import Cabecalho from '../components/cabecalho/cabecalho.jsx'
import Rodape from '../components/rodape/rodape.jsx'
import {Link} from 'react-router'

import curso1 from "../assets/images/curso1.png";
import curso2 from "../assets/images/curso2.png";
import curso3 from "../assets/images/curso3.png";
import curso4 from "../assets/images/curso4.png";
import curso5 from "../assets/images/curso5.png";
import curso6 from "../assets/images/curso6.png";
import curso7 from "../assets/images/curso7.png";
import curso8 from "../assets/images/curso8.png";
import curso9 from "../assets/images/curso9.png";

export default function Cursos() 
{
    return(
    <div className='Container-Curso'>

        <Cabecalho />

        <div className='cursos'>
        <Link to="/curso1">
        <CardCurso 
        imagem={curso1}
        titulo='Internet Segura'
        duracao=' 20min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar como indentificar mensagens suspeitas'
        nivel='Nivel: Básico'
        />
        </Link>

        <Link to='/curso2'>
        <CardCurso 
        imagem={curso2}
        titulo='Compras Online de Forma Segura'
        duracao=' 10min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar como evitar fraudes e compras impulsivas'
        nivel='Nivel: Básico'
        />
        </Link>

        <Link to='/curso3'>
        <CardCurso 
        imagem={curso3}
        titulo='Bancos Digitais'
        duracao=' 30min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar a navegar de modo segura no seu Banco'
        nivel='Nivel: Básico'
        />
        </Link>

        <Link to='/curso4'>
        <CardCurso 
        imagem={curso4}
        titulo='Organização Digital'
        duracao=' 40min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar a Armazenar documentos e fotos com segurança'
        nivel='Nivel: Básico'
        />
        </Link>

        <Link to='/curso5'>
        <CardCurso 
        imagem={curso5}
        titulo='Criando e Usando E-mail'
        duracao=' 15min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar a Criar uma conta e usar o E-mail'
        nivel='Nivel: Básico'
        />
        </Link>

        <Link to='/curso6'>
        <CardCurso 
        imagem={curso6}
        titulo='Introdução a Inteligência Artificial'
        duracao=' 27min'
        tema='Inteligência Artificial'
        descricao='Nesse Curso vamos te ensinar a Usar a Inteligencia Artificial'
        nivel='Nivel: Básico'
        />
        </Link>

        <Link to='/curso7'>
        <CardCurso 
        imagem={curso7}
        titulo='Educação Financeira Digital '
        duracao=' 55min'
        tema='Educação Financeira'
        descricao='Nesse Curso vamos te dar dicas de como controlar seus gastos e evitar fraudes'
        nivel='Nivel: Básico'
        />
        </Link>

        <Link to='/curso8'>
        <CardCurso 
        imagem={curso8}
        titulo='Proteção de Senhas'
        duracao=' 23min'
        tema='Senhas Seguras'
        descricao='Nesse Curso vamos te ensinar a Criar uma Senha Forte.'
        nivel='Nivel: Básico'
        />
        </Link>

        <Link to='/curso9'>
        <CardCurso 
        imagem={curso9}
        titulo='Golpe po E-mail (Phishing)'
        duracao=' 30min'
        tema='Golpes (Phishing)'
        descricao='Nesse Curso vamos te ensinar a como Reconhecer E-mail Falsos e o Que Fazer'
        nivel='Nivel: Básico'
        />
        </Link>
        </div>

        <Rodape />

    </div>
    )
}