import UsuarioControler from './controller/UsuarioController.js'
import denunciaController from './controller/denunciaController.js';
import CursoController from './controller/CursoController.js';

export default function adicionarRotas(api) {
    api.use(UsuarioControler);
    api.use(denunciaController);
    api.use(CursoController);
}