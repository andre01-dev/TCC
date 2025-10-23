import "./cardCurso.scss"

export default function CardCurso({imagem, titulo, duracao, tema, descricao, nivel, rota}) {
    return (
        <div className="container-cardCurso">
            <div className="cardCurso">
                <img className="imagem" src= {imagem} />
                <div className="titulo-carga">
                    <h2>{titulo}</h2>
                    <div className="tempo">
                    <img src="https://img.icons8.com/ios7/200/clock--v3.png" height={20} />
                    <h2>{duracao}</h2>
                    </div>
                </div>
                <h1>{tema}</h1>
                <p>{descricao}</p>
                <div className="nivel-button">
                    <h2>{nivel}</h2>
                    <Link to={{rota}}>
                    <button>Gratuito</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}