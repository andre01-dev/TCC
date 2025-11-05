import { useState } from "react";
import "./faq.scss";

export default function FAQ() {
  const [aberta, setAberta] = useState()

  const perguntas = [
    {
      pergunta: "Como se registrar ou fazer login?",
      resposta: "Acessando no canto superior direito do Cabeçalho login/registrar"
    },
    {
      pergunta: "Nosso site é totalmente gratuito?",
      resposta: "Sim, nosso site é totalemnte gratuito"
    },
    {
      pergunta: "Como acessar o canal de Denúncias?",
      resposta: "Acessando o canal de Denúncias na pagina principal"
    },
    {
      pergunta: "O conteúdo é voltado apenas para idosos?",
      resposta: "Não. Apesar de ser focado em ajudar idosos, qualquer pessoa pode usar e aprender."
    },
    {
      pergunta: "Como posso me inscrever nos cursos?",
      resposta: "Basta acessar a página 'Cursos' no menu principal e clicar no curso desejado para iniciar."
    }
  ]


  function toggle(i) {
    setAberta(aberta == i ? null : i);
  }

  return (
    <div className="faq-container">
      {perguntas.map((item, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-pergunta" onClick={() => toggle(index)}>
            {item.pergunta}
            <span className={aberta === index ? "seta aberta" : "seta"}>▼</span>
          </button>

          <div className={aberta === index ? "faq-resposta aberta" : "faq-resposta"}>
            {item.resposta}
          </div>
        </div>
      ))}
    </div>
  )
}