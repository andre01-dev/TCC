import * as repoCurso from '../repository/CursoRepository.js'

import { Router } from 'express'
const endpoints = Router();

endpoints.post('/curso', async (req,resp) => {
    let novoCurso = req.body;
    let id = repoCurso.inserirCurso(novoCurso)
    resp.send({NovoID: id})
})

endpoints.get("/curso/", async (req,resp) => {
    let registros = repoCurso.listarCurso(id);
    resp.send()
})