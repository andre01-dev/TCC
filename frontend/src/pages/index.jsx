import "./index.scss";
import Cabecalho from "../components/cabecalho/cabecalho";
import Parte1 from "../components/paginaPrincipal/1parte";
import Parte2 from "../components/paginaPrincipal/2parte";


export default function Inicio () {
    return(
        <div className="container-inicio">
            <Cabecalho/>
          <Parte1/>
          <div className="separacao">

          </div>
          <Parte2/>
        </div>
    );
}