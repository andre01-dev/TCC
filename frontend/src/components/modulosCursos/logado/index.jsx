import './index.scss';


export default function ModuloCursoLogado({ titulo, conteudo }) {
    return (
        <div className='container-modulo'>
            <div className='modulo'>
                <h1 className='t josefin-sans'>{titulo}</h1>
                <p className='c average-sans'>{conteudo}</p>
            </div>
        </div>
    );
}