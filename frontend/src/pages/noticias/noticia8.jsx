import Cabecalho from "../../components/cabecalho/cabecalho";
import { useEffect, useState } from 'react';
import CabecalhoLogado from '../../components/cabecalhoLogado/cabecalho';
import './noticia.scss'
import {Link} from 'react-router'
import Rodape from '../../components/rodape/rodape';

export default function Noticia8() {

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
                <Link to={"/tdsntc"} onClick={() => window.scrollTo(0, 0)}>
                    <button className='voltar'><img src="/src/assets/images/setaEsquerda.png" height={25} /></button>
                    <p>
                        voltar para as notícias
                    </p>
                </Link>
            </div> 

            <div className='titulo-noticia'>
                <h1>Idoso cai em golpe da prova de vida do INSS e perde mais de R$ 1,6 mil: 'Me quebrou as pernas'</h1>
            </div>

            <h3 className='subtitulo'>Aposentado afirma ter perdido R$ 1.620 após receber ligação de falso atendente do INSS. O caso foi registrado como estelionato na Delegacia de Polícia de Peruíbe (SP).
                Por g1 Santos

                07/06/2025 06h23  Atualizado há 4 meses</h3>

            <div className='corpo-noticia'>
                <div className='fundo-noticia'>
                    <img src="/src/assets/images/noticia8.png" alt="" />
                </div>

                <p>Um aposentado, de 69 anos, afirma ter sofrido um golpe envolvendo o benefício do Instituto Nacional do Seguro Social (INSS). Ao g1, João Gomes do Nascimento disse ter recebido uma ligação de um homem que se passou por um atendente do órgão e o convenceu de que o depósito seria suspenso caso não atualizasse os dados virtualmente. "Ficaram só 20 reais na conta", lamentou ele.</p>
                <br />
                <p>Segundo o morador de Peruíbe, no litoral de São Paulo, o prejuízo foi de R$ 1.620,00. Nascimento contou ter recebido a ligação e seguido as orientações do golpista, que acessou a conta dele e fez a transferência via Pix.</p>
                <br />
                <p className="aspas">“Ele falou que eu tinha que fazer a prova de vida, senão, no mês que vem, meu pagamento ia ficar bloqueado. Disse que ia ‘protocolar’ o procedimento pelo celular e me orientou a não tocar na tela. Enquanto isso, ele foi lá e limpou minha conta”, relatou o aposentado.</p>
                <br />
                <p>O caso foi registrado como estelionato na Delegacia de Polícia de Peruíbe. Em nota, o Agibank expressou solidariedade ao cliente e afirmou que está à disposição para investigar o ocorrido (veja o posicionamento completo adiante). O g1 também entrou em contato com o INSS, mas não obteve retorno até a publicação desta reportagem.</p>
                <h2>---- continue depois da publicidade ----</h2>
                
                <Link to={"/curso8"} onClick={() => window.scrollTo(0, 0)}>
                    <img src="/src/assets/images/curso8.png" alt="" />
                <h2>CLIQUE AQUI E NÃO CAIA NO BAIT</h2>
                </Link>
                
                <h2>O que aconteceu</h2>
                <br />
                <h2>Golpe</h2>
                <p>De acordo com o relato, o golpe aconteceu na última segunda-feira (2). O idoso afirmou que o criminoso pareceu conhecer os dados pessoais dele com precisão. “Ele só confirmou que eu recebia pelo banco Agibank. Não pediu senha, não pediu CPF, nada. Já tinha tudo nas mãos. Eles têm nossos documentos, endereço, tudo. A gente não entende como isso é possível”, desabafou.</p>
                <br />
                <p>Após o golpe, o idoso procurou a agência do INSS em Peruíbe, onde foi informado sobre o golpe. Em seguida, ele registrou o boletim de ocorrência na delegacia. “O escrivão me disse que o bandido deixou rastros. Tomara que a polícia consiga pegar.”</p>
                <br />
                <p>Com o dinheiro roubado, o idoso deixou de pagar contas básicas, como luz, água e internet, e ainda precisou pedir desculpas aos familiares por não conseguir quitar dívidas pessoais. “Fiquei frustrado. Eu gosto de manter tudo certinho. Esse golpe me quebrou as pernas", disse.</p>
                <br />
                <p>O g1 entrou em contato com a Secretaria de Segurança Pública de São Paulo (SSP-SP), em busca de mais informações sobre o caso, mas não recebeu um retorno até a publicação desta matéria.</p>
                <h2>Outro golpe e mesma vítima</h2>
                <p>O idoso disse que não foi a primeira vez que sofreu com golpes. Ele revelou ter perdido mais de R$ 3 mil em dezembro de 2024, quando recebeu uma falsa promessa de liberação de crédito. “Ligam dizendo que a gente tem direito a dinheiro, cartão, e no fim roubam tudo. Eu odeio ladrão”, pontuou.</p>


                <h2>Agibank</h2>
                <p>Em nota, o Agibank esclareceu que toda operação realizada pela instituição é condicionada à manifestação formal do cliente e à validação de identidade conforme os critérios regulatórios.</p>
                <br />
                <p>O banco afirmou que segue à disposição para qualquer esclarecimento e reiterou o compromisso com a segurança dos seus clientes, colaborando em todos os âmbitos na elucidação e no combate a essas práticas criminosas.</p>
                <br />
                <p>A companhia reforçou os protocolos de segurança, por meio da tecnologia e canais dedicados à prevenção de fraudes, como o uso da validação biométrica e de inteligência artificial.</p>
                <br />
                <p>Além disso, destacou o trabalho contínuo de informação e alerta aos clientes para que jamais compartilhem dados pessoais, senhas ou realizem operações a pedido de terceiros por telefone ou links suspeitos, e que sempre utilizem os canais oficiais do Agibank para qualquer dúvida ou denúncia.</p>

            </div>
            <Rodape/>

        </div>
    )
}