import './denuncia.scss'
import{Link} from 'react-router';
import '/src/assets/fonts/fonts.scss';

export default function Denuncia(){
    return(
        <div className='alinhar-denuncia'>
            <div class="denuncia-container">
                <div class="denuncia-content">
                    <div class="denuncia-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="Equipe" class="denuncia-icon" />
                        <h2 className='josefin-sans'>CANAL DE DENÚNCIAS</h2>
                        <span class="denuncia-carimbo average-sans">DENÚNCIA</span>
                    </div>

                    <p class="denuncia-text  average-sans">CAIU EM ALGUM GOLPE?</p>
                    <p class="denuncia-text  average-sans">FAÇA SUA DENÚNCIA NO NOSSO CANAL QUE IREMOS TE AJUDAR!</p>
                    
                    <Link to ={'/denuncia'} onClick={() => window.scrollTo(0, 0)}>
                        <div className='but-denuncia'>
                            <button class="denuncia-btn  average-sans">Faça sua denúncia</button> 
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}