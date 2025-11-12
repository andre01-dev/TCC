import { useState } from 'react'
import Avatar from "react-avatar";
import { useNavigate } from "react-router";
import './cabecalho.scss'
import { Link } from 'react-router'

export default function CabecalhoLogado({ nome_usuario }) {

    const navigate = useNavigate();
    const [menuLogado, setMenuLogado] = useState(false);
    const [menuAberto, setMenuAberto] = useState(false)  // Novo estado para controlar o menu mobile
    // Função para alternar o menu mobile
    function toggleMenu() {
        setMenuAberto(!menuAberto)
    }

    // Função para fechar o menu ao clicar em um link
    function fecharMenu() {
        setMenuAberto(false)
    }

    function Sair() {
        localStorage.clear()
        sessionStorage.clear();
        navigate("/entrar")
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
                    <Link to={"/"} onClick={() => window.scrollTo(0, 0)}><p className='nav-cabecalho'>Inicio</p></Link>
                    <Link to={"/cursos"} onClick={() => window.scrollTo(0, 0)}><p className='nav-cabecalho'>Cursos</p></Link>
                    <Link to={"/tdsntc"} onClick={() => window.scrollTo(0, 0)}><p className='nav-cabecalho'>Notícias</p></Link>
                    <Link to={'/quemsomos'} onClick={() => window.scrollTo(0, 0)}><p className='nav-cabecalho'>Quem Somos</p></Link>
                    <Avatar className='avatarPerfil'
                        src={localStorage.getItem("FOTO_PERFIL")}
                        name={nome_usuario}
                        size='50'
                        round={true}
                        onClick={() => setMenuLogado(!menuLogado)}
                    />
                    {menuLogado && (
                        <div className="popup-menu" onClick={() => setMenuLogado(false)}>
                            <div className="popup">
                                <Link to={"/perfil"}><p>Meu Perfil</p></Link>
                                <button onClick={Sair}>Sair</button>
                            </div>
                        </div>
                    )}
                </div>
                    <div className="menu-hamburguer" onClick={toggleMenu}>
                        ☰
                    </div>
                {/* Menu dropdown para mobile */}
                {menuAberto && (
                    <div className="popup-menu">
                        <div className="popup">
                            <h2>Menu</h2>
                            <Link to={"/"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                                <p>Inicio</p>
                            </Link>
                            <Link to={"/cursos"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                                <p>Cursos</p>
                            </Link>
                            <Link to={"/tdsntc"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                                <p>Notícias</p>
                            </Link>
                            <Link to={"/quemsomos"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                                <p>Quem Somos</p>
                            </Link>
                            <Link to={"/registrar"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                                <p>Entrar/Registrar</p>
                            </Link>
                            {/* Se logado, adicionar opções aqui, como o botão Sair */}
                            {menuLogado && (
                                <button onClick={Sair}>Sair</button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    
    )
}