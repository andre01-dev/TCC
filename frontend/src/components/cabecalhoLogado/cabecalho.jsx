import { useState } from 'react'
import { useNavigate } from "react-router";
import './cabecalho.scss'
import { Link } from 'react-router'

export default function CabecalhoLogado({ nome_usuario }) {

    const navigate = useNavigate();
    const [menuLogado, setMenuLogado] = useState(false)

    function Sair () {
        window.location.reload()
        localStorage.clear()
    }

    return (
        <div>
            <div className="container-cabecalho">
                <div>
                <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                        <img src="/images/logoVeio.png" height={90} />
                    </Link>
                </div>
                <h1 className='titulo-cabecalho'>CONECTANDO GERAÇÕES</h1>
                <div className="navegar">
                    <Link to={"/"}onClick={() => window.scrollTo(0, 0)}><p className='nav-cabecalho'>Inicio</p></Link>
                    <Link to={"/cursos"}onClick={() => window.scrollTo(0, 0)}><p className='nav-cabecalho'>Cursos</p></Link>
                    <Link to={"/tdsntc"}onClick={() => window.scrollTo(0, 0)}><p className='nav-cabecalho'>Notícias</p></Link>
                    <Link to={'/quemsomos'}onClick={() => window.scrollTo(0, 0)}><p className='nav-cabecalho'>Quem Somos</p></Link>
                    <button className='nome-usuario' onClick={() => setMenuLogado(!menuLogado)}>{nome_usuario}</button>

                    {menuLogado && (
                        <div className="popup-menu" onClick={() => setMenuLogado(false)}>
                            <div className="popup">
                                <Link to={"/perfil"}><p>Meu Perfil</p></Link>
                                <button onClick={Sair}>Sair</button>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}