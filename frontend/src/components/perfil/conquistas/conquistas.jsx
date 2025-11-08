import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import "./conquistas.scss"
import api from "../../../api";

export default function Conquistas() {

    const [conquista, setConquistas] = useState([]);
    const navigate = useNavigate();

    async function Cursos() {
        navigate("/cursos")
    }

    useEffect(() => {
        const id_usuario = localStorage.getItem("ID_USUARIO");
        async function PuxarConquistas() {
            try {
                const response = await api.get("/conquistas", {
                    params: { id_usuario }
                })
                setConquistas(response.data);
            }
            catch {
                alert("Erro ao carregar conquistas")
            }
        }

        PuxarConquistas();
    }, []);


    return (
        <div className="tudo">

            <div className="conquistas">
                <h1>Suas Conquistas</h1>
                {conquista && conquista.length > 0 ? (
                    conquista.map((item) => (
                        <>
                            <img
                                src={item.img_url}
                                alt={item.titulo_curso}
                                style={{ width: "120px", height: "120px" }}
                            />
                            <h2>{item.titulo_curso}</h2>
                        </>

                    ))
                ) : (
                    <>
                        <h3>Você ainda não possue Conquistas</h3>
                        <h3>Confira nossos cursos</h3>
                        <button onClick={Cursos} className="bt-cursos">Páginas Cursos</button>
                    </>

                )}
            </div>
        </div>
    )
}