import Cabecalho from '../components/cabecalho/cabecalho'
import Rodape from '../components/rodape/rodape'
import './denunciapag.scss'

export default function Denunciapag() {
  return (
    <div>
      <Cabecalho />
      <div className="denuncia-page">
        <form className="form-denuncia">
          <div className="form-row">
            <div className="form-group">
              <label>Assunto:</label>
              <input type="text" placeholder="Digite o assunto" />
            </div>

            
            <div className="form-group">
              <label>Data do ocorrido:</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-group full">
            <textarea rows="5" placeholder="Descreva o ocorrido..."></textarea>
          
            <div className='but-denuncia'>
              <button>Enviar Denúncia</button>
            </div>
          </div>
        </form>

        <div className="historico">
          <h3>Histórico de Denúncias</h3>

          <div className="historico-lista">
            <div className="historico-item">
              <span className="texto">CAI EM UMA FAKE NEWS</span>
              <span className="data">09/10/2025</span>
            </div>

            <div className="historico-item">
              <span className="texto">FUI HACKEADO</span>
              <span className="data">09/10/2025</span>
            </div>

            <div className="historico-item">
              <span className="texto">FIZ UMA COMPRA QUE ERA GOLPE</span>
              <span className="data">09/10/2025</span>
            </div>
          </div>

          <div className="chat-denuncia">
            <div className="mensagem esquerda">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
                alt="Usuário"
              />
              <div className="bolha">Oi, preciso de ajuda com um golpe.</div>
            </div>

            <div className="mensagem direita">
              <div className="bolha resposta">Claro! Nos conte o que aconteceu.</div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140061.png"
                alt="Atendente"
              />
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </div>


  )
}