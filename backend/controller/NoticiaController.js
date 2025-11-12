import * as repoNoticia from '../repository/NoticiaRepository.js'
import { Router } from 'express'
const endpoints = Router();

endpoints.get('/noticias', async (req, resp) => {
    const registros = await repoNoticia.ListarNoticias();
    resp.send(registros);
});

endpoints.get('/noticia/:id', async (req, resp) => {
    const { id } = req.params;
    const registro = await repoNoticia.NoticiaEspecifica(id);

    if (!registro) {
        return resp.status(404).send({ erro: 'Notícia não encontrada' });
    }

    resp.send(registro);
});

export default endpoints;