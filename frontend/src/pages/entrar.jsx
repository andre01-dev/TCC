import { useState, useEffect, use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import api from '../api.js'
import './entrar.scss'


export default function Entrar() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const location = useLocation();
    const [ativo, setAtivo] = useState(location.pathname === "/registrar" ? "registrar" : "entrar");
    const [mostrar, setMostrar] = useState(false);
    const [lembrar, setLembrar] = useState(false);
    const [alterarSenha, setAlterarSenha] = useState(false);
    const [validarEmail, setValidarEmail] = useState(false)
    const navigate = useNavigate();

    async function VerificarUsuario() {


        try {
            const resposta = await api.get('/puxarNome', {
                params: {
                    email: email
                }
            })

            const nome_usuario = resposta.data.nome_usuario;
            const response = await api.post('/logar', {
                email,
                senha
            });

            const token = response.data.token;
            const id_usuario = response.data.id_usuario;

            localStorage.setItem("NOME_USUARIO", nome_usuario);
            localStorage.setItem("TOKEN", token);
            localStorage.setItem("ID_USUARIO", id_usuario);

            if (lembrar) {
                localStorage.setItem("NOME_USUARIO", nome_usuario);
                localStorage.setItem("TOKEN", token);
                localStorage.setItem("ID_USUARIO", id_usuario);
            } else {
                sessionStorage.setItem("NOME_USUARIO", nome_usuario);
                sessionStorage.setItem("TOKEN", token);
                sessionStorage.setItem("ID_USUARIO", id_usuario);
            }

            alert("Login realizado com sucesso!");

            setEmail("")
            setSenha("")
            navigate('/')
        }
        catch (e) {
            alert(e.response?.data?.erro || "Erro ao realizar login");
        }
    }

    async function verificarEmail() {
        try {
            await api.get('/verificar/email', {
                params: { email }
            });
            setValidarEmail(true);
        } catch (e) {
            alert("E-mail não encontrado");
        }
    }

    async function recuperarSenha() {
        try {
            await api.put('/alterarsenha', {
                email,
                novaSenha
            });
            alert("Senha alterada com sucesso");
            setEmail("");
            setNovaSenha("")
            navigate("/entrar")
        } catch (e) {
            alert(e.response?.data?.erro || "Erro ao alterar senha");
        }
    }

    return (
       
            <div className='alinhe'>
                 <div className='body-entrar'>
                 <div className='container-entrar'>
                <img src="src/assets/images/logoVeio.png" height={350} alt="Logo" />
                <div className='titulo-input'>
                    <h1 className='titulo'>CONECTANDO GERAÇÕES</h1>

                    <div className="entrar-registrar">
                        <div className={`fundo ${ativo === "registrar" ? "registrar" : ""}`}></div>

                        <Link to="/entrar" className={ativo === "entrar" ? "ativo" : ""}>
                            Entrar
                        </Link>

                        <Link to="/registrar" className={ativo === "registrar" ? "ativo" : ""}>
                            Registrar-se
                        </Link>
                    </div>

                    <p>Entre para ter acesso ao nosso conteúdo completo</p>

                    <div className='inputs'>

                        <input
                            id='input-email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder='Digite seu email'
                        />

                        <div className='input-senha-container'>
                            <input
                                type={mostrar ? "text" : "password"}
                                placeholder="Insira sua senha"
                                className="input-senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <span
                                className="icone-senha"
                                onClick={() => setMostrar(!mostrar)}
                            >
                                {mostrar ? <Eye size={18} /> : <EyeOff size={18} />}
                            </span>

                        </div>

                    </div>

                    <div className='lembrar-esquecer'>
                        <label className='lembrar'>
                            <input className='inp-lembrar' type="checkbox" checked={lembrar} onChange={(e) => setLembrar(e.target.checked)} />
                            Lembrar de mim
                        </label>
                        <a href="" className='esqueceu-senhas' 
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

                    </div>

                    <div className='div-bt'>
                        <button className='bt-logar' onClick={VerificarUsuario}>
                            Entrar
                        </button>
                    </div>


                </div>
            </div>

        </div>
            </div>
            
    );
}