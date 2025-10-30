import { useState } from "react";
import "./quiz.scss";

export default function Quiz({ pergunta, opcaoA, opcaoB, opcaoC, opcaoD }) {

    const [resp, setResp] = useState(null);


    return (
        <div className='container-quiz'>
            <div className='quiz'>
                <h1 className="pergunta">{pergunta}</h1>
                <button onClick={() => {localStorage.setItem("RESULTADO_QUIZ", "errou"); setResp(0);}}>{opcaoA}</button>
                <button onClick={() => {localStorage.setItem("RESULTADO_QUIZ", "errou"); setResp(1);}}>{opcaoB}</button>
                <button onClick={() => {localStorage.setItem("RESULTADO_QUIZ", "errou"); setResp(2);}}>{opcaoC}</button>
                <button onClick={() => {localStorage.setItem("RESULTADO_QUIZ", "acertou"); setResp(3);}}>{opcaoD}</button>
                
                {resp !== null && <p>{resp === 3 ? "✅ Correto!" : "❌ Errado!"}</p>}
            </div>
        </div>
    );
}