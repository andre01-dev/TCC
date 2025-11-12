import { useState, useEffect } from "react";
import "./depoimentos.scss";
import api from "../../../api.js";
import { toast } from "react-toastify";
import '/src/assets/fonts/fonts.scss';

export default function Depoimentos() {

  const [depoimentos, setDepoimentos] = useState([]);

  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function PuxarDepoimentos() {
      try {
        const response = await api.get("/depoimentos");
        setDepoimentos(response.data);
      } catch (error) {
        toast.error("Erro ao carregar depoimentos");
      }
    }
    PuxarDepoimentos();
  }, []);

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

  // Enquanto não carregou nada, evita erro
  if (depoimentos.length === 0) {
    return <p>Carregando depoimentos...</p>;
  }

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
                <img src={dep.imagem} alt={dep.titulo} />
                <p className="especialista average-sans">{dep.titulo}</p>
                <p className="average-sans">{dep.depoimento}</p>
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
