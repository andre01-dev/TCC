import Cabecalho from '../../components/cabecalho/cabecalho';
import './noticia.scss'

export default function Noticia2() {
    return (
        <div className='noticia'>
            <Cabecalho />
            <div className='voltar-noticia'>
                <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                <p>
                    voltar para as notícias
                </p>
            </div>

            <div className='titulo-noticia'>
                <h1>'Haverá sinais': estes são os indícios de que você está caindo em um golpe… </h1>
            </div>

            <h3 className='subtitulo'>De Tilt
                01/05/2025 05h30
                Atualizada em
                01/05/2025 05h30… h</h3>

            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia2.png" alt="" />
                </div>

                <p>Os golpes virtuais se tornaram uma febre perigosa em nosso país. Pelo menos 71% dos brasileiros já sofreram alguma tentativa de fraude eletrônica, mostra pesquisa publicada em junho de 2023 pela Nord Security, empresa de segurança digital.

                    A incidência é reforçada por outro estudo, da AllowMe — especialista em cibersegurança —, que aponta que pelo menos 51% dos brasileiros sofreram tentativas de golpes entre janeiro e setembro de 2023.

                    Especialistas em cibersegurança ouvidos por Tilt afirmam que, embora os golpistas se aperfeiçoem, padrões podem ser identificados entre as fraudes, o que torna menos difícil para a vítima saber se está sendo alvo de um golpe em curso… </p>

                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso2.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                <p>Quais os sinais de alerta para desconfiar de um golpe</p>
                <ol>
                    <li>PEDIDOS DE SENHAS</li>
                    <p>Alguém liga ou entra em contato via mensagem e pede para confirmar senha do banco ou de qualquer outra conta (rede social, aplicativos etc.) É cilada. As abordagens nesse tipo de golpe são as mais variadas, vão desde falso atendente de banco a funcionário de instituições financeiras de crédito.
                    </p>

                    <li>URGÊNCIA EM PEDIDOS</li>
                    <p>O tempo é crucial para alguns golpistas. Devido a isso, eles entram em contato para confirmar dados pessoais sensíveis das vítimas utilizando da estratégia de urgência, para dar a sensação de pressa à vítima e forçá-la a fornecer os dados sem pensar nas consequências.
                    </p>

                    <li>PREÇO BAIXO</li>
                    <p>Quem não gosta de comprar um produto dos sonhos com aquele descontinho, não é? À primeira vista, a ideia pode até parecer boa. O problema é que por trás pode ser um golpe, alerta a Silverguard.

                        Pesquise a reputação da empresa e/ou do site que oferta o produto e verifique a URL (campo no navegador que contém o endereço da página) para saber se, de fato, condiz com a da loja virtual de verdade.

                        Se a oferta do produto ou serviço está muito abaixo do preço ou boa demais pra ser verdade, geralmente é golpe.
                    </p>

                    <li>ERROS DE PORTUGUÊS</li>
                    <p>
                        Apesar de a inteligência artificial (IA) já ser uma ferramenta para os emails dos golpistas terem menos uma "cara de fraude", ainda há escorregões na escrita e até mesmo na fala —caso a tentativa de golpe seja por ligação.

                        Funcionários de bancos ou de grandes empresas financeiras recebem treinamentos para evitar esse tipo de falha no português.

                        Preste muita atenção em detalhes como erros ortográficos e pronúncias informais em ligações.
                    </p>

                    <li>PAGAMENTOS ANTECIPADOS</li>
                    <p>Fique em alerta caso você receba algum pedido de pagamento antecipado para liberação de produtos ou serviços que não dependem do dinheiro para serem liberados. É o caso de ofertas de empregos ou de descontos em compras, por exemplo. Para ambos, é incomum a exigência de algum valor para acessá-los.</p>

                    <li>PAGAMENTOS A TERCEIROS</li>
                    <p>Se você decidiu pagar por algo na internet, preste bastante atenção na destinação do dinheiro. Verifique se o nome que consta no boleto ou na conta do Pix está de acordo com o nome da loja virtual. Em geral, golpistas utilizam contas bancárias de terceiros para receber o valor das fraudes.</p>
                </ol>
                <h2>O que fazer ao perceber a tentativa de um golpe</h2>

                <p>Especialistas em cibersegurança dão orientações sobre as medidas que precisam ser tomadas caso a pessoa perceba que esteja sendo vítima de um golpe em curso</p>

                <ul>
                    <li>Interrompa o contato imediatamente</li>
                    <li>Registre um boletim de ocorrências</li>
                    <li>Mude senhas pessoais de bancos ou de redes sociais e emails</li>
                    <li>Registre tudo, se possível, como número que entrou em contato, horário da ligação ou prints -- se for o caso</li>
                </ul>


                <h2>Qual o perfil dos golpistas</h2>

                <p>De acordo com a AllowMe, há quatro perfis de golpistas online. Eles costumam se comunicar entre si em canais e fóruns da Deep web, além de usarem, mesmo que raramente, o Telegram, Facebook, WhasApp e comunidades fechadas no Discord</p>

                <h2>Fraudador de processos</h2>
                <p>Não é considerado tão técnico, pois repete o que aprende em sites, além de não possuir base de dados em grande escala e tende a reproduzir dados cadastrais em fraudes. O perfil ainda é caracterizado por se especializar em apenas um tipo de golpe.</p>

                <h2>Fraudador hacker</h2>
                <p> Possui experiência e conhecimento para desenvolver por conta própria ferramentas de ataques, realizando o máximo de levantamento possível da potencial vítima.</p>

                <h2>Fraudador lotter</h2>
                <p> Tem um perfil diferente dos demais, pois o seus alvos são outros fraudadores, mirando em golpistas amadores que não possuem informações técnicas tão aprofundadas.</p>

                <p className='finish'>Fontes: Diego Marcos Moreira, diretor de segurança da informação; Márcia Netto, especialista em cibersegurança; Longinus Timochenco, especialista em cibersegurança; Júlio Concílio, especialista em segurança da informação do Ibsec (Instituto Brasileiro de Segurança Cibernética).

                    *Com reportagem de janeiro de 2024</p>
            </div>
        </div>
    );
}