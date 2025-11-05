import './cabecalhoadm.scss'
import {Link} from 'react-router'

export default function CabecalhoADM(){
    return(
        <div className='cabecalho2'>
            <h1>Conectando Gerações</h1>
            <div className='ajuste'>
                <div></div>
                <div className='navegacao'>
                    <nav>
                        <Link to={'/inicioadm'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Inicio</p>
                        </Link>

                        <Link to={'/dashboard'}onClick={() => window.scrollTo(0, 0)}>
                            <p>Dashboard</p>
                        </Link>
                        
                        <Link to={'/admhistorico'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Denúncia</p>
                        </Link>
                        
                    </nav>
                </div>
                <div>
                    <button>Sair</button>
                </div>
            </div>
        </div>
    )
}