import * as repoNoticia from '../repository/NoticiaRepository.js'

import { Router } from 'express'
const endpoints = Router();

endpoints.get('/noticias', async (req, resp) => {
    let registros = await repoNoticia.ListarNoticias();
    resp.send(registros);
});

endpoints.get("/noticia", async (req,resp) => {
    let id_noticias = req.query.id_noticias;
    let registros = await repoNoticia.NoticiaEspecifica(id_noticias);
    resp.send(registros);
})

export default endpoints;