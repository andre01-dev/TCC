import conection from "./conection.js";

export async function inscreverCurso(id_usuario, id_curso) {
    const comando = `
        insert into tb_matricula (cursando, concluido, id_usuario, id_curso)
        values
        (true, false, ?, ?)
    `
    const [registros] = await conection.query(comando, [id_usuario, id_curso]);
    return registros;
}


export async function FinalizarCurso(id_usuario) {
    const comando = `
        update tb_matricula
        set concluido = true
        where id_usuario = ?
    `
    const [registros] = await conection.query(comando, [id_usuario]);
    return registros;
}