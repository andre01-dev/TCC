import { useState } from "react";
import "./quiz.scss";

export default function Quiz({ pergunta, opcaoA, opcaoB, opcaoC, opcaoD }) {
  const [resp, setResp] = useState(null);

  const handleClick = (resultado) => {
    setResp(null);
    setTimeout(() => setResp(resultado), 7);
    localStorage.setItem("RESULTADO_QUIZ", resultado === 3 ? "acertou" : "errou");
  };

  return (
    <div className="container-quiz">
      <div className="quiz">
        <h1 className="pergunta">{pergunta}</h1>

        <div className="botao">
          <button onClick={() => handleClick(0)}>{opcaoA}</button>
          <button onClick={() => handleClick(1)}>{opcaoB}</button>
          <button onClick={() => handleClick(2)}>{opcaoC}</button>
          <button onClick={() => handleClick(3)}>{opcaoD}</button>
        </div>

        {resp !== null && (
          <div className={`rep ${resp === 3 ? "correto" : "errado"}`}>
            <p>{resp === 3 ? "✅ Correto!" : "❌ Errado!"}</p>
          </div>
        )}
      </div>
    </div>
  )
}