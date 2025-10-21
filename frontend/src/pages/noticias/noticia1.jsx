import Cabecalho from '../../components/cabecalho/cabecalho';
import './noticia.scss'
import {Link} from 'react-router'

export default function Noticia1() {
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
                <h1>Golpes no Instagram: perfis falsos clonam a conta de negócios para sumir com o dinheiro de clientes</h1>
            </div>

            <h3 className='subtitulo'>Vítimas lesadas pelos fraudadores denunciaram as contas falsas, mas foram os negócios reais que acabaram punidos. Em alguns casos, o prejuízo leva à falência.
                Por Fantástico
                08/06/2025 22h10  Atualizado há 4 meses</h3>

            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia1.png" alt="" />
                </div>
                <p>Golpistas têm usado o Instagram para uma nova fraude, que copia os perfis de empresas reais, anuncia promoções falsas e desaparece com o dinheiro de quem compra.

                    Em Florianópolis, o brechó Brechik virou alvo de criminosos. “Eu recebi um print de uma cliente falando que tinha um perfil se passando pela gente, usando o nosso nome, a nossa logo, a nossa mesma descrição e algumas imagens nossas”, conta Carla Machado, gestora do negócio fundado pela avó há mais de 40 anos.

                    O perfil falso passou a anunciar promoções com preços muito abaixo do normal. “Eu já seguia a loja oficial deles. Começou a aparecer muito anúncio, com preços maravilhosos. Acabei caindo no golpe”, relata Jeniffer Santos, uma das vítimas.</p>

                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso1.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                <p>Comprovantes de pagamento indicam que os golpistas podem ter feito mais de 17 mil vendas falsas. As vítimas denunciaram o perfil falso, mas quem acabou banido foi o perfil verdadeiro da loja.</p>
                <p className='aspas'>“A gente chora, a gente fica frustrado. Além de trabalho, é a nossa história familiar também ali”, desabafa Carla.”</p>
                <p>A orientação de especialistas é buscar a Justiça. “Como a plataforma não fornece um prazo de resposta, a saída para uma medida rápida é entrar com pedido judicial”, explica o advogado Luís Restanho.
                    Em alguns casos, o prejuízo é tão grande que leva empresas à falência. Segundo a Fecomércio-SP, 60% das pequenas empresas vítimas de ataques cibernéticos fecham as portas em até seis meses.
                    O setor hoteleiro também é alvo frequente. Em Trancoso, na Bahia, mais da metade dos donos de hotéis já relatou ter sido vítima de fraudes em redes sociais.
                    A empresária Carol Kratz convive com o problema há cinco anos. “Essa semana eu denunciei um perfil novo. Eles falaram que o perfil não era contra as diretrizes, e que o máximo que eu podia fazer era bloquear. Mesmo o meu perfil sendo verificado.”
                    Os golpistas clonam todas as fotos do hotel e anunciam promoções falsas. “Muita gente cai porque se vê vislumbrado com a ideia de ganhar 3, 4, 5 diárias aqui no hotel”, diz Carol.

                    Para alcançar mais vítimas, os criminosos pagam por anúncios nas próprias plataformas.
                    “Essas organizações acabavam gastando uma grande quantia em dinheiro para impulsionar os anúncios. (...) Quando quebramos o sigilo bancário de um dos investigados, encontramos um pagamento de R$ 106 mil para o Facebook”, afirma o delegado Thiago Henrique Moreira.
                    Segundo ele, as investigações esbarram na falta de colaboração das plataformas. “Temos uma investigação há cinco anos parada, aguardando informações básicas sobre faturamento das redes sociais de quanto gastaram com impulsionamento.”
                    A pedido do Fantástico, o NetLab da UFRJ analisou anúncios feitos por contas falsas se passando por grandes marcas de varejo do Brasil. Em apenas quatro dias, foram identificados 277 anúncios fraudulentos, com 72% ativos por dois dias.</p>
                <p className='aspas'>“A plataforma não fez absolutamente nada. São anúncios que devem ser muito efetivos, porque seguem no ar, provavelmente angariando vítimas e os consumidores seguem clicando neles”, afirma Marie Santini, professora e diretora do NetLab.</p>
                <p>O jornal americano “The Wall Street Journal” revelou que a Meta — dona do Instagram, Facebook e WhatsApp — é responsável por quase metade dos golpes identificados por uma plataforma de pagamentos entre 2023 e 2024.
                    Um relatório interno de 2022 da Meta apontou que 70% das novas contas de anunciantes são criadas para promover fraudes ou produtos ilícitos.</p>
                <p className='aspas'>“Hoje nós temos a capacidade computacional para combater isso. Só que a Meta não faz propositalmente, em busca de aumentar sua receita”, afirma David Nemer, professor da Universidade da Virgínia.
                </p>
                <p>Ex-funcionários ouvidos pelo jornal disseram que são necessárias mais de 30 denúncias para derrubar um perfil.
                    Procurada, a Meta afirmou que não permite fraudes em suas plataformas, que aprimora constantemente suas tecnologias contra atividades suspeitas e orienta que irregularidades sejam denunciadas nos próprios aplicativos.
                    Disse ainda que 85% das contas de anúncios banidas nunca gastaram dinheiro na plataforma e que quase 70% são removidas em até uma semana.
                    No Brasil, o Supremo Tribunal Federal retomou o julgamento sobre a validade do artigo 19 do Marco Civil da Internet, que estabelece que plataformas só podem ser responsabilizadas por conteúdos de usuários após decisão judicial. O julgamento deve continuar nesta semana.</p>
                <p className='aspas'>“Essas empresas superpoderosas, em última instância, estão protegendo esses criminosos. Garantem o anonimato deles, não entregam os dados e eles ficam impunes. Elas continuam ganhando dinheiro com os anúncios e eles continuam ganhando dinheiro com os golpes”, afirma Marie Santini.</p>
                <p className='finish'>E questiona: “A gente vai deixar a sociedade continuar sofrendo tudo isso?”</p>
            </div>
        </div>
    );
}