import UsuarioControler from './controller/UsuarioController.js'
import denunciaController from './controller/denunciaController.js';

export default function adicionarRotas(api) {
    api.use(UsuarioControler);
    api.use(denunciaController)
}