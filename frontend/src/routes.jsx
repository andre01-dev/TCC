import { BrowserRouter, Routes, Route} from "react-router";

import Inicio from "./pages";
import Registrar from "./pages/registrar";

export default function Navegacao () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element= {<Inicio />}/>
                <Route path="/registrar"  element= {<Registrar />}/>
            </Routes>
        </BrowserRouter>
    );
}