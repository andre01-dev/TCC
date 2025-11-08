import { Router } from "express";
import * as repoPerfil from '../repository/perfilRepository.js';

const endpoints = Router();

endpoints.get('/perfil/informacoes/:id_usuario', async (req,resp) => {
    let id_usuario = req.params.id_usuario;

    const registros = await repoPerfil.puxarInfos(id_usuario);

    resp.send(registros);
})

endpoints.get("/conquistas", async (req,resp) => {
    let id_usuario = req.query.id_usuario;
    const registros = await repoPerfil.conquistas(id_usuario);
    resp.send(registros);   
})

endpoints.put('/perfil/editar/:id_usuario', async (req, resp) => {
    try {
        let id_usuario = req.params.id_usuario;
        let { nome_usuario, email, telefone } = req.body;

        await repoPerfil.editarInfos(id_usuario, nome_usuario, email, telefone);

        resp.send({ mensagem: "Perfil atualizado com sucesso ✅" });
    }
    catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

export default endpoints;