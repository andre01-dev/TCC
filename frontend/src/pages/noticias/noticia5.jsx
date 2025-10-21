import Cabecalho from '../../components/cabecalho/cabecalho';
import './noticia.scss'
import {Link} from 'react-router'

export default function Noticia5() {
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
                <h1>'Eram meu rosto e minha voz, mas era golpe': como criminosos 'clonam pessoas' com inteligência artificial</h1>
            </div>

            <h3 className='subtitulo'>Simone Machado
                Role,De São José do Rio Preto (SP) para a BBC News Brasil
                28 fevereiro 2024
            </h3>

            <div className='corpo-noticia'>

                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia5.png" alt="" />
                </div>

                <p>Poucas horas depois de ver a filha sair de casa para trabalhar, a advogada aposentada Karla Pinto recebeu uma chamada de vídeo em seu celular.</p>
                <br />
                <p>Do outro lado do vídeo, sua filha, a advogada criminalista Hanna Gomes, pedindo uma transferência via pix de R$ 600.</p>
                <br />
                <p>Três fatores fizeram a aposentada desconfiar da situação: na chamada de vídeo sua filha estava com uma blusa diferente da que havia saído de casa; a conta para a qual o dinheiro deveria ser transferido seria de uma amiga da filha e não a dela própria e, principalmente, a filha não havia chamado a mãe pelo apelido carinhoso que as duas comumente usam entre elas.</p>
                <br />
                <p>Ao notar essas situações desconexas, a aposentada decidiu checar se realmente era Hanna que aparecia no vídeo e perguntou qual era o nome do cachorro da família e do vizinho que mora em frente à casa delas. Depois disso, a chamada foi desligada.</p>

                <p className='aspas'>"Eram o meu rosto, meu cabelo e a minha voz", diz Hanna à BBC News Brasil. "O único detalhe é que a voz estava um pouco em descompasso com o vídeo, mas sabemos que isso pode acontecer devido à conexão com a internet. É assustador ver a evolução desse tipo de golpe."</p>

                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso5.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                <h2>Como funciona</h2>
                <p>A advogada explica acreditar que criminosos tenham usado inteligência artificial (IA) para criar um "clone" dela e tentar aplicar golpes com sua imagem.</p>

                <p>Esses conteúdos são produzidos em softwares que usam IA para recriar a voz de pessoas, trocar o rosto em vídeos e sincronizar movimentos labiais e expressões.</p>

                <p>"Tenho diversos conteúdos de aulas online e vídeos nas redes sociais que facilmente podem ter sido usado pelos criminosos para criar essa deep fake. E mesmo a gente tomando alguns cuidados como salvar os contatos dos familiares pelo nome, e não como pai e mãe, não foram suficientes para driblar a ação de criminosos", conta a advogada.</p>

                <p>A família registrou o caso na Delegacia de Crimes Virtuais da Polícia Civil do Distrito Federal (DF), que investiga o ocorrido. Segundo a Polícia Civil do DF, não há estatísticas fechadas sobre esse tipo de crime usando IA.</p>
                <p className='aspas'>“A gente está vivendo uma nova era, onde a tecnologia está cada vez mais avançada e acessível. Isso traz muitos benefícios, mas também desafios, como o uso indevido dessas ferramentas para fins criminosos”, diz o delegado titular da Delegacia de Repressão aos Crimes Cibernéticos (DRCC) do DF, Leonardo Sampaio.</p>


                <h2>Estelionatos por meio eletrônico cresceram no Brasil</h2>
                <p>Golpes como o que os criminosos tentaram aplicar na mãe de Hanna e que exigem transferências bancárias por aplicativos de celular ou no ambiente virtual entram na categoria do estelionato eletrônico.</p>

                <p>Dados do Anuário Brasileiro de Segurança Pública 2023 mostram que no ano passado foram registrados 200.322 casos de estelionato por meio eletrônico, número 65% maior do que o registrado em 2021, quando esse número foi de 120.470.</p>

                <p>Os Estados com mais casos desse tipo de golpe são Santa Catarina (64.230), Minas Gerais (35.749), Distrito Federal (15.580) e Espirito Santo (15.277).</p>

                <p>Segundo o levantamento, os Estados de Bahia, Ceará, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul e São Paulo não disponibilizaram dados sobre esse tipo de crime até a conclusão da pesquisa.</p>

                <h2>Uso de IA para aplicar golpes</h2>
                <p>Com o avanço da tecnologia e da IA, é cada vez mais comum surgirem softwares que conseguem reproduzir a imagem de uma pessoa com voz dela, criando frases completas e imitando até mesmo os trejeitos de fala e sotaque.</p>

                <p>Para fazer essa criação basta ter acesso a poucos segundos de imagem ou da voz da pessoa — como, por exemplo, um vídeo postado nas redes sociais ou até mesmo um áudio enviado em aplicativos de mensagem.</p>

                <p>"Uma pessoa curiosa, que busca tutoriais sobre essas ferramentas, consegue fazer isso em poucos minutos. Não precisa ser um especialista em tecnologia. Hoje temos filtros que a pessoa consegue falar e a voz dela é alterada em tempo real", explica Arthur Igreja, especialista em Tecnologia e Inovação. Esses são os chamados vídeos deep fake.</p>

                <p>Já no caso das chamadas de vídeo fake, realizadas em tempo real como no caso da Hanna, a criação é um pouco mais complexa. Para isso é necessário um computador um pouco mais potente e programas mais avançados.</p>

                <p>"É como se você pudesse criar um personagem de videogame que pode falar e agir como uma pessoa real, usando a voz e a imagem de alguém. Essa tecnologia pode ser usada para fazer chamadas de vídeo, onde parece que você está conversando com alguém, mas, na verdade, é uma versão criada por IA dessa pessoa. No entanto, isso exige tecnologia mais avançada e pode não estar tão facilmente disponível para todos", explica Rogério Guimarães, diretor-executivo da Covenant Technology.</p>

                <p> Distinguir se um conteúdo é verdadeiro ou criado pela tecnologia é um desafio. Mas segundo os especialistas ouvidos pela BBC News Brasil, algumas características desses vídeos e imagens pode ajudar a verificar se ela é real ou não.</p>

                <p>"A falta de naturalidade na movimentação da pessoa pode levantar suspeitas, assim como a inconsistência da iluminação e a falta de sincronização. É importante, em caso de dúvidas, buscar comprovar a identidade da pessoa. Perguntar coisas que somente esta pessoa seria capaz de responder e até mesmo pedir para filmar algo da casa", ensina Rafael Sampaio, gerente nacional da NovaRed, conglomerado ibero-americano de cibersegurança.</p>

                <h2>Veja 7 dicas para se proteger de golpes que usam IA</h2>

                <ul>
                    <li>Fique atento</li>
                    <p>Tenha consciência que esse tipo de golpe existe e desconfie de qualquer tipo de conteúdo em vídeo, áudio ou imagem;</p>

                    <li>Use o telefone ou fale pessoalmente</li>
                    <p> Na dúvida se é realmente a pessoa que está interagindo por uma chamada de vídeo ou em um vídeo use o telefone e ligue direto para aquele contato ou tente falar com ele pessoalmente;</p>

                    <li>Atenção aos detalhes</li>
                    <p> Análise detalhes de movimentações dos olhos e da boca, eles podem indicar algumas inconsistências e falta de naturalidade;</p>

                    <li>Qualidade da conexão</li>
                    <p>Se a imagem ou o som parecem perfeitos demais, ou, ao contrário, artificialmente distorcidos, pode ser um sinal;</p>

                    <li>Perguntas específicas</li>
                    <p>Faça perguntas a respeito de situações que só você e a pessoa vivenciaram ou criem uma frase, ou palavra-chave para confirmar a autenticidade de quem está do outro lado da chamada;</p>

                    <li>Mude de assunto</li>
                    <p>Se você suspeitar que algo está errado durante uma ligação ou chamada de vídeo, tente mudar de assunto, perguntando como está no trabalho. Muitos golpistas acabam desligando nessas situações;</p>

                    <li>Atenção redobrada em pedidos de dinheiro</li>
                    <p>⁠Casos que envolvam pedidos de dinheiro, seja por PIX ou outras transferências eletrônicas, redobre a atenção. Nesses casos existe uma chance muito grande de ser um golpe.</p>
                </ul>

            </div>
        </div>
    );
}