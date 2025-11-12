import './cabecalhoadm.scss';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import '/src/assets/fonts/fonts.scss'

export default function CabecalhoADM() {
  const navigate = useNavigate();

  function sair() {
    localStorage.removeItem("admLogado");
    toast.info("Logout realizado!");
    navigate("/loginadm");
  }

  return (
    <div className='cabecalho2'>
      <h1 className='josefin-sans'>Conectando Gerações</h1>
      <div className='ajuste'>
        <div></div>
        <div className='navegacao'>
          <nav>
            <Link to='/adm' onClick={() => window.scrollTo(0, 0)}>
              <p className='average-sans'>Início</p>
            </Link>

            <Link to='/dashboard' onClick={() => window.scrollTo(0, 0)}>
              <p className='average-sans'>Dashboard</p>
            </Link>

            <Link to='/admhistorico' onClick={() => window.scrollTo(0, 0)}>
              <p className='average-sans'>Denúncia</p>
            </Link>
          </nav>
        </div>
        <div>
          <button className='josefin-sans' onClick={sair}>Sair</button>
        </div>
      </div>
    </div>
  );
}
