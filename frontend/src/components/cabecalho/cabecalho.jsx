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
                    <Link to ={"/"}><p>Inicio</p></Link>
                    <Link to ={"/curso"}><p>Cursos</p></Link>
                    <Link to ={"/tdsntc"}><p>Notícias</p></Link>
                    <Link><p>Quem Somos</p></Link>
                    <Link to={"/registrar"}><p>Login/Registrar</p></Link>
                </div>
            </div>
        </div>
    )
}