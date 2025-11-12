import { useEffect, useState } from "react"
import "./index.scss";
import api from "../../../api";
import axios from "axios";
import { toast } from "react-toastify";
import Avatar from "react-avatar";

export default function Perfil() {

    const [dados, setDados] = useState({});
    const [loading, setLoading] = useState(true);
    const [editar, setEditar] = useState(false);

    const id_usuario = localStorage.getItem("ID_USUARIO"); 

    const [foto, setFoto] = useState(localStorage.getItem('FOTO_PERFIL') || null);

    async function pegarArquivo(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = async () => {
            const base64 = reader.result;

            try {
                await api.put("/alterar/foto", {
                    id_usuario: id_usuario,     
                    fotoPerfil: base64          
                });

                toast.success("Foto atualizada!");

                setFoto(base64);

                setDados({ ...dados, foto_perfil: base64 });

                localStorage.setItem("FOTO_PERFIL", base64);

                window.location.reload();

            } catch (error) {
                console.error("Erro ao enviar foto:", error);
                toast.error("Erro ao enviar foto");
            }
        };

        reader.readAsDataURL(file);
    }


    useEffect(() => {
        async function puxarInfos() {
            if (!id_usuario) {
                setLoading(false);
                return;
            }

            try {
                const response = await api.get(`/perfil/informacoes/${id_usuario}`);
                setDados(response.data);
                if (response.data.foto_perfil) {
                    setFoto(response.data.foto_perfil);
                    localStorage.setItem("FOTO_PERFIL", response.data.foto_perfil);
                }

            } catch (error) {
                console.error("Erro ao buscar informações do perfil:", error);
            } finally {
                setLoading(false);
            }
        }

        puxarInfos();
    }, []);


    async function salvarEdicao() {
        try {
            await axios.put(`http://localhost:5010/perfil/editar/${id_usuario}`, {
                nome_usuario: dados.nome_usuario,
                email: dados.email,
                telefone: dados.telefone
            });

            localStorage.setItem("NOME_USUARIO", dados.nome_usuario);
            setEditar(false);
            toast.success("Perfil atualizado!");
        } catch (error) {
            toast.error("Erro ao atualizar perfil");
        }
    }


    if (loading) return <div className="loading-message">Carregando perfil...</div>;


    return (
        <div>
            <div className="container-tudo">
                <div className="user">

                    {/* ✅ Input escondido que recebe o arquivo */}
                    <input
                        id="uploadFoto"
                        type="file"
                        accept="image/*"
                        onChange={pegarArquivo}
                        style={{ display: "none" }}
                    />

                    {/* ✅ Botão para abrir o explorador de arquivos */}
                    <label htmlFor="uploadFoto" className="botao-upload">
                        Escolher imagem
                    </label>

                    {/* ✅ Avatar com foto OU avatar gerado pelo nome */}
                    <Avatar
                        className="user-avatar"
                        src={foto}
                        name={dados.nome_usuario}
                        size="200"
                        round={true}
                    />

                </div>

                <div className="dados-container">
                    <div className="dados">
                        <div className="container-editar">
                            <h2 className="josefin-sans">Perfil</h2>

                            <button className="bt-editar josefin-sans" onClick={() => setEditar(true)}>
                                Editar
                            </button>
                        </div>

                        <div className="info">
                            <h3 className="average-sans">Nome</h3>
                            <h3 className="average-sans">{dados.nome_usuario}</h3>
                        </div>

                        <div className="info">
                            <h3 className="average-sans">Email</h3>
                            <h3 className="average-sans">{dados.email}</h3>
                        </div>

                        <div className="info">
                            <h3 className="average-sans">Telefone</h3>
                            <h3 className="average-sans">{dados.telefone}</h3>
                        </div>
                    </div>


                    {editar && (
                        <div className="popup-overlay">
                            <div className="popup-modal">
                                <h2 className="josefin-sans">Editar Perfil</h2>

                                <label className="josefin-sans">Nome:</label>
                                <input
                                    value={dados.nome_usuario}
                                    onChange={(e) => setDados({ ...dados, nome_usuario: e.target.value })}
                                />

                                <label className="josefin-sans">Email:</label>
                                <input
                                    value={dados.email}
                                    onChange={(e) => setDados({ ...dados, email: e.target.value })}
                                />

                                <label className="josefin-sans">Telefone:</label>
                                <input
                                    value={dados.telefone}
                                    onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
                                />

                                <div className="popup-buttons">
                                    <button className="popup-save" onClick={salvarEdicao}>Salvar</button>
                                    <button className="popup-cancel" onClick={() => setEditar(false)}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
