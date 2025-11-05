import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './admhistorico.scss';
import api from '../../api';
import CabecalhoADM from '../../components/cabecalhoadm/cabecalhoadm';

function ajustarData(dataStr) {
  if (!dataStr) return '';
  const direta = new Date(dataStr);
  if (!isNaN(direta)) return direta.toLocaleDateString('pt-BR');

  // tenta tratar formato dd/mm/yyyy
  const partes = dataStr.split('/');
  if (partes.length === 3) {
    const [dia, mes, ano] = partes;
    const dataConvertida = new Date(`${ano}-${mes}-${dia}T00:00:00`);
    if (!isNaN(dataConvertida)) return dataConvertida.toLocaleDateString('pt-BR');
  }
  return dataStr;
}

export default function AdmHistorico() {
  const [assunto, setAssunto] = useState('');
  const [data, setData] = useState('');
  const [ocorrido, setOcorrido] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [denuncias, setDenuncias] = useState([]);
  const [idSelecionado, setIdSelecionado] = useState(null);

  async function carregarDenuncias() {
    const resposta = await api.get('/denuncia');
    setDenuncias(resposta.data);
  }

  async function enviarDenuncia(e) {
    e.preventDefault();

    try {
      await api.post('/denuncia', { assunto, data, ocorrido, email });
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
    carregarDenuncias();
  }, []);

  function abrirOuFechar(id) {
    setIdSelecionado(idSelecionado === id ? null : id);
  }

  return (
    <div>
        <CabecalhoADM/>
      <div className="pagina-denuncia">
        {mensagem && <p className="mensagem">{mensagem}</p>}

        <div className="caixa-denuncia">
          <h3 className="titulo">Histórico de Denúncias</h3>

          <div className="lista-denuncia">
            {denuncias.map((item) => (
              <div
                key={item.id_denuncia}
                className={`item-denuncia ${idSelecionado === item.id_denuncia ? 'aberto' : ''}`}
                onClick={() => abrirOuFechar(item.id_denuncia)}
              >
                <div className="cabecalho-item">
                  <span className="texto-assunto">{item.assunto}</span>
                  <span className="texto-data">{ajustarData(item.data)}</span>
                </div>

                {idSelecionado === item.id_denuncia && (
                  <div className="descricao-item">
                    <strong>Ocorrido:</strong>
                    <p>{item.ocorrido}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
