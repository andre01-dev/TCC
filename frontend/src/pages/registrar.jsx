import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import api from '../api.js';
import './registrar.scss';

export default function Registrar() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dt_nascimento, setDt_nascimento] = useState("");
    const [senha, setSenha] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [ativo, setAtivo] = useState(location.pathname === "/registrar" ? "registrar" : "entrar");
    const [mostrar, setMostrar] = useState(false);

    async function RegistrarUsuario() {
        try {
            await api.post('/usuario', {
                nome,
                email,
                cpf,
                telefone,
                dt_nascimento,
                senha
            });
            alert("Usuário registrado com sucesso!");
            setNome("")
            setEmail("")
            setCpf("")
            setTelefone("")
            setDt_nascimento("")
            setSenha("")

            navigate("/entrar")

        } catch (e) {
            alert(e.response?.data?.erro || "Erro ao registrar usuário");
        }
    }

    return (
        

            <div className='alinhe'>
                <div className='body'>
                <div className='container-registrar'>
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

                    <p>Registre-se para ter acesso ao nosso conteúdo completo</p>

                    <div className='inputs'>
                        <input
                            id='input-nome'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            type="text"
                            placeholder='Digite seu nome'
                        />

                        <input
                            id='input-email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder='Digite seu email'
                        />

                        <div className='cpf-telefone'>
                            <input
                                id='input-cpf'
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                type="text"
                                className='input-menor'
                                placeholder='Digite seu CPF'
                            />

                            <input
                                id='input-telefone'
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                type="text"
                                className='input-menor'
                                placeholder='Digite seu telefone'
                            />
                        </div>

                        <input
                            id='input-dtNascimento'
                            value={dt_nascimento}
                            onChange={(e) => setDt_nascimento(e.target.value)}
                            type="text"
                            placeholder='Informe sua data de nascimento'
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

                    <div className='div-bt-registrar'>
                        <button className='bt-criarConta' onClick={RegistrarUsuario}>
                            Registrar-se
                        </button>
                    </div>


                </div>
            </div>
        </div>

            </div>
            
    );
}
