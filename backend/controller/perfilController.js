import { Router } from "express";
import * as repoPerfil from '../repository/perfilRepository.js';

const endpoints = Router();

endpoints.get('/perfil/informacoes/:id_usuario', async (req,resp) => {
    let id_usuario = req.params.id_usuario;

    const registros = await repoPerfil.puxarInfos(id_usuario);

    resp.send(registros);
})



export default endpoints;