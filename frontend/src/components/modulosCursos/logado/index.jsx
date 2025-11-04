import './index.scss';


export default function ModuloCursoLogado({ titulo, conteudo }) {
    return (
        <div className='container-modulo'>
            <div className='modulo'>
                <h1 className='t'>{titulo}</h1>
                <p className='c'>{conteudo}</p>
            </div>
        </div>
    );
}