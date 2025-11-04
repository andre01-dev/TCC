import './somos.scss'
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/rodape.jsx";
import CardColab from "../components/CardsColabs/cardscolabs.jsx";
import { useState, useEffect } from "react";


export default function Somos() {

  const parceiros = [
    { img: "/src/assets/images/parceiro1.png" },
    { img: "/src/assets/images/parceiro2.png" },
    { img: "/src/assets/images/parceiro3.png" },
    { img: "/src/assets/images/parceiro1.png" },
    { img: "/src/assets/images/parceiro2.png" },
  ];

  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

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
    setStartIndex((prev) => (prev + 1) % parceiros.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + parceiros.length) % parceiros.length);
  };

  const getVisibleCards = () => {
    let cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (startIndex + i) % parceiros.length;
      cards.push(parceiros[index]);
    }
    return cards;
  };


  const colab = [{
    "imagem": <img src="src/assets/images/noticia14.png" alt='imagem' height={200} />,
    "nome": "André",
    "descricao": "FullStack e UI/UX"
  }, {
    "imagem": <img src="src/assets/images/noticia14.png" alt='imagem' height={200} />,
    "nome": "Claudio",
    "descricao": "FullStack e UI/UX"
  }, {
    "imagem": <img src="src/assets/images/noticia14.png" alt='imagem' height={200} />,
    "nome": "Gustavo Penha",
    "descricao": "Front-End e UI/UX"
  },
  {
    "imagem": <img src="src/assets/images/noticia14.png" alt='imagem' height={200} />,
    "nome": "Pedro Lima",
    "descricao": "Front-End e UI/UX"
  },
  {
    "imagem": <img src="src/assets/images/noticia14.png" alt='imagem' height={200} />,
    "nome": "Gustavo Lana",
    "descricao": "Front-End e UI/UX"
  }]

  return (
    <div>
      <Cabecalho />
      <div className="titul">
        <h1>Quem Somos</h1>
      </div>
      <div className="tud">
        <div>
          <img src="/src/assets/images/idosos computador.png" height={445} />
        </div>
        <div className="texto">
          <h1>História do Conectando Gerações</h1>
          <p>O projeto social foi desenvolvido pensando no desenvolvimento dos idosos
            para com o meio <br />
            digital, foram estudadas as estatisticas e nota-se que os
            idosos são o grupo que mais cai em
            <br /> golpe na internet ou tem dificuldade com tecnologia,
            para isso criamos essa plataforma em prol
            <br /> de ajudarmos todos os nossos sêniors de vivência.
            Nosso propósito é oferecer um ambiente acessível,
            <br /> educativo e acolhedor, onde os idosos possam aprender sobre o uso de dispositivos digitais,
            <br /> redes sociais e segurança online de forma prática e segura. Através de cursos,
            <br /> noticias e conteúdos interativos, buscamos despertar a curiosidade e o interesse pela tecnologia,
            <br /> mostrando que ela pode ser uma grande aliada no dia a dia.</p>
        </div>
      </div>
      <div class="secao">
        <div class="faixa-diagonal">
          <div class="conteudo">
            <div class="textoo">
              <p>
                Além disso, o projeto busca promover a inclusão digital e a autonomia dos idosos, oferecendo um espaço acessível e acolhedor para que possam aprender, interagir e se sentir seguros no uso da tecnologia. Acreditamos que, com o apoio certo, cada pessoa pode se adaptar ao mundo digital e aproveitar seus benefícios — desde a comunicação com familiares até o acesso a serviços e informações online. Nosso objetivo é transformar o medo da tecnologia em encanto e curiosidade, fortalecendo a conexão entre gerações e construindo uma sociedade mais integrada e informada.
              </p>
            </div>
            <img className="img" src="/src/assets/images/senhora.png" />
          </div>
        </div>
      </div>

      <div className="esquerda">
        <div>
          <img src="/src/assets/images/senhora.png" height={400} width={500} />
        </div>
        <div className="texto">
          <h1>Conheça nossos cursos</h1>
          <p>Nossos cursos foram criados especialmente para ajudar <br />
            pessoas idosas a aprender a usar a internet com segurança e <br />
            confiança. Aqui, cada aula é pensada de forma simples e prática, <br />
            para que você possa navegar, se comunicar e aproveitar <br />
            as vantagens do mundo digital sem medo. Nosso objetivo <br />
            é mostrar que a tecnologia pode ser uma grande aliada no  <br />
            dia a dia, tornando a vida mais  fácil, conectada e divertida.</p>
          <button className="btt">Saiba mais sobre cursos</button>
        </div>
      </div>


      <div className=" direita">
        <div>
          <img src="/src/assets/images/senhora.png" height={400} width={500} />
        </div>
        <div className="texto">
          <h1>Conheça nossas notícias</h1>
          <p>Nossos cursos foram criados especialmente para ajudar pessoas idosas a aprender a usar a internet com segurança e confiança. Aqui, cada aula é pensada de forma simples e prática, para que você possa navegar, se comunicar e aproveitar as vantagens do mundo digital sem medo. Nosso objetivo é mostrar que a tecnologia pode ser uma grande aliada no dia a dia, tornando a vida mais fácil, conectada e divertida.pequeno texto explicando nossos cursos</p>
          <button className="btt">saiba mais sobre notícias</button>
        </div>
      </div>
<div className='desenvol-text'>
  <h2>Desenvolvedores</h2>
</div>
      <div className='alinhando'>
        <div className='cardscolabs'>
          {
            colab.map(c =>
              <CardColab
                imagem={c.imagem}
                nome={c.nome}
                descricao={c.descricao}
              />
            )
          }
        </div>
      </div>


      <div className="parceiros">
        <h1 className="text">Parceiros</h1>

        <div className="carousel-container">
          <button className="btn prev" onClick={prevSlide}>❮</button>

          <div className="carousel-inner-wrapper">
            <div className="carousel-inner">
              {getVisibleCards().map((parc, i) => (
                <div className="slide" key={i}>
                  <img src={parc.img} alt={`Parceiro ${i}`} />
                </div>
              ))}
            </div>
          </div>

          <button className="btn next" onClick={nextSlide}>❯</button>
        </div>
      </div>

      <Rodape />

    </div>
  )
}