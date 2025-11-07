import './adm.scss'
import {Link} from 'react-router'

export default function Adm(){
    return(
        <div  className='container-adm'>
        <div className='container'>
            <aside className='sidebar'>
                <ul>
                    <li><Link to={'/'}>Conectando Gerações</Link></li>
                    <li><Link to="/dashboard">Dashboards</Link></li>
                    <li><Link to="/admhistorico">Denúncias</Link></li>
                </ul>
            </aside>

        <main className='conteudo'>
            <img className='logoanimada' src="/src/assets/images/logoVeio.png" alt="" />
        </main>

        </div>
        </div>
    )
}