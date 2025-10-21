import Cabecalho from "../../components/cabecalho/cabecalho";
import './noticia.scss'
import {Link} from 'react-router'

export default function Noticia12() {
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
                <h1>Golpes virtuais: por que o Brasil virou terreno fértil para criminosos digitais</h1>
            </div>

            <h3 className='subtitulo'>Com milhões de brasileiros conectados e pouca educação digital, cresce o número de vítimas de fraudes online, em especial entre idosos e usuários inexperientes
                TOPO
                Por Saneago – Saneamento de Goiás

                28/05/2025 09h13  Atualizado há 4 meses</h3>
            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia12.png" alt="" />
                </div>
                <p>A era digital trouxe inúmeras facilidades para o dia a dia, mas também abriu espaço para uma nova e silenciosa ameaça: os golpes virtuais. Só em 2024, os brasileiros já somam prejuízos de mais de R$ 2,3 trilhões em decorrência de crimes cibernéticos, segundo estimativas do setor.</p>
                <br />
                <p>O cenário é preocupante, e o Brasil ocupa hoje a segunda posição no ranking mundial de ataques digitais, com mais de 700 milhões de tentativas registradas em apenas um ano.</p>
                <br />
                <p>Apesar de parecer um problema distante, os números mostram que a ameaça é real, e bastante democrática. Um levantamento do Instituto DataSenado revelou que 24% dos brasileiros com mais de 16 anos já foram vítimas de algum tipo de golpe online: isso equivale a mais de 40 milhões de pessoas.</p>
                <h2>Jovens lideram estatísticas de vítimas</h2>
                <p>Ao contrário do senso comum, que tende a associar os crimes virtuais aos idosos, de acordo com o Instituto de Pesquisa DataSenado, os mais afetados estão entre 16 e 29 anos, faixa que concentra 27% das vítimas de fraudes digitais. Essa geração, embora mais conectada, nem sempre está atenta aos riscos, e muitas vezes se torna alvo fácil em aplicativos de mensagem, redes sociais e compras online.</p>
                <br />
                <p className="aspas">A falta de conhecimento a respeito dos golpes virtuais gera insegurança e é um terreno fértil para golpistas.</p>
                <p>Já os idosos representam 16% das vítimas, mas com uma diferença importante: a natureza do golpe. Enquanto os jovens caem, em grande parte, em armadilhas digitais rápidas, os mais velhos são vítimas de estelionato clássico, em que os criminosos usam da persuasão, de falsas identidades e da simulação de atendimentos para enganar suas vítimas e acessar seus dados.</p>
                <br />
                <p>O Anuário Brasileiro de Segurança Pública de 2024 também confirmou uma mudança no perfil da criminalidade. Enquanto os roubos físicos a bancos caíram quase 30%, os estelionatos digitais subiram 13,6% no último ano. A tendência dita que o crime migrou para o ambiente virtual, onde é mais difícil ser rastreado e mais fácil de escalar.</p>
                <br />
                <p>As técnicas usadas, por sua vez, são cada vez mais sofisticadas. Os criminosos combinam a engenharia social com dados vazados, construindo narrativas convincentes. Eles clonam cartões, criam centrais falsas de banco, aplicam o “golpe do Pix” e se aproveitam de cada detalhe disponível nas redes sociais das vítimas.</p>
                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso12.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>

                <h2>Golpes a cada segundo</h2>
                <p>A dimensão do problema impressiona: segundo o Fórum Brasileiro de Segurança Pública, quase 8 mil brasileiros são vítimas de golpes digitais a cada hora. Isso inclui desde quem paga por um produto e não recebe, até quem tem o celular furtado e as contas invadidas em minutos.</p>
                <br />
                <p>A variedade de fraudes é tão grande quanto a criatividade dos criminosos. Aplicativos de mensagens como WhatsApp e Telegram se tornaram terrenos férteis para falsas cobranças, links maliciosos e tentativas de se passar por amigos, parentes ou empresas conhecidas. Em um só dia, milhares de brasileiros recebe mensagens com boletos falsos, pedidos de transferência por Pix e até comunicações falsas se passando por instituições financeiras.</p>
                <br />
                <p>Dos 8 mil brasileiros vítimas de golpes a cada hora, o Fórum Brasileiro de Segurança Pública ainda informa que:</p>
                <br />

                <ul>
                    <li>4,6 mil pessoas são alvos de tentativas de golpe via mensagens ou ligações;</li>
                    <li>2,5 mil compram pela internet e não recebem o produto;</li>
                    <li>1,6 mil têm o celular roubado ou furtado e, com ele, o acesso a contas bancárias, senhas e documentos pessoais.</li>

                </ul>

                <p>Esse é o retrato de um novo tipo de crime, considerado discreto, silencioso e devastador. Ao contrário de um assalto à mão armada, esses golpes acontecem na tela do celular, no horário de almoço, durante uma conversa com o atendente falso de um banco. E, na maioria das vezes, o prejuízo só é percebido tarde demais.</p>
                <br />
                <p>Tal sofisticação faz com que as vítimas demorem a entender que foram enganadas, o que dá ainda mais tempo para os golpistas agirem. E como muitos desses crimes acontecem por meio de dados vazados ou obtidos em redes sociais, qualquer informação pública pode se transformar em munição nas mãos erradas.</p>
                <h2>O que fazer?</h2>
                <p>Diante desse cenário, a informação é a melhor defesa. Estar atendo a mensagens suspeitas, evitar clicar em links desconhecidos e desconfiar de cobranças inesperadas são atitudes simples que podem evitar grandes prejuízos. Também é essencial verificar a autenticidade de sites, aplicativos e números de telefone.</p>
                <br />
                <p>A transformação digital pode até mesmo ser irreversível, mas a segurança precisa caminhar junto. Ficar de olho nos golpes é mais do que uma simples precaução: é uma necessidade.</p>
            </div>
        </div>
    )
}