import "./paginaCurso1.scss";
import Rodape from "../../components/rodape/rodape.jsx";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import CabecalhoLogado from "../../components/cabecalhoLogado/cabecalho.jsx";
import ModuloCurso from "../../components/modulosCursos/logado/index.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../api.js";
import Quiz from "../../components/modulosCursos/quiz/index.jsx";
import ModuloCursoLogado from "../../components/modulosCursos/logado/index.jsx";
import ModuloDesLogado from "../../components/modulosCursos/deslogado/index.jsx";
import BtCurso from "../../components/modulosCursos/BT-Cursos/index.jsx";

export default function Curso1() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [logado, setLogado] = useState(false);
  const nome_usuario = localStorage.getItem("NOME_USUARIO");
  const [passarModulo, setPassarModulo] = useState(0);
  const [mostrarConteudo, setMostrarConteudo] = useState(true);
  const [inscritoCurso, setInscritoCurso] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    const matriculado = localStorage.getItem("MATRICULADO");

    if (token != undefined && token != null) {
      setNomeUsuario(nome_usuario)
      setLogado(!!token)
    }
    else {
      setLogado(false)
      setNomeUsuario("")
    }

    if (passarModulo == -1) {
      navigate("/curso1");
      window.location.reload();
    }

    if(matriculado == "true"){
      setInscritoCurso(true);
    }

  })


  async function inscreverCurso() {

    const id_usuario = localStorage.getItem("ID_USUARIO");
    const id_curso = 1;
    try {
      if (logado) {
        const response = await api.put("/inscrever", {
          id_usuario,
          id_curso
        })
        alert("Inscrição realizada com sucesso!");
        setMostrarConteudo(false);
        localStorage.setItem("MATRICULADO", true);
      }
      else {
        alert("Faça login para se inscrever em um curso");
      }
    }
    catch (e) {
      alert(e.response?.data?.erro || "Erro ao realizar inscrição")
    }
  }


  async function MatriculadoCurso() {
    alert("Acessando curso.");
    setMostrarConteudo(false);
  }

  function AvancarModulo() {
    setPassarModulo(passarModulo + 1);
  }

  function VoltarModulo() {
    setPassarModulo(passarModulo - 1);
  }

  async function FinalizarCurso() {
    const resultado = localStorage.getItem("RESULTADO_QUIZ");
    const id_usuario = localStorage.getItem("ID_USUARIO");

    if (resultado === "acertou") {
      try {
        await api.put("/concluir", { id_usuario });
        alert("Parabéns, você finalizou o curso");
      } catch (e) {
        alert("Erro ao finalizar curso");
        console.error(e);
      }
    } else {
      alert("Você errou a questão.");
    }
  }

  return (
    <div className="pagina-curso">
      {logado ? (
        <CabecalhoLogado nome_usuario={nomeUsuario} />
      ) : (
        <Cabecalho />
      )}

      <main className="conteudo">

        {mostrarConteudo ? (
          <>
            <div className="lado-esquerdo">
              <h1>Fake News</h1>

              <div className="video-box">
                <iframe
                  src="https://www.youtube.com/embed/Oss4C_KOZyg"
                  title="Curso Fake News - Internet Segura"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="descricao">
                Aprenda o que são Fake News e como se proteger de informações falsas
                na internet. <br /> Descubra ferramentas e práticas seguras de checagem.
              </p>


            </div>

            <div className="lado-direito">
              <div className="card-curso">
                <p className="tema">Internet Segura</p>
                <p className="tempo">1min</p>

                <h2>Fake News</h2>
                <p className="resumo">
                  Guia básico de navegação pela internet, como realizar buscas de
                  informações e filtrar os resultados encontrados.
                </p>

                <p className="nivel">Nível: Básico</p>

                <div className="gratuito">Gratuito</div>

                <div className="inclui">
                  <h3>Esse curso inclui:</h3>
                  <ul>
                    <li>⭐ Apostila</li>
                    <li>⭐ Vídeo</li>
                    <li>⭐ Certificado</li>
                  </ul>
                </div>

                <div className="avaliacao">
                  <h3>5 de 5 ⭐⭐⭐⭐⭐</h3>
                  <p>Avaliação</p>
                </div>

                {inscritoCurso ? (
                  <BtCurso 
                    titulo={"ACESSAR CURSO"}
                    onClick={MatriculadoCurso}
                  />
                ) : (
                  <BtCurso
                  titulo={"INSCREVA-SE"}
                  onClick={inscreverCurso}
                />
                )}
                
              </div>
            </div>
          </>


        ) : (
          <div>
            {logado ? (
              <>
                {passarModulo === 0 && (
                  <>
                    <ModuloCursoLogado
                      titulo="Porque é importante?"
                      conteudo="É importante identificar mensagens suspeitas para proteger seus dados pessoais e financeiros de golpes, ataques de vírus e roubo de identidade. Criminosos usam mensagens fraudulentas, como o phishing, para enganar as pessoas e fazê-las clicar em links maliciosos ou baixar anexos com vírus"
                    />
                   <div className="botoes">
                    <button onClick={VoltarModulo}>Voltar</button>
                    <button onClick={AvancarModulo}>Próximo</button>
                    </div>
                  </>
                )}

                {passarModulo === 1 && (
                  <>
                    <ModuloCursoLogado
                      titulo="Como identificar uma mensagem suspeita?"
                      conteudo="Para identificar mensagens suspeitas, desconfie de erros de português, pedidos urgentes de dados pessoais ou dinheiro, links e anexos suspeitos (especialmente se mudam o URL), e mensagens que prometem prêmios ou empregos fáceis."
                    />
                    <div className="botoes">
                    <button onClick={VoltarModulo}>Voltar</button>
                    <button onClick={AvancarModulo}>Próximo</button>
                    </div>
                  </>
                )}

                {passarModulo === 2 && (
                  <>
                    <div className="quiz">
                      <Quiz
                        pergunta="Qual é uma boa prática ao receber mensagens suspeitas?"
                        opcaoA="Clicar nos links imediatamente"
                        opcaoB="Responder pedindo mais informações"
                        opcaoC="Baixar anexos sem verificar"
                        opcaoD="Ignorar e verificar a autenticidade do remetente"
                      />
                    </div>
                    <div className="botoes">
                    <button onClick={VoltarModulo}>Voltar</button>
                    <button onClick={FinalizarCurso}>Finalizar Curso</button>
                    </div>
                  </>
                )}

              </>

            ) : null}
          </div>
        )}




      </main>

      <Rodape />
    </div>
  );
}
