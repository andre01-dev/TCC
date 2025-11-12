import "./mvv.scss"
import '/src/assets/fonts/fonts.scss';

export default function MVV() {
    return (
        <div className="container">
            <div className="cartoes">
                <div className="cartao missao">
                    <h2 className="josefin-sans">Missão</h2>
                    <p className="average-sans">Promover a inclusão digital da pessoa idosa, oferecendo cursos, notícias e suporte que facilitem o uso seguro da tecnologia, fortalecendo sua autonomia, confiança e participação ativa no mundo digital.  </p>
                </div>
                <div className="cartao visao">
                    <h2 className="josefin-sans">Visão</h2>
                    <p className="average-sans">Ser referência nacional em educação digital para idosos, reconhecida por transformar o aprendizado em uma experiência acolhedora, acessível e segura, contribuindo para uma sociedade mais conectada e inclusiva. </p>            </div>
                <div className="cartao valores">
                    <h2 className="josefin-sans">Valores</h2>
                    <p className="average-sans">Baseados na empatia, no respeito e na acessibilidade, buscando sempre compreender as necessidades de cada idoso. Prezamos pela segurança digital, garantindo o uso responsável da tecnologia.  </p>            </div>
            </div>
        </div>
    )
}