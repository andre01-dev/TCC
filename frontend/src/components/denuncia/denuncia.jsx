import './denuncia.scss'
import{Link} from 'react-router';


export default function Denuncia(){
    return(
        <div className='alinhar-denuncia'>
            <div class="denuncia-container">
                <div class="denuncia-content">
                    <div class="denuncia-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="Equipe" class="denuncia-icon" />
                        <h2>CANAL DE DENÚNCIAS</h2>
                        <span class="denuncia-carimbo">DENÚNCIA</span>
                    </div>

                    <p class="denuncia-text">CAIU EM ALGUM GOLPE?</p>
                    <p class="denuncia-text">FAÇA SUA DENÚNCIA NO NOSSO CANAL QUE IREMOS TE AJUDAR!</p>
                    
                    <Link to ={'/denuncia'}>
                        <div className='but-denuncia'>
                            <button class="denuncia-btn">Faça sua denúncia</button> 
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}