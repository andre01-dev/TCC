import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../api.js';
import './registrar.scss';

export default function Registrar() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dtNascimento, setDtNascimento] = useState("");
    const [senha, setSenha] = useState("");
    const location = useLocation();
    const [ativo, setAtivo] = useState(location.pathname === "/registrar" ? "registrar" : "entrar");

    async function RegistrarUsuario() {
        try {
            await api.post('/usuario', {
                nome,
                email,
                cpf,
                telefone,
                dtNascimento,
                senha
            });
            alert("Usuário registrado com sucesso!");
        } catch (e) {
            alert(e.response?.data?.erro || "Erro ao registrar usuário");
        }
    }

    return (
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
                            value={dtNascimento}
                            onChange={(e) => setDtNascimento(e.target.value)}
                            type="text"
                            placeholder='Informe sua data de nascimento'
                        />

                        <input
                            id='input-senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            type="password"
                            placeholder='Crie sua senha'
                        />
                    </div>

                    <button className='bt-criarConta' onClick={RegistrarUsuario}>
                        Registrar-se
                    </button>

                </div>
            </div>
        </div>
    );
}
