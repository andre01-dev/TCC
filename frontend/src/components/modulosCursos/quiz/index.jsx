import { useState } from "react";
import "./quiz.scss";

export default function Quiz({ pergunta, opcaoA, opcaoB, opcaoC, opcaoD, resposta }) {
  const [resp, setResp] = useState(null);

  const handleClick = (resultado) => {
    setResp(null);
    setTimeout(() => setResp(resultado), 7);
    localStorage.setItem("RESULTADO_QUIZ", resultado === resposta ? "acertou" : "errou");
  };

  return (
    <div className="container-quiz">
      <div className="quiz">
        <h1 className="pergunta josefin-sans">{pergunta}</h1>

        <div className="botao">
          <button onClick={() => handleClick(0)}>{opcaoA}</button>
          <button onClick={() => handleClick(1)}>{opcaoB}</button>
          <button onClick={() => handleClick(2)}>{opcaoC}</button>
          <button onClick={() => handleClick(3)}>{opcaoD}</button>
        </div>

        {resp !== null && (
          <div className={`rep ${resp === resposta ? "correto" : "errado"}`}>
            <p className="average-sans">{resp === resposta ? "✅ Correto!" : "❌ Errado!"}</p>
          </div>
        )}
      </div>
    </div>
  )
}