import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import { toast } from 'react-toastify';
import api from '../api.js';
import './entrar.scss';
<<<<<<< HEAD
import '/src/assets/fonts/fonts.scss';

=======
>>>>>>> b17f1e6bd978aded02670d9b8ad96722736f75a7

export default function Entrar() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [ativo, setAtivo] = useState("entrar");
    const [mostrar, setMostrar] = useState(false);
    const [lembrar, setLembrar] = useState(false);
    const [alterarSenha, setAlterarSenha] = useState(false);
    const [validarEmail, setValidarEmail] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Atualiza o estado da aba ativa conforme a rota
    useEffect(() => {
        setAtivo(location.pathname === "/registrar" ? "registrar" : "entrar");
    }, [location]);

    // --- FUNÇÃO LOGIN ---
    async function VerificarUsuario() {
        if (!email || !senha) {
            toast.error("Preencha e-mail e senha!");
            return;
        }

        try {
            setLoading(true);

            // Verifica nome do usuário pelo e-mail
            const nomeResp = await api.get('/puxarNome', { params: { email } });
            const nome_usuario = nomeResp.data.nome_usuario;

            // Faz o login
            const resp = await api.post('/logar', { email, senha });
            const { token, id_usuario, fotoPerfil } = resp.data;

            // Salva informações
            const storage = lembrar ? localStorage : sessionStorage;

            storage.setItem("TOKEN", token);
            storage.setItem("ID_USUARIO", id_usuario);
            storage.setItem("NOME_USUARIO", nome_usuario);
            storage.setItem("FOTO_PERFIL", fotoPerfil || "");

            toast.success("Login realizado com sucesso!");
            setEmail("");
            setSenha("");
            navigate('/');
        } 
        catch (e) {
            toast.error(e.response?.data?.erro || "Erro ao realizar login");
        } 
        finally {
            setLoading(false);
        }
    }

    // --- FUNÇÃO VERIFICAR E-MAIL ---
    async function verificarEmail() {
        try {
            await api.get('/verificar/email', { params: { email } });
            setValidarEmail(true);
        } catch {
            toast.error("E-mail não encontrado");
        }
    }

    // --- FUNÇÃO RECUPERAR SENHA ---
    async function recuperarSenha() {
        if (!novaSenha) {
            toast.error("Digite uma nova senha");
            return;
        }

        try {
            await api.put('/alterarsenha', { email, novaSenha });
            toast.success("Senha alterada com sucesso!");
            setEmail("");
            setNovaSenha("");
            setAlterarSenha(false);
            navigate("/entrar");
        } catch (e) {
            toast.error(e.response?.data?.erro || "Erro ao alterar senha");
        }
    }

    return (
        <div className="body-entrar">
            {/* VOLTAR */}
            <div className="voltar-registrar">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <button className="voltarReg">
                        <img src="/src/assets/images/setaEsquerda.png" height={25} alt="Voltar" />
                    </button>
                    <p className='average-sans '>Voltar para a página Inicial</p>
                </Link>
            </div>
<<<<<<< HEAD
            <div className='container-entrar'>
                <img src="src/assets/images/logoVeio.png" height={350} alt="Logo" />
                <div className='titulo-input'>
                    <h1 className='titulo .average-sans'>CONECTANDO GERAÇÕES</h1>
=======
>>>>>>> b17f1e6bd978aded02670d9b8ad96722736f75a7

            {/* CONTAINER */}
            <div className="container-entrar">
                <img src="/src/assets/images/logoVeio.png" height={350} alt="Logo" />
                <div className="titulo-input">
                    <h1 className="titulo">CONECTANDO GERAÇÕES</h1>

                    {/* BOTÕES ENTRAR/REGISTRAR */}
                    <div className="entrar-registrar">
                        <div className={`fundo ${ativo === "registrar" ? "registrar" : ""}`}></div>
                        <Link to="/entrar" className={ativo === "entrar" ? "ativo" : ""}>Entrar</Link>
                        <Link to="/registrar" className={ativo === "registrar" ? "ativo" : ""}>Registrar-se</Link>
                    </div>

                    <p className='average-sans '>Entre para ter acesso ao nosso conteúdo completo</p>

                    {/* INPUTS */}
                    <div className="inputs">
                        <input
                            id="input-email"
                            type="text"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="input-senha-container">
                            <input
                                type={mostrar ? "text" : "password"}
                                placeholder="Insira sua senha"
                                className="input-senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <span className="icone-senha" onClick={() => setMostrar(!mostrar)}>
                                {mostrar ? <Eye size={18} /> : <EyeOff size={18} />}
                            </span>
                        </div>
                    </div>

<<<<<<< HEAD
                    <div className='lembrar-esquecer'>
                        <label className='lembrar'>
                            <input className='inp-lembrar average-sans ' type="checkbox" checked={lembrar} onChange={(e) => setLembrar(e.target.checked)} />
                            Lembrar de mim
                        </label>
                        <a href="" className='esqueceu-senhas average-sans '
                            onClick={(e) => { e.preventDefault(); setAlterarSenha(true); setValidarEmail(false); setEmail(""); setSenha("") }}>Esqueceu a senha?</a>
                        {alterarSenha && (
                            <div className="container-alterarSenha" onClick={() => setAlterarSenha(false)}>
                                <div className="alterarSenha" onClick={(e) => e.stopPropagation()}>
                                    <h2>Recuperar senha</h2>

                                    {!validarEmail && (
                                        <>
                                            <input
                                                type="email"
                                                placeholder="Digite seu e-mail"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <button onClick={verificarEmail}>Verificar e-mail</button>
                                        </>
                                    )}

                                    {validarEmail && (
                                        <>
                                            <input
                                                type="password"
                                                placeholder="Digite a nova senha"
                                                value={novaSenha}
                                                onChange={(e) => setNovaSenha(e.target.value)}
                                            />
                                            <button onClick={recuperarSenha}>Alterar senha</button>
                                        </>
                                    )}

                                    <button className="bt-fechar" onClick={() => setAlterarSenha(false)}>
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        )}

=======
                    {/* LEMBRAR E RECUPERAR SENHA */}
                    <div className="lembrar-esquecer">
                        <label className="lembrar">
                            <input
                                type="checkbox"
                                checked={lembrar}
                                onChange={(e) => setLembrar(e.target.checked)}
                            />
                            Lembrar de mim
                        </label>
                        <a
                            href="#"
                            className="esqueceu-senhas"
                            onClick={(e) => {
                                e.preventDefault();
                                setAlterarSenha(true);
                                setValidarEmail(false);
                                setEmail("");
                                setSenha("");
                            }}
                        >
                            Esqueceu a senha?
                        </a>
>>>>>>> b17f1e6bd978aded02670d9b8ad96722736f75a7
                    </div>

                    {/* MODAL ALTERAR SENHA */}
                    {alterarSenha && (
                        <div className="container-alterarSenha" onClick={() => setAlterarSenha(false)}>
                            <div className="alterarSenha" onClick={(e) => e.stopPropagation()}>
                                <h2>Recuperar senha</h2>

                                {!validarEmail ? (
                                    <>
                                        <input
                                            type="email"
                                            placeholder="Digite seu e-mail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button onClick={verificarEmail}>Verificar e-mail</button>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="password"
                                            placeholder="Digite a nova senha"
                                            value={novaSenha}
                                            onChange={(e) => setNovaSenha(e.target.value)}
                                        />
                                        <button onClick={recuperarSenha}>Alterar senha</button>
                                    </>
                                )}

                                <button className="bt-fechar" onClick={() => setAlterarSenha(false)}>
                                    Fechar
                                </button>
                            </div>
                        </div>
                    )}

                    {/* BOTÃO ENTRAR */}
                    <div className="div-bt">
                        <button className="bt-logar" onClick={VerificarUsuario} disabled={loading}>
                            {loading ? "Entrando..." : "Entrar"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
