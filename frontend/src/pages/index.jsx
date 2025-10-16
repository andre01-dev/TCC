import "./index.scss";
import Cabecalho from "../components/cabecalho/cabecalho";
import Parte1 from "../components/paginaPrincipal/1parte";
import Parte2 from "../components/paginaPrincipal/2parte";
import Parte3 from "../components/paginaPrincipal/3parte";
import Parte4 from "../components/paginaPrincipal/4parte";


export default function Inicio() {
    return (
        <div className="container-inicio">
            <Cabecalho />
            <Parte1 />
            <div className="separacao">

            </div>
            <div>
                <Parte2 />
            </div>

            <div>
                <Parte3 />
            </div>

            <div>
                <Parte4/>
            </div>
        </div>
    );
}