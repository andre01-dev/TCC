import * as repoCurso from '../repository/CursoRepository.js'

import { Router } from 'express'
const endpoints = Router();

endpoints.put("/inscrever", async (req,resp) => {
    let id_usuario = req.body.id_usuario;
    let id_curso = req.body.id_curso;

    let registros = await repoCurso.inscreverCurso(id_usuario, id_curso);

    resp.send({mensagem: "Inscrição realizada com sucesso!"})
})

endpoints.put("/concluir", async (req,resp) => {
    let id_usuario = req.body.id_usuario;

    let registros = await repoCurso.FinalizarCurso(id_usuario);
    resp.send(registros);
});

endpoints.post("/verificar/matricula", async (req,resp) => {
    const id_usuario = req.body.id_usuario;
    const id_curso = req.body.id_curso;

    let registros = await repoCurso.VerificarMatricula(id_usuario, id_curso);
    resp.send(registros);
})

endpoints.get('/puxar/cursos', async (req,resp) => {
    let registros = await repoCurso.PuxarCursos();
    resp.send(registros);
})


export default endpoints;