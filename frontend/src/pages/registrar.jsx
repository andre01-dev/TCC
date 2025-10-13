import { useState } from 'react';
import api from '../api.js'
import './registrar.scss';

export default function Registrar() {

    const [nome, setNome] = useState("NOME");
    const [email, setEmail] = useState("EMAIL");
    const [cpf, setCpf] = useState("CPF");
    const [telefone, setTelefone] = useState("TELEFONE");
    const [dtNascimento, setDtNascimento] = useState("DATA DE NASCIMENTO");
    const [senha, setSenha] = useState("SENHA");
        const [entrarAtivo, setEntrarAtivo] = useState("entrar");

    async function RegistrarUsuario() {
        try {
            const response = await api.post('/eventos', {
                nome,
                email,
                cpf,
                telefone,
                dtNascimento,
                senha
            })
            alert("Evento criado")
        } catch (e) {
            alert(e.response?.data?.erro || "Erro ao criar evento")
        }
    }

    return (
        <div className='body'>
        <div className='container-registrar'>
            <img src="src/assets/images/logoVeio.png" height={400} />
            <div className='titulo-input'>
                <h1 className='titulo'>CONECTANDO GERAÇÕES</h1>
                <div className='entrar-registrar'>

                    <button className={entrarAtivo === 'entrar' ? "ativo" : ""}
                        onClick={() => setEntrarAtivo("entrar")}
                    >ENTRAR</button>

                    <button className={entrarAtivo === 'registrar' ? "ativo" : ""}
                        onClick={() => setEntrarAtivo("registrar")}
                    >REGISTRAR-SE</button>

                </div>
                <p>Registre-se para ter acesso ao nosso conteúdo completo</p>
                <div className='inputs'>
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

                    <div className='cpf-telefone'>
                        <input
                            id='input-cpf'
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            type="text"
                            className='input-menor'
                        />

                        <input
                            id='input-telefone'
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            type="text"
                            className='input-menor'
                        />
                    </div>

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
            </div>

            <button onClick={RegistrarUsuario}>Criar</button>
        </div>
        </div>
    );
}