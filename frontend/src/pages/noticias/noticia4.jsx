import Cabecalho from '../../components/cabecalho/cabecalho';
import './noticia.scss'

export default function Noticia4 (){
    return (
        <div className='noticia'>
            <Cabecalho/>
            <div className='voltar-noticia'>
                <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                <p>
                    voltar para as notícias
                </p>
            </div>

            <div className='titulo-noticia'>
                <h1>Vítimas de golpes envolvendo pix têm chance de recuperar o dinheiro</h1>
            </div>

            <h3 className='subtitulo'>Mecanismo Especial de Devolução (MED), do Banco Central, pode ajudar no ressarcimento. Procon Assembleia orienta cliente a agir imediatamente.

                09/09/2024 - 14:52
                </h3>

                <div className='corpo-noticia'>
                    <p>Desde que foi lançado, em novembro de 2020, o pix se transformou rapidamente no meio de pagamento mais popular do Brasil. Somente em 2023, foram registradas mais de 42 bilhões de transações via pix, superando todas as demais modalidades somadas (cartão de crédito, de débito, TEC e outras).

                    Infelizmente, golpistas sempre buscam formas de enganar consumidores. No caso do pix, não é diferente. Várias fraudes envolvendo essa ferramenta já foram registradas. Para tentar ajudar os consumidores que caíram em golpes, o Banco Central criou o Mecanismo Especial de Devolução (MED), que facilita o estorno de valores em caso de transações irregulares. Apesar de não garantir o ressarcimento do dinheiro pago, o MED aumenta as chances de a vítima reaver os recursos.

                    O coordenador do Procon da Assembleia Legislativa de Minas Gerais (ALMG) Marcelo Barbosa  explica que o MED não é aplicado nos casos em que o consumidor faz um pix por engano na conta de outra pessoa ou empresa. “Nessa situação deve-se entrar em contato com o recebedor para solicitar a devolução do dinheiro. Caso não o conheça, o consumidor pode pedir ajuda ao seu banco”, afirma. Apesar de não haver norma do Banco Central sobre devoluções em caso de engano ou erro do pagador, esse tipo de situação configura apropriação indébita, conforme descrito no Código Penal.</p>

                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso1.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                <h2>Como funciona</h2>   
                  <p>Para solicitar o MED, o cliente que tiver sido vítima de fraude deve acionar o seu banco em até 80 dias após o envio do pix. Se a instituição julgar que de fato se trata de um golpe, ela vai acionar o banco no qual o dinheiro foi depositado para que a respectiva conta seja bloqueada. O caso passará por uma revisão mais criteriosa e, comprovada a fraude, o consumidor receberá o dinheiro de volta integral ou parcialmente.

                    “A norma que criou o MED prevê que o banco não é obrigado a usar recursos próprios para ressarcir a vítima”, lembra Marcelo Barbosa. Isso significa que, se na conta do golpista não houver saldo suficiente para o estorno integral, o consumidor vai recuperar apenas parte do dinheiro.

                    Por isso, é muito importante que o consumidor formalize o pedido de ressarcimento o mais rápido possível. A conta do golpista será monitorada pelo banco no qual o consumidor tem conta durante 90 dias. Se nesse período entrar mais algum valor, este será redirecionado à vítima até o limite da devolução total.

                    Na maioria das vezes, no entanto, o golpista saca imediatamente o dinheiro e fecha a conta. Nesse caso, o MED não terá utilidade. Por isso, alerta o coordenador do Procon, o consumidor deve ficar sempre muito atento quando for emitir um pix.

                    Entre os cuidados a serem tomados estão verificar o valor a ser pago e também confirmar o recebedor do dinheiro. Por exemplo: se o consumidor compra na loja "A", o pix tem que ter como destinatário a loja "A".

                    Outra forma muito comum de golpe é quando o criminoso se passa por um amigo ou parente da vítima e pede dinheiro, indicando a conta de um desconhecido para que os recursos sejam depositados. Nesse caso, lembra Marcelo Barbosa, vale a pena telefonar diretamente para a pessoa para verificar se, de fato, pediu ajuda financeira.

                    Para outras informações sobre o funcionamento do MED, consulte o site do Banco Central.</p>
                
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia4.png" alt="" />
                </div>

                </div>
        </div>
    );
}