import conection from "./conection.js";

export async function inserirCurso(novoCurso) {
    const comando = `
        insert into tb_curso (nome_curso, descricao, duracao)
        values
        (?,?,?)
    `
    const [registros] = await conection.query(comando, [
        novoCurso.nome_curso,
        novoCurso.descricao,
        novoCurso.duracao
    ])

    return registros.insertId;
}

export async function listarCurso() {
    const comando = `
        select*from tb_curso
    `
    const [registros] = await conection.query(comando);
    return registros
}