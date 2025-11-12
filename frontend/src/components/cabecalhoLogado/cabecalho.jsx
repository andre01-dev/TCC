import { useState, useEffect, useRef } from 'react'
import Avatar from "react-avatar";
import { useNavigate } from "react-router";
import './cabecalho.scss'
import { Link } from 'react-router-dom';

export default function CabecalhoLogado({ nome_usuario }) {

    const navigate = useNavigate();
    const [menuLogado, setMenuLogado] = useState(false);
    const [menuAberto, setMenuAberto] = useState(false);
    const [logado, setLogado] = useState(false);

    const popupRef = useRef(null);     // popup do avatar
    const menuRef = useRef(null);      // popup do menu mobile

    // Verifica se o usuário está logado
    useEffect(() => {
        const token = localStorage.getItem("TOKEN") || sessionStorage.getItem("TOKEN");
        setLogado(!!token);
    }, []);

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }

    function fecharMenu() {
        setMenuAberto(false);
    }

    function Sair() {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/entrar");
        setLogado(false);
    }

    // Fecha popup/avatar e menu mobile ao clicar fora
    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setMenuLogado(false);
            }
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuAberto(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    return (
        <div className="container-cabecalho">
            <div>
                <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                    <img src="/images/logoVeio.png" height={90} alt="Logo" />
                </Link>
            </div>

            <h1 className='titulo-cabecalho'>CONECTANDO GERAÇÕES</h1>

            {/* Menu desktop */}
            <div className="navegar">
                <Link to={"/"}><p className='nav-cabecalho'>Início</p></Link>
                <Link to={"/cursos"}><p className='nav-cabecalho'>Cursos</p></Link>
                <Link to={"/tdsntc"}><p className='nav-cabecalho'>Notícias</p></Link>
                <Link to={'/quemsomos'}><p className='nav-cabecalho'>Quem Somos</p></Link>

                {logado && (
                    <Avatar
                        className='avatarPerfil'
                        src={localStorage.getItem("FOTO_PERFIL")}
                        name={nome_usuario}
                        size='50'
                        round={true}
                        onClick={() => setMenuLogado(!menuLogado)}
                    />
                )}

                {menuLogado && (
                    <div className="popup-menu" ref={popupRef}>
                        <div className="popup">
                            <Link to={"/perfil"}><p>Meu Perfil</p></Link>
                            <button onClick={Sair}>Sair</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Menu mobile */}
            <div className="menu-hamburguer" onClick={toggleMenu}>☰</div>

            {menuAberto && (
                <div className="popup-menu" ref={menuRef}>
                    <div className="popup">
                        <h2>Menu</h2>
                        <Link to={"/"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                            <p>Início</p>
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

                        {!logado ? (
                            <Link to={"/registrar"} onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
                                <p>Entrar/Registrar</p>
                            </Link>
                        ) : (
                            <>
                                <Link to={"/perfil"} onClick={fecharMenu}><p>Meu Perfil</p></Link>
                                <button onClick={() => { Sair(); fecharMenu(); }}>Sair</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
