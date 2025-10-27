import { useState, useEffect } from 'react';
import api from '../api';
import Cabecalho from '../components/cabecalho/cabecalho';
import Rodape from '../components/rodape/rodape';
import './denunciapag.scss';

export default function Denunciapag() {
  const [assunto, setAssunto] = useState('');
  const [data, setData] = useState('');
  const [ocorrido, setOcorrido] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [denuncias, setDenuncias] = useState([]);

  async function carregarDenuncias() {
    const resposta = await api.get('/denuncia');
    setDenuncias(resposta.data);
  }

  async function enviarDenuncia(e) {
    e.preventDefault();

    try {
      const resposta = await api.post('/denuncia', {
        assunto,
        data,
        ocorrido
      });

      setMensagem(resposta.data.mensagem);
      setAssunto('');
      setData('');
      setOcorrido('');

      carregarDenuncias(); // atualiza a lista depois do envio
    } catch (err) {
      setMensagem(err.response?.data?.erro || 'Erro ao enviar denúncia.');
    }
  }

  useEffect(() => {
    carregarDenuncias();
  }, []);

  return (
    <div>
      <Cabecalho />
      <div className="denuncia-page">
        <form className="form-denuncia" onSubmit={enviarDenuncia}>
          <div className="form-row">
            <div className="form-group">
              <label>Assunto:</label>
              <input
                type="text"
                placeholder="Digite o assunto"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Data do ocorrido:</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group full">
            <textarea
              rows="5"
              placeholder="Descreva o ocorrido..."
              value={ocorrido}
              onChange={(e) => setOcorrido(e.target.value)}
            ></textarea>

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
