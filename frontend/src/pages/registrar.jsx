import { useState } from 'react';
import axios from 'axios';
import './registrar.scss';

export default function Registrar() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dtNascimento, setDtNascimento] = useState("");
    const [senha, setSenha] = useState("");

    async function RegistrarUsuario() {
        const response = await axios.post()
    }

    return (
        <div className='container-registrar'>
            <h1>CONECTANDO GERAÇÕES</h1>
            <input
                id='input-nome'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
            />

            <input
                id='input-email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
            />

            <input
                id='input-cpf'
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                type="text"
            />

            <input
                id='input-telefone'
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                type="text"
            />

            <input
                id='input-dtNascimento'
                value={dtNascimento}
                onChange={(e) => setDtNascimento(e.target.value)}
                type="text"
            />

            <input
                id='input-senha'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="text"
            />
        </div>
    );
}