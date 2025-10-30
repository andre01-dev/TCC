import { useState } from 'react'
import { useNavigate } from "react-router";
import './cabecalho.scss'
import { Link } from 'react-router'

export default function CabecalhoLogado({ nome_usuario }) {

    const navigate = useNavigate();
    const [menuLogado, setMenuLogado] = useState(false)

    function Sair () {
        localStorage.removeItem("NOME_USUARIO");
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("ID_USUARIO");
        localStorage.removeItem("RESULTADO_QUIZ");
        sessionStorage.removeItem("TOKEN");
        window.location.reload()
    }

    return (
        <div>
            <div className="container-cabecalho">
                <div>
                <Link to={"/"}>
                        <img src="src/assets/images/logoVeio.png" height={90} />
                    </Link>
                </div>
                <h1 className='titulo-cabecalho'>CONECTANDO GERAÇÕES</h1>
                <div className="navegar">
                    <Link to={"/"}><p className='nav-cabecalho'>Inicio</p></Link>
                    <Link to={"/cursos"}><p className='nav-cabecalho'>Cursos</p></Link>
                    <Link to={"/tdsntc"}><p className='nav-cabecalho'>Notícias</p></Link>
                    <Link><p className='nav-cabecalho'>Quem Somos</p></Link>
                    <button className='nome-usuario' onClick={() => setMenuLogado(!menuLogado)}>{nome_usuario}</button>

                    {menuLogado && (
                        <div className="popup-menu" onClick={() => setMenuLogado(false)}>
                            <div className="popup">
                                <Link to={"/perfil"}><p>Meu perfil</p></Link>
                                <button onClick={Sair}>Sair</button>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}