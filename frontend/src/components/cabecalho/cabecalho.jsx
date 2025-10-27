import { useState } from 'react'
import { useNavigate } from "react-router";
import './cabecalho.scss'
import { Link } from 'react-router'

export default function Cabecalho() {

    const navigate = useNavigate();
    const [menuLogado, setMenuLogado] = useState(false)

    function Sair () {
        localStorage.removeItem("NOME_USUARIO");
        localStorage.removeItem("TOKEN");
        window.location.reload()
    }

    return (
        <div>
            <div className="container-cabecalho">
                <div>
                    <img src="src/assets/images/logoVeio.png" height={90} />
                </div>
                <h1 className='titulo-cabecalho'>CONECTANDO GERAÇÕES</h1>
                <div className="navegar">
                    <Link to={"/"}><p className='nav-cabecalho'>Inicio</p></Link>
                    <Link to={"/cursos"}><p className='nav-cabecalho'>Cursos</p></Link>
                    <Link to={"/tdsntc"}><p className='nav-cabecalho'>Notícias</p></Link>
                    <Link to={"/quemsomos"}><p className='nav-cabecalho'>Quem Somos</p></Link>
                    <Link to={"/registrar"}><p className='nav-cabecalho'>Login/Registrar</p></Link>
                    
                </div>
            </div>
        </div>
    )
}