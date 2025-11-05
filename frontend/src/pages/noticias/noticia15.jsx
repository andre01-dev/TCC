import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho/cabecalho";
import CabecalhoLogado from "../../components/cabecalhoLogado/cabecalho";
import './noticia.scss'
import {Link} from 'react-router'
import Rodape from '../../components/rodape/rodape';

export default function Noticia15() {

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
                <Link to={"/tdsntc"} onClick={() => window.scrollTo(0, 0)}>
                    <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                    <p>
                        voltar para as notícias
                    </p>
                </Link>
            </div> 

            <div className='titulo-noticia'>
                <h1>Idoso é alvo fácil de invasores na internet</h1>
            </div>

            <h3 className='subtitulo'>Comportamento despreocupado de internautas de mais de 60 anos com segurança digital atrai fraudadores</h3>

            <p className="aspas">Número de golpes contra pessoas idosas cresce mais de 70% em 2023

            </p>
            <div className='corpo-noticia'>
                
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia6.png" alt="" />
                </div>
                
                <p>Estar na terceira idade não é um impeditivo para a acessar a internet. Há dez anos, 4% dos idosos no País acessavam a rede, número que cresceu para 20% no último levantamento do Comitê Gestor da Internet (CGI). Em redes sociais como o Facebook, perfis de brasileiros acima dos 60 anos que acessam a plataforma passam dos 4 milhões em um universo de 117 milhões de usuários no País. Cada vez mais conectada, essa faixa etária também está exposta aos riscos do ambiente virtual.</p>
                <br />
                <p>Idosos são considerados alvos fáceis de crimes cibernéticos, mostra um levantamento global da fabricante de softwares de segurança Kaspersky. ”O fraudador, quando vai fazer o ataque, mira a todos, mas quando vê que a pessoa já tem alguma idade, costuma aperfeiçoar golpes", afirma o pesquisador sênior de Segurança Digital da Kaspersky, Fábio Assolini. Por não ter muito conhecimento de segurança ou fraudes na web, esse internauta não sabe distinguir a fraude de algo legítimo, explica.</p>
                <br />
                <p>A pesquisa, realizada com 12 mil usuários em 21 países, incluindo o Brasil, revelou que apenas 33% dos internautas acima dos 55 anos têm ciência de que pode estar sendo espionado pela webcam sem consentir. Além disso, apenas 25% dos usuários mais velhos desconfiam em compartilhar sua localização, comparado com 39% na média de todas as faixas de idade.</p>
                <br />
                <p>O passatempo predileto dos idosos na internet é o relacionamento com familiares (62,9%) e amigos (59,8%), conforme pesquisa realizada pelo Serviço de Proteção ao Crédito (SPC Brasil) e pela Confederação Nacional de Dirigentes Lojistas (CNDL), em outubro de 2016. Outra motivação para o uso da internet por pessoas acima de 60 anos é a busca por notícias sobre economia, política, esportes e moda (47,8%) e informações sobre produtos e serviços (43,0%). Ainda de acordo com o levantamento, dois em cada dez idosos (19,1%) fazem compras online. Eletroeletrônicos, eletrodomésticos e viagens são os itens mais adquiridos.</p>
                <br />
                <p>Novas soluções de segurança, como a autenticação em duas etapas - quando um código é enviado para o celular do usuário - devem ser adotadas. Entretanto, é preciso se informar bem sobre elas. Aí, entra a ajuda dos parentes ou um trabalho de educação feito por pessoas próximas, para que esse idoso não seja vítima de fraude.</p>
                <br />
                <p>Programas de proteção, como antivírus, são fundamentais. O software ideal vai depender da familiaridade que o usuário tem com a internet. Pessoas mais experientes com a rede, que sabem reconhecer uma fraude, podem optar por programas mais simples e menos intrusivos. Para quem tem pouca familiaridade, o ideal é ter a melhor solução de segurança possível, com todos os recursos ativados.</p>


                <h2>---- continue depois da publicidade ----</h2>
                <Link to={"/curso7"} onClick={() => window.scrollTo(0, 0)}>
                <img src="/src/assets/images/curso7.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                </Link>
                <h2>Manual básico de proteção online para o idoso</h2>
                <ol>
                    <li> Peça ajuda aos seus parentes e escolha empresas de confiança</li>
                    <p>Sempre há aquele parente que tem mais desenvoltura com a internet. Entre em contato com ele quando tiver dúvidas sobre como proceder. Caso isso não seja possível, acesse os canais oficiais de suporte do site acessado, mas tenha cuidado ao revelar dados pessoais, como nome, números de telefone, informações de contas bancárias e senhas de e-mail aos atendentes.</p>

                    <li> Conheça bem os controles de privacidad</li>
                    <p>Redes sociais como o Facebook têm diversos controle de privacidade. Leia sobre o assunto nos termos de uso e também peça ajuda a alguém da família para entender como isso funciona. Por desconhecimento, muitos idosos compartilham publicamente informações pessoais, sem se dar conta. Tenha em mente que pode ser muito difícil deletar uma foto ou informação da rede depois que ela cair em domínio público.</p>

                    <li>Não descuide do celular</li>
                    <p>Atualmente os smartphones reúnem grande quantidade de informações pessoais, incluindo números de cartão de crédito associados a lojas de aplicativos, como a Play Store, no caso dos celulares com sistema operacional Android, ou Apple Store, para quem tem iPhone. É importante ter senhas de travamento da tela e tomar cuidado para não deixar o aparelho solto por aí. As pessoas, às vezes, se esquecem que nele estão contidos mais do que emails e contatos.</p>

                    <li>Desconfie de mensagens e promoções</li>
                    <p>Alguns idosos tendem a confiar excessivamente em pessoas ou não identificam mensagens estranhas. Seja cuidadoso ao clicar em links e veja quem os enviou. Na dúvida, o melhor é segurar a curiosidade e não clicar. Tenha um pé atrás com preços muito baixos e promoções que pareçam boas demais para ser verdade. Podem ser conteúdos maliciosos, que disparem vírus.</p>

                    <li>Proteja-se contra vírus</li>
                    <p>Vírus podem infectar seu dispositivo sem aviso. Alguns vão registrando todas as teclas que você digita em busca de senhas. Outros podem executar tarefas em segundo plano, transformando seu computador em um zumbi. Pesquise sobre programas que podem ser usados para proteger seus arquivos.</p>

                    <li> Saiba quem está vendend</li>
                    <p>As lojas online mais seguras costumam apresentar um selo de confiabilidade no final do site, emitido por rankings de compras online, como o Ebit, que avalia 22 mil lojas no Brasil. Já nos sites onde os vendedores são pessoas físicas é possível ver o que os compradores comentaram, o que cria um ranking de reputação. Alguns deles também oferecem um seguro, por um valor extra, que pode ser acionado se o produto não for entregue. No caso de empresas desconhecidas, é possível pesquisar em fóruns de reclamações de consumidores, como o Reclame Aqui. Caso precise de ajuda especializada, entre em contato com o Procon da sua região.</p>

                    <li> Fique atento ao cartão de crédito</li>
                    <p>Cartões de crédito são o principal meio de pagamento online. As instituições bancárias oferecem serviços como o monitoramento de todas as movimentações por meio do celular. Há também a opção de usar um cartão-espelho, com numeração diferente, a apenas para transações online. A vantagem é que, em caso de fraude, não é preciso bloquear o cartão original. Desconfie de lançamentos na fatura de valores que você não reconhece, mesmo que pequenos, e logo ligue para a central de atendimento do cartão avisando.</p>
                </ol>

            </div>
            <Rodape/>
        </div>
    )
}