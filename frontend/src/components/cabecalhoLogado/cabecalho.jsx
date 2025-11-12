import { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cabecalho.scss";

export default function CabecalhoLogado() {
  const navigate = useNavigate();
  const [menuLogado, setMenuLogado] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");

  useEffect(() => {
    // Busca as informações do usuário logado
    const nome = localStorage.getItem("NOME_USUARIO");
    const foto = localStorage.getItem("FOTO_PERFIL");
    setNomeUsuario(nome);
    setFotoPerfil(foto);
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
  }

  return (
    <div className="container-cabecalho">
      {/* LOGO */}
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src="/images/logoVeio.png" height={90} alt="Logo" />
        </Link>
      </div>

      <h1 className="titulo-cabecalho">CONECTANDO GERAÇÕES</h1>

      {/* MENU DESKTOP */}
      <div className="navegar">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <p className="nav-cabecalho">Início</p>
        </Link>
        <Link to="/cursos" onClick={() => window.scrollTo(0, 0)}>
          <p className="nav-cabecalho">Cursos</p>
        </Link>
        <Link to="/tdsntc" onClick={() => window.scrollTo(0, 0)}>
          <p className="nav-cabecalho">Notícias</p>
        </Link>
        <Link to="/quemsomos" onClick={() => window.scrollTo(0, 0)}>
          <p className="nav-cabecalho">Quem Somos</p>
        </Link>

        {/* AVATAR */}
        <Avatar
          className="avatarPerfil"
          src={fotoPerfil || ""}
          name={nomeUsuario || "Usuário"}
          size="50"
          round={true}
          onClick={() => setMenuLogado(!menuLogado)}
        />

        {/* MENU POPUP DO AVATAR */}
        {menuLogado && (
          <div className="popup-menu" onClick={() => setMenuLogado(false)}>
            <div className="popup">
              <Link to="/perfil">
                <p>Meu Perfil</p>
              </Link>
              <button onClick={Sair}>Sair</button>
            </div>
          </div>
        )}
      </div>

      {/* BOTÃO HAMBÚRGUER */}
      <div className="menu-hamburguer" onClick={toggleMenu}>
        ☰
      </div>

      {/* MENU MOBILE */}
      {menuAberto && (
        <div className="popup-menu">
          <div className="popup">
            <h2>Menu</h2>
            <Link to="/" onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
              <p>Início</p>
            </Link>
            <Link to="/cursos" onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
              <p>Cursos</p>
            </Link>
            <Link to="/tdsntc" onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
              <p>Notícias</p>
            </Link>
            <Link to="/quemsomos" onClick={() => { window.scrollTo(0, 0); fecharMenu(); }}>
              <p>Quem Somos</p>
            </Link>

            {/* Quando estiver logado */}
            {nomeUsuario ? (
              <>
                <Link to="/perfil" onClick={fecharMenu}>
                  <p>Meu Perfil</p>
                </Link>
                <button onClick={Sair}>Sair</button>
              </>
            ) : (
              <Link to="/registrar" onClick={fecharMenu}>
                <p>Entrar/Registrar</p>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
