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
                        <Link to={'/inicioadm'}>
                            <p>Inicio</p>
                        </Link>

                        <Link to={'/dashboard'}>
                            <p>Dashboard</p>
                        </Link>
                        
                        <Link to={'/admhistorico'}>
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