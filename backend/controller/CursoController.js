import * as repoCurso from '../repository/CursoRepository.js'

import { Router } from 'express'
const endpoints = Router();

endpoints.put("/inscrever", async (req,resp) => {
    let id_usuario = req.body.id_usuario;
    let id_curso = req.body.id_curso;

    let registros = await repoCurso.inscreverCurso(id_usuario, id_curso);

    resp.send({mensagem: "Inscrição realizada com sucesso!"})
})


export default endpoints;