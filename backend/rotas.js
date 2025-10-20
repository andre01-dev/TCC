import UsuarioControler from './controller/UsuarioController.js'

export default function adicionarRotas(api) {
    api.use(UsuarioControler);
}