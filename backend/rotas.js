import UsuarioControler from './controller/UsuarioController.js'
import denunciaController from './controller/denunciaController.js';
import CursoController from './controller/CursoController.js';
import PerfilController from './controller/perfilController.js';
import matriculaController from './controller/matriculaController.js';
import loginAdmController from './controller/loginAdmController.js';
import express from 'express'

export default function adicionarRotas(api) {
    api.use(UsuarioControler);
    api.use(denunciaController);
    api.use(CursoController);
    api.use(PerfilController);
    api.use(matriculaController);
    api.use(loginAdmController);
    api.use("/images", express.static("images"));
}