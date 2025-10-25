import "./index.scss";
import Cabecalho from "../components/cabecalho/cabecalho";
import Inicio from "../components/paginaPrincipal/Inicio/inicio";
import Paraquem from "../components/paginaPrincipal/Paraquem/paraquem";
import BigNumber from "../components/paginaPrincipal/BigNumber";
import CardCurso2 from "../components/paginaPrincipal/CardCurso2/cardCurso2";
import MVV from "../components/paginaPrincipal/mvv/mvv";
import Depoimentos from "../components/paginaPrincipal/depoimentos/depoimentos";
import AcontecendoAgora from "../components/paginaPrincipal/AcontecemdoAgora/AcontecendoAgora";
import Rodape from "../components/rodape/rodape";

export default function Comeco() {
    return (
        <div className="container-inicio">
            <Cabecalho />
            <Inicio />
            <div className="separacao">
                
            </div>

            <div>
                <Paraquem />
            </div>

            <div>
                <BigNumber />
            </div>

            <div>
                <h1 className="ConhecaCurso">Conhecça Nossos Cursos</h1>
                <CardCurso2/>
            </div>

            <div>
                <MVV/>
            </div>

            <div>
                <h1 className="Depoimento">Depoimentos</h1>
                <Depoimentos/>
            </div>

            <div className="barra"></div>

            <div>
                <h1 className="AcontecendoAgora">O que está acontecendo agora?</h1>
                <AcontecendoAgora/>
            </div>
            <Rodape/>
        </div>
    );
}