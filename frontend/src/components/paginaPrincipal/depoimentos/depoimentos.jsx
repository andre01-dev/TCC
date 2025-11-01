import { useState, useEffect } from "react";
import "./depoimentos.scss";

export default function Depoimentos() {
  const depoimentos = [
    {
      img: "/src/assets/images/depoimento1.png",
      texto:
        "José Carlos, 72 anos- “Gostei muito das aulas sobre fake news. Antes eu acreditava em tudo que recebia no grupo da família, mas agora aprendi a verificar as informações. Me sinto mais segura e informada.”",
    },
    {
      img: "/src/assets/images/depoimento2.png",
      texto:
        "Maria Aparecida, 68 anos- “Eu nunca fui muito amiga da tecnologia, mas o Conectando Gerações me ajudou a perder o medo do computador. Agora sei usar o WhatsApp, assistir vídeos e até fazer chamadas de vídeo com meus netos.”",
    },
    {
      img: "/src/assets/images/depoimento3.png",
      especialista: "Especialista em educação para idosos",
      texto:
        "Dona Helena, 70 anos- “O site é uma bênção! Ensina com calma, tem vídeos curtos e diretos. Consegui até ajudar uma vizinha a criar o e-mail dela. Estou adorando aprender algo novo nessa idade.”",
    },
    {
      img: "/src/assets/images/depoimento4.png",
      texto: "Arnaldo, 74 anos- “Eu entrei só para aprender a mexer no celular, mas acabei descobrindo um mundo novo. As dicas de segurança digital foram muito úteis. Hoje navego na internet com mais confiança.”",
    },
    {
      img: "/src/assets/images/depoimento5.jpg",
      texto: "Elza, 71 anos- “Gostei bastante dos conteúdos, mas achei que alguns vídeos poderiam ter legendas. Às vezes é difícil escutar bem, especialmente de dia por conta do barulho. Fora isso, é tudo excelente.”",
    },
    {
      img: "/src/assets/images/depoimento6.png",
      texto: "Carlos Alberto, 75 anos- “O curso é muito bom e me ajudou muito, mas senti falta de um suporte por telefone. Nem sempre consigo mandar mensagem pelo site quando tenho dúvida. Ainda assim, recomendo fortemente.”",
    }
  ];

  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  // Responsivo
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Próximo slide
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % depoimentos.length);
  };

  // Slide anterior
  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  // Cards visíveis
  const getVisibleCards = () => {
    let cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (startIndex + i) % depoimentos.length;
      cards.push(depoimentos[index]);
    }
    return cards;
  };

  return (
    <div className="carousel-container">
      <button className="btn prev" onClick={prevSlide}>
        ❮
      </button>

      <div className="carousel-inner-wrapper">
        <div className="carousel-inner">
          {getVisibleCards().map((dep, i) => (
            <div className="slide" key={i}>
              <div className="carde">
                <img src={dep.img} alt={`Depoimento ${i + 1}`} />
                <p className="especialista">{dep.especialista}</p>
                <p>{dep.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}
