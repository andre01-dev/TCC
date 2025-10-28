import conection from "./conection.js";

export async function inserirUsuario(novoUsuario) {
    const comando = `
        insert into tb_usuario (nome_usuario, email, cpf, telefone, dt_nascimento, senha, id_curso)
        values
        (?,?,?,?,?,MD5(?),?)
    `
    const [registros] = await conection.query(comando, [
        novoUsuario.nome,
        novoUsuario.email,
        novoUsuario.cpf,
        novoUsuario.telefone,
        novoUsuario.dt_nascimento,
        novoUsuario.senha,
        novoUsuario.id_curso,
    ]
    )
    return registros.insertId;
}

export async function VerificarUsuario(email, senha) {
    const comando = `
        select id_usuario, nome_usuario, email
        from tb_usuario
        where email = ? AND senha = MD5(?)
    `
    const [registros] = await conection.query(comando, [email, senha]);

    if (registros.length === 0) {
        return null;
    }
    return registros[0];
}

export async function PuxarNome(email) {
    const comando = `
        select nome_usuario
        from tb_usuario
        where email = ?
    `
    const [registros] = await conection.query(comando, [email])
    return registros[0];
}

export async function VerificarEmail(email) {
    const comando = `
        select id_usuario
        from tb_usuario
        where email = ?
    `
    const [registros] = await conection.query(comando, [email]);
    return registros
}

export async function AlterarSenha(novaSenha,email) {
    const comando = `
        update tb_usuario
        set senha = MD5(?)
        where email = ?
    `
    const [registros] = await conection.query(comando, [novaSenha, email])
    return registros
}



