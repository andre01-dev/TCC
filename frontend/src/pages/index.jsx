import "./index.scss"
import CardCurso from "../components/CardCurso/cardCurso";
import Cabecalho from "../components/cabecalho/cabecalho";

export default function Inicio () {
    return(
        <div className="container-inicio">
            <Cabecalho/>
            <h1>Inicio</h1>
            <CardCurso />
        </div>
    );
}