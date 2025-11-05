import "./rodape.scss";
import {Link} from 'react-router'

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="onda-topo">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#F3E7E7" d="M0,90 C460,600 700,-100 1440,20 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="rodape-conteudo">
        <div className="colun">
        <div className="coluna logo">
          <img src="/src/assets/images/logoVeio.png" />
          <h3>CONECTANDO GERAÇÕES</h3>
          <p>suportecg@gmail.com</p>
        </div>
        </div>

        <div className="coluna">
          <h4>Links</h4>
          <ul>
            <li><Link className="link" to='/cursos'onClick={() => window.scrollTo(0, 0)}>Cursos</Link></li>
            <li><Link className="link" to='/tdsntc'onClick={() => window.scrollTo(0, 0)}>Notícias</Link></li>
            <li>Quem Somos</li>
          </ul>
        </div>

        <div className="coluna">
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Whatsapp</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="coluna">
          <h4>Legal</h4>
          <ul>
            <li>Termos de uso</li>
            <li>Privacidade</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>

      <div className="rodape-final">
        <p>© 2025 Todos os direitos reservados para Conectando Gerações</p>
      </div>
    </footer>
  );
}
