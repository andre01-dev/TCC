import { BrowserRouter, Routes, Route} from "react-router";

import Comeco from "./pages/index.jsx";
import Registrar from "./pages/registrar";
import Entrar from "./pages/entrar.jsx";
import Perfil from "./pages/perfil.jsx";
import Noticia1 from "./pages/noticias/noticia1";
import Noticia2 from "./pages/noticias/noticia2";
import Noticia3 from "./pages/noticias/noticia3";
import Noticia4 from "./pages/noticias/noticia4";
import Noticia5 from "./pages/noticias/noticia5";
import Noticia6 from "./pages/noticias/noticia6";
import Noticia7 from "./pages/noticias/noticia7";
import Noticia8 from "./pages/noticias/noticia8";
import Noticia9 from "./pages/noticias/noticia9";
import Noticia10 from "./pages/noticias/noticia10";
import Noticia11 from "./pages/noticias/noticia11";
import Noticia12 from "./pages/noticias/noticia12";
import Noticia13 from "./pages/noticias/noticia13";
import Noticia14 from "./pages/noticias/noticia14";
import Noticia15 from "./pages/noticias/noticia15";
import Cursos from "./pages/cursos.jsx"
import TodasNoticias from "./pages/noticias/fullnotices.jsx";


export default function Navegacao () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element= {<Comeco />}/>
                <Route path="/registrar"  element= {<Registrar />}/>
                <Route path="/entrar"  element= {<Entrar />}/>
                <Route path="/perfil"  element= {<Perfil />}/>
                <Route path="/noticia1"  element= {<Noticia1 />}/>
                <Route path="/noticia2"  element= {<Noticia2 />}/>
                <Route path="/noticia3"  element= {<Noticia3 />}/>
                <Route path="/noticia4"  element= {<Noticia4 />}/>
                <Route path="/noticia5"  element= {<Noticia5 />}/>
                <Route path="/noticia6"  element= {<Noticia6 />}/>
                <Route path="/noticia7"  element= {<Noticia7 />}/>
                <Route path="/noticia8"  element= {<Noticia8/>}/>
                <Route path="/noticia9"  element= {<Noticia9/>}/>
                <Route path="/noticia10"  element= {<Noticia10/>}/>
                <Route path="/noticia11"  element= {<Noticia11/>}/>
                <Route path="/noticia12"  element= {<Noticia12/>}/>
                <Route path="/noticia13" element={<Noticia13/>}/>
                <Route path="/noticia14" element={<Noticia14/>}/>
                <Route path="/noticia15" element={<Noticia15/>}/>
                <Route path="/tdsntc" element={<TodasNoticias/>}/>
                <Route path="/curso" element={<Cursos />} />
            </Routes>
        </BrowserRouter>
    );
}