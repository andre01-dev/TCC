import "./somos.scss";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/rodape.jsx";

export default function Somos() {
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
      <img className="img" src="/src/assets/images/velha.png" />
    </div>
  </div>
</div>

<div className="esquerda">
  <div>
    <img src="/src/assets/images/velha.png" height={400} width={500} />
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
    <img src="/src/assets/images/velha.png"  height={400} width={500} />
  </div>
  <div className="texto">
    <h1>Conheça nossas notícias</h1>
    <p>Nossos cursos foram criados especialmente para ajudar pessoas idosas a aprender a usar a internet com segurança e confiança. Aqui, cada aula é pensada de forma simples e prática, para que você possa navegar, se comunicar e aproveitar as vantagens do mundo digital sem medo. Nosso objetivo é mostrar que a tecnologia pode ser uma grande aliada no dia a dia, tornando a vida mais fácil, conectada e divertida.pequeno texto explicando nossos cursos</p>
    <button className="btt">saiba mais sobre notícias</button>
  </div>
</div>


<div>
  <div class="container">
    <div class="card">
      <div class="circle"></div>
      <h3>Card 1</h3>
      <p>Descrição do primeiro card.</p>
    </div>
    <div class="card">
      <div class="circle"></div>
      <h3>Card 2</h3>
      <p>Descrição do segundo card.</p>
    </div>
    <div class="card">
      <div class="circle"></div>
      <h3>Card 3</h3>
      <p>Descrição do terceiro card.</p>
    </div>
    <div class="card">
      <div class="circle"></div>
      <h3>Card 4</h3>
      <p>Descrição do quarto card.</p>
    </div>
    <div class="card">
      <div class="circle"></div>
      <h3>Card 5</h3>
      <p>Descrição do quinto card.</p>
    </div>
  </div>
</div>

<div className="parceiros">
  <h1 className="text">Parceiros</h1>
  <div className="carrosel">
  <div className="imagens">
    <img src="/src/assets/images/parceiro1.png"/>
    <img src="/src/assets/images/parceiro2.png" />
    <img src="/src/assets/images/parceiro3.png"/>
  </div>
  </div>
</div>

<Rodape/>

        </div>
    )
}