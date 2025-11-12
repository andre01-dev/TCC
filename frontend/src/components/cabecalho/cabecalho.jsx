import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './cabecalho.scss'

export default function Cabecalho() {
  const navigate = useNavigate()
  const [menuAberto, setMenuAberto] = useState(false)
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    // Puxa o nome salvo no login
    const nome = localStorage.getItem('NOME_USUARIO')
    if (nome) setUsuario(nome)
  }, [])

  function toggleMenu() {
    setMenuAberto(!menuAberto)
  }

  function fecharMenu() {
    setMenuAberto(false)
  }

  function Sair() {
    localStorage.removeItem('NOME_USUARIO')
    localStorage.removeItem('TOKEN')
    setUsuario(null)
    fecharMenu()
    navigate('/')
  }

  return (
    <div>
      <div className="container-cabecalho">
        <Link to="/" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
          <img src="/images/logoVeio.png" height={90} alt="Logo" />
        </Link>

        <h1 className="titulo-cabecalho">CONECTANDO GERAÇÕES</h1>

        {/* MENU DESKTOP */}
        <div className="navegar">
          <Link to="/" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
            <p className="nav-cabecalho">Início</p>
          </Link>
          <Link to="/cursos" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
            <p className="nav-cabecalho">Cursos</p>
          </Link>
          <Link to="/tdsntc" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
            <p className="nav-cabecalho">Notícias</p>
          </Link>
          <Link to="/quemsomos" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
            <p className="nav-cabecalho">Quem Somos</p>
          </Link>

          {/* Condição logado ou não */}
          {usuario ? (
            <div className="icone-usuario" onClick={() => navigate('/perfil')}>
              👤 {usuario}
            </div>
          ) : (
            <Link to="/registrar" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
              <p className="nav-cabecalho">Entrar/Registrar</p>
            </Link>
          )}
        </div>

        {/* BOTÃO HAMBÚRGUER MOBILE */}
        <div className="menu-hamburguer" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* MENU POPUP MOBILE */}
      {menuAberto && (
        <div className="popup-menu">
          <div className="popup">
            <h2>Menu</h2>
            <Link to="/" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
              <p>Início</p>
            </Link>
            <Link to="/cursos" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
              <p>Cursos</p>
            </Link>
            <Link to="/tdsntc" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
              <p>Notícias</p>
            </Link>
            <Link to="/quemsomos" onClick={() => { window.scrollTo(0, 0); fecharMenu() }}>
              <p>Quem Somos</p>
            </Link>

            {usuario ? (
              <>
                <Link to="/perfil" onClick={fecharMenu}>
                  <p>👤 {usuario}</p>
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
  )
}
