import Cabecalho from "../../components/cabecalho/cabecalho";
import { useEffect, useState } from 'react';
import CabecalhoLogado from '../../components/cabecalhoLogado/cabecalho';
import './noticia.scss'
import {Link} from 'react-router'

export default function Noticia14() {

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
                <Link to={"/tdsntc"}>
                    <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                    <p>
                        voltar para as notícias
                    </p>
                </Link>
            </div> 

            <div className='titulo-noticia'>
                <h1>Idosa cai em golpe após acreditar que era namorada do empresário Elon Musk, diz polícia</h1>
            </div>

            <h3 className='subtitulo'>Ela estava comprando diversos cartões de crédito quando a atitude levantou suspeita. Confira orientações de como se proteger para não cair em golpes.
                Por Amanda Bebiano, g1 PR

                24/09/2024 13h46  Atualizado há um ano</h3>

            <p className="aspas">Número de golpes contra pessoas idosas cresce mais de 70% em 2023

            </p>
            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia14.png" alt="" />
                </div>
                <p>A Polícia Militar de Toledo, no oeste do Paraná, foi chamada em uma loja no final da tarde desta segunda-feira (23) após a atitude de uma idosa de 79 anos chamar a atenção. De acordo com o delegado do caso, Rodrigo Batista, a mulher estava comprando diversos cartões de crédito da Apple.</p>
                <br />
                <p>Para a polícia, a mulher disse que os cartões seriam para o namorado dela, Elon Musk, que ela acreditava ser dono da Apple. Na verdade, a empresa foi fundada por Steve Jobs. Elon Musk é dono de companhias como a rede social X (antigo Twitter), a espacial SpaceX e a automotiva Tesla.</p>
                <br />
                <p className="aspas">"Ela acreditava estar namorando com o empresário Elon Musk, o qual pedia para que ela comprasse os cartões da sua empresa e, posteriormente, ele viria até o Brasil e lhe traria uma quantidade de dólares", explicou o delegado.</p>
                <p>À polícia, a mulher relatou que gastou cerca de R$ 4 mil em cartões e enviava fotos dos objetos para o suposto namorado.</p>
                <br />
                <p>Verificando o celular da vítima, a polícia identificou que se tratava de um telefone celular com código internacional da Nigéria.</p>
                <br />
                <p>Os policiais entraram em contato com o irmão da idosa, que esteve no local para buscá-la.</p>
                <br />
                <p>A Polícia Civil está investigando o caso e procura identificar o golpista.</p>
                
                <h2>---- continue depois da publicidade ----</h2>
                
                <Link to= {"/curso5"}>
                <img src="/src/assets/images/curso5.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                </Link>

                <h2>Dicas contra golpes</h2>
                <p>Neste ano, o Ministério dos Direitos Humanos e da Cidadania (MDH) lançou uma cartilha listando os principais golpes contra idosos registrados no Brasil. Entre eles, está o golpe do falso namoro pela internet.</p>
                <br />
                <p>Golpistas se aproximam de idosos demonstrando interesse e após o envolvimento emocional, começam a pedir dinheiro.</p>
                <br />
                <p>Nestes casos, a orientação do Ministério é que, ao suspeitar que está sendo alvo de um golpe, a vítima não hesite em falar com amigos, familiares, autoridades e pedir orientação para resolver a situação de forma segura.</p>
                <br />
                <p>De acordo com Batista, familiares também podem evitar que idosos caiam em golpes.</p>
                <br />
                <p>"A gente frisa a importância dos familiares estarem atentos às redes sociais das pessoas mais idosas da família para que evitem cair em golpes, tendo em vista que o público-alvo de idosos é preferencial entre criminosos", disse.</p>
            </div>
        </div>
    )
}