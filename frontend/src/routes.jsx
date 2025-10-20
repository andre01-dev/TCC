import { BrowserRouter, Routes, Route} from "react-router";

import Inicio from "./pages";
import Registrar from "./pages/registrar";
import Noticia1 from "./pages/noticias/noticia1";
import Noticia2 from "./pages/noticias/noticia2";
import Noticia3 from "./pages/noticias/noticia3";
import Noticia4 from "./pages/noticias/noticia4";
import Noticia5 from "./pages/noticias/noticia5";



export default function Navegacao () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element= {<Inicio />}/>
                <Route path="/registrar"  element= {<Registrar />}/>
                <Route path="/noticia1"  element= {<Noticia1 />}/>
                <Route path="/noticia2"  element= {<Noticia2 />}/>
                <Route path="/noticia3"  element= {<Noticia3 />}/>
                <Route path="/noticia4"  element= {<Noticia4 />}/>
                <Route path="/noticia5"  element= {<Noticia5 />}/>
            </Routes>
        </BrowserRouter>
    );
}