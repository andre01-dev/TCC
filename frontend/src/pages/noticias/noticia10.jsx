import Cabecalho from "../../components/cabecalho/cabecalho";
import './noticia.scss'

export default function Noticia10() {
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
                <h1>Idosos são as maiores vítimas de golpes financeiros: veja os 18 mais comuns</h1>
            </div>

            <h3 className='subtitulo'>Mariana RodriguesColaboração para o UOL, em São Paulo 16/09/2024 05h30… </h3>
            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia10.png" alt="" />
                </div>
                <p>Os idosos são o maior alvo de violência patrimonial, de acordo o Ministério de Direitos Humanos e Cidadania. Por conta do grande número de golpes contra idosos, a Secretaria Nacional dos Direitos da Pessoa Idosa desenvolveu a Cartilha de Apoio à Pessoa Idosa: enfrentamento à violência patrimonial e financeira, com os 15 principais golpes que têm como principal vítima a população idosa. Além disso, a Febraban (Federação Brasileira de Bancos) divulgou uma lista com dez golpes comuns aos idosos. Veja abaixo o compilado dos tipos de fraude e como evitar.</p>
                <br />
                <p>Este ano, até setembro, o Ministério registrou 74,2 mil casos de violência patrimonial, sendo 35,5 mil contra idosos. Ao todo, em 2023, foram 93 mil violações, 45 mil contra idosos. As mulheres foram o segundo grupo com mais vítimas, seguido por pessoas com deficiência. Os dados são referentes às denúncias recebidas via Disque 100 - Ouvidoria Nacional de Diretos Humanos. A violência patrimonial inclui golpes virtuais e presenciais.</p>
                <br />
                <p>Veja quais são os principais golpes e como se precaver e reduzir as chances de se tornar vítima.</p>
                <br />
                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso10.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                <h2>O que aconteceu</h2>
                <ol>
                    <li>Oferta de empréstimo consignado e cartão de crédito</li>
                    <p>A oferta insistente de empréstimo ou cartão de crédito para pessoas idosas, normalmente por telefone, pode configurar uma violência patrimonial. A vítima pode receber o crédito em sua conta mesmo tendo recusado a oferta, ou pode aceitar uma oferta sem compreender as regras, sendo induzida ao erro.</p>
                    <br />
                    <p>Como evitar: Preste atenção às movimentações bancárias e não aceite ofertas de crédito por telefone sem entender todas as regras. Saiba seus direitos: quando a contratação é realizada por meio de ligação telefônica, há garantia de poder desistir do negócio em um prazo de sete dias.</p>

                    <li>Golpe do Bilhete premiado</li>
                    <p>Um golpista diz que ganhou na loteria, como uma Mega Sena ou uma Tele Sena, mas não poderá receber o prêmio no banco. Em seguida, ele oferece o direito ao resgate, desde que a vítima pague um valor menor pelo bilhete premiado.</p>
                    <br />
                    <p>Como evitar: Não aceite adquirir um bilhete premiado. Os prêmios da loteria são concedidos diretamente aos portadores dos bilhetes premiados, não há intermediários envolvidos.</p>

                    <li>Golpe do boleto falso</li>
                    <p>O fraudador emite um boleto falso e envia para o email da vítima. A vítima não percebe se tratar de um golpe e acaba pagando o valor. Os boletos podem ser de viagens, consórcios, operadoras de telefonia, multas ou até mesmo boletos de igrejas.</p>
                    <br />
                    <p>Como evitar: Antes de fazer qualquer pagamento, confira o valor, a data de vencimento e quem será beneficiado. Na dúvida, procure o seu banco.</p>

                    <li>Cartão retido no caixa eletrônico</li>
                    <p>O golpe acontece quando é instalada uma armadilha nos caixas eletrônicos com o objetivo de prender o cartão magnético.</p>
                    <br />
                    <p>Como evitar: Antes de inserir o seu cartão na máquina, verifique se o caixa eletrônico está violado ou se o local de inserir o cartão está com aspecto diferente do normal.</p>

                    <li>Falso namoro virtual</li>
                    <p>O golpista usa sites de namoro para procurar suas vítimas, geralmente pessoas idosas ou que moram sozinhas. Depois, por aplicativos de conversa como o WhatsApp, envolve a vítima e pede um empréstimo que nunca será pago. Em uma variação desse golpe, o suposto namorado diz que está enviando presentes do exterior, e um comparsa entra em contato com a vítima se passando pela alfândega e pede dinheiro para liberar o produto, que não existe.</p>
                    <br />
                    <p>Como evitar: Ao desconfiar de que pode ser vítima desse tipo de golpe, procure uma delegacia.</p>

                    <li>Falso sequestro</li>
                    <p>Fraudadores telefonam se passando por um familiar que teria sido sequestrado. E pedem uma transferência de dinheiro como resgate.</p>
                    <br />
                    <p>Como evitar: A orientação é não se apavorar, não pronunciar o nome de ninguém conhecido, desligar o telefone e ligar imediatamente para a pessoa que foi supostamente sequestrada ou para pessoas próximas a ela e certificar-se que está tudo bem.</p>

                    <li>Falsa central de atendimento</li>
                    <p>Por ligação telefônica ou mensagens de WhatsApp, os golpistas se passam por funcionário da central de atendimento telefônico (CAT) de alguma instituição financeira. Comunicam à vítima que uma compra foi realizada em seu cartão de crédito, geralmente com valor alto. Durante a conversa, podem ser informados dados reais da vítima, que são encontrados na internet.</p>
                    <br />
                    <p>Como evitar: Ao receber comunicação suspeita, desligue e entre em contato diretamente com o banco ou instituição financeira através dos números oficiais. De acordo com a Febraban, os bancos podem entrar em contato com os clientes para confirmar transações suspeitas, mas nunca solicitam dados pessoais, senhas, atualizações de sistemas, chaves de segurança. Também não solicita que o cliente realize transferências ou pagamentos alegando estornos de transações.</p>

                    <li>Golpe da maquininha</li>
                    <p>Há algumas variações do golpe, como uma maquininha com visor adulterado ou quebrado, e é cobrado um valor maior do que o informado. Em outra variação, depois que a vítima insere a senha, o golpista diz que a compra não foi efetuada e passa em outra maquininha, cobrando duas vezes.</p>
                    <br />
                    <p>Como evitar: Nunca entregue o seu cartão na mão da pessoa que vai fazer a cobrança e sempre peça o comprovante de pagamento. Vale também acionar os avisos de cobrança feitos pela sua instituição financeira, para acompanhar a movimentação bancária.</p>

                    <li>Cartão "clonado" entregue ao motoboy</li>
                    <p>O golpista liga para a vítima e alega que seu cartão foi clonado e precisa ser cancelado com urgência e confirma os dados pessoais da vítima. Por fim, solicita que a vítima faça uma ligação para o número que está no verso do cartão. Por meio de escutas telefônicas, eles conseguem interceptar a ligação com o banco e informam que vão enviar um motoboy, suposto funcionário do banco, ou até mesmo um policial, e que seu cartão deverá ser entregue a ele. Com os dados da vítima e o cartão, os golpistas realizam saques bancários, fazem compras online ou em lojas físicas.</p>
                    <br />
                    <p>Como evitar: O banco não irá realizar a retirada do seu cartão físico pessoalmente, se isso for oferecido, é golpe. Não informe seus dados como senha e código de segurança por telefone.</p>

                    <li>Parente com o carro quebrado</li>
                    <p>Nesse caso, uma pessoa liga, de um número desconhecido, e se passa por um parente como um sobrinho/a. Ainda pergunta se a vítima se esqueceu dele, constrangendo-a a falar o nome de um parente. Depois, diz que está com o carro quebrado e precisa de dinheiro.</p>
                    <br />
                    <p>Como evitar: Desligue o telefone e ligue para seu parente para verificar se ele realmente precisa de ajuda.</p>

                    <li>Falso processo judicial</li>
                    <p>Golpistas informam que a pessoa idosa tem direito a receber uma quantia em dinheiro com uma causa ganha na Justiça. Para isso, cobram o pagamento dos honorários e outras taxas.</p>
                    <br />
                    <p>Como evitar: Antes de tomar qualquer medida, verifique a veracidade da informação. Se possível, entre em contato com um advogado de sua confiança para obter orientação.</p>

                    <li>Saidinha de banco</li>
                    <p>As pessoas idosas podem ter dificuldade de utilizar os caixas eletrônicos e, por isso, solicitam ou aceitam ajuda de pessoas desconhecidas. Nesse momento, os golpistas coletam os dados pessoais, bem como número, senha e código de segurança do cartão.</p>
                    <br />
                    <p>Como evitar: Procure sempre por um funcionário do banco uniformizado e identificado ou prefira realizar a transação dentro da agência bancária, no caixa de atendimento.</p>

                    <li>Compra em site falso</li>
                    <p>São utilizados sites falsos para venda de diversos produtos. Geralmente, usam o nome de grandes redes de varejo e alteram apenas o endereço eletrônico, que fica parecido com o real. Para atrair as vítimas, criam diversos anúncios chamativos, com descontos muito altos.</p>
                    <br />
                    <p>Como evitar: Desconfie de preços muito baixos e sempre confira o endereço eletrônico do site. Da dúvida, procure pela loja no Google e confira se o endereço eletrônico é o mesmo do site anunciando a oferta. Se não conhece a loja, procure pelo nome em sites como o Reclame Aqui e Procon.</p>

                    <li>Troca de cartão</li>
                    <p>Mais uma vez, o golpista se passa por um funcionário de banco. O golpista aguarda próximo às agências bancárias e, assim que a vítima sai de lá, ele a aborda como se fosse funcionário e diz que seu cartão apresentou um erro ou que a transação financeira não pode ser realizada. Em seguida, solicita que a vítima entregue o cartão para que ele possa examinar. Nesse momento, o golpista faz a troca do cartão.</p>
                    <br />
                    <p>Como evitar: Se alguém pedir para examinar seu cartão por qualquer motivo, recuse.</p>

                    <li>Golpe do WhatsApp clonado</li>
                    <p>O golpista finge ser funcionário de uma empresa com a qual a vítima contratou algum serviço. Ele pede que confirme seus dados pessoais para atualizar o cadastro ou ganhar descontos na prestação dos serviços, e solicitam o código de segurança. Dessa forma, ele consegue ter acesso a aplicativos de conversa, como o WhatsApp da vítima. Então, passa-se por ela para enviar mensagens pedindo dinheiro aos familiares e amigos.</p>
                    <br />
                    <p>Como evitar: Não envie seus dados pessoais ou informe senhas solicitadas por mensagem. Caso receba uma mensagem supostamente de um número novo de um contato, tente utilizar o antigo para confirmar se é realmente da pessoa, ou contate amigos ou parentes em comum para confirmar.</p>

                    <li>Golpe do falso empréstimo consignado</li>
                    <p>O fraudador liga para a vítima e oferece empréstimos com condições vantajosas. Para que garanta a oferta, pede ao consumidor que faça um depósito bancário referente a taxas de cadastro ou pede antecipação de alguma parcela. Também solicita dados pessoais e financeiros do cliente.</p>
                    <br />
                    <p>Como evitar: A Febraban alerta que não existe nenhum empréstimo em que a pessoa precise fazer qualquer tipo de pagamento antecipado, seja de IOF, taxas falsas de cadastros ou antecipação de parcela.</p>

                    <li>Golpe do falso presente de aniversário/falso brinde</li>
                    <p>Com dados pessoais e datas de aniversários, criminosos entram em contato com a vítima e dizem que têm um brinde ou um presente de aniversário para entregar. Os criminosos entregam algo para a vítima, geralmente flores, cosméticos ou chocolate, e nesse momento, pedem o pagamento de taxa de entrega, que só pode ser paga com cartão. O entregador/golpista geralmente usa uma maquininha com o visor danificado, que impossibilita a visualização do valor digitado na tela. Outra forma é o criminoso usar algum artifício para desviar a atenção da vítima, para que ela digite a senha no campo destinado ao valor da compra, possibilitando a visualização e uso. Em outra variação, o criminoso pede uma foto da vítima</p>
                    <br />
                    <p>Como evitar: Nunca aceite presentes e brindes inesperados, sem saber quem realmente mandou. Não aceite realizar pagamentos se o visor da maquininha estiver danificado, impedindo que você veja o valor real que está pagando. Jamais aceite tirar fotos do seu rosto ou selfies para receber entregas.</p>

                    <li>Phishing (pescaria digital)</li>
                    <p>O phishing, ou pescaria digital, é uma fraude eletrônica que visa obter dados pessoais do usuário. A forma mais comum de um ataque de phishing é por mensagens e emails falsos que induzem o usuário a clicar em links suspeitos. Também existem páginas falsas na internet que induzem a pessoa a revelar dados pessoais.</p>
                    <br />
                    <p>Como evitar: Nunca clique em links recebidos por mensagens. Mantenha seu sistema operacional e antivírus sempre atualizados. Na dúvida, fale com seu banco.</p>
                </ol>

                <h2>Outras orientações para se manter seguro contra golpes virtuais</h2>
                <p>Desde 2020, ocorrências de estelionato contra idosos pode, ser registradas pela Delegacia Eletrônica. Isso auxiliou na diminuição da subnotificação dos casos e, consequentemente, no aumento dos registros, diz a secretaria de Segurança Pública do Estado de São Paulo. Abaixo estão as dicas do órgão para evitar golpes virtuais:</p>

                <ul>
                    <li>Mantenha-se informado:</li>
                    <p>Esteja ciente dos tipos de golpes mais comuns que ocorrem no ambiente virtual, como phishing, fraude em compras online, golpes de romance/namoro, entre outros</p>

                    <li>Desconfie de solicitações de informações pessoais:</li>
                    <p>Nunca compartilhe informações pessoais, como senhas, números de cartão de crédito, CPF, etc., através de emails, mensagens de texto ou telefonemas não solicitados.</p>

                    <li>Verifique a autenticidade dos sites:</li>
                    <p>Ao fazer compras online, verifique se o site é seguro e autêntico. Pesquise opiniões e avaliações sobre a loja virtual</p>

                    <li>Cuidado emails e links suspeitos:</li>
                    <p>Evite clicar em links enviados por emails desconhecidos ou suspeitos. Esses links podem redirecionar para sites projetados para roubar informações</p>

                    <li>Fortaleça suas senhas:</li>
                    <p>Utilize senhas fortes, com uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais.</p>

                    <li>Ative a autenticação de dois fatores:</li>
                    <p>Sempre que possível, habilite a autenticação de dois fatores nas suas contas. Isso adiciona uma camada extra de segurança</p>

                    <li>Tenha cuidado ao compartilhar informações pessoais nas redes sociais:</li>
                    <p>Evite fornecer informações pessoais sensíveis nas redes sociais, como data de nascimento completa, endereço residencial e número de telefone.</p>

                    <li>Desconffie de ofertas muito boas para ser verdade:</li>
                    <p>Se uma oferta parecer boa demais, desconfie. Golpistas frequentemente usam ofertas tentadoras para atrair vítimas. Seja cauteloso e pesquise sobre a empresa ou vendedor antes de realizar qualquer transação.</p>

                    <li>Mantenha seu software atualizado:</li>
                    <p>Mantenha seu sistema operacional, navegador e programas antivírus atualizados. As atualizações ajudam a corrigir falhas de segurança e proteger seu dispositivo</p>
                </ul>
            </div>
        </div>
    )
}