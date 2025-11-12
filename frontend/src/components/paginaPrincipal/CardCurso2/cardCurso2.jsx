import { useState, useEffect } from "react";
import { Link } from "react-router";
import api from "../../../api.js"
import "./CardCurso2.scss";
import '/src/assets/fonts/fonts.scss';

export default function CardCurso2() {
  const [cursos, setCursos] = useState([]);

  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function carregarCursos() {
      try {
        const resp = await api.get("/puxar/cursos");
        setCursos(resp.data);
      } catch (err) {
        console.error("Erro ao carregar cursos:", err);
      }
    }
    carregarCursos();
  }, []);


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


  const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCards) % cursos.length);
  };
  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - visibleCards + cursos.length) % cursos.length
    );
  };


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
            {getVisibleCards().map((cursos, i) => (
              <div className="card" key={i}>
                <Link to={cursos?.url} onClick={() => window.scrollTo(0, 0)}>
                  <img src={cursos?.caminho_img} alt={`Curso ${i + 1}`} />
                </Link>
                <h2 className="nm-curso josefin-sans">{cursos?.nome_curso}</h2>
                <p className="average-sans">{cursos?.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="alinhamento">
        <Link to="/cursos" className="alinhar" onClick={() => window.scrollTo(0, 0)}>
          <button className="verMais">+</button>
          <p className="average-sans">Ver mais</p>
        </Link>

        <div className="nextleft">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>
      </div>
    </div>
  );
}
