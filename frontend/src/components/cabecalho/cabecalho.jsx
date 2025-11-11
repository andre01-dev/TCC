import { useState } from 'react'
import { useNavigate } from "react-router";
import './cabecalho.scss'
import { Link } from 'react-router'

export default function Cabecalho() {
    const navigate = useNavigate();
    const [menuLogado, setMenuLogado] = useState(false)
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
        localStorage.removeItem("NOME_USUARIO");
        localStorage.removeItem("TOKEN");
        window.location.reload()
    }

    return (
        <div>
            <div className="container-cabecalho">
                <div>
                    <Link to={"/"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                        <img src="/images/logoVeio.png" height={90} />
                    </Link>
                </div>
                <h1 className='titulo-cabecalho'>CONECTANDO GERAÇÕES</h1>
                {/* Menu desktop */}
                <div className="navegar">
                    <Link to={"/"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                        <p className='nav-cabecalho'>Inicio</p>
                    </Link>
                    <Link to={"/cursos"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                        <p className='nav-cabecalho'>Cursos</p>
                    </Link>
                    <Link to={"/tdsntc"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                        <p className='nav-cabecalho'>Notícias</p>
                    </Link>
                    <Link to={"/quemsomos"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                        <p className='nav-cabecalho'>Quem Somos</p>
                    </Link>
                    <Link to={"/registrar"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                        <p className='nav-cabecalho'>Entrar/Registrar</p>
                    </Link>
                </div>
                {/* Botão hambúrguer para mobile */}
                <div className="menu-hamburguer" onClick={toggleMenu}>
                    ☰
                </div>
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
    )
}