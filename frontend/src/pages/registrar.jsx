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

    function formatarCPF(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
            .slice(0, 14);
    }

    function formatarTelefone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0, 15);
    }

    async function RegistrarUsuario() {

        const camposVazios = [];

        if (!nome) camposVazios.push("Nome");
        if (!email) camposVazios.push("Email");
        if (!senha) camposVazios.push("Senha");

        if (camposVazios.length > 0) {
            alert("Preencha os seguintes campos: " + camposVazios.join(", "));
            return;
        }

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
        <div className='body'>
            <div className='voltar-registrar'>
                <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                    <button className='voltarReg'>
                        <img src="/src/assets/images/setaEsquerda.png" height={25} />
                    </button>
                    <p>Voltar para a página Inicial</p>
                </Link>
            </div>
            <div className='container-registrar'>
                <img src="src/assets/images/logoVeio.png" height={350} alt="Logo" />
                <div className='titulo-input'>
                    <h1 className='titulo'>CONECTANDO GERAÇÕES</h1>

                    <div className="entrar-registrar">
                        <div className={`fundo ${ativo === "registrar" ? "registrar" : ""}`}></div>

                        <Link to="/entrar" className={ativo === "entrar" ? "ativo" : ""} onClick={() => window.scrollTo(0, 0)}>
                            Entrar
                        </Link>

                        <Link to="/registrar" className={ativo === "registrar" ? "ativo" : ""} onClick={() => window.scrollTo(0, 0)}>
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
                            id='input-dtNascimento'
                            value={dt_nascimento}
                            onChange={(e) => setDt_nascimento(e.target.value)}
                            type="date"
                            className='input-menor'
                            placeholder='Data de nascimento'
                        />

                            <input
                                id='input-telefone'
                                value={telefone}
                                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                                type="text"
                                className='input-menor'
                                placeholder='Digite seu telefone'
                            />
                        </div>

                        

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


    );
}
