import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import api from '../api';
import Cabecalho from '../components/cabecalho/cabecalho';
import CabecalhoLogado from "../components/cabecalhoLogado/cabecalho.jsx"
import Rodape from '../components/rodape/rodape';
import './denunciapag.scss';

export default function Denunciapag() {
  const [assunto, setAssunto] = useState('');
  const [data, setData] = useState('');
  const [ocorrido, setOcorrido] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [denuncias, setDenuncias] = useState([]);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [logado, setLogado] = useState(false)
  const nome_usuario = localStorage.getItem("NOME_USUARIO");



  async function carregarDenuncias() {
    const resposta = await api.get('/denuncia');
    setDenuncias(resposta.data);
  }

  async function enviarDenuncia(e) {
    e.preventDefault();

    try {
      //  Envia pro backend normalmente
      const resposta = await api.post('/denuncia', {
        assunto,
        data,
        ocorrido,
        email
      });

      // 2 Envia também o email pelo EmailJS
      await emailjs.send(
        'denuncia_tcc',
        'template_1l75xyn',
        { assunto, data, ocorrido, email },
        'Tu-dCpjOHZRwzxbT4'
      );

      setMensagem('Denúncia enviada com sucesso!');
      setAssunto('');
      setData('');
      setOcorrido('');
      setEmail('');

      carregarDenuncias();
    } catch (err) {
      console.error(err);
      setMensagem('Erro ao enviar denúncia.');
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");

    if (token != undefined && token != null) {
      setNomeUsuario(nome_usuario)
      setLogado(!!token)
    }
    else {
      setLogado(false)
      setNomeUsuario("")
    }
    
    carregarDenuncias();
  }, []);

  return (
    <div>
      {logado ? (
        <>
          <CabecalhoLogado
            nome_usuario={nomeUsuario}
          />
        </>
      ) : (
        <>
          <Cabecalho />
        </>
      )}
      <div className="denuncia-page">
        <div className='inicio'>
          <h1>Pagina de Denúncias</h1>
        </div>
        <form className="form-denuncia" onSubmit={enviarDenuncia}>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Assunto:</label>
              <input
                type="text"
                placeholder="Digite o assunto"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Data do ocorrido:</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group full">
            <textarea
              rows="5"
              placeholder="Descreva o ocorrido"
              value={ocorrido}
              onChange={(e) => setOcorrido(e.target.value)}
            ></textarea>
            <p>Fique atento ao email, responderemos em 24h!</p>

            <div className="but-denuncia">
              <button type="submit">Enviar Denúncia</button>
            </div>
          </div>
        </form>

        {mensagem && <p className="msg">{mensagem}</p>}

        <div className="historico">
          <h3>Histórico de Denúncias</h3>
          <div className="historico-lista">
            {denuncias.map((item) => (
              <div className="historico-item" key={item.id_denuncia}>
                <span className="texto">{item.assunto}</span>
                <span className="data">{item.data}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
