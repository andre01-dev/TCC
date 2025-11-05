import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./CardCurso2.scss";

export default function CardCurso2() {
  const cursos = [
    {
      img: "/src/assets/images/curso1.png",
      texto:
        "Guia básico de navegação pela internet, como realizar buscas e filtrar resultados.",
    },
    {
      img: "/src/assets/images/curso2.png",
      texto: "Guia básico de como evitar fraudes e compras impulsivas.",
    },
    {
      img: "/src/assets/images/curso3.png",
      texto: "Guia básico de como navegar de modo seguro no seu Banco.",
    },
    {
      img: "/src/assets/images/curso4.png",
      texto: "Guia básico de redes sociais e segurança digital.",
    },
    {
      img: "/src/assets/images/curso5.png",
      texto: "Guia básico de como reconhecer golpes online.",
    },
    {
      img: "/src/assets/images/curso6.png",
      texto: "Guia básico de privacidade e boas práticas digitais.",
    },
    {
      img: "/src/assets/images/curso7.png",
      texto: "Guia básico de compras seguras online.",
    },
    {
      img: "/src/assets/images/curso8.png",
      texto: "Guia básico de como criar senhas fortes.",
    },
    {
      img: "/src/assets/images/curso9.png",
      texto: "Guia básico de proteção de dados pessoais.",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  // Ajuste responsivo (1 / 2 / 3 cards)
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

  // Avançar / voltar
  const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCards) % cursos.length);
  };
  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - visibleCards + cursos.length) % cursos.length
    );
  };

  // Retorna os cursos visíveis
  const getVisibleCards = () => {
    let cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (startIndex + i) % cursos.length;
      cards.push(cursos[index]);
    }
    return cards;
  };

  return (
    <div className="curso-carousel-container">
      <div className="curso0s">
        <div className="cards-wrapper">
          <div className="cards">
            {getVisibleCards().map((curso, i) => (
              <div className="card" key={i}>
                <img src={curso.img} alt={`Curso ${i + 1}`} />
                <p>{curso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botões inferiores */}
      <div className="alinhamento">
        <Link to="/cursos" className="alinhar" onClick={() => window.scrollTo(0, 0)}>
          <button className="verMais">+</button>
          <p>Ver mais</p>
        </Link>

        <div className="nextleft">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>
      </div>
    </div>
  );
}
