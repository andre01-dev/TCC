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