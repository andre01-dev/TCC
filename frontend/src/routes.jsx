import { BrowserRouter, Routes, Route } from "react-router";
import Comeco from "./pages/index.jsx";
import Registrar from "./pages/registrar";
import Entrar from "./pages/entrar.jsx";
import Perfil from "./pages/perfil.jsx";
import QuemSomos from "./pages/somos.jsx"
import Noticia from "./pages/noticias/noticia1";
import Cursos from "./pages/cursos.jsx"
import TodasNoticias from "./pages/noticias/fullnotices.jsx";
import Curso1 from "./pages/paginasCursos/paginaCurso1.jsx";
import Curso2 from "./pages/paginasCursos/paginaCurso2.jsx";
import Curso3 from "./pages/paginasCursos/paginaCurso3.jsx";
import Curso4 from "./pages/paginasCursos/paginaCurso4.jsx";
import Curso5 from "./pages/paginasCursos/paginaCurso5.jsx";
import Curso6 from "./pages/paginasCursos/paginaCurso6.jsx";
import Curso7 from "./pages/paginasCursos/paginaCurso7.jsx";
import Curso8 from "./pages/paginasCursos/paginaCurso8.jsx";
import Curso9 from "./pages/paginasCursos/paginaCurso9.jsx";
import Denunciapag from "./pages/denunciapag.jsx";
import AdmHistorico from "./pages/adm/admhistorico.jsx";
import RelatorioGeralCursos from "./pages/adm/dashboard.jsx";
import Adm from "./pages/adm/adm.jsx";
import LoginAdm from "./pages/loginadm.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Navegacao() {
    return (
        <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<Comeco />} />
                    <Route path="/registrar" element={<Registrar />} />
                    <Route path="/entrar" element={<Entrar />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/quemsomos" element={<QuemSomos />} />
                    <Route path="/noticia/:id" element={<Noticia />} />
                    <Route path="/tdsntc" element={<TodasNoticias />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/curso1" element={<Curso1 />} />
                    <Route path="/curso2" element={<Curso2 />} />
                    <Route path="/curso3" element={<Curso3 />} />
                    <Route path="/curso4" element={<Curso4 />} />
                    <Route path="/curso5" element={<Curso5 />} />
                    <Route path="/curso6" element={<Curso6 />} />
                    <Route path="/curso7" element={<Curso7 />} />
                    <Route path="/curso8" element={<Curso8 />} />
                    <Route path="/curso9" element={<Curso9 />} />
                    <Route path="/denuncia" element={<Denunciapag />} />
                    <Route path="/admhistorico" element={<AdmHistorico />} />
                    <Route path="/dashboard" element={<RelatorioGeralCursos />} />
                    <Route path="/adm" element={<Adm/>} />
                    <Route path="/loginadm" element={<LoginAdm/>} />
                </Routes>
             <ToastContainer position="top-center" autoClose={2500} />
        </BrowserRouter>
    );
}