import Cabecalho from "../../components/cabecalho/cabecalho";
import './noticia.scss'
import {Link} from 'react-router'

export default function Noticia9() {
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
                <h1>"Golpe de amor": idoso é enganado por grupo criminoso e perde R$ 2 milhões</h1>
            </div>

            <h3 className='subtitulo'>Suspeitos atuavam pela internet; eles seduziram e os convenceram o idoso a transferir dinheiro
                Thomaz Coelho e Rafael Saldanha, da CNN, em São Paulo
                28/11/24 às 19:11 | Atualizado 28/11/24 às 19:11</h3>

            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia9.png" alt="" />
                </div>
                <p>Um idoso perdeu aproximadamente R$ 2.000.000,00 para um grupo criminoso após cair no "golpe do amor". A vítima é do Rio Grande do Sul.</p>
                <br />
                <p>Seis suspeitos foram presos na "Operação Dom Quixote" até o momento. As prisões aconteceram nas cidades de Santo André, Guarulhos, Ferraz de Vasconcellos, Osasco e em São Paulo (SP).</p>
                <br />
                <p>Os suspeitos atuavam pela internet, utilizando redes sociais para abordar as vítimas. Segundo a Polícia Civil de São Paulo, eles seduziram e os convenceram o idoso a transferir dinheiro.</p>
                <br />
                <p>O caso foi registrado como estelionato na Delegacia de Polícia de Peruíbe. Em nota, o Agibank expressou solidariedade ao cliente e afirmou que está à disposição para investigar o ocorrido (veja o posicionamento completo adiante). O g1 também entrou em contato com o INSS, mas não obteve retorno até a publicação desta reportagem.</p>
                <br />
                <p>A ação, realizada em conjunto entre as Polícias Civis do Rio Grande do Sul, Ceará e São Paulo, investiga os crimes de estelionato qualificado, associação criminosa e lavagem de dinheiro.</p>
                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso9.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                <h2>O que aconteceu</h2>
                <br />
                <p>25 policiais do Rio Grande do Sul participaram da operação, realizada na última quarta-feira (27). Também houve cumprimento de busca e apreensão no estado do Ceará.</p>
                <br />
                <p>Além disso, documentos, aparelhos eletrônicos (celulares e notebooks) e cartões bancários foram apreendidos e os valores de contas bancárias dos criminosos foram bloqueados.</p>
                <br />
                <p>A ação contou com a participação de policiais civis da Divisão de Capturas do Departamento de Operações Policiais Estratégicas (Dope) e das Delegacias Seccionais de Mogi das Cruzes, Santo André e Barretos.</p>
            </div>
        </div>
    )
}