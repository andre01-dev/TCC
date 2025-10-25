import * as repoRegistrar from '../repository/UsuarioRepository.js'
import {Router} from 'express';
import {generateToken} from '../utils/jwt.js'

const endpoints = Router();

endpoints.post("/usuario", async (req,resp) => {
    let novoUsuario = req.body;

    let id = repoRegistrar.inserirUsuario(novoUsuario);
    resp.send({NovoID: id});
})

endpoints.post('/logar', async (req,resp) => {
    let email = req.body.email;
    let senha = req.body.senha;

    let registros = await repoRegistrar.VerificarUsuario(email, senha);
    
    if(!registros){
        resp.status(401).send({erro: 'Credenciais inválidas'})
    }
    else{
        let token = generateToken(registros);
        resp.send({
            "email": email,
            "token": token
        });
    }
})

endpoints.get('/puxarNome', async (req,resp) => {
    let email = req.query.email;

    let registros = await repoRegistrar.PuxarNome(email);

    resp.send(registros);
})




export default endpoints;