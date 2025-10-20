import Cabecalho from '../../components/cabecalho/cabecalho';
import './noticia.scss'

export default function Noticia3 (){
    return (
        <div className='noticia1'>
            <Cabecalho/>
            <div className='voltar-noticia'>
                <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                <p>
                    voltar para as notícias
                </p>
            </div>

            <div className='titulo-noticia'>
                <h1>A cada 5 minutos, uma pessoa cai em um golpe virtual em MG; saiba como ficar longe desses criminosos </h1>
            </div>

            <h3 className='subtitulo'>Para se ter dimensão do crescimento desse delito, o número de registros em 2018 foi de 28.160 ocorrências; já em 2023, foram 87.172 — um aumento de 210%</h3>

                <div className='corpo-noticia'>
                    <p>A cada cinco minutos, uma pessoa é vítima de algum tipo de golpe realizado pela internet. De janeiro a setembro deste ano, foram 79.869 registros de estelionato virtual — ou 295,8 por dia, 12 por hora. Outras 1.977 pessoas conseguiram escapar do golpe no mesmo período. Nos doze meses do ano passado, o total de casos chegou a 87.172 — além de 3.134 tentativas. Para se ter uma dimensão do crescimento desse tipo de delito em Minas, o número de registros em 2018 foi de 28.160 ocorrências. Já em 2023, foram 87.172 — um aumento de 210%. Em meio a esse cenário, e com a proximidade da chegada das promoções da Black Friday e do Natal, a Polícia Militar de Minas Gerais lançou, nesta quinta-feira (17 de outubro), a campanha “Se deu dúvida, é golpe”. Nas redes sociais, a corporação vai postar vídeos com dicas para livrar a população dos golpes. Os dados foram repassados à reportagem Polícia Civil.</p>

                <h2>---- continue depois da publicidade ----</h2>
                <img src="/src/assets/images/curso1.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                <p>Quais os sinais de alerta para desconfiar de um golpe</p>
                    
                  <p>O especialista em direito digital Alexandre Atheniense informa que, após a pandemia de Covid-19, houve um boom de golpes virtuais. "Tivemos um aumento no uso de plataformas digitais para diversos serviços, e as pessoas passaram a usar o computador no ambiente doméstico, que não tem o mesmo nível de segurança do espaço corporativo. Isso fez com que os hackers passassem a atuar contra o cidadão comum." Atheniense pondera que outro fator que ajuda a explicar o aumento dos delitos é que "o golpista está cada vez mais profissional, muitas vezes ligado a organizações criminosas, enquanto as vítimas, principalmente as de faixa etária mais elevada, acreditam em qualquer tipo de anúncio que encontram", afirma.</p>
                    <h2>Bilhões de vítimas</h2>
                    <p>A previsão é de que, neste ano, haja uma perda financeira no Brasil decorrentes de golpes virtuais de R$ 71 bilhões, conforme alerta o especialista em direito digital. "Existem aproximadamente 4.800 golpes cibernéticos. Uma pesquisa realizada pelo Senado mostrou que um em cada cinco brasileiros já foi vítima de algum golpe digital, ou seja, 25%. A situação é alarmante."
                        A oferta de produtos por um preço abaixo do praticado é a principal isca utilizada pelos estelionatários para atrair o consumidor. "A ganância por valores acessíveis faz com que a pessoa deixe de tomar qualquer tipo de cautela. O consumidor não verifica se o site é confiável, se o link realmente remete à loja verdadeira. Na Black Friday, os preços baixos atraem as pessoas, e o cuidado precisa ser redobrado", sugere o advogado Luiz Felipe Siqueira.</p>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia3.png" alt="" />
                </div>

                <h2>Saiba como se prevenir </h2>

                <p>DSiqueira orienta que, ao utilizar o ambiente virtual, as pessoas sejam "como os mineiros: desconfiadas". "Desconfie de tudo. Se viu um carro que custa R$ 60 mil sendo vendido por R$ 40 mil, já deixe a vontade de lado, porque a chance de dar algo errado é muito grande", complementa.

                Caso a pessoa caia em algum golpe, a recomendação é procurar a polícia para registrar a ocorrência. Outras dicas para evitar a "dor de cabeça" são: não clicar em links desconhecidos, não fornecer informações pessoais e pesquisar a reputação da empresa.</p>
                <p className='finish'>Fontes: Diego Marcos Moreira, diretor de segurança da informação; Márcia Netto, especialista em cibersegurança; Longinus Timochenco, especialista em cibersegurança; Júlio Concílio, especialista em segurança da informação do Ibsec (Instituto Brasileiro de Segurança Cibernética).

                *Com reportagem de janeiro de 2024</p>
                </div>
        </div>
    );
}