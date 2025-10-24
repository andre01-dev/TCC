import "./paginaCurso3.scss";
import PaginaCurso from "../../components/paginaCurso/paginaCurso.jsx";
import Rodape from "../../components/rodape/rodape.jsx";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import curso3 from "../../assets/images/curso3.png";

export default function Curso3() {
 return(
    <div className="container-pagonaCurso">
        <Cabecalho />
        <div className="paginas">
            
        <PaginaCurso
        imagem={curso3}
        titulo="Fake News"
        texto= "chdsvv"
        modulo1= "Introdução"
        modulo2="introdução"
        modulo3="introdução"
        />
        </div>
        <Rodape />
    </div>
)
}
