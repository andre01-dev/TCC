import { Router } from "express";
import { EnviarDenuncia } from "../repository/denunciaRepository.js";
import { listarDenuncias } from "../repository/denunciaRepository.js";

const endpoint = Router();

endpoint.post('/denuncia',async(req,resp)=>{
    try{
        const denuncia = req.body

        if(!denuncia.assunto)
            throw new Error("O campo 'assunto' é obrigatório!")
        if(!denuncia.data)
            throw new Error("O campo 'data' é obrigatório!")
        if(!denuncia.ocorrido)
            throw new Error("O campo 'ocorrido' é obrigatório!")
    
        const id = await EnviarDenuncia(denuncia);

        resp.send({
            mensagem:"Denúncia enviada com sucesso!",
            id:id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoint.get('/denuncia', async (req, resp) => {
      let lista = await listarDenuncias();
      resp.send(lista);
  });

export default endpoint;