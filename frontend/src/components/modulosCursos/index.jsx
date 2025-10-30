import './index.scss';


export default function moduloCurso({titulo, conteudo}) {
    return(
        <div className='container-modulo'>
            <div className='modulo'>
                <h1>{titulo}</h1>
                <p>{conteudo}</p>
            </div>
        </div>
    );
}