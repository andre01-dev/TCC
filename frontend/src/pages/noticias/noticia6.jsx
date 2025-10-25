import Cabecalho from '../../components/cabecalho/cabecalho';
import { useEffect, useState } from 'react';
import CabecalhoLogado from '../../components/cabecalhoLogado/cabecalho';
import './noticia.scss'
import {Link} from 'react-router'

export default function Noticia6() {

    const [nomeUsuario, setNomeUsuario] = useState("");
        const [logado, setLogado] = useState(false)
        const nome_usuario = localStorage.getItem("NOME_USUARIO")
    
        useEffect(() => {
            const token = localStorage.getItem("TOKEN");
    
            if (token != undefined && token != null) {
                setNomeUsuario(nome_usuario)
                setLogado(!!token)
            }
            else{
                setLogado(false)
                setNomeUsuario("")
            }
        })

    return (
        <div className='noticia'>
            {logado ? (
                            <>
                                <CabecalhoLogado
                                    nome_usuario = {nomeUsuario}
                                />
                            </>
                        ) : (
                          <>
                            <Cabecalho />
                          </>  
                        )}
            <div className='voltar-noticia'>
                <Link to={"/tdsntc"}>
                    <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                    <p>
                        voltar para as notícias
                    </p>
                </Link>
            </div> 

            <div className='titulo-noticia'>
                <h1>Golpes digitais atingem 24% da população brasileira, revela DataSenado</h1>
            </div>

            <h3 className='subtitulo'>Da Agência Senado | 01/10/2024, 17h51</h3>

            <div className='corpo-noticia'>

                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia6.png" alt="" />
                </div>

                <p>Os golpes digitais vitimaram 24% dos brasileiros com mais de 16 anos nos últimos 12 meses. São mais de 40,85 milhões de pessoas que perderam dinheiro em função de algum crime cibernético, como clonagem de cartão, fraude na internet ou invasão de contas bancárias. Os dados são de uma pesquisa divulgada nesta terça-feira (1º) pelo Instituto DataSenado.</p>
                <br />
                <p>De acordo com o estudo “Panorama Político 2024: apostas esportivas, golpes digitais e endividamento”, a distribuição dos golpes é uniforme em todas as regiões do país, quando consideradas as margens de erro. Os menores índices ocorrem nos estados do Ceará (17%) e do Piauí (18%).</p>
                <br />
                <p>Segundo a pesquisa, não há um perfil claro para as vítimas desse tipo de crime. O DataSenado investigou variáveis como tamanho do município, situação de domicílio (se urbano ou rural), religião, situação no mercado de trabalho, renda, escolaridade, faixa etária, sexo, cor e raça. “As pessoas que relatam ter perdido dinheiro com esse tipo de crime nos últimos 12 meses estão distribuídas em proporção semelhante às características socioeconômicas da população brasileira”, conclui o documento. </p>
                <br />
                
                <h2>---- continue depois da publicidade ----</h2>
                <Link to = {"/curso6"}>
                <img src="/src/assets/images/curso6.png" alt="" />
                 <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                </Link>
                
               

                <h2>Endividamento</h2>
                <br />
                <p>O “Panorama Político” também investigou o tema do endividamento. De acordo com a publicação, 32% dos brasileiros têm dívidas em atraso há mais de 90 dias.</p>
                <br />
                <p>Nesse caso, foi possível delinear um perfil mais claro das vítimas: as mulheres representam a maioria dos endividados (54%). A incidência também é maior entre pessoas com renda familiar até dois salários-mínimos e que moram com cinco ou mais familiares na mesma casa.</p>
                <br />
                <p>Segundo a pesquisa, há uma distribuição uniforme entre as unidades da Federação. As exceções são Santa Catarina, que registra patamar inferior ao nacional (22%), e Amazonas, que registra índice superior (42%).</p>
                <br />
                <p>De acordo com o DataSenado, as pessoas que pagam sozinhas as contas da casa estão mais endividadas do que aquelas que compartilham essa responsabilidade com alguém. “Entre as pessoas que são as únicas responsáveis pelo domicílio, 38% estão endividadas, enquanto 62% não possuem dívidas. No grupo que compartilha a responsabilidade pelo lar, esses percentuais são de 33% e 67%, respectivamente”, destaca o documento.</p>
                <br />
                <p>Entre as pessoas endividadas há mais de 90 dias, 69% têm renda familiar de até dois salários-mínimos. Na faixa entre dois e seis mínimos, a taxa é de 25%. Entre aqueles que ganham mais de seis salários, o endividamento fica em 6%.</p>

                <p>Para José Henrique Varanda, analista do DataSenado e coordenador da pesquisa, os dados mostram que o fenômeno do endividamento tem muita associação com a renda disponível das pessoas e famílias.</p>
                <p>— Famílias de menor renda e mais numerosas têm proporcionalmente mais dívidas. Como a pesquisa foi feita com pessoas, não com domicílios e famílias, é natural esperar que aquelas que sejam as responsáveis, seja com responsabilidade única ou compartilhada, concentrem mais dívidas. No grupo de menor renda, há uma proporção maior de mulheres que são responsáveis pelas famílias, o que contribui para o seu maior endividamento neste grupo — explica.</p>
                <p>O DataSenado também apurou o percentual de brasileiros que usam aplicativos de apostas esportivas no país. De acordo com a pesquisa, 13% da população com 16 anos ou mais — o equivalente a 22,13 milhões de pessoas — declararam ter apostado em “bets” nos últimos 30 dias.</p>
                <p>A pesquisa foi realizada entre os dias 5 e 28 de junho. Por telefone, foram entrevistadas 21.808 pessoas com 16 anos ou mais. O “Panorama Político” é aplicado desde 2008. A pesquisa avalia a opinião dos brasileiros para indicar prioridades para a atuação parlamentar e quantificar percepções em relação à democracia e aos principais temas em debate no país.</p>
                <p className='aspas'>"Agência Senado (Reprodução autorizada mediante citação da Agência Senado)</p>
            </div>
        </div>
    );
}