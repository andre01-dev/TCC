import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import api from '../api.js'
import './entrar.scss'


export default function Entrar() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const location = useLocation();
    const [ativo, setAtivo] = useState(location.pathname === "/registrar" ? "registrar" : "entrar");
    const [mostrar, setMostrar] = useState(false);
    const navigate = useNavigate();

    async function VerificarUsuario() {

        const resposta = await api.get('/puxarNome', {
            params: {
                email: email
            }
        })

        const nome_usuario = resposta.data.nome_usuario;
        localStorage.setItem("NOME_USUARIO", nome_usuario);

        try {
            const response = await api.post('/logar', {
                email,
                senha
            });

            const token = response.data.token;

            localStorage.setItem("TOKEN", token);

            alert("Login realizado com sucesso!");

            setEmail("")
            setSenha("")
            navigate('/')
        }
        catch (e) {
            alert(e.response?.data?.erro || "Erro ao realizar login");
        }
    }
    
    return (
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
                                placeholder="Crie sua senha"
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
                            <input className='inp-lembrar' type="checkbox" />
                            Lembrar de mim
                        </label>
                        <a href="" className='esqueceu-senhas'>Esqueceu a senha?</a>
                    </div>

                    <div className='div-bt'>
                        <button className='bt-logar' onClick={VerificarUsuario}>
                            Entrar
                        </button>
                    </div>


                </div>
            </div>

        </div>
    );
}