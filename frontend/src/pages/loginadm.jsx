import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff } from "lucide-react";
import {toast} from 'react-toastify';

import './loginadm.scss';
import api from '../api.js';

export default function LoginAdm() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrar, setMostrar] = useState(false)
    const navigate = useNavigate();


    async function entrar() {
        try {
            const r = await api.post("/loginadm", { usuario, senha });

            if (r.data.ok === true) {
                localStorage.setItem("admLogado","true")
                toast.success("login realizado")
                navigate("/adm");
            } else{
                toast.error("Usuário ou senha incorretos!");
            }
        } catch (err) {
            toast.error("Erro ao conectar ao servidor");


        }
    }


    return (
        <div className="login-container">
            <h1 className='login-titulo'>Conectando Gerações <br />
                ADM</h1>
            <div className="login-card">

                <label className="input-label">Usuário</label>
                <input
                    placeholder='Enter your user'
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                    type="text"
                />

                <label className="input-label">Senha</label>
                <div className='input-senha-login'>
                <input
                className='input-login'
                    type={mostrar ? "text" : "password"}
                    placeholder='Enter your password'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />
                <span
                    className="icone-senha-login"
                    onClick={() => setMostrar(!mostrar)}
                    >
                    {mostrar ? <Eye size={18} /> : <EyeOff size={18} />}
                </span>
                    </div>

                <button className="button-login" onClick={entrar}>
                    Entrar
                </button>
            </div>
            <toast/>
        </div>
    );
}