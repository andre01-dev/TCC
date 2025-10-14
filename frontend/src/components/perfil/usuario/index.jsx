import "./index.scss"

export default function Perfil(){
    return(
        <div>
            <div className='container-tudo'>
<div className='user'>
<h2>Gustavo Lana</h2>
<img src="/src/assets/images/perfil.png" alt="" />
</div>
<div className="dados-container">

<div className='dados'>
    <h2>Perfil</h2>
    <div className="info">
<h3>nome</h3>
<h3>Gustavo lana</h3>
    </div>
       <div className="info">
<h3>Email</h3>
<h3>gustavolana@gmail.com</h3>
    </div>
       <div className="info">
<h3>Telefone</h3>
<h3>11 9999-3232</h3>
    </div>
</div>

<div className="progresso">
    <div className="info">
<h3>Meu progresso</h3>
<div className="barra1"></div>
    </div>
       <div className="info">
<h3>Tempo de Uso</h3>
<div className="barra2"></div>
<h3>2 horas</h3>

    </div>
</div>
</div>
            </div>
        </div>
    )
}