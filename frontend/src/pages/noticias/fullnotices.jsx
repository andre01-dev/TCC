import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import CardNoticia from '../../components/cardNoticia/cardNoticia';
import './fullnotices.scss'

export default function TodasNoticias() {
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
                <h1>Noticias</h1>
            </div>

            <div className='align'>
                <div className='cardsNoticias'>
                    <div>
                        <CardNoticia
                        imagem="src/assets/images/noticia1.png"
                        titulo="Golpes no Instagram: perfis falsos clonam a conta de negócios para sumir com o dinheiro de clientes"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia2.png"
                        titulo = "Quais os sinais de alerta para desconfiar de um golpe"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia3.png"
                        titulo = "A cada 5 minutos, uma pessoa cai em um golpe virtual em MG; saiba como ficar longe desses criminosos"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia4.png"
                        titulo = "Vítimas de golpes envolvendo pix têm chance de recuperar o dinheiro"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia5.png"
                        titulo = "'Eram meu rosto e minha voz, mas era golpe': como criminosos 'clonam pessoas' com inteligência artificial"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia6.png"
                        titulo = "Golpes digitais atingem 24% da população brasileira, revela DataSenado"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia7.png"
                        titulo = "Duas pessoas são presas e uma está foragida por 'golpe da falsa prostituta"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia8.png"
                        titulo = "Idoso cai em golpe da prova de vida do INSS e perde mais de R$ 1,6 mil: 'Me quebrou as pernas'"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia9.png"
                        titulo = "Golpe de amor: idoso é enganado por grupo criminoso e perde R$ 2 milhões"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia10.png"
                        titulo = "Idosos são as maiores vítimas de golpes financeiros: veja os 18 mais comuns"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia11.png"
                        titulo = "Suspeitos de aplicar golpe virtual em casal de idosos são alvos de operação no Pará e outros dois estados"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia12.png"
                        titulo = "Golpes virtuais: por que o Brasil virou terreno fértil para criminosos digitais"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia13.png"
                        titulo = "Número de golpes contra pessoas idosas cresce mais de 70% em 2023"
                        />
                    </div>

                    <div>
                        <CardNoticia
                        imagem = "src/assets/images/noticia14.png"
                        titulo = "Idosa cai em golpe após acreditar que era namorada do empresário Elon Musk, diz polícia"
                        />
                    </div>

                    <div className='color'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia15.png"
                        titulo = "Idoso é alvo fácil de invasores na internet"
                        />
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    );
}