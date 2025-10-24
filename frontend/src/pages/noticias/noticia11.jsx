import Cabecalho from "../../components/cabecalho/cabecalho";
import './noticia.scss'
import {Link} from 'react-router'

export default function Noticia11() {
    return (
        <div className='noticia'>
            <Cabecalho />
            <div className='voltar-noticia'>
                <Link to={"/tdsntc"}>
                    <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                    <p>
                        voltar para as notícias
                    </p>
                </Link>
            </div> 

            <div className='titulo-noticia'>
                <h1>Suspeitos de aplicar golpe virtual em casal de idosos são alvos de operação no Pará e outros dois estados</h1>
            </div>

            <h3 className='subtitulo'>Investigação apura prejuízo de mais de R$ 50 mil a casal de idosos; suspeitos têm ligação com facção criminosa, segundo a polícia.
                Por Jonathan Coimbra, g1 Pará e Tv Liberal — Belém

                09/07/2025 12h41  Atualizado há 3 meses</h3>
            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia11.png" alt="" />
                </div>
                <p>A Polícia Civil do Pará em conjunto com as polícias do Mato Grosso e Rio de Janeiro deflagraram, nesta terça-feira (9), a Operação Oliveira para cumprir mandados de busca e apreensão contra um grupo suspeito de aplicar golpes pela internet usando a fraude do “falso parente”.</p>
                <br />
                <p>Ao todo, foram cumpridos 11 mandados de busca e apreensão e cinco mandados de prisão preventiva. Segundo a polícia, as investigações começaram após um casal de idosos ser vítima do golpe, com um prejuízo de mais de R$ 50 mil.</p>
                <br />
                <p>A partir da apuração, a polícia identificou uma associação criminosa especializada em fraudes eletrônicas e ocultação de patrimônio, utilizando contas bancárias de terceiros obtidas com dados pessoais.</p>
                <br />

                <h2>---- continue depois da publicidade ----</h2>
                
                <Link to={"/curso2"}>
                <img src="/src/assets/images/curso2.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                </Link>
                


                <p>Ainda de acordo com a polícia, há indícios de que integrantes do grupo têm vínculos com uma facção criminosa de atuação nacional, que se utiliza de pessoas cooptadas para movimentar o dinheiro obtido ilegalmente.</p>
                <br />
                <p>As diligências ocorreram nas cidades de Cuiabá, Várzea Grande e Santo Antônio do Leverger, no Mato Grosso, além de Niterói, no Rio de Janeiro. Ao todo, mais de 50 agentes participaram da ação.</p>
                <br />
                <p>Durante a operação, foram apreendidos diversos aparelhos eletrônicos que devem ajudar na identificação dos suspeitos e na análise do patrimônio do grupo. A Justiça também determinou o bloqueio de contas bancárias dos investigados, para tentar reparar os prejuízos causados às vítimas.</p>

            </div>
        </div>
    )
}