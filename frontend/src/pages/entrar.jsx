import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../api.js'
import './entrar.scss'


export default function Entrar() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const location = useLocation();
    const [ativo, setAtivo] = useState(location.pathname === "/registrar" ? "registrar" : "entrar");

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

                        <input
                            id='input-senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            type="password"
                            placeholder='Digite sua senha'
                        />
                    </div>

                    <div className='lembrar-esquecer'>
                        <label className='lembrar'>
                            <input className='inp-lembrar' type="checkbox" />
                            Lembrar de mim
                        </label>
                        <a href="" className='esqueceu-senhas'>Esqueceu a senha?</a>
                    </div>

                    <button className='bt-logar'>
                        Entrar
                    </button>

                </div>
            </div>

        </div>
    );
}