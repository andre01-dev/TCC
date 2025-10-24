import "./paginaCurso9.scss";
import PaginaCurso from "../../components/paginaCurso/paginaCurso.jsx";
import Rodape from "../../components/rodape/rodape.jsx";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import curso9 from "../../assets/images/curso9.png";

export default function Curso9() {
 return(
    <div className="container-pagonaCurso">
        <Cabecalho />
        <div className="paginas">
            
        <PaginaCurso
        imagem={curso9}
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
