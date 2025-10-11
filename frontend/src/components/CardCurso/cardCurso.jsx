import "./cardCurso.scss"

export default function CardCurso() {
    return (
        <div className="container-cardCurso">
            <div className="cardCurso">
                <img src="src\assets\images\logoCurso.png" />
                <div className="titulo-carga">
                    <h2>CiberSegurança</h2>
                    <div className="tempo">
                    <img src="https://img.icons8.com/ios7/200/clock--v3.png" height={20} />
                    <h2> 3min</h2>
                    </div>
                </div>
                <h1>Click Bait</h1>
                <p>Guia básico de navegação pela internet, como realizar buscas de informações e filtrar os resultados encontrados.</p>
                <div className="nivel-button">
                    <h2>Nível: Básico</h2>
                    <button>Gratuito</button>
                </div>
            </div>
        </div>
    );
}