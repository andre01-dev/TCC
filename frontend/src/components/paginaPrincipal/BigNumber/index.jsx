import "./parte3.scss"
import '/src/assets/fonts/fonts.scss';

export default function Parte3(){
    return(
    <div>
        <h1 className="espaco josefin-sans">Nosso Sucesso</h1>
         <div className="tudo0">
                <div className="quadrado">
                        <h1 className="font-fina josefin-sans">100+</h1>
                        <p className="average-sans">Idosos Ajudados</p>
                </div>

                <div className="quadrado">
                        <h1 className="font-fina josefin-sans"> 100+</h1>
                        <p className="average-sans">Acessos no Site</p>
                </div>

                <div className="quadrado">
                        <h1 className="font-fina josefin-sans">100+</h1>
                        <p className="average-sans">Dicas Praticas</p>
                </div>
         </div>
    </div>
    )
}