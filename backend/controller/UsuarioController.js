import * as repoRegistrar from '../repository/UsuarioRepository.js'

import {Router} from 'express';
const endpoints = Router();

endpoints.post("/usuario", async (req,resp) => {
    let novoUsuario = req.body;

    let id = repoRegistrar.inserirUsuario(novoUsuario);
    resp.send({NovoID: id});
})

endpoints.post('/logar', async (req,resp) => {
    let email = req.body.email;
    let senha = req.body.senha;

    let registros = repoRegistrar.VerificarUsuario(email, senha);
    resp.send(registros)
})

endpoints.get("/usuario", async (req,resp) => {
    let registros = repoRegistrar.listarUsuario();
    resp.send(registros)
})


export default endpoints;