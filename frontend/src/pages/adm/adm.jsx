import './adm.scss'
import {Link, useNavigate} from 'react-router'
import { toast } from 'react-toastify';


export default function Adm(){

    const navigate = useNavigate();

    function sair() {
      localStorage.removeItem("admLogado");
      toast.info("Logout realizado!");
      navigate("/loginadm");
    }

    return(
        <div  className='container-adm'>
        <div className='container'>
            <aside className='sidebar'>
                <ul>
                    <li><Link to={'/'}>Conectando Gerações</Link></li>
                    <li><Link to="/dashboard">Dashboards</Link></li>
                    <li><Link to="/admhistorico">Denúncias</Link></li>
                    <div>
                    <button onClick={sair}>Sair</button>
                </div>
                </ul>
            </aside>

        <main className='conteudo'>
            <img className='logoanimada' src="/src/assets/images/logoVeio.png" alt="" />
        </main>

        </div>
        </div>
    )
}