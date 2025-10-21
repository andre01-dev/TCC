import Cabecalho from "../../components/cabecalho/cabecalho";
import './noticia.scss'
import {Link} from 'react-router'

export default function Noticia7() {
    return (
        <div className='noticia'>
            <Cabecalho />
            <div className='voltar-noticia'>
                <Link to={"/"}>
                    <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                    <p>
                        voltar para as notícias
                    </p>
                </Link>
            </div> 

            <div className='titulo-noticia'>
                <h1>Duas pessoas são presas e uma está foragida por 'golpe da falsa prostituta'</h1>
            </div>

            <h3 className='subtitulo'>Isabela AleixoDo UOL, no Rio15/12/2024 19h50</h3>

            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia7.png" alt="" />
                </div>

                <p>A polícia investiga uma mulher identificada como Rayene Carla Reis, 28, acusada de extorquir vítimas ameaçando-as de morte e de agressões físicas em um golpe que envolve um falso programa com uma prostituta. Ela abordava as pessoas dizendo que elas haviam contratado uma garota e não compareceram ao encontro. Rayene está foragida, mas dois de seus parentes, que também faziam parte do golpe, foram presos</p>
                <br />
                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso7.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                <h2>O que aconteceu</h2>
                <br />
                <ul>
                    <li>O golpe da falsa prostituta funcionava da seguinte forma:</li>
                    <p>Rayene buscava informações sobre pessoas aleatórias em um aplicativo que funciona como um banco de dados e dispõe informações pessoais como CPF, nome completo, relação de parentes, telefones, data de nascimento, endereço e até renda média presumida</p>

                    <li>Com essas informações, ela entrava em contato com uma potencial vítima</li>
                    <p>A conversa inicial era de que a pessoa havia contratado um serviço com uma prostituta e não tinha comparecido. Dessa forma, ela teria que arcar com a despesa</p>

                    <li>Assim começavam as extorsões.</li>
                    <p>De acordo com a delegada Márcia Beck, da 17ª DP, Rayene ameaçava as vítimas falando que o grupo fazia parte de uma milícia e que envolveria a família da vítima. Ela enviava imagens de policiais militares fardados durante as extorsões. Os valores cobrados iam de 600 reais a 3.500 reais. Segundo a delegada, mesmo pessoas que não tinham qualquer relação com a contratação do serviço de prostituição acabavam caindo nas ameaças por causa das informações pessoais que a suspeita detinha</p>


                    <li>Homem e mulher presos são parentes de Rayene.</li>
                    <p>A prima dela é suspeita de emprestar a conta bancária para recebimento dos valores das extorsões. O irmão de Rayene foi preso em flagrante por posse ilegal de arma de fogo enquanto a polícia cumpria mandado de busca e apreensão em endereço ligado à suspeita.</p>

                    <li>31 registros de ocorrência similares</li>
                    <p>Segundo a delegada Márcia Beck, foram identificados ao menos 31 registros com o mesmo "modus operandi" do golpe da falsa prostituta. Em um celular atribuído a Rayene foi encontrada uma captura de tela de uma mensagem em um grupo do Telegram que "ensinava" a aplicar o golpe. A polícia acredita que a suspeita adaptou e criou uma estratégia própria para extorquir as vítimas</p>
                </ul>
            </div>
        </div>
    )
}