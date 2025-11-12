import './cardscolabs.scss'

export default function CardColab({ imagem, nome, descricao }) {
    return (
        <div className='cardcolab'>
            <div className='img'>{imagem}</div>
            <div className='textos'>
                <h1 className='josefin-sans'>{nome}</h1>
                <p className='average-sans'>{descricao}</p>
            </div>
        </div>
    )
}