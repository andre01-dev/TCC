import * as repoRegistrar from '../repository/UsuarioRepository.js'
import {Router} from 'express';
import {generateToken} from '../utils/jwt.js'

const endpoints = Router();

endpoints.post("/usuario", async (req,resp) => {
    let novoUsuario = req.body;

    const existe = await repoRegistrar.VerificarEmail(novoUsuario.email);
    if(existe.length > 0) {
        return resp.status(400).send({erro: "E-mail já cadastrado"});
    }

    let id = await repoRegistrar.inserirUsuario(novoUsuario);
    resp.send({NovoID: id});
})

endpoints.post('/logar', async (req,resp) => {
    let email = req.body.email;
    let senha = req.body.senha;

    let registros = await repoRegistrar.VerificarUsuario(email, senha);
    
    if(!registros){
        resp.status(401).send({erro: 'Credenciais inválidas'})
    }
    else{
        let token = generateToken(registros);
        resp.send({
            "id_usuario": registros.id_usuario,
            "email": email,
            "fotoPerfil": registros.fotoPerfil,
            "token": token
        });
    }
})

endpoints.get('/puxarNome', async (req,resp) => {
    let email = req.query.email;

    let registros = await repoRegistrar.PuxarNome(email);

    resp.send(registros);
})

endpoints.get('/verificar/email', async (req,resp) => {
    try{
        let email = req.query.email;
    
        const registros = await repoRegistrar.VerificarEmail(email);
    
        if(registros.length === 0){
           return resp.status(401).send({erro: "E-mail não encontrado"})
        }
        resp.send({ok: true,
            id_usuario: registros.id_usuario
        })
    } catch(e) {
        resp.status(500).send({erro: "Erro ao verificar e-mail",
            id_usuario: registros.id_usuario
        })
    }
})

endpoints.put('/alterarsenha', async (req,resp) => {
    let email = req.body.email;
    let novaSenha = req.body.novaSenha;

    await repoRegistrar.AlterarSenha(novaSenha, email);

    resp.send({mensagem: "Senha alterada com sucesso!"})
})

endpoints.put("/alterar/foto", async (req,resp) => {
    let id = req.body.id_usuario;
    let foto = req.body.fotoPerfil;

    const registros = await repoRegistrar.UploadFoto(foto, id);
    resp.send({mensagem: "Foto Atualizada com sucesso!"});
})


export default endpoints;