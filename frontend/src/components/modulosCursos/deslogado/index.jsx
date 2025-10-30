import "./index.scss";


export default function ModuloDesLogado({titulo}) {
    return(
        <div className="container-moduloDeslogado">
            <div className="moduloDeslogado">
                <div className="titulos">
                    {titulo.map((item) => (
                        <h3>{item}</h3>
                    ))}
                </div>
            </div>
        </div>
    );
}