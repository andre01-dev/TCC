import * as repoRegistrar from '../repository/UsuarioRepository.js'

import {Router} from 'express';
const endpoints = Router();

endpoints.post("/usuario", async (req,resp) => {
    let novoUsuario = req.body;

    let id = repoRegistrar.inserirUsuario(novoUsuario);
    resp.send({NovoID: id});
})

endpoints.get("/usuario", async (req,resp) => {
    let registros = repoRegistrar.listarUsuario();
    resp.send(registros)
})


export default endpoints;