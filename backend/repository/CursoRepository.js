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