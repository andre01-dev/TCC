import "./AcontecendoAgora.scss";
import {Link} from 'react-router'

export default function Parte2() {
    return (
        <section className="tudo">
            
            <div className="conteudo">
                <Link to={"/noticia1"} onClick={() => window.scrollTo(0, 0)}>
                <div className="item">
                    <img
                        className="image"
                        src="/src/assets/images/noticia1.png"
                        alt="Idosos aprendendo tecnologia"
                    />
                    <div className="texto">
                        <h2>Golpes no Instagram: perfis falsos clonam a conta de negócios para sumir com o dinheiro de clientes</h2>
                        <br />
                        <p>
                        Golpistas têm usado o Instagram para uma nova fraude, que copia os perfis de empresas reais, anuncia promoções falsas e desaparece com o dinheiro de quem compra... <br />
                        </p>
                    </div>
                </div></Link>

                <Link to={"/noticia2"} onClick={() => window.scrollTo(0, 0)}>
                <div className="item">
                    <img
                        className="image"
                        src="/src/assets/images/noticia2.png"
                        alt="Idosos aprendendo tecnologia"
                    />
                    <div className="texto">
                        <h2>'Haverá sinais': estes são os indícios de que você está caindo em um golpe…</h2> 
                        <br />
                      <p>
                      Os golpes virtuais se tornaram uma febre perigosa em nosso país. Pelo menos 71% dos brasileiros já sofreram alguma tentativa de fraude eletrônica, mostra pesquisa publicada em junho de 2023 pela Nord Security, empresa de segurança digital...<br />
                        </p>
                    </div>
                </div></Link>

                <Link to={"noticia3"} onClick={() => window.scrollTo(0, 0)}>
                <div className="item">
                    <img
                        className="image"
                        src="/src/assets/images/noticia3.png"
                        alt="Idosos aprendendo tecnologia"
                    />
                    <div className="texto">
                        <h2>A cada 5 minutos, uma pessoa cai em um golpe virtual em MG; saiba como ficar longe desses criminosos</h2> 
                        <br />
                       <p>
                       A cada cinco minutos, uma pessoa é vítima de algum tipo de golpe realizado pela internet. De janeiro a setembro deste ano, foram 79.869 registros de estelionato virtual — ou 295,8 por dia, 12 por hora...<br />
                        </p>
                    </div>
                </div></Link>
                <Link to ={"/tdsntc"} onClick={() => window.scrollTo(0, 0)}>
                    <div className="alinhar">
                        <button className="verMais">+</button>
                        <p>Ver mais</p>
                    </div>
                </Link>
               </div> 
            
        </section>
    );
}
