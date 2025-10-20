import './cardNoticia.scss';

export default function CardNoticia({imagem,titulo}){
    return(
        <div>
            <div className='wrap'>
                <div className='cardNotice'>
                    <img src={imagem}/>
                    <h2>{titulo}</h2>
                </div>
            </div>
        </div>
    )
}