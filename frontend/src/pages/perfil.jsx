import Cabecalho from "../components/cabecalho/cabecalho";
import Conquistas from "../components/perfil/conquistas/conquistas";
import CursoRealizado from "../components/perfil/cursosRealizados/cursoRealizado"
import User from "../components/perfil/usuario/index";
import Rodape from "../components/rodape/rodape";
import "./perfil.scss";

export default function Perfil(){
    return(
        <div>
            <Cabecalho/>

            <div> 
<User/>
<h1 className="conquistatxt">Confira suas conquistas</h1>
<Conquistas/>
           
           <CursoRealizado/>
            </div>
            <Rodape/>
        </div>
    )
}
