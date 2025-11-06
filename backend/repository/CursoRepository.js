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

export async function VerificarMatricula(id_usuario, id_curso) {
    const comando = `
        select id_matricula
        from tb_matricula
        inner join tb_usuario on tb_matricula.id_usuario = tb_usuario.id_usuario
        where cursando = true and tb_matricula.id_usuario = ? and tb_matricula.id_curso= ?;
    `
    const [registros] = await conection.query(comando, [id_usuario, id_curso]);
    return registros;
}

export async function PuxarCursos() {
    const comando = `
        select nome_curso, descricao, duracao, url, caminho_img
        from tb_curso`
    
    const [registros] = await conection.query(comando);
    return registros
}

export async function CursoEspecifico(id_curso) {
    const comando = `
        select nome_curso, descricao, duracao
        from tb_curso
        where id_curso = ?`
    
    const [registros] = await conection.query(comando, [id_curso]);
    return registros;
}

export async function PuxarModulos(id_curso) {
    const comando = `
        select titulo, conteudo
        from ModulosCursos
        where id_curso = ?
    `
    const [registros] = await conection.query(comando, [id_curso]);
    return registros;
}

export async function PuxarQuiz(id_curso) {
    const comando = `
        select pergunta, alternativa1, alternativa2, alternativa3, alternativa4, resposta
        from QuizCursos
        where id_curso = ?
    `
    const [registros] = await conection.query(comando, [id_curso]);
    return registros;
}

export async function VerificarConclusao(id_curso, id_usuario) {
    const comando = `
        select concluido
        from tb_matricula
        where id_curso = ? and id_usuario = ?;
    `
    const [registros] = await conection.query(comando, [id_curso, id_usuario]);
    return registros[0];
}