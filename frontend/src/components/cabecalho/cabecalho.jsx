import './cabecalho.scss'
import { Link } from 'react-router'

export default function Cabecalho(){
    return(
        <div>
            <div className="container-cabecalho">
                <div>
                    <img src="src/assets/images/logoVeio.png" height={90}/>
                </div>
                    <h1>CONECTANDO GERAÇÕES</h1>
                <div className="navegar">
                    <p>Inicio</p>
                    <p>Cursos</p>
                    <p>Notícias</p>
                    <p>Quem Somos</p>
                    <p>Login/Registrar</p>
                </div>
            </div>
        </div>
    )
}