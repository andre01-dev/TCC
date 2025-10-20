import conection from "./conection.js";

export async function inserirUsuario(novoUsuario) {
    const comando = `
        insert into tb_usuario (nome_usuario, email, cpf, telefone, dt_nascimento, senha, id_curso)
        values
        (?,?,?,?,?,MD5(?),?)
    `
    const [registros] = await conection.query(comando, [
        novoUsuario.nome_usuario,
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

export async function listarUsuario() {
    const comando = `
        select * from tb_usuario
    `
    const [registros] = await conection.query(comando);
    return registros
}