import conection from "./conection.js";

export async function puxarInfos(id_usuario) {
    const comando = `
        select nome_usuario, email, telefone
        from tb_usuario
        where id_usuario = ?
    `
    const [registros] = await conection.query(comando, [id_usuario]);
    return registros[0];
}

export async function conquistas(id_usuario) {
    const comando = `
        SELECT c.titulo_curso, c.img_url
        FROM tb_matricula m
        JOIN tb_conquistas c ON m.id_curso = c.id_curso
        WHERE m.id_usuario = ?
        AND m.concluido = TRUE;
    `
    const [registros] = await conection.query(comando, [id_usuario]);
    return registros;
}