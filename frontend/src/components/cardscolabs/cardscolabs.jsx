import './cardscolabs.scss'

export default function CardColab({ imagem, nome, descricao }) {
    return (
        <div className='cardcolab'>
            <div className='img'>{imagem}</div>
            <div className='textos'>
                <h1>{nome}</h1>
                <p>{descricao}</p>
            </div>
        </div>
    )
}