import "./inicio.scss"

export default function Inicio() {
    return (
        <div>
            <div className="tudo">
                <div className="td">

                    <div className="tt">
                        <h1 className="titulo">Aprenda a navegar de forma Segura na Internet</h1>
                    </div>
                    <div className="txt">
                        <h3>O Conectando Gerações foi criado para ajudar pessoas idosas a explorarem o mundo digital com mais confiança e segurança. Aqui, você encontra cursos que ensinam como se proteger de golpes online. Além disso, disponibilizamos notícias atualizadas e um canal de denúncias onde iremos auxiliar com qualquer problema.</h3>
                    </div>
                    <div className="txtxt">
                        <h3>AQUI VOCÊ ENCONTRA:</h3>
                        <div className="topicos">
                            <img className="imgage" src="/src/assets/images/setaEsquerda.png"></img>
                            <h3 className="topicos-h3">Cursos</h3>
                        </div>
                        <div className="topicos">
                            <img className="imgage" src="/src/assets/images/setaEsquerda.png"></img>
                            <h3 className="topicos-h3">Notícias</h3>
                        </div>
                        <div className="topicos">
                            <img className="imgage" src="/src/assets/images/setaEsquerda.png"></img>
                            <h3 className="topicos-h3">Denúncias</h3>
                        </div>
                    </div>
                    <div>
                        <button className="bt">Saiba mais sobre nós</button>
                    </div>
                </div>
                <div className="tudo-img">
                    <img className="img" src="/src/assets/images/velha.png" />
                </div>
            </div>
        </div>
    )
}