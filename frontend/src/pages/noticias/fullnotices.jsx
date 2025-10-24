import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import CardNoticia from '../../components/cardNoticia/cardNoticia';
import './fullnotices.scss'
import {Link} from 'react-router'

export default function TodasNoticias() {
    return (
        <div className='noticia'>
            <Cabecalho />
            <div className='voltar-noticia'>
                <Link to={"/"}>
                    <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                    <p>
                        voltar para a página inicial
                    </p>
                </Link>
            </div> 

            <div className='titulo-noticia'>
                <h1>Noticias</h1>
            </div>

            <div className='align'>
                <div className='cardsNoticias'>
                    <Link to={"/noticia1"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem="src/assets/images/noticia1.png"
                        titulo="Golpes no Instagram: perfis falsos clonam a conta de negócios para sumir com o dinheiro de clientes"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia2"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia2.png"
                        titulo = "Quais os sinais de alerta para desconfiar de um golpe"
                        />
                    </div>
                    </Link>
                    
                    <Link to={"/noticia3"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia3.png"
                        titulo = "A cada 5 minutos, uma pessoa cai em um golpe virtual em MG; saiba como ficar longe desses criminosos"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia4"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia4.png"
                        titulo = "Vítimas de golpes envolvendo pix têm chance de recuperar o dinheiro"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia5"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia5.png"
                        titulo = "'Eram meu rosto e minha voz, mas era golpe': como criminosos 'clonam pessoas' com inteligência artificial"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia6"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia6.png"
                        titulo = "Golpes digitais atingem 24% da população brasileira, revela DataSenado"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia7"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia7.png"
                        titulo = "Duas pessoas são presas e uma está foragida por 'golpe da falsa prostituta"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia8"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia8.png"
                        titulo = "Idoso cai em golpe da prova de vida do INSS e perde mais de R$ 1,6 mil: 'Me quebrou as pernas'"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia9"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia9.png"
                        titulo = "Golpe de amor: idoso é enganado por grupo criminoso e perde R$ 2 milhões"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia10"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia10.png"
                        titulo = "Idosos são as maiores vítimas de golpes financeiros: veja os 18 mais comuns"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia11"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia11.png"
                        titulo = "Suspeitos de aplicar golpe virtual em casal de idosos são alvos de operação no Pará e outros dois estados"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia12"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia12.png"
                        titulo = "Golpes virtuais: por que o Brasil virou terreno fértil para criminosos digitais"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia13"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia13.png"
                        titulo = "Número de golpes contra pessoas idosas cresce mais de 70% em 2023"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia14"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia14.png"
                        titulo = "Idosa cai em golpe após acreditar que era namorada do empresário Elon Musk, diz polícia"
                        />
                    </div>
                    </Link>

                    <Link to={"/noticia15"}>
                    <div className='cards'>
                        <CardNoticia
                        imagem = "src/assets/images/noticia15.png"
                        titulo = "Idoso é alvo fácil de invasores na internet"
                        />
                    </div>
                    </Link>
                </div>
            </div>
            <Rodape/>
        </div>
    );
}